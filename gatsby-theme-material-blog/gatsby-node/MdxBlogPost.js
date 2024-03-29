/* eslint-disable @typescript-eslint/no-var-requires */
const path = require(`path`);
const crypto = require(`crypto`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const { urlResolve } = require(`gatsby-core-utils`);
const get = require("lodash/get");
const withDefaultsOptions = require(`../src/utils/withDefaultOptions`);

const mdxResolverPassthrough = fieldName => async (
  source,
  args,
  context,
  info
) => {
  const type = info.schema.getType(`Mdx`);
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  });
  const resolver = type.getFields()[fieldName].resolve;
  const result = await resolver(mdxNode, args, context, {
    fieldName,
  });
  return result;
};

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;
  createTypes(
    schema.buildObjectType({
      name: `MdxBlogPost`,
      fields: {
        id: { type: `ID!` },
        title: {
          type: `String!`,
          resolve: async (node, args, context, info) => {
            let title;
            // 1st choice: title defined in the frontmatter
            const mdxNode = context.nodeModel.getNodeById({
              id: node.parent,
              type: "Mdx",
            });
            if ((title = mdxNode.frontmatter.title)) {
              return title;
            }
            // 2st choice: 1st level heading as title
            const resolver = info.schema.getType("Mdx").getFields()["headings"]
              .resolve;
            const headings = await resolver(mdxNode, {}, context, info);
            title = get(
              headings.find(heading => heading.depth === 1),
              "value",
              null
            );
            if (title) {
              return title;
            }
            // last choice: filename without extension
            const fileNode = context.nodeModel.getNodeById({
              id: mdxNode.parent,
              type: "File",
            });
            if (fileNode) {
              return path.basename(
                fileNode.absolutePath,
                path.extname(fileNode.absolutePath)
              );
            }
            return "Untitled";
          },
        },
        featuredImage: { type: `File`, extensions: { fileByRelativePath: {} } },
        slug: {
          type: `String!`,
        },
        date: { type: `Date!`, extensions: { dateformat: {} } },
        tags: { type: `[String]!` },
        keywords: { type: `[String]!` },
        excerpt: {
          type: `String!`,
          args: {
            pruneLength: {
              type: `Int`,
              defaultValue: 500,
            },
          },
          resolve: mdxResolverPassthrough(`excerpt`),
        },
        body: {
          type: `String!`,
          resolve: mdxResolverPassthrough(`body`),
        },
        timeToRead: {
          type: `Int!`,
          resolve: mdxResolverPassthrough(`timeToRead`),
        },
        wordCount: {
          type: `Int!`,
          resolve: async (...args) => {
            const mdxWordCount = await mdxResolverPassthrough(`wordCount`)(
              ...args
            );
            return mdxWordCount.words;
          },
        },
      },
      interfaces: [`Node`, `BlogPost`],
    })
  );
};

exports.onCreateNode = async (
  { node, actions, getNode, createNodeId },
  themeOptions
) => {
  const { createNode, createParentChildLink } = actions;
  const { contentPath, basePath } = withDefaultsOptions(themeOptions);

  // Make sure it's an MDX node
  if (node.internal.type !== `Mdx`) {
    return;
  }

  // Create source field (according to contentPath)
  const fileNode = getNode(node.parent);
  const source = fileNode.sourceInstanceName;

  if (node.internal.type === `Mdx` && source === contentPath) {
    let slug;
    if (node.frontmatter.slug) {
      if (path.posix.isAbsolute(node.frontmatter.slug)) {
        // absolute paths take precedence
        slug = node.frontmatter.slug;
      } else {
        // otherwise a relative slug gets turned into a sub path
        slug = urlResolve(basePath, node.frontmatter.slug);
      }
    } else {
      // otherwise use the filepath function from gatsby-source-filesystem
      const filePath = createFilePath({
        node: fileNode,
        getNode,
        basePath: contentPath,
        trailingSlash:
          path.basename(fileNode.absolutePath).split(".")[0] === "index",
      });

      slug = urlResolve(basePath, filePath);
    }
    node = getNode(node.id);
    const fieldData = {
      tags: node.frontmatter.tags || [],
      slug,
      date: node.frontmatter.date,
      keywords: node.frontmatter.keywords || [],
      featuredImage: node.frontmatter.featuredImage,
    };

    const mdxBlogPostId = createNodeId(`${node.id} >>> MdxBlogPost`);
    await createNode({
      ...fieldData,
      // Required fields.
      id: mdxBlogPostId,
      parent: node.id,
      children: [],
      internal: {
        type: `MdxBlogPost`,
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(fieldData))
          .digest(`hex`),
        content: JSON.stringify(fieldData),
        description: `Mdx implementation of the BlogPost interface`,
      },
    });
    createParentChildLink({ parent: node, child: getNode(mdxBlogPostId) });
  }
};

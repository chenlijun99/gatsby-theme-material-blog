/* eslint-disable @typescript-eslint/no-var-requires */
const path = require(`path`);
const crypto = require(`crypto`);
const { urlResolve } = require(`gatsby-core-utils`);
const get = require("lodash/get");
const withDefaultsOptions = require(`../src/utils/withDefaultOptions`);

exports.createSchemaCustomization = ({ actions, schema }, themeOptions) => {
  const { createTypes } = actions;
  const { basePath } = withDefaultsOptions(themeOptions);
  createTypes(
    schema.buildObjectType({
      name: `BlogPostCategory`,
      fields: {
        id: { type: `ID!` },
        slug: {
          type: `String!`, // with trailing slash
        },
        name: {
          type: `String!`,
          resolve: async (source, args, context, info) => {
            const javascriptFrontmatter = await context.nodeModel.runQuery({
              query: {
                filter: {
                  node: {
                    relativePath: {
                      eq: path.posix.join(source.slug.slice(1), "config.js"),
                    },
                  },
                },
              },
              type: "JavascriptFrontmatter",
            });
            return get(
              javascriptFrontmatter,
              "[0].frontmatter.name",
              path.posix.basename(source.slug)
            );
          },
        },
      },
      interfaces: [`Node`],
    })
  );
};

exports.onCreateNode = async (
  { node, actions, getNode, createNodeId },
  themeOptions
) => {
  const { createNode, createParentChildLink } = actions;
  const { contentPath, basePath } = withDefaultsOptions(themeOptions);

  // Make sure it's an Directory node
  if (node.internal.type !== `Directory`) {
    return;
  }

  if (node.sourceInstanceName === contentPath && node.relativePath !== "") {
    const blogPostCategoryId = createNodeId(`${node.id} >>> BlogPostCategory`);
    const fieldData = {
      slug: urlResolve(basePath, ...node.relativePath.split(path.sep)) + "/",
    };
    await createNode({
      ...fieldData,
      id: blogPostCategoryId,
      parent: node.id,
      children: [],
      internal: {
        type: `BlogPostCategory`,
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(fieldData))
          .digest(`hex`),
        content: JSON.stringify(fieldData),
      },
    });

    createParentChildLink({
      parent: node,
      child: getNode(blogPostCategoryId),
    });
  }
};

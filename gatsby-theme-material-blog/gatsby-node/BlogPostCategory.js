/* eslint-disable @typescript-eslint/no-var-requires */
const path = require(`path`);
const crypto = require(`crypto`);
const { urlResolve } = require(`gatsby-core-utils`);
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
          type: `String!`,
        },
        name: {
          type: `String!`,
          resolve: (source, args, context, info) => {
            return "NAME";
          },
        },
        parentCategory: {
          type: `BlogPostCategory`,
          resolve: (source, args, context, info) => {
            if (
              path.relative(basePath, source.slug).split(path.sep).length > 1
            ) {
              return context.nodeModel
                .getAllNodes({ type: "BlogPostCategory" })
                .find(node => {
                  const relativePath = path.relative(
                    node.slug,
                    path.dirname(source.slug)
                  );
                  return relativePath.length === 0;
                });
            }
            return null;
          },
        },
        subCategories: {
          type: `[BlogPostCategory]`,
          resolve: (source, args, context, info) => {
            return context.nodeModel
              .getAllNodes({ type: "BlogPostCategory" })
              .filter(node => {
                const relativePath = path.relative(
                  source.slug,
                  path.dirname(node.slug)
                );
                return relativePath.length === 0;
              });
          },
        },
      },
      interfaces: [`Node`],
    })
  );
};

const categories = {};

exports.onCreateNode = async (
  { node, actions, getNode, createNodeId },
  themeOptions
) => {
  const { createNode } = actions;
  const { contentPath, basePath } = withDefaultsOptions(themeOptions);

  // Make sure it's an MDX node
  if (node.internal.type !== `Mdx`) {
    return;
  }

  // Create source field (according to contentPath)
  const fileNode = getNode(node.parent);
  const source = fileNode.sourceInstanceName;

  if (node.internal.type === `Mdx` && source === contentPath) {
    const categorySlug =
      node.frontmatter.category || path.dirname(fileNode.relativePath);
    categorySlug
      .split("/")
      .reduce(async (currentCategory, category, i, arr) => {
        if (!currentCategory[category]) {
          currentCategory[category] = {};
          await createNode({
            slug: urlResolve(basePath, categorySlug),
            id: createNodeId(`${category}`),
            parent: null,
            children: [],
            internal: {
              type: `BlogPostCategory`,
              contentDigest: crypto
                .createHash(`md5`)
                .update(JSON.stringify(arr.slice(0, i)))
                .digest(`hex`),
              content: JSON.stringify(arr.slice(0, i)),
            },
          });
        }
        return currentCategory[category];
      }, categories);
  }
};

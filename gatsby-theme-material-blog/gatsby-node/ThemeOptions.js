/* eslint-disable @typescript-eslint/no-var-requires */
const withDefaultsOptions = require(`../src/utils/withDefaultOptions`);

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type MaterialBlogThemeOptions implements Node {
      basePath: String!
      contentPath: String!
      assetPath: String!
    }
  `);
};

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  themeOptions
) => {
  const { createNode } = actions;

  themeOptions = withDefaultsOptions(themeOptions);
  createNode({
    ...themeOptions,
    id: createNodeId(`gatsby-theme-material-blog`),
    parent: null,
    children: [],
    internal: {
      type: `MaterialBlogThemeOptions`,
      contentDigest: createContentDigest(themeOptions),
      content: JSON.stringify(themeOptions),
      description: `Options for gatsby-theme-material-blog`,
    },
  });
};

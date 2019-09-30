/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const get = require("lodash/get");

const getThemeOptions = require("./src/utils/getThemeOptions");

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type MaterialBlogThemeOptions implements Node {
      basePath: String!
      contentPath: String!
    }
  `);
  //createTypes(`
  //type MarkdownFileFrontmatter @dontInfer {
  //title: String
  //}
  //type DirectoryFrontmatter @dontInfer {
  //name: String
  //initiallyOpen: Boolean
  //}
  //type MarkdownRemark implements Node {
  //frontmatter: MarkdownRemarkFrontmatter
  //}
  //union MarkdownRemarkFrontmatter = MarkdownFileFrontmatter | DirectoryFrontmatter
  //union JavascriptFrontmatter = MarkdownFileFrontmatter | DirectoryFrontmatter
  //`);
};

exports.sourceNodes = ({ actions, createContentDigest }, themeOptions) => {
  const { createNode } = actions;

  themeOptions = getThemeOptions(themeOptions);

  createNode({
    ...themeOptions,
    id: `gatsby-theme-material-blog`,
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

exports.createPages = async ({ actions, graphql, reporter }, themeOptions) => {
  const { createPage } = actions;
  themeOptions = getThemeOptions(themeOptions);

  const blogPostTemplate = require.resolve(`./src/templates/blogPost.tsx`);

  const result = await graphql(`
    {
      allFile(
        filter: { extension: { eq: "md" }, sourceInstanceName: { eq: "posts" } }
      ) {
        edges {
          node {
            relativePath
            base
            childMarkdownRemark {
              id
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allFile.edges.forEach(({ node }) => {
    createPage({
      path: path.join(
        themeOptions.basePath,
        node.base === "index.md"
          ? node.relativePath.slice(0, -"index.md".length)
          : node.relativePath.slice(0, -".md".length)
      ),
      component: blogPostTemplate,
      context: {
        id: node.childMarkdownRemark.id,
      },
    });
  });
};

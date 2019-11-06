/* eslint-disable @typescript-eslint/no-var-requires */
const withDefaultsOptions = require(`../src/utils/withDefaultOptions`);
const PostTemplate = require.resolve(`../src/templates/Post.tsx`);
const PostsTemplate = require.resolve(`../src/templates/Posts.tsx`);
const path = require("path");

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  /**
   * slug: without trailing slash, except if the filename is index in a directory
   * E.g. dir/a.md: the slug should be dir/a instead of dir/a/.
   * E.g. dir/index.md: the slug should be dir/ instead of dir.
   */
  createTypes(`interface BlogPost @nodeInterface {
      id: ID!
      title: String!
      featuredImage: File @fileByRelativePath
      body: String!
      slug: String!
      date: Date! @dateformat
      tags: [String]!
      keywords: [String]!
      excerpt(pruneLength: Int = 200): String!
      wordCount: Int!
      timeToRead: Int!
  }`);
};

exports.createPages = async ({ graphql, actions, reporter }, aThemeOptions) => {
  const { createPage } = actions;
  const themeOptions = withDefaultsOptions(aThemeOptions);

  const result = await graphql(`
    {
      allBlogPost(sort: { fields: [date, title], order: DESC }) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic(result.errors);
  }

  // Create Posts and Post pages.
  const { allBlogPost } = result.data;
  const posts = allBlogPost.edges;

  // Create a page for each Post
  posts.forEach(({ node: post }, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1];
    const next = index === 0 ? null : posts[index - 1];
    const { slug } = post;
    createPage({
      path: slug,
      component: PostTemplate,
      context: {
        id: post.id,
        previousId: previous ? previous.node.id : undefined,
        nextId: next ? next.node.id : undefined,
      },
    });
  });

  const numPages = Math.ceil(posts.length / themeOptions.postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path:
        i === 0
          ? themeOptions.basePath
          : path.posix.join(themeOptions.basePath, `page/${i + 1}`),
      component: PostsTemplate,
      context: {
        limit: themeOptions.postsPerPage,
        skip: i * themeOptions.postsPerPage,
      },
    });
  });
};

/* eslint-disable @typescript-eslint/no-var-requires */
const withDefaultsOptions = require(`../src/utils/withDefaultOptions`);
const PostTemplate = require.resolve(`../src/templates/Post.tsx`);
const PostsTemplate = require.resolve(`../src/templates/Posts.tsx`);

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`interface BlogPost @nodeInterface {
      id: ID!
      title: String!
      featuredImage: File @fileByRelativePath
      body: String!
      slug: String!
      date: Date! @dateformat
      tags: [String]!
      keywords: [String]!
      excerpt(pruneLength: Int = 100000): String!
  }`);
};

exports.createPages = async ({ graphql, actions, reporter }, themeOptions) => {
  const { createPage } = actions;
  const { basePath } = withDefaultsOptions(themeOptions);

  const result = await graphql(`
    {
      allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 1000) {
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

  // Create the Posts page
  createPage({
    path: basePath,
    component: PostsTemplate,
    context: {},
  });
};

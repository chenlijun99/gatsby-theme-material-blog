const postsQuery = `{
  posts: allBlogPost {
    nodes {
      title
      keywords
      slug
      date
      tags
      excerpt(pruneLength: 100000)
    }
  }
}`;

const queries = [
  {
    query: postsQuery,
    transformer: ({ data }) => data.posts.nodes,
    indexName: `Blog:Posts`,
  },
];

module.exports = queries;

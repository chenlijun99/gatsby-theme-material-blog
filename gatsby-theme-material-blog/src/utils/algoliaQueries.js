const postsQuery = `{
  posts: allBlogPost {
    nodes {
      objectID: id
      title
      excerpt
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

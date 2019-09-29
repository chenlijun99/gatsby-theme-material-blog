module.exports = themeOptions => {
  themeOptions.contentPath = themeOptions.contentPath || 'content/posts';
  themeOptions.basePath = themeOptions.basePath || '/';
  return {
    siteMetadata: {
      title: `Knowledge Base`,
      description: `My knowledge base`,
      author: `Lijun Chen`,
    },
    plugins: [
      `gatsby-plugin-typescript`,
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      },
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: themeOptions.contentPath,
          path: themeOptions.contentPath,
        },
      },
      `gatsby-transformer-remark`,
      `gatsby-plugin-material-ui`,
    ],
  }
};

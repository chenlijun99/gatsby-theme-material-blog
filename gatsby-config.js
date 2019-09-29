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
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-katex`,
              options: {
                // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
                strict: `ignore`
              }
            },
            `gatsby-remark-smartypants`,
            `gatsby-remark-prismjs`,
          ],
        },
      },
      `gatsby-plugin-material-ui`,
    ],
  }
};

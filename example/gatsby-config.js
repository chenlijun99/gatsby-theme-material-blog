module.exports = {
  plugins: [
    { resolve: `gatsby-theme-material-blog` },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `free-easy-knowledge-base`,
        short_name: `Knowledge Base`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `logo.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
  siteMetadata: {
    title: `Bookshelf`,
  },
};

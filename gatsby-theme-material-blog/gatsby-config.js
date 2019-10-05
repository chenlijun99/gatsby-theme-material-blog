const getThemeOptions = require("./src/utils/getThemeOptions");

module.exports = themeOptions => {
  themeOptions = getThemeOptions(themeOptions);

  return {
    siteMetadata: {
      title: `Knowledge Base`,
      description: `My knowledge base`,
      author: `Lijun Chen`,
    },
    plugins: [
      {
        resolve: `gatsby-theme-blog-core`,
        options: {
          ...themeOptions,
        },
      },
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
          remarkPlugins: [require("remark-math")],
          rehypePlugins: [require("rehype-katex")],
        },
      },
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
      "gatsby-transformer-javascript-frontmatter",
      {
        resolve: `gatsby-plugin-layout`,
        options: {
          component: require.resolve(`./src/components/Layout.tsx`),
        },
      },
      `gatsby-plugin-material-ui`,
      `gatsby-plugin-theme-ui`,
    ],
  };
};

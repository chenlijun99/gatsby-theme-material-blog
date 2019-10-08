const withDefaultsOptions = require(`./src/utils/withDefaultOptions`);

module.exports = themeOptions => {
  themeOptions = withDefaultsOptions(themeOptions);

  return {
    siteMetadata: {
      title: `Knowledge Base`,
      description: `My knowledge base`,
      author: `Lijun Chen`,
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: themeOptions.contentPath || `content/posts`,
          name: themeOptions.contentPath || `content/posts`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: themeOptions.assetPath || `content/assets`,
          name: themeOptions.assetPath || `content/assets`,
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                // should this be configurable by the end-user?
                maxWidth: 1380,
                linkImagesToOriginal: false,
              },
            },
            { resolve: `gatsby-remark-smartypants` },
          ],
          remarkPlugins: [require(`remark-slug`)],
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

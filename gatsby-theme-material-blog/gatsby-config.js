/* eslint-disable @typescript-eslint/no-var-requires */
const withDefaultsOptions = require(`./src/utils/withDefaultOptions`);
const algoliaQueries = require("./src/utils/algoliaQueries");

function algoliaKeysAvailable() {
  return !!(
    process.env.GATSBY_ALGOLIA_APP_ID &&
    process.env.GATSBY_ALGOLIA_SEARCH_KEY &&
    process.env.ALGOLIA_ADMIN_KEY
  );
}

module.exports = themeOptions => {
  themeOptions = withDefaultsOptions(themeOptions);
  if (!algoliaKeysAvailable()) {
    console.warn(
      `GATSBY_ALGOLIA_APP_ID, GATSBY_ALGOLIA_SEARCH_KEY and ALGOLIA_ADMIN_KEY environment variables are not defined. Search functionality won't be available`
    );
  }

  return {
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
      // workaround for https://github.com/gatsbyjs/gatsby/issues/16712
      "gatsby-remark-images",
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
              },
            },
            { resolve: `gatsby-remark-smartypants` },
          ],
          remarkPlugins: [require("remark-math")],
          rehypePlugins: [require("rehype-katex"), require("rehype-slug")],
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
      "gatsby-transformer-javascript-frontmatter",
      {
        resolve: `gatsby-plugin-layout`,
        options: {
          component: require.resolve(`./src/components/Layout.tsx`),
        },
      },
      `gatsby-plugin-material-ui`,
    ].concat(
      algoliaKeysAvailable()
        ? [
            {
              resolve: `gatsby-plugin-algolia`,
              options: {
                appId: process.env.GATSBY_ALGOLIA_APP_ID,
                apiKey: process.env.ALGOLIA_ADMIN_KEY,
                queries: algoliaQueries,
                chunkSize: 10000, // default: 1000
              },
            },
          ]
        : []
    ),
  };
};

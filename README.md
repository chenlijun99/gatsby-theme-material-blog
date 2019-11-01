<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  The Gatsby Material Design blog theme
</h1>

A Gatsby theme for creating a material-design blog.

[![CircleCI](https://circleci.com/gh/free-easy/gatsby-theme-material-blog.svg?style=svg)](https://circleci.com/gh/free-easy/gatsby-theme-material-blog)

<!-- vim-markdown-toc GFM -->

* [Installation](#installation)
* [Usage](#usage)
  * [Theme options](#theme-options)
    * [Example usage](#example-usage)
  * [Additional configuration](#additional-configuration)
  * [Environment variables](#environment-variables)
    * [Algolia Search](#algolia-search)

<!-- vim-markdown-toc -->

## Installation

```shell
npm install --save gatsby-theme-material-blog
```

## Usage

### Theme options

| Key           | Default value    | Description                 |
| ------------- | ---------------- | --------------------------- |
| `basePath`    | `/`              | Root url for all blog posts |
| `contentPath` | `content/posts`  | Location of blog posts      |

#### Example usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-material-blog`,
      options: {
        basePath: `/blog`,
      },
    },
  ],
}
```

### Additional configuration

In addition to the theme options, there are a handful of items you can customize
via the `siteMetadata` object in your site's `gatsby-config.js`.

This theme assumes that at least the fields present in the code block below are
present.

```js
// gatsby-config.js
module.exports = {
  siteMetadata: {
    // Used for the site title and SEO
    title: `My Blog Title`,
    // Used to provide alt text for your avatar
    author: `My Name`,
    // Used for SEO
    description: `My site description...`,
    // Used for social links in the root footer
    social: [
      {
        name: `GitHub`,
        url: `https://github.com/gatsbyjs`,
      },
      ...
    ],
  },
}
```

### Environment variables

#### Algolia Search

In order to get Algolia Search functionality, you need to define the following
variables:

* `GATSBY_ALGOLIA_APP_ID`
* `GATSBY_ALGOLIA_SEARCH_KEY`
* `ALGOLIA_ADMIN_KEY`

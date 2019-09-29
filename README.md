<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  The Gatsby Material Design blog theme
</h1>

A Gatsby theme for creating a material-design blog.

## Installation

```shell
npm install --save gatsby-theme-material-blog
```

## Usage

### Theme options

| Key           | Default value    | Description                                                                                               |
| ------------- | ---------------- | --------------------------------------------------------------------------------------------------------- |
| `basePath`    | `/`              | Root url for all blog posts                                                                               |
| `contentPath` | `content/posts` | Location of blog posts                                                                                    |

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

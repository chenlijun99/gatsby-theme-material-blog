const merge = require("lodash/merge");

const defaultThemeOptions = {
  basePath: "/",
  contentPath: "content/posts",
  assetPath: "content/posts",
};

module.exports = function withDefaultOptions(userThemeOptions) {
  return merge(defaultThemeOptions, userThemeOptions);
};

const merge = require("lodash/merge");

const defaultThemeOptions = {
  basePath: "/",
  contentPath: "content/posts",
};

module.exports = function getThemeOptions(userThemeOptions) {
  return merge(defaultThemeOptions, userThemeOptions);
}

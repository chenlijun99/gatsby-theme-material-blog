import blue from "@material-ui/core/colors/blue";
import amber from "@material-ui/core/colors/amber";
import darkTheme from "prism-react-renderer/themes/vsDark";
import lightTheme from "prism-react-renderer/themes/github";

import merge from "lodash/merge";
import baseTheme from "gatsby-theme-material-blog/src/theme/index";

const siteTheme = {
  light: {
    muiTheme: {
      palette: {
        primary: blue,
        secondary: amber,
      },
    },
    codeBlockTheme: lightTheme,
  },
  dark: {
    muiTheme: {
      palette: {
        primary: blue,
        secondary: amber,
      },
    },
    codeBlockTheme: darkTheme,
  },
};

export default merge(baseTheme, siteTheme);

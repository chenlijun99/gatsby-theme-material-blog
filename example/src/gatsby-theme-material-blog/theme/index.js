import blue from "@material-ui/core/colors/blue";
import amber from "@material-ui/core/colors/amber";

import merge from "lodash/merge";

import baseTheme from "gatsby-theme-material-blog/src/theme";

const muiTheme = {
  palette: {
    primary: blue,
    secondary: amber,
  },
};

export default merge(muiTheme, baseTheme);

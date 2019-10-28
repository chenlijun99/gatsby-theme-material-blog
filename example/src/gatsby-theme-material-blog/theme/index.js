import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import amber from "@material-ui/core/colors/amber";

import baseTheme from "gatsby-theme-material-blog/src/theme";

import merge from "lodash/merge";

const muiTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: amber,
  },
});

export default merge({}, muiTheme, baseTheme);

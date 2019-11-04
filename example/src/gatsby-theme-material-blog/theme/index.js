import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import amber from "@material-ui/core/colors/amber";

import baseTheme from "gatsby-theme-material-blog/src/theme";

import merge from "lodash/merge";

let muiTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: amber,
  },
});

muiTheme = responsiveFontSizes(muiTheme);

export default merge({}, muiTheme, baseTheme);

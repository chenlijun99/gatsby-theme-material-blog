import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";
import { PrismTheme } from "prism-react-renderer";

import darkTheme from "prism-react-renderer/themes/vsDark";
import lightTheme from "prism-react-renderer/themes/github";

interface Theme {
  muiTheme: ThemeOptions;
  codeBlockTheme: PrismTheme;
}

interface SiteTheme {
  light: Theme;
  dark: Theme;
}

const siteTheme: SiteTheme = {
  light: {
    muiTheme: {},
    codeBlockTheme: lightTheme,
  },
  dark: {
    muiTheme: {},
    codeBlockTheme: darkTheme,
  },
};

export default siteTheme;

import React from "react";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";
import { Typography } from "@material-ui/core";

import { Components } from "@mdx-js/react";

import { PrismTheme } from "prism-react-renderer";
import darkTheme from "prism-react-renderer/themes/vsDark";
import lightTheme from "prism-react-renderer/themes/github";

interface Theme {
  muiTheme: ThemeOptions;
  codeBlockTheme: PrismTheme;
  mdxComponents?: Components;
}

interface SiteTheme {
  light: Theme;
  dark: Theme;
}

const mdxComponents: Components = {
  p: props => <Typography variant="body1" paragraph={true} {...props} />,
  h1: props => (
    <Typography
      variant="h1"
      style={{
        fontSize: "2.2rem",
        margin: "1.3rem 0 1.3rem 0",
        fontWeight: 550,
      }}
      {...props}
    />
  ),
  h2: props => (
    <Typography
      variant="h2"
      style={{ fontSize: "2rem", margin: "1.2rem 0 1.2rem 0", fontWeight: 500 }}
      {...props}
    />
  ),
  h3: props => (
    <Typography
      variant="h3"
      style={{ fontSize: "1.8rem", margin: "1rem 0 1rem 0", fontWeight: 450 }}
      {...props}
    />
  ),
  h4: props => (
    <Typography
      variant="h4"
      style={{ fontSize: "1.6rem", margin: "1rem 0 1rem 0", fontWeight: 400 }}
      {...props}
    />
  ),
  h5: props => (
    <Typography
      variant="h5"
      style={{ fontSize: "1.4rem", margin: "1rem 0 1rem 0", fontWeight: 400 }}
      {...props}
    />
  ),
  h6: props => (
    <Typography
      variant="h6"
      style={{
        fontSize: "1.2rem",
        margin: "0.8rem 0 0.8rem 0",
        fontWeight: 400,
      }}
      {...props}
    />
  ),
};

const siteTheme: SiteTheme = {
  light: {
    muiTheme: {},
    codeBlockTheme: lightTheme,
    mdxComponents,
  },
  dark: {
    muiTheme: {},
    codeBlockTheme: darkTheme,
    mdxComponents,
  },
};

export default siteTheme;

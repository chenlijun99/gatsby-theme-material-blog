/** @jsx jsx */
import React, { useState } from "react";

import { jsx } from "theme-ui";

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { CssBaseline, Box, Container, Fab, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import MDXProviderWrapper from "./MDXProviderWrapper";
import Footer from "./Footer";
import Theme from "./Theme";
import Header from "./Header";
import ScrollTop from "./ScrollTop";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  sidenavDesktopDrawer: {
    marginTop: theme.mixins.toolbar.minHeight,
  },
}));

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();

  const backToTopAnchor = React.createRef<HTMLDivElement>();

  return (
    <Theme>
      <Box>
        <CssBaseline />
        <Header />
        <div ref={backToTopAnchor} />
        <MDXProviderWrapper>
          <Container component="main">{children}</Container>
        </MDXProviderWrapper>
        <ScrollTop anchorRef={backToTopAnchor}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </Box>
    </Theme>
  );
};

export default Layout;

import React, { useState } from "react";

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { CssBaseline, Box, Container, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import MDXProviderWrapper from "./MDXProviderWrapper";
import Footer from "./Footer";
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
    <MDXProviderWrapper>
      <Box>
        <CssBaseline />
        <Header />
        <Box display="flex" flexDirection="row">
          <Box component="div" flexGrow={1}>
            <div ref={backToTopAnchor} />
            <Container component="main">{children}</Container>
            <Footer />
          </Box>
        </Box>
        <ScrollTop anchorRef={backToTopAnchor}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </Box>
    </MDXProviderWrapper>
  );
};

export default Layout;

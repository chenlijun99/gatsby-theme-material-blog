import React, { useState } from "react";

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { CssBaseline, Box, Container, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Footer from "./Footer";
import Header from "./Header";
import ScrollTop from "./ScrollTop";
import Sidenav from "./Sidenav";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  sidenavDesktopDrawer: {
    marginTop: theme.mixins.toolbar.minHeight,
  },
}));

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();

  const backToTopAnchor = React.createRef<HTMLDivElement>();

  const [sidenavOpen, setSidenavOpen] = useState(true);

  return (
    <Box>
      <CssBaseline />
      <Header onToggleMainSidenav={() => setSidenavOpen(!sidenavOpen)} />
      <Box display="flex" flexDirection="row">
        <Sidenav
          open={sidenavOpen}
          onOpenStatusChange={open => setSidenavOpen(open)}
          classes={{
            desktopDrawer: classes.sidenavDesktopDrawer,
          }}
        />
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
  );
};

export default Layout;

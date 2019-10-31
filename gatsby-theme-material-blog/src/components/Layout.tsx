import React, { useState } from "react";

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { CssBaseline, Box, Container, Fab, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Footer from "./Footer/";
import Theme from "./Theme";
import Header, { HeaderProps } from "./Header";
import ScrollTop from "./ScrollTop";
import Sidenav from "./Sidenav";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  sidenavDesktopDrawer: {
    marginTop: theme.mixins.toolbar.minHeight,
  },
}));

interface LayoutContextType {
  setHeaderProps(props: HeaderProps): void;
  setSidenavOpen(open: boolean): void;
  sidenavOpen: boolean;
}

export const LayoutContext = React.createContext<LayoutContextType>({
  setHeaderProps: (props: HeaderProps) => {},
  setSidenavOpen: (open: boolean) => {},
  sidenavOpen: false,
});

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();

  const backToTopAnchor = React.createRef<HTMLDivElement>();
  const [headerProps, setHeaderProps] = useState({});
  const [sidenavOpen, setSidenavOpen] = useState(false);

  return (
    <>
      <CssBaseline />
      <LayoutContext.Provider
        value={{ sidenavOpen, setHeaderProps, setSidenavOpen }}
      >
        <Theme>
          <Box display="flex" flexDirection="column" minHeight="100vh">
            <Header {...headerProps} />
            <div ref={backToTopAnchor} />
            <Sidenav open={sidenavOpen} onOpenStatusChange={setSidenavOpen} />
            <Box flexGrow={1}>
              <main>{children}</main>
            </Box>
            <Footer />
          </Box>
          <ScrollTop anchorRef={backToTopAnchor}>
            <Fab color="secondary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </Theme>
      </LayoutContext.Provider>
    </>
  );
};

export default Layout;

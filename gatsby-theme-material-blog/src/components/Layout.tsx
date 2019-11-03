import React, { useState, useRef } from "react";
import "./style.css";

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { CssBaseline, Box, Fab, useTheme, makeStyles } from "@material-ui/core";

import Footer from "./Footer/";
import Theme from "./Theme";
import Header, { HeaderProps } from "./Header";
import ScrollTop from "./ScrollTop";
import Sidenav from "./Sidenav";

const useStyles = makeStyles(theme => ({
  fabSpace: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    "& > *": {
      margin: theme.spacing(1, 0, 1, 0),
    },
  },
}));

interface LayoutContextType {
  setHeaderProps(props: HeaderProps): void;
  setSidenavOpen(open: boolean): void;
  sidenavOpen: boolean;
  fabSpace: React.ReactInstance;
}

export const LayoutContext = React.createContext<LayoutContextType>({
  setHeaderProps: () => {},
  setSidenavOpen: () => {},
  sidenavOpen: false,
  fabSpace: null,
});

const Layout: React.FC = ({ children }) => {
  const backToTopAnchor = React.createRef<HTMLDivElement>();
  const [headerProps, setHeaderProps] = useState({});
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const fabSpace = useRef<HTMLDivElement>(null);
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <LayoutContext.Provider
        value={{
          sidenavOpen,
          setHeaderProps,
          setSidenavOpen,
          fabSpace: fabSpace.current!,
        }}
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
          <div ref={fabSpace} className={classes.fabSpace} />
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

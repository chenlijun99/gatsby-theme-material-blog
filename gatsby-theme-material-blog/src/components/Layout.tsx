import React, { useState, useRef, useCallback, RefObject } from "react";
import "./style.css";

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { CssBaseline, Box, Fab, useTheme, makeStyles } from "@material-ui/core";

import Footer from "./Footer/";
import Theme from "./Theme";
import SiteAppBar from "./SiteAppBar";
import TopLevelNavigation from "./TopLevelNavigation";
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
  setSidenavOpen(open: boolean): void;
  sidenavOpen: boolean;
  darkMode: boolean;
  setDarkMode(dark: boolean): void;
  fabSpace?: React.ReactInstance;
  appBarSpace?: React.ReactInstance;
}

export const LayoutContext = React.createContext<LayoutContextType>({
  setSidenavOpen: () => {},
  darkMode: false,
  setDarkMode: () => {},
  sidenavOpen: false,
});

const Layout: React.FC = ({ children }) => {
  const backToTopAnchor = React.createRef<HTMLDivElement>();
  const [sidenavOpen, setSidenavOpen] = useState(false);

  const [fabSpace, setFabSpace] = useState<React.ReactInstance>();
  const onFabSpaceRefSet = useCallback(ref => {
    setFabSpace(ref);
  }, []);

  const [appBarSpace, setAppBarSpace] = useState<React.ReactInstance>();
  const onAppBarSpaceSet = useCallback(ref => {
    setAppBarSpace(ref);
  }, []);

  const [darkMode, setDarkMode] = useState(false);
  const classes = useStyles();

  return (
    <>
      <LayoutContext.Provider
        value={{
          sidenavOpen,
          setSidenavOpen,
          darkMode,
          setDarkMode,
          fabSpace,
          appBarSpace,
        }}
      >
        <Theme>
          <CssBaseline />
          <SiteAppBar addtionalItems={() => <div ref={onAppBarSpaceSet} />} />
          <div ref={backToTopAnchor} />
          <Sidenav open={sidenavOpen} onOpenStatusChange={setSidenavOpen} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <main style={{ maxWidth: "100vw", flexGrow: 1 }}>{children}</main>
            <Footer />
          </div>
          <TopLevelNavigation />
          <div ref={onFabSpaceRefSet} className={classes.fabSpace} />
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

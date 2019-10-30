import React, { useState } from "react";

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { CssBaseline, Box, Container, Fab, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import MDXProviderWrapper from "./MDXProviderWrapper";
import Footer from "./Footer";
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
    <LayoutContext.Provider
      value={{ sidenavOpen, setHeaderProps, setSidenavOpen }}
    >
      <Theme>
        <Box>
          <CssBaseline />
          <Header {...headerProps} />
          <div ref={backToTopAnchor} />
          <Sidenav open={sidenavOpen} onOpenStatusChange={setSidenavOpen} />
          <MDXProviderWrapper>
            <main>{children}</main>
          </MDXProviderWrapper>
          <ScrollTop anchorRef={backToTopAnchor}>
            <Fab color="secondary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </Box>
      </Theme>
    </LayoutContext.Provider>
  );
};

export default Layout;

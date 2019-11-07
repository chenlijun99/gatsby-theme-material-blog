import React, {
  useState,
  useRef,
  useCallback,
  RefObject,
  useContext,
} from "react";
import { Link, navigate } from "gatsby";

import {
  BottomNavigation,
  BottomNavigationAction,
  ButtonGroup,
  Button,
  Portal,
  withStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import {
  Home as HomeIcon,
  Archive as ArchiveIcon,
  Info as AboutIcon,
} from "@material-ui/icons";
import { LayoutContext } from "./Layout";

/**
 * Check out https://github.com/mui-org/material-ui/issues/15759#issuecomment-493994852
 */
const NavLinkButton = withStyles(theme => ({
  root: {
    color: theme.palette.primary.contrastText,
    border: 0,
  },
}))(Button) as typeof Button;

const TopLevelNavigation: React.FC = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const layoutContext = useContext(LayoutContext);
  if (smallScreen) {
    return (
      <nav
        style={{
          width: "100%",
          height: 56,
        }}
      >
        <BottomNavigation
          style={{
            position: "fixed",
            boxShadow: theme.shadows["1"],
            bottom: 0,
            width: "100%",
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          }}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            navigate(newValue);
          }}
          showLabels
        >
          <BottomNavigationAction value="/" label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction
            value="/archive"
            label="Archive"
            icon={<ArchiveIcon />}
          />
          <BottomNavigationAction
            value="/about"
            label="About"
            icon={<AboutIcon />}
          />
        </BottomNavigation>
      </nav>
    );
  }

  return (
    <Portal container={layoutContext.appBarSpace}>
      <ButtonGroup component="nav" size="large">
        <NavLinkButton component={Link} to="/" startIcon={<HomeIcon />}>
          Home
        </NavLinkButton>
        <NavLinkButton
          component={Link}
          to="/archive"
          startIcon={<ArchiveIcon />}
        >
          Archive
        </NavLinkButton>
        <NavLinkButton component={Link} to="/about" startIcon={<AboutIcon />}>
          About
        </NavLinkButton>
      </ButtonGroup>
    </Portal>
  );
};

export default TopLevelNavigation;

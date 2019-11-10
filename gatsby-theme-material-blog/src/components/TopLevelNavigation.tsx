import React, { useState, useContext } from "react";
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
  Paper,
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

function getActiveLink(): string | undefined {
  const slugs = ["/", "/archive", "/about"];
  if (window) {
    for (let i = 0, length = slugs.length; i < length; ++i) {
      if (
        new RegExp(`^${slugs[i]}/?$`).test(
          decodeURI(window.location.pathname || "")
        )
      ) {
        return slugs[i];
      }
    }
  }
}

const TopLevelNavigation: React.FC = () => {
  const [value, setValue] = useState(getActiveLink());
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
        <Paper
          elevation={24}
          style={{
            position: "fixed",
            bottom: 0,
            width: "100%",
          }}
        >
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
              navigate(newValue);
            }}
            showLabels
          >
            <BottomNavigationAction
              value="/"
              label="Home"
              icon={<HomeIcon />}
            />
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
        </Paper>
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

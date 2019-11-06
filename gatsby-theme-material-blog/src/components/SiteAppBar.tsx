import React, { useContext } from "react";

import {
  AppBar,
  Button,
  ButtonGroup,
  IconButton,
  Toolbar,
  Typography,
  useScrollTrigger,
  withStyles,
  useTheme,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import DarkModeIcon from "@material-ui/icons/Brightness4";
import LightModeIcon from "@material-ui/icons/Brightness7";

import { Link } from "gatsby";

import { LayoutContext } from "./Layout";

const TransformOnScroll: React.FC<{ children: React.ReactElement }> = props => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 150,
  });

  const theme = useTheme();

  return React.cloneElement(children, {
    style: {
      backgroundColor: trigger ? theme.palette.primary.main : "transparent",
    },
    elevation: trigger ? 4 : 0,
    titleHidden: !trigger,
  });
};

const DarkModeToogle: React.FC = () => {
  const layoutContext = useContext(LayoutContext);
  return (
    <IconButton
      color="inherit"
      onClick={() => layoutContext.setDarkMode(!layoutContext.darkMode)}
    >
      {layoutContext.darkMode ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
};

/**
 * Check out https://github.com/mui-org/material-ui/issues/15759#issuecomment-493994852
 */
const NavLinkButton = withStyles(theme => ({
  root: {
    color: theme.palette.primary.contrastText,
    border: 0,
  },
}))(Button) as typeof Button;

interface CustomAppBarProps {
  title?: string;
  titleHidden?: boolean;
}

const SiteAppBar: React.FC<CustomAppBarProps> = props => {
  const { title, titleHidden, ...fordwardProps } = props;
  const context = useContext(LayoutContext);
  return (
    <TransformOnScroll>
      <AppBar {...fordwardProps}>
        <Toolbar>
          <IconButton
            onClick={() => {
              context.setSidenavOpen(!context.sidenavOpen);
            }}
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            style={{
              flexGrow: 1,
            }}
            variant="h6"
            noWrap
          >
            {!titleHidden ? title : ""}
          </Typography>
          <ButtonGroup component="nav" size="large">
            <NavLinkButton component={Link} to="/">
              Home
            </NavLinkButton>
            <NavLinkButton component={Link} to="/archive">
              Archive
            </NavLinkButton>
            <NavLinkButton component={Link} to="/about">
              About
            </NavLinkButton>
          </ButtonGroup>
          <DarkModeToogle />
        </Toolbar>
      </AppBar>
    </TransformOnScroll>
  );
};

export default SiteAppBar;

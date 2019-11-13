import React, { useContext } from "react";

import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  useScrollTrigger,
  useTheme,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import DarkModeIcon from "@material-ui/icons/Brightness4";
import LightModeIcon from "@material-ui/icons/Brightness7";

import { LayoutContext } from "./Layout";
import AlgoliaSearch from "./AlgoliaSearch";

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

interface CustomAppBarProps {
  addtionalItems?: (props: unknown) => React.ReactElement;
}

const SiteAppBar: React.FC<CustomAppBarProps> = props => {
  const { addtionalItems, ...fordwardProps } = props;
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
          ></Typography>
          {addtionalItems && addtionalItems(props)}
          <DarkModeToogle />
          <AlgoliaSearch />
        </Toolbar>
      </AppBar>
    </TransformOnScroll>
  );
};

export default SiteAppBar;

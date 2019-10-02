import React from "react";

import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Slide, useMediaQuery, useScrollTrigger } from "@material-ui/core";
import {
  Theme,
  createStyles,
  makeStyles,
  useTheme,
} from "@material-ui/core/styles";

import SearchBar from "./Searchbar";

const HideOnScroll: React.FC = props => {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const ElevationScroll: React.FC<{ children: React.ReactElement }> = props => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 1,
  });
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: theme.mixins.toolbar,
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
  })
);

interface AppBarProps {
  onToggleMainSidenav?(): void;
}

const CustomAppBar = React.forwardRef<Element, AppBarProps>((props, ref) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar {...props} className={classes.appBar} ref={ref}>
        <Toolbar>
          <IconButton
            onClick={(): void =>
              props.onToggleMainSidenav && props.onToggleMainSidenav()
            }
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Material-UI
          </Typography>
          <SearchBar />
        </Toolbar>
      </AppBar>
    </div>
  );
});

const Header = React.forwardRef<Element, AppBarProps>((props, ref) => {
  const desktop = useMediaQuery(useTheme().breakpoints.up("md"));
  if (desktop) {
    return (
      <ElevationScroll>
        <CustomAppBar {...props} ref={ref} />
      </ElevationScroll>
    );
  } else {
    return (
      <HideOnScroll>
        <CustomAppBar {...props} ref={ref} />
      </HideOnScroll>
    );
  }
});

export default Header;

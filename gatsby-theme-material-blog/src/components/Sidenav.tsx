import React, { useEffect } from "react";

import { Link } from "gatsby";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import HomeIcon from "@material-ui/icons/Home";
import ArchiveIcon from "@material-ui/icons/Archive";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

import { useLocation } from "react-use";

import CategoriesNavMenu from "./CategoriesNavMenu";

interface Props {
  open: boolean;
  onOpenStatusChange(open: boolean): void;
  classes?: {
    desktopDrawer?: string;
    mobileDrawer?: string;
  };
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: (props: Props) => {
    return {
      transition: theme.transitions.create(["width"], {
        easing: theme.transitions.easing[!props.open ? "sharp" : "easeOut"],
        duration:
          theme.transitions.duration[
            !props.open ? "leavingScreen" : "enteringScreen"
          ],
      }),
      width: props.open ? drawerWidth : 0,
      [theme.breakpoints.down("sm")]: {
        width: 0,
      },
    };
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

const Sidenav: React.FC<Props> = props => {
  const theme = useTheme();
  const classes = useStyles(props);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  useEffect(() => {
    if (isMobile) {
      // previously desktop, not mobile. Start always with sidenav closed
      props.onOpenStatusChange(false);
    }
  }, [isMobile]);

  const handleDrawerToggle = () => {
    props.onOpenStatusChange(!props.open);
  };

  const location = useLocation();

  useEffect(() => {
    if (location) {
      props.onOpenStatusChange(false);
    }
  }, [location]);

  let drawer;
  if (isMobile) {
    drawer = (
      <SwipeableDrawer
        variant="temporary"
        anchor={theme.direction === "rtl" ? "right" : "left"}
        open={props.open}
        onOpen={handleDrawerToggle}
        onClose={handleDrawerToggle}
        classes={{ paper: classes.drawerPaper }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/archive">
            <ListItemIcon>
              <ArchiveIcon />
            </ListItemIcon>
            <ListItemText primary="Archive" />
          </ListItem>
        </List>
        <Divider />
        <CategoriesNavMenu enableLeafNode={true} />
      </SwipeableDrawer>
    );
  } else {
    drawer = (
      <Drawer
        variant="persistent"
        open={!isMobile && props.open}
        classes={{
          paper:
            classes.drawerPaper +
            " " +
            ((props.classes && props.classes.desktopDrawer) || ""),
        }}
      >
        <CategoriesNavMenu />
      </Drawer>
    );
  }

  return (
    <nav className={classes.root} aria-label="mailbox folders">
      {drawer}
    </nav>
  );
};
export default Sidenav;

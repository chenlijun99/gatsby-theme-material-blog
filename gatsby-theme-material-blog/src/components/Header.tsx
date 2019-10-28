import React from "react";

import { transparentize } from "polished";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useScrollTrigger } from "@material-ui/core";
import { useTheme, withStyles, makeStyles } from "@material-ui/core/styles";

import { useStaticQuery, graphql, Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import Search from "./search/";
import useSiteMetadata from "../hooks/useSiteMetadata";

const useStyles = makeStyles(theme => ({
  headerContentWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "60vh",
  },
  fallbackHeaderContent: {
    color: theme.palette.primary.contrastText,
  },
  appBarTitle: {
    flexGrow: 1,
  },
}));

interface HeaderContentWrapperProps {
  coverImg?: string;
}

const HeaderContentWrapper: React.FC<HeaderContentWrapperProps> = ({
  children,
}) => {
  const data = useStaticQuery(
    graphql`
      query CoverImg {
        file(relativePath: { eq: "cover.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const theme = useTheme();

  const backgroundFluidImageStack = [
    data.file.childImageSharp.fluid,
    `linear-gradient(to left,
                     ${transparentize(0.5, theme.palette.primary.main)},
                     ${transparentize(0.6, theme.palette.primary.main)}
                    )`,
  ].reverse();

  const classes = useStyles();
  return (
    <BackgroundImage
      Tag="div"
      className={classes.headerContentWrapper}
      fluid={backgroundFluidImageStack}
    >
      {children}
    </BackgroundImage>
  );
};

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

interface CustomAppBarProps {
  title: string;
  titleHidden?: boolean;
}

const NavLinkButton = withStyles(theme => ({
  root: {
    color: theme.palette.primary.contrastText,
    border: 0,
  },
}))(Button);

const CustomAppBar: React.FC<CustomAppBarProps> = props => {
  const { title, titleHidden, ...fordwardProps } = props;
  const classes = useStyles();
  return (
    <AppBar {...fordwardProps}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="open drawer">
          <MenuIcon />
        </IconButton>
        <Typography className={classes.appBarTitle} variant="h6" noWrap>
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
        <Search />
      </Toolbar>
    </AppBar>
  );
};

export interface HeaderProps {
  title?: string;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = props => {
  const siteMetadata = useSiteMetadata();
  const classes = useStyles();
  return (
    <React.Fragment>
      <TransformOnScroll>
        <CustomAppBar title={props.title || siteMetadata.title} />
      </TransformOnScroll>
      <HeaderContentWrapper>
        {props.children || (
          <div className={classes.fallbackHeaderContent}>
            <Typography variant="h4" component="h1" noWrap>
              <h1>{props.title || siteMetadata.title}</h1>
            </Typography>
          </div>
        )}
      </HeaderContentWrapper>
    </React.Fragment>
  );
};

export default Header;

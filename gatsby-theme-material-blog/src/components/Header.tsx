/** @jsx jsx */
import React from "react";

import { useThemeUI, jsx } from "theme-ui";
import { transparentize } from "polished";

import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useScrollTrigger } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import Search from "./search/";
import useSiteMetadata from "../hooks/useSiteMetadata";

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

  const { theme } = useThemeUI();

  const backgroundFluidImageStack = [
    data.file.childImageSharp.fluid,
    `linear-gradient(to left,
                     ${transparentize(0.5, theme.colors!.primary!)},
                     ${transparentize(0.6, theme.colors!.primary!)}
                    )`,
  ].reverse();

  return (
    <BackgroundImage
      Tag="div"
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
      fluid={backgroundFluidImageStack}
      backgroundColor={`#040e18`}
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
    css: {
      backgroundColor: trigger ? theme.palette.primary : "transparent",
    },
    elevation: trigger ? 4 : 0,
    titleHidden: !trigger,
  });
};

interface CustomAppBarProps {
  title: string;
  titleHidden?: boolean;
}
const CustomAppBar: React.FC<CustomAppBarProps> = props => {
  const { title, titleHidden, ...fordwardProps } = props;
  return (
    <AppBar {...fordwardProps}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="open drawer">
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          sx={{
            flexGrow: 1,
            display: "block",
          }}
        >
          {!titleHidden ? title : ""}
        </Typography>
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
  return (
    <React.Fragment>
      <TransformOnScroll>
        <CustomAppBar title={props.title || siteMetadata.title} />
      </TransformOnScroll>
      <HeaderContentWrapper>
        {props.children || (
          <h1
            sx={{
              color: () => "white",
              fontSize: 7,
              fontFamily: "heading",
            }}
          >
            {props.title || siteMetadata.title}
          </h1>
        )}
      </HeaderContentWrapper>
    </React.Fragment>
  );
};

export default Header;

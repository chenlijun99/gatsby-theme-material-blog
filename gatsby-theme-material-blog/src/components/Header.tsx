import React, { useContext } from "react";

import { transparentize } from "polished";

import Typography from "@material-ui/core/Typography";
import { useTheme, withStyles, makeStyles } from "@material-ui/core/styles";

import get from "lodash/get";

import { LayoutContext } from "./Layout";

import { useStaticQuery, graphql, Link } from "gatsby";
import BackgroundImage, {
  IBackgroundImageProps,
} from "gatsby-background-image";

import useSiteData from "../hooks/useSiteData";
import SiteAppBar from "./SiteAppBar";

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
}));

interface HeaderContentWrapperProps {
  coverImg?: IBackgroundImageProps["fluid"];
}

const HeaderContentWrapper: React.FC<HeaderContentWrapperProps> = ({
  children,
  coverImg,
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
      className={classes.headerContentWrapper}
      fluid={coverImg || backgroundFluidImageStack}
    >
      {children}
    </BackgroundImage>
  );
};

export interface HeaderProps extends HeaderContentWrapperProps {
  title?: string;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = props => {
  const siteData = useSiteData();
  const classes = useStyles();

  const { title, children, ...forwardProps } = props;

  return (
    <React.Fragment>
      <SiteAppBar
        title={title || get(siteData, "siteMetadata.title", undefined)}
      />
      <HeaderContentWrapper {...forwardProps}>
        {children || (
          <div className={classes.fallbackHeaderContent}>
            <Typography variant="h1" component="h1" noWrap>
              {title || get(siteData, "siteMetadata.title", undefined)}
            </Typography>
          </div>
        )}
      </HeaderContentWrapper>
    </React.Fragment>
  );
};

export default Header;

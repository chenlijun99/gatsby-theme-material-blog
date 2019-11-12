import React from "react";

import { useStaticQuery, graphql } from "gatsby";

import { useTheme } from "@material-ui/core";

import { transparentize } from "polished";
import BackgroundImage, {
  IBackgroundImageProps,
  IFluidObject,
} from "gatsby-background-image";
import useThemedBackgroundImage from "../hooks/useThemedBackgroundImage";

interface HeaderProps {
  featuredImage?: IBackgroundImageProps["fluid"];
}

const Header: React.FC<HeaderProps> = props => {
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

  const backgroundFluidImageStack = useThemedBackgroundImage([
    data.file.childImageSharp.fluid as IFluidObject,
  ]);

  return (
    <BackgroundImage
      style={{
        boxShadow: theme.shadows["1"],
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      preserveStackingContext={true}
      Tag="header"
      fluid={props.featuredImage || backgroundFluidImageStack}
    >
      {props.children}
    </BackgroundImage>
  );
};

export default Header;

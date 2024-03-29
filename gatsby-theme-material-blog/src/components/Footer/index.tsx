import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import get from "lodash/get";

import useSiteData from "../../hooks/useSiteData";

import brandIconMap from "./brandIconMap";

const useStyle = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    boxShadow: theme.shadows["3"],
    "& a": {
      color: "inherit",
    },
    [theme.breakpoints.down("sm")]: {
      color: theme.palette.text.secondary,
      boxShadow: "initial",
      backgroundColor: "inherit",
    },
  },
}));

export default function Footer() {
  const classes = useStyle();
  const site = useSiteData();
  return (
    <Box
      component="footer"
      className={classes.footer}
      textAlign={["center", "left"]}
      height={[120, 60]}
      px={[5, 10]}
      py={2}
      display="flex"
      flexDirection={["column", "row"]}
      alignItems="center"
    >
      <Box flexGrow={1}>
        <Typography variant="body2" component="div">
          Built by {get(site, "siteMetadata.author", null)} ©{" "}
          {new Date(site!.buildTime).getFullYear()}
          <br />
          Powered by <a href="https://www.gatsbyjs.org">Gatsby</a> | Theme{" "}
          <a href="https://github.com/free-easy/gatsby-theme-material-blog">
            {" "}
            Gatsby Material Blog{" "}
          </a>
        </Typography>
      </Box>
      <Box display="flex" flexDirection="row" my={[2]}>
        {get(site, "siteMetadata.social", []).map(
          (social: { name: string; url: string }) => {
            const icon = brandIconMap[social.name.toLowerCase()];
            if (icon) {
              return (
                <Box mx={1} key={social.url}>
                  <a href={social.url}>
                    <FontAwesomeIcon className="MuiSvgIcon-root" icon={icon} />
                  </a>
                </Box>
              );
            } else {
              return <></>;
            }
          }
        )}
      </Box>
    </Box>
  );
}

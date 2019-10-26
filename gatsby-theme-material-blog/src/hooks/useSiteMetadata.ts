import { useStaticQuery, graphql } from "gatsby";

import { SiteMetaDataQuery } from "../generated/graphql";

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );
  return site.siteMetadata as SiteMetaDataQuery["site"]["siteMetadata"];
};

export default useSiteMetadata;

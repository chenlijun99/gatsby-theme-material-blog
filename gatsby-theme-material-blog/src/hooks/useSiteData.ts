import { useStaticQuery, graphql } from "gatsby";

import { SiteQuery } from "../generated/graphql";

const useSiteData = () => {
  const { site } = useStaticQuery<SiteQuery>(
    graphql`
      query Site {
        site {
          buildTime
          siteMetadata {
            title
            description
            author
            social {
              name
              url
            }
          }
        }
      }
    `
  );
  return site;
};

export default useSiteData;

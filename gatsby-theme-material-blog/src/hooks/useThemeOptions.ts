import { useStaticQuery, graphql } from "gatsby";

import {
  ThemeOptionsQuery,
  MaterialBlogThemeOptions,
} from "../generated/graphql";

const useThemeOptions = () => {
  const data = useStaticQuery<ThemeOptionsQuery>(graphql`
    query ThemeOptions {
      materialBlogThemeOptions {
        basePath
        contentPath
        assetPath
        postsPerPage
      }
    }
  `);
  return data.materialBlogThemeOptions as MaterialBlogThemeOptions;
};

export default useThemeOptions;

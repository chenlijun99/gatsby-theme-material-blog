import React, { useContext } from "react";
import { MDXProvider, Components } from "@mdx-js/react";

import { LayoutContext } from "../Layout";
import MDXCodeBlock from "./MDXCodeBlock";
import siteTheme from "../../theme";

const components: Components = {
  code: MDXCodeBlock as React.ComponentType<{ children: React.ReactNode }>,
};

const MDXProviderWrapper: React.FC = ({ children }) => {
  const layoutContext = useContext(LayoutContext);
  const darkMode = layoutContext.darkMode ? "dark" : "light";

  const themedComponents = {
    ...components,
    ...siteTheme[darkMode].mdxComponents,
  };

  return <MDXProvider components={themedComponents}>{children}</MDXProvider>;
};

export default MDXProviderWrapper;

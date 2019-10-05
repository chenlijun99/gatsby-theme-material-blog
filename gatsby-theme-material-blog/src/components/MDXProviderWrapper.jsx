import React from "react";
import { MDXProvider } from "@mdx-js/react";

import MDXCodeBlock from "./MDXCodeBlock";

const components = {
  code: MDXCodeBlock,
};

const MDXProviderWrapper = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);

export default MDXProviderWrapper;

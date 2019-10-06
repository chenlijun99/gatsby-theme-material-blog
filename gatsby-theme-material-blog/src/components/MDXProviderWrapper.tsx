import React from "react";
import { MDXProvider, Components } from "@mdx-js/react";

import MDXCodeBlock from "./MDXCodeBlock";

const components: Components = {
  code: MDXCodeBlock as React.ComponentType<{ children: React.ReactNode }>,
};

const MDXProviderWrapper: React.FC = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);

export default MDXProviderWrapper;

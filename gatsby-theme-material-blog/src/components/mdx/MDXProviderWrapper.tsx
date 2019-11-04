import React from "react";
import { MDXProvider, Components } from "@mdx-js/react";

import MDXCodeBlock from "./MDXCodeBlock";
import { Typography, useTheme } from "@material-ui/core";
import { TypographyProps } from "@material-ui/core/Typography";
import { Link } from "gatsby";

const Heading: React.FC<{ id: string } & TypographyProps> = ({
  children,
  id,
  ...props
}) => {
  const theme = useTheme();
  return (
    <Typography {...props} id={id}>
      {children}
    </Typography>
  );
};

function HeadingOfType(headingType: TypographyProps["variant"]): React.FC {
  return props => (
    <Heading variant={headingType} {...(props as { id: string })} />
  );
}

const components: Components = {
  code: MDXCodeBlock as React.ComponentType<{ children: React.ReactNode }>,
  p: props => <Typography variant="body1" paragraph={true} {...props} />,
};

const MDXProviderWrapper: React.FC = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);

export default MDXProviderWrapper;

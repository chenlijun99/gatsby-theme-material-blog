import React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { useThemeUI } from "theme-ui";

const Theme: React.FC = ({ children }) => {
  const context = useThemeUI();

  // Apply theme-ui settings to material-ui component
  const muiTheme = createMuiTheme({
    palette: {
      primary: {
        main: context.theme.colors!.primary!,
      },
      secondary: {
        main: context.theme.colors!.secondary!,
      },
    },
  });

  return <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>;
};

export default Theme;

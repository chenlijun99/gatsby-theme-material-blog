import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import muiTheme from "../theme";

const Theme: React.FC = ({ children }) => {
  return <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>;
};

export default Theme;

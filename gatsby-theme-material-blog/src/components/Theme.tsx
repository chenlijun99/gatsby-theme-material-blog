import React, { useContext, useEffect, useState } from "react";
import {
  MuiThemeProvider,
  useMediaQuery,
  createMuiTheme,
  responsiveFontSizes,
  Theme,
} from "@material-ui/core";
import siteTheme from "../theme";

import { LayoutContext } from "./Layout";
import { useLocalStorage } from "react-use";

function getTheme(dark: boolean): Theme {
  const lightDark = dark ? "dark" : "light";
  const theme = createMuiTheme({
    ...siteTheme[lightDark].muiTheme,
    palette: {
      type: dark ? "dark" : "light",
      ...siteTheme[lightDark].muiTheme.palette,
    },
  });
  return responsiveFontSizes(theme);
}

const AppTheme: React.FC = ({ children }) => {
  const layoutContext = useContext(LayoutContext);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [persistedDarkMode, persistDarkMode] = useLocalStorage("darkMode");
  const [currentTheme, setTheme] = useState(
    getTheme(persistedDarkMode || prefersDarkMode)
  );
  useEffect(() => {
    layoutContext.setDarkMode(
      persistedDarkMode === undefined ? prefersDarkMode : persistedDarkMode
    );
  }, []);

  useEffect(() => {
    persistDarkMode(layoutContext.darkMode);
    setTheme(getTheme(layoutContext.darkMode));
  }, [layoutContext.darkMode]);

  return <MuiThemeProvider theme={currentTheme}>{children}</MuiThemeProvider>;
};

export default AppTheme;

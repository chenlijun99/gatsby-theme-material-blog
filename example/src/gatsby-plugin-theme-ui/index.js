import { roboto } from "@theme-ui/presets";
import doelger from "typography-theme-doelger";
import { toTheme } from "@theme-ui/typography";
import baseTheme from "gatsby-theme-material-blog/src/gatsby-plugin-theme-ui";

import merge from "lodash/merge";

const typography = toTheme(doelger);

export default merge({}, typography, roboto, baseTheme);

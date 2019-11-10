import { transparentize } from "polished";

import { useTheme } from "@material-ui/core";
import { IBackgroundImageProps } from "gatsby-background-image";

function useThemedBackgroundImage(
  image: IBackgroundImageProps["fixed"]
): IBackgroundImageProps["fixed"];
function useThemedBackgroundImage(
  image: IBackgroundImageProps["fluid"]
): IBackgroundImageProps["fluid"];
function useThemedBackgroundImage(
  image: IBackgroundImageProps["fixed"] | IBackgroundImageProps["fluid"]
) {
  const theme = useTheme();
  if (theme.palette.type === "dark") {
    const linearGradient = `linear-gradient(${transparentize(
      0.5,
      theme.palette.background.default
    )}, ${transparentize(0.5, theme.palette.background.default)})`;
    if (image instanceof Array) {
      image.unshift(linearGradient);
    } else if (image !== undefined) {
      return [linearGradient, image];
    }
  }
  return image;
}

export default useThemedBackgroundImage;

import React from "react";
import {
  List,
  ListItem,
  withStyles,
  createStyles,
  Theme,
} from "@material-ui/core";
import { ListItemProps } from "@material-ui/core/ListItem";
import { transparentize } from "polished";

export const TocList = withStyles(theme => ({
  root: {},
}))(List) as typeof List;

interface TocListItemProps {
  depth: number;
  active: boolean;
}

const tocListItemStyle = (theme: Theme) => {
  return createStyles<string, TocListItemProps>({
    root: {
      paddingLeft: theme.spacing(1),
      cursor: "pointer",
      color: props =>
        props.active
          ? theme.palette.primary.main
          : transparentize(0.3, theme.palette.text.primary),
      borderLeft: props =>
        props.active
          ? `4px solid ${theme.palette.primary.main}`
          : `4px solid transparent`,
      "&:hover": {
        borderLeft: props =>
          !props.active
            ? `4px solid ${theme.palette.grey["200"]}`
            : `4px solid ${theme.palette.primary.main}`,
      },
      "& .MuiListItemText-root": {
        paddingLeft: props => props.depth * theme.spacing(2),
        "& .MuiListItemText-primary": {
          fontWeight: props =>
            props.active
              ? theme.typography.fontWeightBold
              : theme.typography.fontWeightRegular,
        },
      },
    },
  });
};

const TocListItemRaw: React.FC<
  TocListItemProps & Omit<ListItemProps, keyof TocListItemProps>
> = props => {
  const { depth, active, ...forwardProps } = props;
  // @ts-ignore
  return <ListItem {...forwardProps} />;
};

export const TocListItem = withStyles(tocListItemStyle)(
  TocListItemRaw
) as typeof TocListItemRaw;

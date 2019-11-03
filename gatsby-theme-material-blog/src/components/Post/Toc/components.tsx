import React from "react";
import {
  List,
  ListItem,
  withStyles,
  createStyles,
  Theme,
} from "@material-ui/core";
import { ListItemProps } from "@material-ui/core/ListItem";
import { WithStyles } from "@material-ui/styles";
import { desaturate, transparentize } from "polished";

export const TocList = withStyles(theme => ({
  root: {
    borderLeft: theme.palette.primary.main,
  },
}))(List) as typeof List;

interface TocListItemProps {
  depth: number;
  active: boolean;
}

const tocListItemStyle = (theme: Theme) => {
  return createStyles({
    root: {
      paddingLeft: theme.spacing(1),
      cursor: "pointer",
      color: (props: TocListItemProps) =>
        props.active
          ? theme.palette.primary.main
          : transparentize(0.3, theme.palette.text.primary),
      borderLeft: (props: TocListItemProps) =>
        props.active
          ? `4px solid ${theme.palette.primary.main}`
          : `4px solid transparent`,
      "&:hover": {
        borderLeft: (props: TocListItemProps) =>
          !props.active && `4px solid ${theme.palette.grey["200"]}`,
      },
      "& .MuiListItemText-root": {
        paddingLeft: (props: TocListItemProps) =>
          props.depth * theme.spacing(1),
        "& .MuiListItemText-primary": {
          fontWeight: (props: TocListItemProps) =>
            props.active && theme.typography.fontWeightBold,
        },
      },
    },
  });
};

const TocListItemRaw: React.FC<
  TocListItemProps & Omit<ListItemProps, keyof TocListItemProps>
> = props => {
  const { depth, active, ...forwardProps } = props;
  return <ListItem {...forwardProps} />;
};

export const TocListItem = withStyles(tocListItemStyle)(
  TocListItemRaw
) as typeof TocListItemRaw;

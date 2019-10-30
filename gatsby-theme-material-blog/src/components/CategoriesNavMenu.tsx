import React, { useState } from "react";

import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { ListSubheader } from "@material-ui/core";
import { useTheme, Theme } from "@material-ui/core/styles";

import { Link } from "gatsby";
import usePostsGroupedByCategory, {
  PostsGroupedByCategory,
  isCategory,
  Category,
} from "../hooks/usePostsGroupedByCategory";

declare interface CategoriesNavMenuProps {
  enableLeafNode?: boolean;
}

const SubList: React.FC<
  { node: Category; level: number } & CategoriesNavMenuProps
> = props => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleClick = (e: React.MouseEvent, stopPropagation = false) => {
    if (stopPropagation) {
      e.preventDefault();
      e.stopPropagation();
    }
    setOpen(!open);
  };
  const renderSubList =
    props.enableLeafNode ||
    Object.values(props.node.children).filter(node => {
      return isCategory(node);
    }).length > 0;
  return (
    <>
      <ListItem
        component={props.enableLeafNode && props.node.slug ? Link : "div"}
        to={props.node.slug}
        key={props.node.id}
        button
        onClick={handleClick}
      >
        <ListItemText primary={props.node.name} />
        {renderSubList ? (
          <div onClick={e => handleClick(e, true)}>
            {open ? <ExpandLess /> : <ExpandMore />}
          </div>
        ) : null}
      </ListItem>
      {renderSubList ? (
        <Collapse in={open} timeout="auto" unmountOnExit>
          {// eslint-disable-next-line @typescript-eslint/no-use-before-define
          getList(props, props.node.children, theme, props.level + 1)}
        </Collapse>
      ) : null}
    </>
  );
};

function getList(
  props: CategoriesNavMenuProps,
  rootNode: PostsGroupedByCategory,
  theme: Theme,
  level = 0
) {
  return (
    <List
      component={level === 0 ? "nav" : "div"}
      dense={true}
      disablePadding={level !== 0}
      style={{ paddingLeft: theme.spacing(level * 2) }}
      subheader={
        level === 0 ? (
          <ListSubheader component="div">Archive</ListSubheader>
        ) : (
          undefined
        )
      }
    >
      {Object.values(rootNode).map(node => {
        if (isCategory(node)) {
          return <SubList {...props} node={node} level={level} />;
        } else if (props.enableLeafNode) {
          return (
            <ListItem component={Link} to={node.slug} key={node.id} button>
              <ListItemText primary={node.title} />
            </ListItem>
          );
        } else {
          return null;
        }
      })}
    </List>
  );
}

const CategoriesNavMenu: React.FC<CategoriesNavMenuProps> = props => {
  const theme = useTheme();
  const postsByCategories = usePostsGroupedByCategory();

  return getList(props, postsByCategories, theme);
};

export default CategoriesNavMenu;

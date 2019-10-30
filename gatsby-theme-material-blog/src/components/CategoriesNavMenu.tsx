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

const SubList: React.FC<{ node: Category; level: number }> = props => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleClick = (e: React.MouseEvent, stopPropagation = false) => {
    if (stopPropagation) {
      e.preventDefault();
      e.stopPropagation();
    }
    setOpen(!open);
  };
  return (
    <>
      <ListItem
        component={props.node.slug ? Link : "div"}
        to={props.node.slug}
        key={props.node.id}
        button
        onClick={handleClick}
      >
        <ListItemText primary={props.node.name} />
        <div onClick={e => handleClick(e, true)}>
          {open ? <ExpandLess /> : <ExpandMore />}
        </div>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {// eslint-disable-next-line @typescript-eslint/no-use-before-define
        getList(props.node.children, theme, props.level + 1)}
      </Collapse>
    </>
  );
};

function getList(rootNode: PostsGroupedByCategory, theme: Theme, level = 0) {
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
          return <SubList node={node} level={level} />;
        } else {
          return (
            <ListItem component={Link} to={node.slug} key={node.id} button>
              <ListItemText primary={node.title} />
            </ListItem>
          );
        }
      })}
    </List>
  );
}

const NavMenu: React.FC = () => {
  const theme = useTheme();
  const postsByCategories = usePostsGroupedByCategory();

  return getList(postsByCategories, theme);
};

export default NavMenu;

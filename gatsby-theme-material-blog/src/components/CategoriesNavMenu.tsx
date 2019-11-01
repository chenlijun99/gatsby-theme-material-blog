import React, { useState, useContext } from "react";

import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { ListSubheader } from "@material-ui/core";
import { Theme, makeStyles } from "@material-ui/core/styles";

import { Link } from "gatsby";

import { lighten } from "polished";

import usePostsGroupedByCategory, {
  CategoryPostNodes,
  isCategory,
  Category,
  isBlogPost,
} from "../hooks/usePostsGroupedByCategory";
import { useLocation } from "react-use";
import { LocationSensorState } from "react-use/lib/useLocation";

interface CategoriesNavMenuProps {
  /**
   * When this prop is set to true, the leafnodes (i.e. the blog posts) will be
   * present in the list too.
   * Furthermore, if one of the leaf nodes has the same slug as the category
   * (which means its name is index.md), then instead of being shown as child
   * in a sublist, it's shown as the parent of that sublist.
   */
  enableLeafNode?: boolean;
}

interface ItemListProps {
  nodes: CategoryPostNodes;
  level: number;
}

interface SubListProps {
  node: Category;
  level: number;
}

type CategoriesMenuContextType = CategoriesNavMenuProps;

export const CategoriesMenuContext = React.createContext<
  CategoriesMenuContextType
>({});

function isSlugActive(location: LocationSensorState, slug: string): boolean {
  return new RegExp(`^${slug}/?$`).test(decodeURI(location.pathname || ""));
}
function isSlugPartiallyActive(
  location: LocationSensorState,
  slug: string
): boolean {
  return decodeURI(location.pathname || "").startsWith(slug);
}
function getSlugActiveStatusClass(
  location: LocationSensorState,
  slug: string
): string {
  if (isSlugActive(location, slug)) {
    return "active";
  } else if (isSlugPartiallyActive(location, slug)) {
    return "partial-active";
  }
  return "";
}

const itemStyles = (theme: Theme) => {
  return {
    "&:hover": {
      color: theme.palette.primary.dark,
      backgroundColor: lighten(0.25, theme.palette.primary.light),
      borderRadius: theme.shape.borderRadius,
    },
    "&.active": {
      color: theme.palette.primary.dark,
      backgroundColor: lighten(0.2, theme.palette.primary.light),
      borderRadius: theme.shape.borderRadius,
    },
  };
};

const useSubListStyle = makeStyles(theme => ({
  item: itemStyles(theme),
}));

const SubList: React.FC<SubListProps> = props => {
  const location = useLocation();
  const [open, setOpen] = useState(
    isSlugPartiallyActive(location, props.node.slug)
  );
  const classes = useSubListStyle();
  const context = useContext(CategoriesMenuContext);

  const handleClick = (e: React.MouseEvent, stopPropagation = false) => {
    if (stopPropagation) {
      e.preventDefault();
      e.stopPropagation();
    }
    setOpen(!open);
  };
  /**
   * A sublist is rendered when one of the following two conditions apply:
   *
   * * We want leaf node to be rendered and apart of the leaf node named
   * index there's at least another leaf node
   * * We don't want leaf node to be rendered, so among the child nodes at least
   * one must a category node
   */
  const renderSubList =
    (context.enableLeafNode &&
      Object.values(props.node.children).filter(node => {
        return node.slug !== props.node.slug;
      }).length > 0) ||
    Object.values(props.node.children).filter(node => {
      return isCategory(node);
    }).length > 0;

  return (
    <>
      <ListItem
        {...(context.enableLeafNode && isBlogPost(props.node.children["/"])
          ? {
              component: Link,
              to: props.node.children["/"].slug,
            }
          : {})}
        key={props.node.id}
        className={`${classes.item} ${getSlugActiveStatusClass(
          location,
          context.enableLeafNode && isBlogPost(props.node.children["/"])
            ? props.node.children["/"].slug
            : props.node.slug
        )}`}
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
          <ItemList nodes={props.node.children} level={props.level + 1} />
        </Collapse>
      ) : null}
    </>
  );
};

const useItemListStyle = makeStyles<Theme, ItemListProps>(theme => ({
  list: props => ({
    paddingLeft: theme.spacing(1) * props.level,
  }),
  item: itemStyles(theme),
}));

const ItemList: React.FC<ItemListProps> = props => {
  const { nodes, level, ...forwardProps } = props;
  const classes = useItemListStyle(props);
  const context = useContext(CategoriesMenuContext);
  const location = useLocation();

  return (
    <List
      component={level === 0 ? "nav" : "div"}
      className={classes.list}
      dense={true}
      disablePadding={level !== 0}
      subheader={
        level === 0 ? (
          <ListSubheader component="div">Archive</ListSubheader>
        ) : (
          undefined
        )
      }
    >
      {Object.keys(nodes).map(key => {
        const node = nodes[key];
        if (isCategory(node)) {
          return (
            <SubList
              key={node.id}
              {...forwardProps}
              node={node}
              level={level}
            />
          );
        } else if (context.enableLeafNode && key !== "/") {
          return (
            <ListItem
              component={Link}
              to={node.slug}
              className={`${classes.item} ${getSlugActiveStatusClass(
                location,
                node.slug
              )}`}
              key={node.id}
              button
            >
              <ListItemText primary={node.title} />
            </ListItem>
          );
        } else {
          return null;
        }
      })}
    </List>
  );
};
const CategoriesNavMenu: React.FC<CategoriesMenuContextType> = ({
  enableLeafNode,
}) => {
  const postsByCategories = usePostsGroupedByCategory();

  return (
    <CategoriesMenuContext.Provider value={{ enableLeafNode }}>
      <ItemList nodes={postsByCategories} level={0} />
    </CategoriesMenuContext.Provider>
  );
};

export default CategoriesNavMenu;

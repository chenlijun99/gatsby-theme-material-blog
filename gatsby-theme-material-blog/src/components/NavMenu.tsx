import path from "path";

import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { useTheme, Theme } from "@material-ui/core/styles";

import get from "lodash/get";

import { useStaticQuery, Link, graphql } from "gatsby";

import { NavMenuPostsQuery } from "../generated/graphql";
import useThemeOptions from "../hooks/useThemeOptions";
import { ListSubheader } from "@material-ui/core";
import { isObject } from "util";

interface FileNode {
  name: string;
  link: string;
}

interface DirectoryNode {
  name: string;
  open: boolean;
  link?: string;
  children: {
    [key: string]: FileNode | DirectoryNode;
  };
}

function isDirectoryNode(object: unknown): object is DirectoryNode {
  return !!(object && (object as DirectoryNode).children);
}

function selectFirstValidString(
  defaultValue: string,
  ...strings: Array<string | unknown>
): string {
  let str;
  for (let i = 0; i < strings.length; ++i) {
    str = strings[i];
    if (typeof str === "string" && str != "") {
      return str;
    }
  }
  return defaultValue;
}

type RootNode = DirectoryNode["children"];

function fillTree(data: NavMenuPostsQuery): RootNode {
  const rootNode: RootNode = {};
  const themeOptions = useThemeOptions();

  data.allFile.edges.forEach(edge => {
    if (edge.node.relativePath) {
      const pathChunks = edge.node.relativePath.split("/");
      const len = pathChunks.length;
      pathChunks.reduce<RootNode>(
        (currentRootNode, directoryOrFile, index, pathChunks) => {
          if (index + 1 == len) {
            // final node here, for sure unique
            if (
              (edge.node.extension || "") === "md" &&
              (edge.node.name || "") !== "index"
            ) {
              (currentRootNode[directoryOrFile] as FileNode) = {
                name: selectFirstValidString(
                  "Unable to get title",
                  get(edge, "node.childMarkdownRemark.frontmatter.title", ""),
                  get(edge, "node.childMarkdownRemark.headings[0].value"),
                  edge.node.name
                ),
                link: path
                  .join(themeOptions.basePath, edge.node.relativePath || "")
                  // remove extension ".md"
                  .slice(0, -3),
              };
            }
          } else {
            if (!currentRootNode[directoryOrFile]) {
              (currentRootNode[directoryOrFile] as DirectoryNode) = {
                name: pathChunks[index],
                children: {},
                open: false,
              };
            }
            if (
              index + 2 === len &&
              /index.(md|js)/.test(edge.node.base || "")
            ) {
              /*
               * We got a directory configuration file.
               * Let's apply the potential user options
               */
              const directoryNode = currentRootNode[
                directoryOrFile
              ] as DirectoryNode;
              let options: unknown;
              if ((edge.node.base || "") === "index.md") {
                options = (edge.node.childMarkdownRemark || {}).frontmatter;
                if (edge.node.relativePath) {
                  directoryNode.link = path.join(
                    themeOptions.basePath,
                    edge.node.relativePath.slice(0, -"index.md".length)
                  );
                }
              } else if ((edge.node.base || "") === "index.js") {
                options = (edge.node.childJavascriptFrontmatter || {})
                  .frontmatter;
              }
              directoryNode.name = selectFirstValidString(
                directoryNode.name,
                get(options, "name")
              );
              directoryNode.open = get(options, "open", directoryNode.open);
            }
          }
          /*
           * when node[directoryOrFile] is a FileNode or null (in case of
           * index.js or index.md), the iteration stops so the wrong cast won't
           * cause problems
           */
          return ((currentRootNode[directoryOrFile] || {}) as DirectoryNode)
            .children as RootNode;
        },
        rootNode
      );
    }
  });

  return rootNode;
}

const SubList: React.FC<{ node: DirectoryNode; level: number }> = props => {
  const [open, setOpen] = useState(props.node.open);
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
        component={props.node.link ? Link : "div"}
        to={props.node.link}
        key={props.node.name}
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

function getList(rootNode: RootNode, theme: Theme, level = 0) {
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
      {Object.keys(rootNode).map(key => {
        const node = rootNode[key];
        if (isDirectoryNode(node)) {
          return <SubList node={node} level={level} />;
        } else {
          return (
            <ListItem component={Link} to={node.link} key={node.link} button>
              <ListItemText primary={node.name} />
            </ListItem>
          );
        }
      })}
    </List>
  );
}

const NavMenu: React.FC = () => {
  //const data = useStaticQuery<NavMenuPostsQuery>(
  //graphql`
  //query NavMenuPosts {
  //allFile(filter: { sourceInstanceName: { eq: "posts" } }) {
  //edges {
  //node {
  //relativePath
  //name
  //base
  //extension
  //childMarkdownRemark {
  //headings(depth: h1) {
  //value
  //}
  //frontmatter {
  //title
  //name
  //open
  //}
  //}
  //childJavascriptFrontmatter {
  //frontmatter {
  //name
  //open
  //}
  //}
  //}
  //}
  //}
  //}
  //`
  //);
  //const rootNode = fillTree(data);
  //const theme = useTheme();

  //return getList(rootNode, theme);
  return <></>;
};

export default NavMenu;

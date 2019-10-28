import React, { Fragment } from "react";
import { Link } from "gatsby";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Icon from "@material-ui/core/Icon";
import CalendarIcon from "@material-ui/icons/CalendarToday";
import Chip from "@material-ui/core/Chip";
import { LayoutContext } from "./Layout";

import { PostsQuery } from "../generated/graphql";
import Typography from "@material-ui/core/Typography";

import SEO from "./SEO";

const Posts: React.FC<{ data: PostsQuery }> = ({ data }) => {
  return (
    <React.Fragment>
      <SEO title="Home" />
      <LayoutContext.Consumer>
        {({ setHeaderProps }) => {
          return data.allBlogPost.nodes.map(node => {
            const title = node.title || node.slug;
            const tags = node.tags || [];
            return (
              <Card key={node.slug}>
                <CardActionArea component={Link} to={node.slug}>
                  <Typography variant="h5" component="h2" noWrap>
                    {title}
                  </Typography>
                  <Typography variant="subtitle1" noWrap>
                    {node.date}
                  </Typography>
                  <Typography variant="body1">{node.excerpt}</Typography>
                </CardActionArea>
                {tags.map((tag, index) => {
                  return (
                    <Chip
                      key={typeof tag === "string" ? tag : index}
                      label={tag}
                    ></Chip>
                  );
                })}
              </Card>
            );
          });
        }}
      </LayoutContext.Consumer>
    </React.Fragment>
  );
};
export default Posts;

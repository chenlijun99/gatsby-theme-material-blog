/** @jsx jsx */
import React, { Fragment } from "react";
import { Link } from "gatsby";
import { Styled, jsx } from "theme-ui";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Icon from "@material-ui/core/Icon";
import CalendarIcon from "@material-ui/icons/CalendarToday";
import Chip from "@material-ui/core/Chip";

import { PostsQuery } from "../generated/graphql";

import SEO from "./SEO";

const Posts: React.FC<{ data: PostsQuery }> = ({ data }) => {
  return (
    <React.Fragment>
      <SEO title="Home" />
      {data.allBlogPost.nodes.map(node => {
        const title = node.title || node.slug;
        const keywords = node.keywords || [];
        const tags = node.tags || [];
        return (
          <Card
            sx={{
              margin: 3,
              py: 3,
              px: 3,
            }}
            key={node.slug}
          >
            <CardActionArea component={Link} to={node.slug}>
              <Styled.h2
                sx={{
                  mb: 1,
                }}
              >
                {title}
              </Styled.h2>
              <CalendarIcon />
              <small>{node.date}</small>
              <Styled.p>{node.excerpt}</Styled.p>
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
      })}
    </React.Fragment>
  );
};

export default Posts;

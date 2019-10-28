import React, { useEffect, useState, useContext } from "react";

import SEO from "./SEO";
import { Card, Container } from "@material-ui/core";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { LayoutContext, LayoutContextType } from "./Layout";
import { PostPageQuery } from "../generated/graphql";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  postCard: {
    position: "relative",
    minHeight: "20vh",
    marginTop: "-10vh",
    marginLeft: "10vh",
    marginRight: "10vh",
    marginBottom: "30px",
  },
});

const Post: React.FC<{ data: PostPageQuery }> = ({ data }) => {
  const post = data.blogPost;

  const context = useContext(LayoutContext);

  useEffect(() => {
    context.setHeaderProps({
      title: post!.title,
    });
    return () => {
      context.setHeaderProps({});
    };
  }, []);

  const classes = useStyles();

  return (
    <React.Fragment>
      <SEO title={post!.title} description={post!.excerpt} />
      <Card className={classes.postCard} raised={true}>
        <Container component="article">
          <Typography variant="body2" noWrap>
            {post!.date}
          </Typography>
          <MDXRenderer>{post!.body}</MDXRenderer>
        </Container>
      </Card>
    </React.Fragment>
  );
};

export default Post;

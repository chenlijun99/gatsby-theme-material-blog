/** @jsx jsx */
import React from "react";
import { Styled, jsx, css } from "theme-ui";

import SEO from "./SEO";
import { Card, Container } from "@material-ui/core";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { PostPageQuery } from "../generated/graphql";

const Post: React.FC<{ data: PostPageQuery }> = ({ data }) => {
  const post = data.blogPost;
  return (
    <React.Fragment>
      <SEO title={post!.title} description={post!.excerpt} />
      <Card
        sx={{
          position: "relative",
          minHeight: "20vh",
          marginTop: "-10vh",
          marginLeft: ["1vh", "2vh", "10vh"],
          marginRight: ["1vh", "2vh", "10vh"],
          marginBottom: "30px",
        }}
        raised={true}
      >
        <Container component="article">
          <Styled.h1>{post!.title}</Styled.h1>
          <Styled.p>{post!.date}</Styled.p>
          <MDXRenderer>{post!.body}</MDXRenderer>
        </Container>
      </Card>
    </React.Fragment>
  );
};

export default Post;

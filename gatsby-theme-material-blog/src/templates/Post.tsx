import React, { useEffect, useState, useContext } from "react";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Card, Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

import get from "lodash/get";

import SEO from "../components/SEO";
import { LayoutContext } from "../components/Layout";
import { PostPageQuery } from "../generated/graphql";

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
  const img = get(
    data,
    "blogPost.featuredImage.childImageSharp.fluid",
    undefined
  );
  useEffect(() => {
    context.setHeaderProps({
      title: post!.title,
      coverImg: img ? [img] : undefined,
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

export const query = graphql`
  query PostPage($id: String!, $previousId: String, $nextId: String) {
    blogPost(id: { eq: $id }) {
      id
      excerpt(pruneLength: 200)
      body
      slug
      title
      body
      tags
      keywords
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        childImageSharp {
          fluid(quality: 50, maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    previous: blogPost(id: { eq: $previousId }) {
      id
      excerpt(pruneLength: 200)
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
    next: blogPost(id: { eq: $nextId }) {
      id
      excerpt(pruneLength: 200)
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
  }
`;

export default Post;

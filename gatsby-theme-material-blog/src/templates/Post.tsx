import React, { useEffect, useContext } from "react";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Card, Container, Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

import get from "lodash/get";

import SEO from "../components/SEO";
import MDXProviderWrapper from "../components/mdx/MDXProviderWrapper";
import { LayoutContext } from "../components/Layout";
import { PostPageQuery } from "../generated/graphql";
import CategoriesNavMenu from "../components/CategoriesNavMenu";

const useStyles = makeStyles({
  postCard: {
    position: "relative",
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
      <Box display="flex" flexDirection="row">
        <Box minWidth={["15%"]}>
          <CategoriesNavMenu enableLeafNode={true} />
        </Box>
        <Box
          flexGrow={1}
          marginTop={["0", "-10vh"]}
          marginBottom="10vh"
          minHeight="50vh"
          mx={[0, 2, 4, 5]}
        >
          <Card className={classes.postCard} raised={true}>
            <Container component="article">
              <Typography variant="body2" noWrap>
                {post!.date}
              </Typography>
              <MDXProviderWrapper>
                <MDXRenderer>{post!.body}</MDXRenderer>
              </MDXProviderWrapper>
            </Container>
          </Card>
        </Box>
      </Box>
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

import React from "react";

import BackgroundImage, { IFluidObject } from "gatsby-background-image";
import Img, { FluidObject } from "gatsby-image";
import { Link, graphql } from "gatsby";

import { useMediaQuery, useTheme, Box } from "@material-ui/core";

import SEO from "../components/SEO";
import { PostsQuery } from "../generated/graphql";
import CategoriesNavMenu from "../components/CategoriesNavMenu";
import PostCard from "../components/Post/PostCard";

const Posts: React.FC<{ data: PostsQuery }> = ({ data }) => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <React.Fragment>
      <SEO title="Home" />
      <Box display="flex" flexDirection="row">
        {!smallScreen ? (
          <Box minWidth="20%">
            <CategoriesNavMenu enableLeafNode={true} />
          </Box>
        ) : null}
        <Box mx={[0, 5, 10]} flexGrow={1}>
          {data.allBlogPost.nodes.map(node => {
            return <PostCard key={node.id} post={node} />;
          })}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export const query = graphql`
  query Posts {
    allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 1000) {
      nodes {
        id
        excerpt(pruneLength: 500)
        slug
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid(quality: 70, maxHeight: 250) {
              ...GatsbyImageSharpFluid_withWebp
              presentationHeight
            }
          }
        }
      }
    }
  }
`;

export default Posts;

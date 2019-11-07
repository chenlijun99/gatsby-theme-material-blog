import React from "react";
import path from "path";

import { graphql, navigate } from "gatsby";

import { useMediaQuery, useTheme, Box, Typography } from "@material-ui/core";

import Pagination from "material-ui-flat-pagination";

import useThemeOptions from "../hooks/useThemeOptions";
import SEO from "../components/SEO";
import { PostsQuery } from "../generated/graphql";
import CategoriesNavMenu from "../components/CategoriesNavMenu";
import PostCard from "../components/Post/PostPreviewCard";
import Header from "../components/Header";

interface PostsPageProps {
  data: PostsQuery;
  pageContext: {
    limit: number;
    skip: number;
  };
}

const Posts: React.FC<PostsPageProps> = ({ data, pageContext }) => {
  const theme = useTheme();
  const themeOptions = useThemeOptions();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <SEO title="Home" />
      <Box height={["50vh", "60vh"]}>
        <Header>
          <Typography variant="h1">Home page</Typography>
        </Header>
      </Box>
      <Box display="flex" flexDirection="row">
        {!smallScreen ? (
          <Box minWidth="20%">
            <Box position="sticky" top={theme.mixins.toolbar.minHeight}>
              <CategoriesNavMenu enableLeafNode={true} />
            </Box>
          </Box>
        ) : null}
        <Box
          mx={[0, 5, 10]}
          marginBottom={[5, 3]}
          flexGrow={1}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box>
            {data.allBlogPost.nodes.map(node => {
              return <PostCard key={node.id} post={node} />;
            })}
          </Box>
          <Pagination
            limit={themeOptions.postsPerPage}
            total={data.allBlogPost.totalCount}
            offset={pageContext.skip}
            onClick={(e, offset, page) => {
              // page is >= 1
              navigate(
                path.join(themeOptions.basePath, page > 1 ? `page/${page}` : "")
              );
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export const query = graphql`
  query Posts($skip: Int!, $limit: Int!) {
    allBlogPost(
      sort: { fields: [date, title], order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
      totalCount
    }
  }
`;

export default Posts;

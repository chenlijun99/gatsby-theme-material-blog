import React from "react";

import BackgroundImage from "gatsby-background-image";
import Img, { FluidObject } from "gatsby-image";
import { Link, graphql } from "gatsby";

import Box from "@material-ui/core/Box";
import CalendarIcon from "@material-ui/icons/CalendarToday";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import { useMediaQuery, useTheme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import get from "lodash/get";

import SEO from "../components/SEO";
import { PostsQuery } from "../generated/graphql";
import CategoriesNavMenu from "../components/CategoriesNavMenu";

interface PostCardProps {
  post: PostsQuery["allBlogPost"]["nodes"][0];
}

const usePostCardStyle = makeStyles(theme => ({
  headerDate: {
    ...theme.typography.subtitle2,
  },
}));

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const classes = usePostCardStyle();
  return (
    <Box my={2}>
      <Card>
        {get(post, "featuredImage.childImageSharp.fluid", null) ? (
          <CardMedia>
            <Img
              fluid={
                post!.featuredImage!.childImageSharp!.fluid! as FluidObject
              }
              style={{ maxHeight: "20vh" }}
            />
          </CardMedia>
        ) : null}
        <CardActionArea component={Link} to={post.slug}>
          <CardContent>
            <Box marginBottom={2}>
              {get(post, "featuredImage.childImageSharp.fluid", null) ? (
                <BackgroundImage
                  Tag="div"
                  fluid={post!.featuredImage!.childImageSharp!.fluid!}
                >
                  <Typography variant="h5" component="h2" noWrap>
                    {post.title}
                  </Typography>
                </BackgroundImage>
              ) : (
                <Typography variant="h5" component="h2" noWrap>
                  {post.title}
                </Typography>
              )}
              <Box display="flex" alignItems="center" alignContent="center">
                <CalendarIcon className={classes.headerDate} />
                <Typography variant="subtitle2" noWrap>
                  {post.date}
                </Typography>
              </Box>
            </Box>
            <Divider />
            <Box my={2}>
              <Typography variant="body1">{post.excerpt}</Typography>
            </Box>
            <Divider />
            <Box marginTop={2}>
              {post.tags.map((tag, index) => {
                return (
                  <Chip
                    key={typeof tag === "string" ? tag : index}
                    label={tag}
                  ></Chip>
                );
              })}
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

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
            fluid(quality: 50, maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export default Posts;

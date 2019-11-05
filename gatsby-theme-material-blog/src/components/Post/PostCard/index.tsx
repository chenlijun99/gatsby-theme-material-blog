import React from "react";
import { Link } from "gatsby";

import CalendarIcon from "@material-ui/icons/Today";
import {
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Typography,
  makeStyles,
  Box,
  useTheme,
  styled,
} from "@material-ui/core";

import BackgroundImage, { IFluidObject } from "gatsby-background-image";

import get from "lodash/get";
import { transparentize } from "polished";

import { PostsQuery } from "../../../generated/graphql";

import Tags from "./Tags";
import Breadcrumbs from "../Breadcrumbs";
import { TypographyProps } from "@material-ui/core/Typography";

interface PostCardProps {
  post: PostsQuery["allBlogPost"]["nodes"][0];
}

const usePostCardStyle = makeStyles(theme => ({
  headerDate: {
    ...theme.typography.subtitle2,
  },
}));

const Title = (props: TypographyProps) => (
  <Typography variant="h5" component="h2" {...props} />
);

const TitleWithBackground = styled(Title)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  textShadow: "0 1px 0 black",
}));

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const classes = usePostCardStyle();
  const theme = useTheme();
  return (
    <Box my={2}>
      <Card>
        <CardActionArea component={Link} to={post.slug}>
          <Box>
            {get(post, "featuredImage.childImageSharp.fluid", null) ? (
              <BackgroundImage
                Tag="div"
                fluid={[
                  `linear-gradient(to bottom,
                     ${transparentize(0.8, theme.palette.primary.main)},
                     ${transparentize(0.5, theme.palette.primary.main)}
                    )`,
                  post!.featuredImage!.childImageSharp!.fluid! as IFluidObject,
                ]}
                style={{
                  height: post!.featuredImage!.childImageSharp!.fluid!
                    .presentationHeight,
                }}
              >
                <Box
                  height="100%"
                  mx={2}
                  py={2}
                  display="flex"
                  alignItems="flex-end"
                >
                  <TitleWithBackground>{post.title}</TitleWithBackground>
                </Box>
              </BackgroundImage>
            ) : (
              <Box p={2}>
                <Title>{post.title}</Title>
              </Box>
            )}
          </Box>
        </CardActionArea>
        <Box m={2}>
          <Typography variant="body1">{post.excerpt}</Typography>
          <Box
            display="flex"
            alignItems="center"
            color={theme.palette.grey["700"]}
          >
            <CalendarIcon
              style={{
                ...theme.typography.body1,
              }}
            />
            <Typography variant="body1">{post.date}</Typography>
          </Box>
          <Breadcrumbs post={post} />
          <Tags tags={post.tags} />
        </Box>
      </Card>
    </Box>
  );
};

const StyledPostCard = styled(PostCard)(({ theme }) => ({
  "&:hover": {
    boxShadow: theme.shadows["10"],
  },
}));

export default StyledPostCard;

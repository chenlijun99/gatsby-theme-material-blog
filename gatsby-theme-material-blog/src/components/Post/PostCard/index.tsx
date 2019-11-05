import React from "react";
import { Link } from "gatsby";

import CalendarIcon from "@material-ui/icons/Today";
import {
  Card,
  CardActionArea,
  Divider,
  Typography,
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

type BlogPost = PostsQuery["allBlogPost"]["nodes"][0];

interface PostCardProps {
  post: BlogPost;
}

const Title = (props: TypographyProps) => (
  <Typography variant="h5" component="h2" {...props} />
);

const DateCaption = (props: { date: string }) => {
  const theme = useTheme();
  return (
    <Box display="flex" alignItems="center">
      <CalendarIcon
        style={{
          ...theme.typography.body1,
        }}
      />
      <Box mx={`${theme.spacing(1) / 2}px`}>
        <Typography variant="overline">{props.date}</Typography>
      </Box>
    </Box>
  );
};

const Header = (props: { post: BlogPost & unknown }) => {
  const theme = useTheme();
  const { post, ...otherProps } = props;
  return (
    <Box {...otherProps}>
      <Box marginBottom={`${theme.spacing(1) / 2}px`}>
        <Title>{post.title}</Title>
      </Box>
      <Box display="flex" flexDirection="row" alignItems="center">
        <DateCaption date={post.date} />
        <Box flexGrow={1} />
        <Breadcrumbs post={post} />
      </Box>
    </Box>
  );
};

const HeaderOnBackground = styled(Header)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  width: "100%",
  textShadow: "0px 1px 5px black",
  "& .MuiTypography-overline": {
    fontWeight: theme.typography.fontWeightMedium,
  },
  "& .PostBreadcrumbs .MuiBreadcrumbs-ol": {
    color: theme.palette.primary.contrastText,
  },
}));

const PostCard: React.FC<PostCardProps> = ({ post }) => {
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
                     ${transparentize(0.9, theme.palette.primary.main)},
                     ${transparentize(0.5, theme.palette.primary.main)} 50%,
                     ${transparentize(0.4, theme.palette.primary.main)} 70%,
                     ${transparentize(0.3, theme.palette.primary.main)}
                    )`,
                  post!.featuredImage!.childImageSharp!.fluid! as IFluidObject,
                ]}
                style={{
                  height: post!.featuredImage!.childImageSharp!.fluid!
                    .presentationHeight as number,
                }}
              >
                <Box
                  height="100%"
                  mx={2}
                  py={2}
                  display="flex"
                  alignItems="flex-end"
                >
                  <HeaderOnBackground post={post} />
                </Box>
              </BackgroundImage>
            ) : (
              <Box p={2} paddingBottom={1}>
                <Header post={post} />
              </Box>
            )}
          </Box>
        </CardActionArea>
        <Divider />
        <Box m={2}>
          <Typography variant="body1">{post.excerpt}</Typography>
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

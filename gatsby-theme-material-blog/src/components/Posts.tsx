import React, { Fragment } from "react";
import { Link } from "gatsby";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Icon from "@material-ui/core/Icon";
import CalendarIcon from "@material-ui/icons/CalendarToday";
import Chip from "@material-ui/core/Chip";
import { LayoutContext } from "./Layout";

import { PostsQuery } from "../generated/graphql";
import Typography from "@material-ui/core/Typography";

import SEO from "./SEO";
import { makeStyles } from "@material-ui/core/styles";

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
        <CardActionArea component={Link} to={post.slug}>
          <CardContent>
            <Box marginBottom={2}>
              <Typography variant="h5" component="h2" noWrap>
                {post.title}
              </Typography>
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
  return (
    <React.Fragment>
      <SEO title="Home" />
      <Box mx={[0, 10]}>
        {data.allBlogPost.nodes.map(node => {
          return <PostCard key={node.slug} post={node} />;
        })}
      </Box>
    </React.Fragment>
  );
};
export default Posts;

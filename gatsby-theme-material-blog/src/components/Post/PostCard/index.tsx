import React from "react";

import { MDXRenderer } from "gatsby-plugin-mdx";

import { Card, CardContent, Divider, Typography } from "@material-ui/core";
import WordIcon from "@material-ui/icons/ChromeReaderModeOutlined";
import TimeIcon from "@material-ui/icons/AccessTimeOutlined";

import { PostPageQuery } from "../../../generated/graphql";
import MDXProviderWrapper from "../../mdx/MDXProviderWrapper";
import Breadcrumbs from "../Breadcrumbs";

type BlogPost = NonNullable<PostPageQuery["blogPost"]>;

const PostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <Card style={{ position: "relative" }}>
      <CardContent component="article">
        <Typography variant="body2" noWrap>
          {post.date}
        </Typography>
        <Breadcrumbs post={post} />
        <WordIcon />
        {post.wordCount}
        <TimeIcon />
        {post.timeToRead} min
        <Divider />
        <MDXProviderWrapper>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProviderWrapper>
      </CardContent>
    </Card>
  );
};

export default PostCard;

import React from "react";

import { MDXRenderer } from "gatsby-plugin-mdx";

import { Card, CardContent, Divider, Typography, Box } from "@material-ui/core";
import WordIcon from "@material-ui/icons/ChromeReaderModeOutlined";
import TimeIcon from "@material-ui/icons/AccessTimeOutlined";
import CalendarIcon from "@material-ui/icons/Today";

import { PostPageQuery } from "../../../generated/graphql";
import MDXProviderWrapper from "../../mdx/MDXProviderWrapper";
import Breadcrumbs from "../Breadcrumbs";
import Tags from "../Tags";

interface MetadataProps {
  icon: React.FC;
}

const Metadata: React.FC<MetadataProps> = props => {
  return (
    <Box display="flex" alignItems="center">
      {props.icon(props)}
      <Box marginLeft={1}>
        <Typography variant="body2" noWrap>
          {props.children}
        </Typography>
      </Box>
    </Box>
  );
};

type BlogPost = NonNullable<PostPageQuery["blogPost"]>;

const PostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  const metadata = [
    {
      Icon: CalendarIcon,
      data: post.date,
    },
    {
      Icon: WordIcon,
      data: `${post.wordCount} words`,
    },
    {
      Icon: TimeIcon,
      data: `${post.timeToRead} min`,
    },
  ];
  return (
    <Card style={{ position: "relative" }}>
      <CardContent component="article">
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Breadcrumbs post={post} />
          <Tags tags={post.tags} />
        </Box>
        <Box display="flex" justifyContent="center">
          <Box
            width={["100%", "50%"]}
            my={[1, 2]}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            {metadata.map((item, index) => (
              <Box key={index}>
                <Metadata icon={() => <item.Icon />}>{item.data}</Metadata>
              </Box>
            ))}
          </Box>
        </Box>
        <Divider />
        <Box m={[1, 3, 5]}>
          <MDXProviderWrapper>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProviderWrapper>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PostCard;

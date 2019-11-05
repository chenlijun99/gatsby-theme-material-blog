import React from "react";

import { Box, Chip } from "@material-ui/core";

import { PostsQuery } from "../../../generated/graphql";

interface TagsProps {
  tags: PostsQuery["allBlogPost"]["nodes"][0]["tags"];
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
  if (tags.length > 0) {
    return (
      <Box marginTop={2}>
        {tags.map((tag, index) => {
          return (
            <Chip
              key={typeof tag === "string" ? tag : index}
              label={tag}
            ></Chip>
          );
        })}
      </Box>
    );
  }
  return <></>;
};

export default Tags;

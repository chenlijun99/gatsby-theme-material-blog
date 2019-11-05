import React from "react";

import { PostsQuery } from "../../generated/graphql";
import { getPostCategories } from "../../hooks/usePostsGroupedByCategory";

import { Breadcrumbs, Link, Box } from "@material-ui/core";
import CategoryIcon from "@material-ui/icons/Folder";

interface CategoriesProps {
  post: PostsQuery["allBlogPost"]["nodes"][0];
}

const PostBreadcrumbs: React.FC<CategoriesProps> = ({ post }) => {
  const categories = getPostCategories(post);
  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      <Box marginRight={1}>
        <CategoryIcon />
      </Box>
      <Breadcrumbs>
        {categories.map(category => (
          <Link key={category.id}>{category.name}</Link>
        ))}
      </Breadcrumbs>
    </Box>
  );
};

export default PostBreadcrumbs;

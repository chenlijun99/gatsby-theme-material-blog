import React from "react";

import { Link } from "gatsby";
import { PostsQuery } from "../../generated/graphql";
import { getPostCategories } from "../../hooks/usePostsGroupedByCategory";

import {
  Breadcrumbs,
  Box,
  Typography,
  useTheme,
  styled,
} from "@material-ui/core";
import CategoryIcon from "@material-ui/icons/Folder";

interface CategoriesProps {
  post: PostsQuery["allBlogPost"]["nodes"][0];
}

const PostBreadcrumbs: React.FC<CategoriesProps> = ({ post, ...props }) => {
  const categories = getPostCategories(post);
  const theme = useTheme();
  if (categories.length > 0) {
    return (
      <div className="PostBreadcrumbs">
        <Box display="flex" alignItems="center" {...props}>
          <CategoryIcon
            style={{
              ...theme.typography.body1,
            }}
          />
          <Box mx={`${theme.spacing(1) / 2}px`}>
            <Breadcrumbs>
              {categories.map(category => (
                <Typography variant="overline" key={category.id}>
                  <Link
                    to={category.slug}
                    style={{
                      color: "inherit",
                    }}
                  >
                    {category.name}
                  </Link>
                </Typography>
              ))}
            </Breadcrumbs>
          </Box>
        </Box>
      </div>
    );
  }
  return <></>;
};

const StyledPostBreadcrumbs = styled(PostBreadcrumbs)(({ theme }) => ({
  "& .MuiBreadcrumbs-separator": {
    marginLeft: "4px",
    marginRight: "4px",
  },
}));

export default StyledPostBreadcrumbs;

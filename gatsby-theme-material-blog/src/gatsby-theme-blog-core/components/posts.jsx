import React from "react";
import Posts from "../../components/Posts";

export default ({ location, data }) => {
  const { site, allBlogPost } = data;
  return (
    <Posts
      location={location}
      posts={allBlogPost.edges}
      siteTitle={site.siteMetadata.title}
    />
  );
};

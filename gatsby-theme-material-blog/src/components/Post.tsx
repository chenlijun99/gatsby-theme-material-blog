import React from "react";
import { Styled, css } from "theme-ui";

import PostFooter from "./PostFooter";
import SEO from "./SEO";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => (
  <>
    <SEO title={post.title} description={post.excerpt} />
    <Styled.h1>{post.title}</Styled.h1>
    <Styled.p
      css={css({
        fontSize: 1,
        mt: -3,
        mb: 3,
      })}
    >
      {post.date}
    </Styled.p>
    <MDXRenderer>{post.body}</MDXRenderer>
    <PostFooter {...{ previous, next }} />
  </>
);

export default Post;

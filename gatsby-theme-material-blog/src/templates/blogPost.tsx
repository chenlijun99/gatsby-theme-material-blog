import React from "react";
import { graphql } from "gatsby";

export default function Template({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { html } = markdownRemark;
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export const pageQuery = graphql`
  query MarkdownPost($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`;

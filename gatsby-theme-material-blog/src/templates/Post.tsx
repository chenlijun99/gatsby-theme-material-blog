import { graphql } from "gatsby";
import PostPage from "../components/Post";

export default PostPage;

export const query = graphql`
  query PostPage($id: String!, $previousId: String, $nextId: String) {
    blogPost(id: { eq: $id }) {
      id
      excerpt(pruneLength: 200)
      body
      slug
      title
      body
      tags
      keywords
      date(formatString: "MMMM DD, YYYY")
    }
    previous: blogPost(id: { eq: $previousId }) {
      id
      excerpt(pruneLength: 200)
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
    next: blogPost(id: { eq: $nextId }) {
      id
      excerpt(pruneLength: 200)
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
  }
`;


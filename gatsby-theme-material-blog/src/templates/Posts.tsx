import { graphql } from "gatsby";
import PostsPage from "../components/Posts";

export default PostsPage;

export const query = graphql`
  query Posts {
    allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 1000) {
      nodes {
        id
        excerpt
        slug
        title
        tags
        keywords
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

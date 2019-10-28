/** @jsx jsx */
import { graphql } from "gatsby";

import React, { useEffect, useContext } from "react";
import { Link } from "gatsby";
import { Styled, jsx } from "theme-ui";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Icon from "@material-ui/core/Icon";
import CalendarIcon from "@material-ui/icons/CalendarToday";
import Chip from "@material-ui/core/Chip";
import { LayoutContext } from "../components/Layout";

import { PostsQuery } from "../generated/graphql";

import SEO from "../components/SEO";
import ActivityCalendar from "../components/ActivityCalendar";
import TagsWordCloud from "../components/TagsWordCloud";

const ArchivePage: React.FC<{ data: PostsQuery }> = ({ data }) => {
  const context = useContext(LayoutContext);
  useEffect(() => {
    context.setHeaderProps({
      title: "Archive",
    });
    return () => {
      context.setHeaderProps({});
    };
  }, []);

  return (
    <React.Fragment>
      <SEO title="Archive" />
      <Card
        sx={{
          position: "relative",
          margin: 3,
          marginTop: "-10vh",
          py: 3,
          px: 3,
          "> *": {
            margin: "auto",
          },
        }}
      >
        <ActivityCalendar />
      </Card>

      <Card
        sx={{
          position: "relative",
          margin: 3,
          marginTop: "-10vh",
          py: 3,
          px: 3,
          "> *": {
            margin: "auto",
          },
        }}
      >
        <TagsWordCloud />
      </Card>

      {data.allBlogPost.nodes.map(node => {
        const title = node.title || node.slug;
        const tags = node.tags || [];
        return (
          <Card
            sx={{
              margin: 3,
              py: 3,
              px: 3,
            }}
            key={node.slug}
          >
            <CardActionArea component={Link} to={node.slug}>
              <Styled.h2
                sx={{
                  mb: 1,
                }}
              >
                {title}
              </Styled.h2>
              <CalendarIcon />
              <small>{node.date}</small>
              <Styled.p>{node.excerpt}</Styled.p>
            </CardActionArea>
            {tags.map((tag, index) => {
              return (
                <Chip
                  key={typeof tag === "string" ? tag : index}
                  label={tag}
                ></Chip>
              );
            })}
          </Card>
        );
      })}
    </React.Fragment>
  );
};

export const query = graphql`
  query {
    allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 1000) {
      nodes {
        id
        excerpt(pruneLength: 500)
        slug
        title
        tags
        keywords
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

export default ArchivePage;

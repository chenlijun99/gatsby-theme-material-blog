import { graphql } from "gatsby";

import React, { useEffect, useContext } from "react";
import { Link } from "gatsby";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Icon from "@material-ui/core/Icon";
import CalendarIcon from "@material-ui/icons/CalendarToday";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { LayoutContext } from "../components/Layout";

import { PostsQuery } from "../generated/graphql";

import SEO from "../components/SEO";
import ActivityCalendar from "../components/ActivityCalendar";
import TagsWordCloud from "../components/TagsWordCloud";

const useStyles = makeStyles(theme => ({
  activityCaldendarCard: {
    position: "relative",
    margin: theme.spacing(3),
    marginTop: "-10vh",
    padding: theme.spacing(2),
  },
}));

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

  const classes = useStyles();

  return (
    <React.Fragment>
      <SEO title="Archive" />
      <Card className={classes.activityCaldendarCard}>
        <ActivityCalendar />
      </Card>

      <Card>
        <TagsWordCloud />
      </Card>

      {data.allBlogPost.nodes.map(node => {
        const title = node.title || node.slug;
        const tags = node.tags || [];
        return (
          <Card key={node.slug}>
            <CardActionArea component={Link} to={node.slug}>
              <Typography variant="h2" noWrap>
                {title}
              </Typography>
              <CalendarIcon />
              <small>{node.date}</small>
              <p>{node.excerpt}</p>
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

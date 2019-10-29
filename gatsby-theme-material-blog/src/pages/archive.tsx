import React, { useEffect, useContext } from "react";
import { graphql, Link } from "gatsby";
import { DateTime } from "luxon";

import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

import { ArchivePostsQuery } from "../generated/graphql";
import { LayoutContext } from "../components/Layout";
import SEO from "../components/SEO";
import ActivityCalendar from "../components/ActivityCalendar";
import TagsWordCloud from "../components/TagsWordCloud";

type BlogPostGroupedByYear = {
  [key in number]: Array<ArchivePostsQuery["allBlogPost"]["nodes"][0]>;
};

function groupByYear(
  posts: ArchivePostsQuery["allBlogPost"]["nodes"]
): BlogPostGroupedByYear {
  return posts.reduce(
    (accumulator, post) => {
      const year = new Date(post.date).getFullYear();
      if (accumulator[year]) {
        accumulator[year].push(post);
      } else {
        accumulator[year] = [post];
      }
      return accumulator;
    },
    {} as BlogPostGroupedByYear
  );
}

const useStyles = makeStyles(theme => ({
  activityCaldendarCard: {
    position: "relative",
    marginTop: "-10vh",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      marginBottom: theme.spacing(3),
    },
  },
}));

const ArchivePage: React.FC<{ data: ArchivePostsQuery }> = ({ data }) => {
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
  const postsGrouopedByYear = groupByYear(data.allBlogPost.nodes);

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <React.Fragment>
      <SEO title="Archive" />
      <Box display="flex" flexDirection="column" mx={[0, 2, 4]}>
        <Box>
          <Card className={classes.activityCaldendarCard}>
            <CardContent>
              <ActivityCalendar />
            </CardContent>
          </Card>
        </Box>

        <Box display="flex" flexDirection="row">
          <Box display="flex" flexDirection="column" flexGrow={1} my={2}>
            <Card>
              <CardContent>
                <List subheader={<li />} dense={true}>
                  {((Object.keys(postsGrouopedByYear) as unknown) as Array<
                    keyof typeof postsGrouopedByYear
                  >)
                    .sort((a, b) => b - a)
                    .map(year => (
                      <li key={year}>
                        <Typography variant="h5">{year}</Typography>
                        <Divider />
                        <ul>
                          {postsGrouopedByYear[year].map(item => (
                            <ListItem
                              key={item.id}
                              button
                              component={Link}
                              to={item.slug}
                            >
                              <ListItemText
                                primary={item.title}
                                secondary={DateTime.fromISO(item.date).toFormat(
                                  "dd MMMM"
                                )}
                              />
                            </ListItem>
                          ))}
                        </ul>
                      </li>
                    ))}
                </List>
              </CardContent>
            </Card>
          </Box>
          {!smallScreen ? (
            <Box width="25%" my={2} marginLeft={2}>
              <Card>
                <TagsWordCloud />
              </Card>
            </Box>
          ) : null}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export const query = graphql`
  query ArchivePosts {
    allBlogPost(sort: { fields: [date, title], order: DESC }) {
      nodes {
        id
        slug
        title
        date
      }
    }
  }
`;

export default ArchivePage;

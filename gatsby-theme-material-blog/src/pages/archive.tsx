import React, { useEffect, useContext, useMemo } from "react";
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

import { IFluidObject } from "gatsby-background-image";
import get from "lodash/get";

import { ArchiveQuery } from "../generated/graphql";
import SEO from "../components/SEO";
import ActivityCalendar from "../components/ActivityCalendar";
import TagsWordCloud from "../components/TagsWordCloud";
import Header from "../components/Header";
import CategoriesNavMenu from "../components/CategoriesNavMenu";
import useThemedBackgroundImage from "../hooks/useThemedBackgroundImage";

type BlogPostGroupedByYear = {
  [key in number]: Array<ArchiveQuery["posts"]["nodes"][0]>;
};

function groupByYear(
  posts: ArchiveQuery["posts"]["nodes"]
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

const ArchivePage: React.FC<{ data: ArchiveQuery }> = ({ data }) => {
  const postsGrouopedByYear = useMemo(() => groupByYear(data.posts.nodes), [
    data.posts.nodes,
  ]);

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const featuredImage = useThemedBackgroundImage(
    get(data, "headerImage.childImageSharp.fluid", undefined)
  );

  return (
    <>
      <SEO title="Archive" />
      <Box height={["50vh", "60vh"]}>
        <Header featuredImage={featuredImage as IFluidObject | undefined}>
          <Typography variant="h1">Archive</Typography>
        </Header>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        mx={[0, 2, 4]}
        marginTop={["-10vh"]}
      >
        <Card
          style={{
            zIndex: theme.zIndex.mobileStepper - 1,
          }}
        >
          <CardContent>
            <ActivityCalendar />
          </CardContent>
        </Card>

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
              <Box marginTop={2}>
                <Card>
                  <CategoriesNavMenu />
                </Card>
              </Box>
            </Box>
          ) : null}
        </Box>
      </Box>
    </>
  );
};

export const query = graphql`
  query Archive {
    headerImage: file(relativePath: { eq: "archive.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    posts: allBlogPost(sort: { fields: [date, title], order: DESC }) {
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

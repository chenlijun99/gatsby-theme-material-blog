import React, { useEffect, useContext, useState } from "react";

import { graphql, Link } from "gatsby";

import {
  Box,
  SwipeableDrawer,
  useMediaQuery,
  Portal,
  Hidden,
  Fab,
  Typography,
  useTheme,
} from "@material-ui/core";
import NextIcon from "@material-ui/icons/ArrowForward";
import PreviousIcon from "@material-ui/icons/ArrowBack";
import TocIcon from "@material-ui/icons/Toc";

import get from "lodash/get";
import { math } from "polished";
import { useLocation } from "react-use";

import CategoriesNavMenu from "../components/CategoriesNavMenu";
import CommentsCard from "../components/Post/CommentsCard";
import Header from "../components/Header";
import PostCard from "../components/Post/PostCard";
import SEO from "../components/SEO";
import Toc from "../components/Post/Toc/";
import { LayoutContext } from "../components/Layout";
import { PostPageQuery } from "../generated/graphql";
import useThemedBackgroundImage from "../hooks/useThemedBackgroundImage";
import { IFluidObject } from "gatsby-background-image";

type BlogPost = NonNullable<PostPageQuery["blogPost"]>;

const markdownHeadingSelectors = Array.from({
  length: 6,
}).map((n, i) => {
  return {
    selector: "main article h" + (i + 1),
    depth: i,
  };
});

const MobileToc: React.FC = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const layoutContext = useContext(LayoutContext);

  const location = useLocation();

  useEffect(() => {
    if (location) {
      setOpen(false);
    }
  }, [location]);
  return (
    <>
      <SwipeableDrawer
        variant="temporary"
        anchor={theme.direction === "rtl" ? "left" : "right"}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <Box width={250}>
          <Typography
            variant="h6"
            align="center"
            style={{
              margin: theme.spacing(1, 1, 1, 1),
            }}
          >
            Table of Contents
          </Typography>
          <Toc
            offsetY={
              (theme.mixins.toolbar.minHeight as number) + theme.spacing(5)
            }
            headingSelectors={markdownHeadingSelectors}
            listItemProps={{ button: true }}
          />
        </Box>
      </SwipeableDrawer>
      <Portal container={layoutContext.fabSpace}>
        <Fab
          onClick={() => setOpen(!open)}
          color="secondary"
          size="small"
          aria-label="scroll back to top"
        >
          <TocIcon />
        </Fab>
      </Portal>
    </>
  );
};

const ResponsiveToc: React.FC = () => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));
  if (smallScreen) {
    return <MobileToc />;
  } else {
    return (
      <Box minWidth="15%" marginTop={2}>
        <Box
          position="sticky"
          top={(theme.mixins.toolbar.minHeight as number) + theme.spacing(2)}
        >
          <Box display="flex" alignItems="center" paddingLeft={1}>
            <Typography variant="h6" align="center">
              Table of Contents
            </Typography>
          </Box>
          <Toc
            throttleTime={0}
            offsetY={
              (theme.mixins.toolbar.minHeight as number) + theme.spacing(5)
            }
            headingSelectors={markdownHeadingSelectors}
            listProps={{ dense: true }}
          />
        </Box>
      </Box>
    );
  }
};

const PreviousNextPosts: React.FC<{
  previous?: Pick<BlogPost, "title" | "slug"> | null;
  next?: Pick<BlogPost, "title" | "slug"> | null;
}> = props => {
  const { previous, next } = props;
  if (previous || next) {
    return (
      <Box display="flex" alignItems="center">
        {previous ? (
          <Fab
            component={Link}
            to={previous.slug}
            color="primary"
            aria-label="previous post"
          >
            <PreviousIcon />
          </Fab>
        ) : null}
        <div
          style={{
            flexGrow: 1,
          }}
        />
        {next ? (
          <>
            <Fab
              component={Link}
              to={next.slug}
              color="primary"
              aria-label="next post"
            >
              <NextIcon />
            </Fab>
          </>
        ) : null}
      </Box>
    );
  }
  return <></>;
};

const contentResponsiveSpacing = [1, 2, 4, 5];

const Post: React.FC<{ data: PostPageQuery }> = ({ data }) => {
  const post = data.blogPost!;

  const img = useThemedBackgroundImage(
    get(data, "blogPost.featuredImage.childImageSharp.fluid", undefined)
  ) as IFluidObject | undefined;

  const theme = useTheme();

  return (
    <>
      <SEO title={post!.title} description={post!.excerpt} />
      <Box height={["40vh", "50vh"]}>
        <Header featuredImage={img}>
          <Box mx={contentResponsiveSpacing} textAlign="center">
            <Typography
              variant="h2"
              style={{
                color: theme.palette.primary.contrastText,
                textShadow: `1px 1px 1px ${theme.palette.grey["500"]}`,
              }}
            >
              {post!.title}
            </Typography>
          </Box>
        </Header>
      </Box>
      <Box display="flex" flexDirection="row">
        <Hidden mdDown>
          <Box minWidth={["15%"]}>
            <Box
              position="sticky"
              top={
                (theme.mixins.toolbar.minHeight as number) + theme.spacing(2)
              }
            >
              <CategoriesNavMenu enableLeafNode={true} />
            </Box>
          </Box>
        </Hidden>
        <Box
          flexGrow={1}
          maxWidth={[`calc(100% - ${theme.spacing(1) * 2}px)`]}
          marginTop="-10vh"
          marginBottom="10vh"
          minHeight="50vh"
          mx={contentResponsiveSpacing}
        >
          <Box component="article" marginBottom={5}>
            <PostCard post={post} />
          </Box>
          <Box marginBottom={5}>
            <PreviousNextPosts previous={data.previous} next={data.next} />
          </Box>
          <CommentsCard />
        </Box>
        <ResponsiveToc />
      </Box>
    </>
  );
};

export const query = graphql`
  query PostPage($id: String!, $previousId: String, $nextId: String) {
    blogPost(id: { eq: $id }) {
      excerpt(pruneLength: 200)
      body
      slug
      title
      body
      tags
      keywords
      wordCount
      timeToRead
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    previous: blogPost(id: { eq: $previousId }) {
      slug
      title
    }
    next: blogPost(id: { eq: $nextId }) {
      slug
      title
    }
  }
`;

export default Post;

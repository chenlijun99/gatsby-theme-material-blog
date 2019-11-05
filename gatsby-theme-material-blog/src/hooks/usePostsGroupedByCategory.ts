import { useMemo } from "react";
import { useStaticQuery, graphql } from "gatsby";

import {
  PostsGroupedByCategoryQuery as Query,
  BlogPostCategory,
} from "../generated/graphql";

type BlogPost = Query["posts"]["nodes"][0];

interface CategoryNode {
  parent?: Category;
  children: {
    [key: string]: BlogPost | Category;
  };
}

export type Category = CategoryNode &
  Omit<BlogPostCategory, "parent" | "children" | "internal">;

type Root = CategoryNode["children"];

export type CategoryPostNodes = Root;

export function isCategory(arg: unknown): arg is Category {
  const check = arg as Category;
  return check && !!check.children;
}
export function isBlogPost(arg: unknown): arg is BlogPost {
  const check = arg as BlogPost;
  return check && !!check.title && !!check.slug;
}

function groupPosts(
  posts: Query["posts"]["nodes"],
  categories: Query["categories"]["nodes"]
): Root {
  const root: Root = {};
  // build the categories
  categories.forEach(category => {
    const slugChunks = category.slug.slice(1, -1).split("/");
    slugChunks.reduce<Root | Category>(
      (previousNode, slugChunk, index, arr) => {
        /*
         * We don't need to create the node step by step, since the categories
         * array is sorted. We just need to create the terminal node and be
         * sure that the branch has already been created.
         */
        const id = slugChunk + "/";
        if (isCategory(previousNode)) {
          if (index === arr.length - 1) {
            (previousNode.children[id] as Category) = {
              ...category,
              parent: previousNode,
              children: {},
            };
          }
          return previousNode.children[id] as Category;
        } else {
          if (index === arr.length - 1) {
            (previousNode[id] as Category) = {
              ...category,
              children: {},
            };
          }
          return previousNode[id] as Category;
        }
      },
      root
    );
  });
  // fill in the posts
  posts.forEach(post => {
    post.slug
      .slice(1)
      .split("/")
      .reduce<Root | Category | BlogPost>(
        (previousNode, slugChunk, index, arr) => {
          const id = slugChunk + "/";
          if (isCategory(previousNode)) {
            if (index === arr.length - 1) {
              (previousNode.children[id] as BlogPost) = post;
            }
            return previousNode.children[id];
          } else if (!isBlogPost(previousNode)) {
            if (index === arr.length - 1) {
              (previousNode[id] as BlogPost) = post;
            }
            return previousNode[id];
          } else {
            throw new Error("Iteration should have already ended");
          }
        },
        root
      );
  });

  return root;
}

const usePostsGroupedByCategory = () => {
  const data = useStaticQuery<Query>(
    graphql`
      query PostsGroupedByCategory {
        posts: allBlogPost(sort: { fields: [title] }) {
          nodes {
            id
            slug
            title
          }
        }
        categories: allBlogPostCategory(sort: { fields: [slug] }) {
          nodes {
            id
            name
            slug
          }
        }
      }
    `
  );
  return useMemo(() => groupPosts(data.posts.nodes, data.categories.nodes), [
    data,
  ]);
};

export function getPostCategories(post: BlogPost): Category[] {
  const categories: Category[] = [];
  post.slug
    .slice(1)
    .split("/")
    .slice(0, -1)
    .reduce<Root | Category | BlogPost>((previousNode, slugChunk) => {
      const id = slugChunk + "/";
      if (isCategory(previousNode)) {
        const node = previousNode.children[id];
        if (isCategory(node)) {
          categories.push(node);
        }
        return previousNode.children[id];
      } else if (isBlogPost(previousNode)) {
        throw new Error("Iteration should have already ended");
      } else {
        const node = previousNode[id];
        if (isCategory(node)) {
          categories.push(node);
        }
        return previousNode[id];
      }
    }, usePostsGroupedByCategory());
  return categories;
}

export default usePostsGroupedByCategory;

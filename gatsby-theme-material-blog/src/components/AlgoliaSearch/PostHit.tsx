import React, { Fragment } from "react";
import { Highlight, Snippet, HitsProps } from "react-instantsearch-dom";
import { Link } from "gatsby";
import DateIcon from "@material-ui/icons/TodayOutlined";
import TagsIcon from "@material-ui/icons/LabelOutlined";
import { BlogPost } from "../../generated/graphql";

const PostHit: HitsProps<BlogPost>["hitComponent"] = ({ hit }) => {
  return (
    <div>
      <Link to={hit.slug}>
        <h4>
          <Highlight attribute="title" hit={hit} tagName="mark" />
        </h4>
      </Link>
      <div>
        <DateIcon />
        &nbsp;
        <Highlight attribute="date" hit={hit} tagName="mark" />
        &emsp;
        <TagsIcon />
        &nbsp;
        {hit.tags.map((tag, index) => (
          <Fragment key={tag || index}>
            {index > 0 && `, `}
            {tag}
          </Fragment>
        ))}
      </div>
      <Snippet attribute="excerpt" hit={hit} tagName="mark" />
    </div>
  );
};

export default PostHit;

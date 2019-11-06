import React from "react";
import withUtterances from "with-utterances";
import { Card, CardContent } from "@material-ui/core";

const Placeholder = () => {
  return <div />;
};

const Comments = withUtterances(
  // @ts-ignore
  Placeholder,
  "free-easy/gatsby-theme-material-blog"
);

const CommentsCard: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <Comments />
      </CardContent>
    </Card>
  );
};

export default CommentsCard;

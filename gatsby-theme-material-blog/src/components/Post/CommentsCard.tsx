import React from "react";
import withUtterances from "with-utterances";
import { Card, CardContent } from "@material-ui/core";

class Placeholder extends React.Component {
  render() {
    return <div />;
  }
}

const Comments = withUtterances(
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

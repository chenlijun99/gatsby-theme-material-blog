import React, { useContext } from "react";
import withUtterances from "with-utterances";
import { Card, CardContent } from "@material-ui/core";
import { LayoutContext } from "../Layout";

const Placeholder = () => {
  return <div />;
};

const LightComments = withUtterances(
  // @ts-ignore
  Placeholder,
  "free-easy/gatsby-theme-material-blog"
);

const DarkComments = withUtterances(
  // @ts-ignore
  Placeholder,
  "free-easy/gatsby-theme-material-blog",
  "github-dark"
);

const CommentsCard: React.FC = () => {
  const layoutContext = useContext(LayoutContext);
  return (
    <Card>
      <CardContent>
        {layoutContext.darkMode ? <DarkComments /> : <LightComments />}
      </CardContent>
    </Card>
  );
};

export default CommentsCard;

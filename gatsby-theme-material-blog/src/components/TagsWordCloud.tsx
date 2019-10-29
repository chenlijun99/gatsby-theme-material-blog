import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ReactWordCloud, { Word } from "react-wordcloud";
import { TagsWordCloudQuery } from "../generated/graphql";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles({
  wordCloudContainer: {
    "& > * text": {
      outline: "none",
      cursor: "pointer",
    },
  },
});

const TagsWordCloud: React.FC = () => {
  const data = useStaticQuery<TagsWordCloudQuery>(graphql`
    query TagsWordCloud {
      allBlogPost {
        nodes {
          tags
        }
      }
    }
  `);
  //const words: Word[] = [{ text: "asdf", value: 1 }, { text: "a", value: 3 }];
  const wordsObj = data.allBlogPost.nodes.reduce(
    (accumulator, curVal) => {
      (curVal.tags as string[]).forEach(tag => {
        if (accumulator[tag]) {
          ++accumulator[tag];
        } else {
          accumulator[tag] = 1;
        }
      });
      return accumulator;
    },
    {} as { [key: string]: number }
  );

  const words = Object.keys(wordsObj).map(key => {
    return {
      text: key,
      value: wordsObj[key],
    };
  });

  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.wordCloudContainer}>
      <ReactWordCloud
        words={words}
        minSize={[300, 300]}
        options={{
          rotationAngles: [0, 0],
          rotations: 1,
          fontSizes: [12, 30],
          deterministic: true,
        }}
      />
    </div>
  );
};

export default TagsWordCloud;

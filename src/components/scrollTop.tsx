import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useScrollTrigger, Zoom } from "@material-ui/core";

interface Props {
  children?: React.ReactNode;
  anchorRef: React.RefObject<Element>;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  })
);

const ScrollTop: React.FC<Props> = props => {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (): void => {
    if (props.anchorRef && props.anchorRef.current) {
      props.anchorRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
};

export default ScrollTop;

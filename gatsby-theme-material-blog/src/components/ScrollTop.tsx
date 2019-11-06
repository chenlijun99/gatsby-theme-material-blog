import React, { useContext } from "react";
import { useScrollTrigger, Zoom, Portal } from "@material-ui/core";
import { LayoutContext } from "./Layout";
import get from "lodash/get";

interface Props {
  children?: React.ReactNode;
  anchorRef: React.RefObject<Element>;
}

const ScrollTop: React.FC<Props> = props => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });
  const layoutContext = useContext(LayoutContext);

  const handleClick = (): void => {
    if (props.anchorRef && props.anchorRef.current) {
      props.anchorRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Portal container={layoutContext.fabSpace}>
      <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation">
          {children}
        </div>
      </Zoom>
    </Portal>
  );
};

export default ScrollTop;

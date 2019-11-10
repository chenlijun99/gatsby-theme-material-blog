import React, { useRef, useState, useEffect, useLayoutEffect } from "react";

import { ListItemText } from "@material-ui/core/";
import { ListProps } from "@material-ui/core/List";
import { ListItemProps } from "@material-ui/core/ListItem";

import throttle from "lodash/throttle";
// @ts-ignore
import smoothscroll from "smoothscroll-polyfill";

import { TocList, TocListItem } from "./components";

const accumulateOffsetTop = (el: HTMLElement, totalOffset = 0) => {
  while (el) {
    totalOffset += el.offsetTop - el.scrollTop + el.clientTop;
    el = el.offsetParent as HTMLElement;
  }
  return totalOffset;
};

interface HeadingSelector {
  getTitle?: (el: HTMLElement) => string;
  getId?: (el: HTMLElement) => string;
  depth: number;
  selector: string;
}

interface Heading {
  depth: number;
  title: string;
  id: string;
  node: HTMLElement;
}

interface TocProps {
  headingSelectors?: HeadingSelector[];
  tocTitle?: string;
  throttleTime?: number;
  listProps?: ListProps;
  listItemProps?: ListItemProps;
  offsetY?: number;
}

const defaultGetTitle: HeadingSelector["getTitle"] = el => {
  return el.innerText;
};

const defaultGetId: HeadingSelector["getId"] = el => {
  return el.id;
};

const defaultHeadingSelectors: HeadingSelector[] = Array.from({
  length: 6,
}).map((n, i) => {
  return {
    selector: "main h" + (i + 1),
    depth: i,
    getTitle: defaultGetTitle,
    getId: defaultGetId,
  };
});

const Toc: React.FC<TocProps> = props => {
  const {
    throttleTime = 200,
    headingSelectors = defaultHeadingSelectors,
    listProps = {},
    listItemProps = {},
    offsetY = 0,
  } = props;
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeHeading, setActiveHeading] = useState<Heading>();

  useEffect(() => {
    smoothscroll.polyfill();
  });

  // Read heading titles, depths and nodes from the DOM.
  useEffect(() => {
    const headings = headingSelectors
      .reduce<Heading[]>((accumulator, headingSelector) => {
        const nodes = document.querySelectorAll<HTMLElement>(
          headingSelector.selector
        );
        nodes.forEach(node => {
          accumulator.push({
            title: (headingSelector.getTitle || defaultGetTitle)(node),
            id: (headingSelector.getId || defaultGetId)(node),
            depth: headingSelector.depth,
            node: node,
          });
        });
        return accumulator;
      }, [])
      .sort((heading1, heading2) => {
        if (heading1.node === heading2.node) {
          return 0;
        }
        if (heading1.node.compareDocumentPosition(heading2.node) & 2) {
          return 1;
        }
        return -1;
      });
    setHeadings(headings);
  }, [headingSelectors]);

  // Add scroll event listener to update currently active heading.
  useEffect(() => {
    // Throttling the scrollHandler saves computation and hence battery life.
    const scrollHandler = throttle(() => {
      let viewPortOffsetCurrent = headings[0].node.getBoundingClientRect();
      let viewPortOffsetNext;
      for (let i = 0, size = headings.length; i < size; ++i) {
        viewPortOffsetNext =
          (i + 1 < headings.length &&
            headings[i + 1].node.getBoundingClientRect()) ||
          undefined;
        if (viewPortOffsetCurrent.top - offsetY <= 0) {
          if ((!viewPortOffsetNext || viewPortOffsetNext.top - offsetY) > 0) {
            setActiveHeading(headings[i]);
            break;
          }
        } else {
          setActiveHeading(undefined);
          break;
        }
        if (!viewPortOffsetNext) {
          throw new Error("Assertion error");
        }
        viewPortOffsetCurrent = viewPortOffsetNext;
      }
    }, throttleTime);

    window.addEventListener(`scroll`, scrollHandler);
    return () => window.removeEventListener(`scroll`, scrollHandler);
  }, [headings]);

  useLayoutEffect(() => {
    const hash = window.decodeURI(location.hash.replace("#", ""));
    if (hash !== "") {
      const element = document.getElementById(hash);
      if (element) {
        requestAnimationFrame(() => {
          window.scrollBy({
            top: element.getBoundingClientRect().top - offsetY + 5,
            behavior: "smooth",
          });
        });
      }
    }
  }, []);

  const handleClick = (e: React.MouseEvent, heading: Heading): void => {
    window.scrollBy({
      top: heading.node.getBoundingClientRect().top - offsetY + 5,
      behavior: "smooth",
    });
    window.history.pushState(null, "", "#" + heading.id);
  };

  return (
    <nav>
      <TocList {...listProps}>
        {headings.map(heading => (
          <TocListItem
            active={activeHeading === heading}
            key={heading.id}
            depth={heading.depth}
            onClick={e => handleClick(e, heading)}
            {...listItemProps}
          >
            <ListItemText>{heading.title}</ListItemText>
          </TocListItem>
        ))}
      </TocList>
    </nav>
  );
};

export default Toc;

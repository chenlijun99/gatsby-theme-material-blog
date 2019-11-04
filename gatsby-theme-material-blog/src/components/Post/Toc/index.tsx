import React, { useRef, useState, useEffect } from "react";
import throttle from "lodash/throttle";

import { TocList, TocListItem } from "./components";
import { ListItemText } from "@material-ui/core/";
import { ListProps } from "@material-ui/core/List";

// Used to calculate each heading's offset from the top of the page.
// This will be compared to window.scrollY to determine which heading
// is currently active.
const accumulateOffsetTop = (el: HTMLElement, totalOffset = 0) => {
  while (el) {
    totalOffset += el.offsetTop - el.scrollTop + el.clientTop;
    el = el.offsetParent as HTMLElement;
  }
  return totalOffset;
};

function isActive(el: HTMLElement): boolean {
  return (
    accumulateOffsetTop(el, 300) > window.scrollY + 0.8 * window.innerHeight
  );
}

interface HeadingSelector {
  getTitle: (el: HTMLElement) => string;
  getId: (el: HTMLElement) => string;
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
  } = props;
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeHeading, setActiveHeading] = useState<Heading>();

  // Read heading titles, depths and nodes from the DOM.
  useEffect(() => {
    const headings = headingSelectors
      .reduce<Heading[]>((accumulator, headingSelector) => {
        const nodes = document.querySelectorAll<HTMLElement>(
          headingSelector.selector
        );
        nodes.forEach(node => {
          accumulator.push({
            title: headingSelector.getTitle(node),
            id: headingSelector.getId(node),
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
      for (let i = 0, size = headings.length; i < size; ++i) {
        if (isActive(headings[i].node)) {
          setActiveHeading(headings[i]);
          break;
        }
      }
    }, throttleTime);

    window.addEventListener(`scroll`, scrollHandler);
    return () => window.removeEventListener(`scroll`, scrollHandler);
  }, [headings]);

  return (
    <>
      <TocList component="nav" {...listProps}>
        {headings.map((heading, index) => (
          <TocListItem
            active={activeHeading === heading}
            key={heading.id}
            depth={heading.depth}
            onClick={() => (location.hash = heading.id)}
            {...listItemProps}
          >
            <ListItemText>{heading.title}</ListItemText>
          </TocListItem>
        ))}
      </TocList>
    </>
  );
};

export default Toc;

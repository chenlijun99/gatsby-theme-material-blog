import React, { useState, useEffect, createRef } from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import SearchIcon from "@material-ui/icons/Search";
import Zoom from "@material-ui/core/Zoom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { TransitionProps } from "@material-ui/core/transitions";

import {
  InstantSearch,
  Index,
  Hits,
  connectStateResults,
  connectSearchBox,
} from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";

import SearchBar from "./Searchbar";
import { HitComponents, HitComponentMap } from "./hitComopnents";
import { SearchBoxProvided } from "react-instantsearch-core";

import get from "lodash/get";

const Results = connectStateResults(
  ({ searchState: state, searchResults: res, children }) => {
    if (res && res.nbHits > 0) {
      return <React.Fragment>{children}</React.Fragment>;
    } else {
      return <span>No results for {state.query}</span>;
    }
  }
);

function useClickOutside(
  ref: React.RefObject<Element>,
  handler: () => unknown,
  events: Array<keyof DocumentEventMap> = [`mousedown`, `touchstart`]
) {
  const detectClickOutside = (
    event: DocumentEventMap[keyof DocumentEventMap]
  ) => !ref.current!.contains(event.target as Node) && handler();
  useEffect(() => {
    for (const event of events)
      document.addEventListener(event, detectClickOutside);
    return () => {
      for (const event of events)
        document.removeEventListener(event, detectClickOutside);
    };
  });
}

const searchIndices: Array<{
  name: string;
  title: string;
  hitComponent: HitComponents;
}> = [{ name: `Posts`, title: `Posts`, hitComponent: HitComponents.Post }];

const Input = connectSearchBox(props => {
  const { refine } = props;
  return (
    <SearchBar
      onChange={(e: InputEvent) => {
        return refine(get(e, "target.value", ""));
      }}
    />
  );
});

const AlgoliaSearch: React.FC = () => {
  const [query, setQuery] = useState(``);
  const [focus, setFocus] = useState(false);
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID!,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY!
  );
  //useClickOutside(ref, () => setFocus(false));
  //

  const anchorElRef = React.useRef(null);

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={searchIndices[0].name}
      onSearchStateChange={({ query }) => setQuery(query)}
    >
      <div ref={anchorElRef}>
        <Input />
      </div>
      <Popper
        id="popper"
        open={query.length > 0}
        anchorEl={anchorElRef.current}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={100}>
            <Paper>
              {searchIndices.map(({ name, title, hitComponent }) => (
                <Index key={name} indexName={name}>
                  <h3>{title}</h3>
                  <Divider variant="middle" />
                  <Results>
                    <Hits />
                  </Results>
                </Index>
              ))}
            </Paper>
          </Fade>
        )}
      </Popper>
    </InstantSearch>
  );
};

const DialogTransition = React.forwardRef<unknown, TransitionProps>(
  function Transition(props, ref) {
    return <Zoom ref={ref} {...props} />;
  }
);
const PortraitSearch: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <IconButton onClick={handleClickOpen} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={DialogTransition}
      >
        <AlgoliaSearch />
      </Dialog>
    </React.Fragment>
  );
};

const LandscapeSearch: React.FC = () => {
  return <AlgoliaSearch />;
};

const Search: React.FC = () => {
  const landspace = useMediaQuery(`(orientation: landscape)`);
  if (landspace) {
    return <LandscapeSearch />;
  } else {
    return <PortraitSearch />;
  }
};

export default Search;

import React, { useState, useEffect, createRef } from "react";

import { useThemeUI, jsx } from "theme-ui";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Dialog from "@material-ui/core/Dialog";
import Zoom from "@material-ui/core/Zoom";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
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

const Results = connectStateResults(
  ({ searchState: state, searchResults: res, children }) =>
    res && res.nbHits > 0 ? children : `No results for '${state.query}'`
);

const Stats = connectStateResults(
  ({ searchResults: res }) =>
    res && res.nbHits > 0 && `${res.nbHits} result${res.nbHits > 1 ? `s` : ``}`
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

const Input = connectSearchBox(({ refine, ...rest }) => (
  <SearchBar onChange={e => refine(e.target.value)} {...rest} />
));

const AlgoliaSearch: React.FC = () => {
  const ref = createRef<Element>();
  const [query, setQuery] = useState(``);
  const [focus, setFocus] = useState(false);
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID!,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY!
  );
  //useClickOutside(ref, () => setFocus(false));

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={searchIndices[0].name}
      onSearchStateChange={({ query }) => setQuery(query)}
    >
      <Input />
      {query.length > 0 ? (
        <Paper>
          {searchIndices.map(({ name, title, hitComponent }) => (
            <Index key={name} indexName={name}>
              <header>
                <h3>{title}</h3>
                <Stats />
              </header>
              <Results>
                <Hits
                  hitComponent={HitComponentMap[hitComponent](() =>
                    setFocus(false)
                  )}
                />
              </Results>
            </Index>
          ))}
        </Paper>
      ) : null}
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
  console.log(`landscape ${landspace}`);
  if (landspace) {
    return <LandscapeSearch />;
  } else {
    return <PortraitSearch />;
  }
};

export default Search;

import React, { useState } from "react";

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
import { HitComponents } from "./hitComopnents";

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
  if (
    !(
      process.env.GATSBY_ALGOLIA_APP_ID && process.env.GATSBY_ALGOLIA_SEARCH_KEY
    )
  ) {
    console.warn(
      `GATSBY_ALGOLIA_APP_ID, GATSBY_ALGOLIA_SEARCH_KEY and ALGOLIA_ADMIN_KEY environment variables are not defined. Search functionality won't be available`
    );
    return <></>;
  }
  const [query, setQuery] = useState(``);
  const [] = useState(false);
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
              {searchIndices.map(({ name, title }) => (
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

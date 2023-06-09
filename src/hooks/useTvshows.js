import { useEffect, useState } from 'react';
import { getTvshows } from 'services/getTvshows';

const INITIAL_PAGE = 1;

const useTvshows = () => {
  const [tvshowsList, setTvshowsList] = useState([]);
  const [searching, setSearching] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);

  function obatinTvshows() {
    setSearching(true);

    getTvshows({ page: page }).then(nextTvshows => {
      setTvshowsList(prevTvshows => nextTvshows);
    });

    setSearching(false);
  }

  useEffect(obatinTvshows, [page, setTvshowsList]);

  return { searching, tvshowsList, setPage, page }
}
export default useTvshows;
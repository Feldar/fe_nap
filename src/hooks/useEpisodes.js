import { useEffect, useState } from 'react';
import { getEpisodes } from 'services/getEpisodes';

const INITIAL_PAGE = 1;

const useEpisodes = () => {
  const [episodesList, setEpisodesList] = useState([]);
  const [searching, setSearching] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);

  function obtainEpisodes() {
    setSearching(true);

    getEpisodes({ page: page }).then(nextEpisodes => {
      setEpisodesList(prevEpisodes => nextEpisodes);
    });

    setSearching(false);
  }

  useEffect(obtainEpisodes, [page, setEpisodesList]);

  return { searching, episodesList, setPage, page }
}
export default useEpisodes;
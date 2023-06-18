import { useEffect, useState } from 'react';
import { getArtists } from 'services/getArtists';

const INITIAL_PAGE = 1;

const useArtists = () => {
  const [artistsList, setArtistsList] = useState([]);
  const [searching, setSearching] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);

  function obtainArtists() {
    setSearching(true);

    getArtists({ page: page }).then(nextArtists => {
      setArtistsList(prevArtists => nextArtists);
    });

    setSearching(false);
  }

  useEffect(obtainArtists, [page, setArtistsList]);

  return { searching, artistsList, setPage, page }
}
export default useArtists;
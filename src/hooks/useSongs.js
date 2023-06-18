import { useEffect, useState } from 'react';
import { getSongs } from 'services/getSongs';

const INITIAL_PAGE = 1;

const useSongs = () => {
  const [songsList, setSongsList] = useState([]);
  const [searching, setSearching] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);

  function obtainSongs() {
    setSearching(true);

    getSongs({ page: page }).then(nextSongs => {
      setSongsList(prevSongs => nextSongs);
    });

    setSearching(false);
  }

  useEffect(obtainSongs, [page, setSongsList]);

  return { searching, songsList, setPage, page }
}
export default useSongs;
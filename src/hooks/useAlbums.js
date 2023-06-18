import { useEffect, useState } from 'react';
import { getAlbums } from 'services/getAlbums';

const INITIAL_PAGE = 1;

const useAlbums = () => {
  const [albumsList, setAlbumsList] = useState([]);
  const [searching, setSearching] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);

  function obtainAlbums() {
    setSearching(true);

    getAlbums({ page: page }).then(nextAlbums => {
      setAlbumsList(prevAlbums => nextAlbums);
    });

    setSearching(false);
  }

  useEffect(obtainAlbums, [page, setAlbumsList]);

  return { searching, albumsList, setPage, page }
}
export default useAlbums;
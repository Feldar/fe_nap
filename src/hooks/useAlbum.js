import { useEffect, useState } from 'react';
import { getAlbumById } from 'services/getAlbumById';

const useAlbum = (id) => {
  
  const [album, setAlbum] = useState([]);
  const [searching, setSearching] = useState(false);

  function obatinAlbum() {

    setSearching(true);

    getAlbumById(id).then(album => {
      setAlbum(album);
      setSearching(false)
    });
  }

  useEffect(obatinAlbum, [id]);

  return { searching, album }
}
export default useAlbum;
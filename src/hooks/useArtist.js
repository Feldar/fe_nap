import { useEffect, useState } from 'react';
import { getArtistById } from 'services/getArtistById';

const useArtist = (id) => {
  
  const [artist, setArtist] = useState([]);
  const [searching, setSearching] = useState(false);

  function obatinArtist() {

    setSearching(true);

    getArtistById(id).then(artist => {
      setArtist(artist);
      setSearching(false)
    });
  }

  useEffect(obatinArtist, [id]);

  return { searching, artist }
}
export default useArtist;
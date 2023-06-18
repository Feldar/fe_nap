import { useEffect, useState } from 'react';
import { getSongById } from 'services/getSongById';

const useSong = (id) => {
  
  const [song, setSong] = useState([]);
  const [searching, setSearching] = useState(false);

  function obatinSong() {

    setSearching(true);

    getSongById(id).then(song => {
      setSong(song);
      setSearching(false)
    });
  }

  useEffect(obatinSong, [id]);

  return { searching, song }
}
export default useSong;
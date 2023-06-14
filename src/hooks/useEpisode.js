import { useEffect, useState } from 'react';
import { getEpisodeById } from 'services/getEpisodeById';

const useEpisode = (id) => {
  
  const [episode, setEpisode] = useState([]);
  const [searching, setSearching] = useState(false);

  function obatinEpisode() {

    setSearching(true);

    getEpisodeById(id).then(episode => {
      setEpisode(episode);
      setSearching(false)
    });
  }

  useEffect(obatinEpisode, [id]);

  return { searching, episode }
}
export default useEpisode;
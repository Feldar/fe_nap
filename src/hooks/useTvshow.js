import { useEffect, useState } from 'react';
import { getTvshowById } from 'services/getTvshowById';

const useTvshow = (id) => {
  
  const [tvshow, setTvshow] = useState([]);
  const [searching, setSearching] = useState(false);

  function obatinTvshow() {

    setSearching(true);

    getTvshowById(id).then(tvshow => {
      setTvshow(tvshow);
      setSearching(false)
    });
  }

  useEffect(obatinTvshow, [id]);

  return { searching, tvshow }
}
export default useTvshow;
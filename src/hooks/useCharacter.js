import { useEffect, useState } from 'react';
import { getCharacterById } from 'services/getCharacterById';

const useCharacter = (id) => {
  
  const [character, setCharacter] = useState([]);
  const [searching, setSearching] = useState(false);

  function obatinCharacter() {

    setSearching(true);

    getCharacterById(id).then(character => {
      setCharacter(character);
      setSearching(false)
    });
  }

  useEffect(obatinCharacter, [id]);

  return { searching, character }
}
export default useCharacter;
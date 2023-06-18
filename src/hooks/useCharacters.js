import { useEffect, useState } from 'react';
import { getCharacters } from 'services/getCharacters';

const INITIAL_PAGE = 1;

const useCharacters = () => {
  const [charactersList, setCharactersList] = useState([]);
  const [searching, setSearching] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);

  function obtainCharacters() {
    setSearching(true);

    getCharacters({ page: page }).then(nextCharacters => {
      setCharactersList(prevCharacters => nextCharacters);
    });

    setSearching(false);
  }

  useEffect(obtainCharacters, [page, setCharactersList]);

  return { searching, charactersList, setPage, page }
}
export default useCharacters;
import imageLoader from 'images/22-7_Logo.png';

import useCharacters from 'hooks/useCharacters';
import AjaxLoader from 'components/AjaxLoader/AjaxLoader';
import CharactersList from 'pages/CharactersList/CharactersList';
import Footer from 'components/Landing/Footer/footer';
import Header from 'components/Landing/Header/header';

const Characters = function () {
  const { searching, charactersList, setPage, page } = useCharacters();
  // JSX:
  return (
    <div className='characters'>
      <Header />
      {searching ?
        <AjaxLoader loader={imageLoader}></AjaxLoader> :
        <CharactersList charactersList={charactersList} setPage={setPage} page={page}></CharactersList>
      }
      <Footer />
    </div>
  );
};
export default Characters;
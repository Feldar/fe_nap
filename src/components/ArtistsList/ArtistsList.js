import imageLoader from 'images/22-7_Logo.png';

import useArtists from 'hooks/useArtists';
import AjaxLoader from 'components/AjaxLoader/AjaxLoader';
import ArtistsList from 'pages/ArtistsList/ArtistsList';
import Contacto from 'components/Landing/Contacto/contacto';
import Footer from 'components/Landing/Footer/footer';
import Header from 'components/Landing/Header/header';

const Artists = function () {
  const { searching, artistsList, setPage, page } = useArtists();
  // JSX:
  return (
    <div className='artists'>
      <Header />
      {searching ?
        <AjaxLoader loader={imageLoader}></AjaxLoader> :
        <ArtistsList artistsList={artistsList} setPage={setPage} page={page}></ArtistsList>
      }
      <Contacto />
      <Footer />
    </div>
  );
};
export default Artists;
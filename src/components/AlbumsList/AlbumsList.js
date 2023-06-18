import imageLoader from 'images/22-7_Logo.png';

import useAlbums from 'hooks/useAlbums';
import AjaxLoader from 'components/AjaxLoader/AjaxLoader';
import AlbumsList from 'pages/AlbumsList/AlbumsList';
import Contacto from 'components/Landing/Contacto/contacto';
import Footer from 'components/Landing/Footer/footer';
import Header from 'components/Landing/Header/header';

const Albums = function () {
  const { searching, albumsList, setPage, page } = useAlbums();
  // JSX:
  return (
    <div className='albums'>
      <Header />
      {searching ?
        <AjaxLoader loader={imageLoader}></AjaxLoader> :
        <AlbumsList albumsList={albumsList} setPage={setPage} page={page}></AlbumsList>
      }
      <Contacto />
      <Footer />
    </div>
  );
};
export default Albums;
import imageLoader from 'images/22-7_Logo.png';

import useTvshows from 'hooks/useTvshows';
import AjaxLoader from 'components/AjaxLoader/AjaxLoader';
import TvshowsList from 'pages/TvshowsList/TvshowsList';
import Contacto from 'components/Landing/Contacto/contacto';
import Footer from 'components/Landing/Footer/footer';
import Header from 'components/Landing/Header/header';

const Tvshows = function () {
  const { searching, tvshowsList, setPage, page } = useTvshows();
  // JSX:
  return (
    <div className='tvshows'>
      <Header />
      {searching ?
        <AjaxLoader loader={imageLoader}></AjaxLoader> :
        <TvshowsList tvshowsList={tvshowsList} setPage={setPage} page={page}></TvshowsList>
      }
      <Contacto />
      <Footer />
    </div>
  );
};
export default Tvshows;
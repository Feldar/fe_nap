import Header from 'components/Landing/Header/header';
import Footer from 'components/Landing/Footer/footer';
import Contacto from 'components/Landing/Contacto/contacto';
import imageLoader from 'images/22-7_Logo.png';

import useTvshows from 'hooks/useTvshows';
import AjaxLoader from 'components/AjaxLoader/AjaxLoader';
import TvshowsList from 'pages/TvshowsList/TvshowsList';

const Tvshows = function () {
  const { searching, tvshowsList, setPage, page } = useTvshows();
  // JSX:
  return (
    <main>
      {searching ?
          <AjaxLoader loader={imageLoader}></AjaxLoader> :
          <TvshowsList tvshowsList={tvshowsList} setPage={setPage} page={page}></TvshowsList>}
      <Contacto></Contacto>
      <Footer></Footer>
    </main>

  );
};
export default Tvshows;
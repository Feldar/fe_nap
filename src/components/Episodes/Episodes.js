import imageLoader from 'images/22-7_Logo.png';

import useEpisodes from 'hooks/useEpisodes';
import AjaxLoader from 'components/AjaxLoader/AjaxLoader';
import EpisodesList from 'pages/EpisodesList/EpisodesList';
import Contacto from 'components/Landing/Contacto/contacto';
import Footer from 'components/Landing/Footer/footer';
import Header from 'components/Landing/Header/header';

const Episodes = function (props) {
  const { searching, episodesList, setPage, page } = useEpisodes();
  // JSX:
  return (
    <div className='tvshows'>
      {searching ?
        <AjaxLoader loader={imageLoader}></AjaxLoader> :
        <EpisodesList 
          episodesList={episodesList} 
          setPage={setPage} 
          page={page} 
          tvshow_id={props.tvshow_id}
        />
      }
    </div>
  );
};
export default Episodes;
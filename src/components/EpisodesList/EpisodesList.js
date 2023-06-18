import imageLoader from 'images/22-7_Logo.png';

import useEpisodes from 'hooks/useEpisodes';
import AjaxLoader from 'components/AjaxLoader/AjaxLoader';
import EpisodesList from 'pages/EpisodesList/EpisodesList';

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
          tvshow_name={props.tvshow_name}
        />
      }
    </div>
  );
};
export default Episodes;
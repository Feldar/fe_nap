import imageLoader from 'images/22-7_Logo.png';

import useSongs from 'hooks/useSongs';
import AjaxLoader from 'components/AjaxLoader/AjaxLoader';
import SongsList from 'pages/SongsList/SongsList';

const Songs = function (props) {
  const { searching, songsList, setPage, page } = useSongs();
  // JSX:
  return (
    <div className='tvshows'>
      {searching ?
        <AjaxLoader loader={imageLoader}></AjaxLoader> :
        <SongsList 
          songsList={songsList} 
          setPage={setPage} 
          page={page} 
          album_id={props.album_id}
        />
      }
    </div>
  );
};
export default Songs;
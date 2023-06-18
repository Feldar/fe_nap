import React from 'react';
import { useParams } from 'react-router-dom';
import imageLoader from 'images/22-7_Logo.png';
import SongView from 'components/SongView/SongView';
import AjaxLoader from 'components/AjaxLoader/AjaxLoader';
import useSong from 'hooks/useSong';
import Footer from 'components/Landing/Footer/footer';
import Header from 'components/Landing/Header/header';

const SongDetails = () => {
  const { id } = useParams();
  const { searching, song } = useSong(id);
  
  return (
    <div>
      <Header />
      {searching
        ? <AjaxLoader loader={imageLoader}></AjaxLoader>
        : <SongView
          key={song.id}
          song_number={song.song_number}
          name_rm={song.name_rm}
          name_jp={song.name_jp}
          name_en={song.name_en}
          format={song.format}
          resolution={song.resolution}
          release_date={song.release_date}
          type={song.type}
          duration={song.duration}
          file={song.file}
          filename={song.filename}
          image={song.image}
          imagename={song.imagename}>
        </SongView>}
      <Footer />
    </div>
  )
}

export default SongDetails;
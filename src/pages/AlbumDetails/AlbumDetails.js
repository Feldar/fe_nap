import React from 'react';
import { useParams } from 'react-router-dom';
import imageLoader from 'images/22-7_Logo.png';
import SongView from 'components/SongView/SongView';
import AjaxLoader from 'components/AjaxLoader/AjaxLoader';
import useSong from 'hooks/useSong';
import Contacto from 'components/Landing/Contacto/contacto';
import Footer from 'components/Landing/Footer/footer';
import Header from 'components/Landing/Header/header';
import Songs from 'components/SongsList/SongsList';

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
          name_rm={song.name_rm}
          name_jp={song.name_jp}
          name_en={song.name_en}
          file={song.file}
          filename={song.filename}
          image={song.image}
          imagename={song.imagename}
          start_date={song.start_date}
          end_date={song.end_date}
          episodes={song.episodes}
          status={song.status}
        >
        </SongView>}
        <Songs album_id={id} song_image={song.image} />
      <Contacto />
      <Footer />
    </div>
  )
}

export default SongDetails;
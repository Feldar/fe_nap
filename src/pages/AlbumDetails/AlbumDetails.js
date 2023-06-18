import React from 'react';
import { useParams } from 'react-router-dom';
import imageLoader from 'images/22-7_Logo.png';
import AlbumView from 'components/AlbumView/AlbumView';
import AjaxLoader from 'components/AjaxLoader/AjaxLoader';
import useAlbum from 'hooks/useAlbum';
import Footer from 'components/Landing/Footer/footer';
import Header from 'components/Landing/Header/header';
import Songs from 'components/SongsList/SongsList';

const AlbumDetails = () => {
  const { id } = useParams();
  const { searching, album } = useAlbum(id);
  return (
    <div>
      <Header />
      {searching
        ? <AjaxLoader loader={imageLoader}></AjaxLoader>
        : <AlbumView
          key={album.id}
          image={album.image}
          name_rm={album.name_rm}
          name_jp={album.name_jp}
          total_songs={album.total_songs}
          release_price={album.release_price}
          media_format={album.media_format}
          release_date={album.release_date}
          duration={album.duration}>
        </AlbumView>}
        <Songs album_id={id} album_image={album.image} />
      <Footer />
    </div>
  )
}

export default AlbumDetails;
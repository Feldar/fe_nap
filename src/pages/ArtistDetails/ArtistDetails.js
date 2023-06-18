import React from 'react';
import { useParams } from 'react-router-dom';
import imageLoader from 'images/22-7_Logo.png';
import ArtistView from 'components/ArtistView/ArtistView';
import AjaxLoader from 'components/AjaxLoader/AjaxLoader';
import useArtist from 'hooks/useArtist';
import Contacto from 'components/Landing/Contacto/contacto';
import Footer from 'components/Landing/Footer/footer';
import Header from 'components/Landing/Header/header';

const ArtistDetails = () => {
  const { id } = useParams();
  const { searching, artist } = useArtist(id);
  
  return (
    <div>
      <Header />
      {searching
        ? <AjaxLoader loader={imageLoader}></AjaxLoader>
        : <ArtistView
          key={artist.id}
          artist_number={artist.artist_number}
          name_rm={artist.name_rm}
          name_jp={artist.name_jp}
          name_en={artist.name_en}
          format={artist.format}
          resolution={artist.resolution}
          release_date={artist.release_date}
          type={artist.type}
          duration={artist.duration}
          file={artist.file}
          filename={artist.filename}
          image={artist.image}
          imagename={artist.imagename}>
        </ArtistView>}
      <Contacto />
      <Footer />
    </div>
  )
}

export default ArtistDetails;
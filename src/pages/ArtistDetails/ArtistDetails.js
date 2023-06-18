import React from 'react';
import { useParams } from 'react-router-dom';
import imageLoader from 'images/22-7_Logo.png';
import ArtistView from 'components/ArtistView/ArtistView';
import AjaxLoader from 'components/AjaxLoader/AjaxLoader';
import useArtist from 'hooks/useArtist';
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
          image={artist.image}
          name_rm={artist.name_rm}
          name_jp={artist.name_jp}
          profile_page={artist.profile_page}
          twitter_account={artist.twitter_account}
          blog={artist.blog}
          tiktok_account={artist.tiktok_account}
          instagram_account={artist.instagram_account}
          youtube_account={artist.youtube_account}
          join_date={artist.join_date}
          graduation_date={artist.graduation_date}
          status={artist.status}>
        </ArtistView>}
      <Footer />
    </div>
  )
}

export default ArtistDetails;
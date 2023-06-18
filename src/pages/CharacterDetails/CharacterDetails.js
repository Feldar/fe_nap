import React from 'react';
import { useParams } from 'react-router-dom';
import imageLoader from 'images/22-7_Logo.png';
import CharacterView from 'components/CharacterView/CharacterView';
import AjaxLoader from 'components/AjaxLoader/AjaxLoader';
import useCharacter from 'hooks/useCharacter';
import Footer from 'components/Landing/Footer/footer';
import Header from 'components/Landing/Header/header';

const CharacterDetails = () => {
  const { id } = useParams();
  const { searching, character } = useCharacter(id);
  
  return (
    <div>
      <Header />
      {searching
        ? <AjaxLoader loader={imageLoader}></AjaxLoader>
        : <CharacterView
          key={character.id}
          image={character.image}
          name_rm={character.name_rm}
          name_jp={character.name_jp}
          profile_page={character.profile_page}
          twitter_account={character.twitter_account}
          youtube_account={character.youtube_account}
          color={character.color}
          join_date={character.join_date}
          graduation_date={character.graduation_date}
          status={character.status}
          artist_id={character.artist_id}>
        </CharacterView>}
      <Footer />
    </div>
  )
}

export default CharacterDetails;
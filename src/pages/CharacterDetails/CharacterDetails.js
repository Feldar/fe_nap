import React from 'react';
import { useParams } from 'react-router-dom';
import imageLoader from 'images/22-7_Logo.png';
import CharacterView from 'components/CharacterView/CharacterView';
import AjaxLoader from 'components/AjaxLoader/AjaxLoader';
import useCharacter from 'hooks/useCharacter';
import Contacto from 'components/Landing/Contacto/contacto';
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
          character_number={character.character_number}
          name_rm={character.name_rm}
          name_jp={character.name_jp}
          name_en={character.name_en}
          format={character.format}
          resolution={character.resolution}
          release_date={character.release_date}
          type={character.type}
          duration={character.duration}
          file={character.file}
          filename={character.filename}
          image={character.image}
          imagename={character.imagename}>
        </CharacterView>}
      <Contacto />
      <Footer />
    </div>
  )
}

export default CharacterDetails;
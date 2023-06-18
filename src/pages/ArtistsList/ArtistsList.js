import { useState } from 'react';
// import EspecieContext from '../Contextos/EspecieContext';
// import GeneroContext from '../Contextos/GeneroContext';
// import StatusContext from '../Contextos/StatusContext';
// import OrdenacionContext from '../Contextos/OrdenacionContext';
// import Filtros from '../Filtros/Filtros';
import Artist from 'components/Artist/Artist';
// import './ListaPersonajes.css';
// import BotonesPaginas from '../BotonesPaginas/BotonesPaginas';

const ArtistsList = (props) => {

  const [seleccionGenero, setSeleccionGenero] = useState('Todos');
  const [seleccionEspecie, setSeleccionEspecie] = useState('Todos');
  const [seleccionStatus, setSeleccionStatus] = useState('Todos');
  const [ordenAlfabetico, setOrdenAlfabetico] = useState(0);

  function showArtist(artist) {
    return <Artist
      key={artist.id}
      id={artist.id}
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
    </Artist>;
  }

  function manejarSeleccionGenero(genero) {
    setSeleccionGenero(genero);
  }

  function manejarSeleccionEspecie(especie) {
    setSeleccionEspecie(especie);
  }

  function manejarSeleccionStatus(status) {
    setSeleccionStatus(status);
  }

  function manejarOrdenAflabetico(ordenacion) {
    setOrdenAlfabetico(ordenacion);
  }

  function manejarCambioPaginas(value) {
    if (props.pagina + value < 1) {
      props.setPagina(1);
    }
    else if (props.pagina + value > 42) {
      props.setPagina(42);
    }
    else {
      props.setPagina(props.pagina + value);
    }
  }

  function filtroGenero(personaje) {
    if (seleccionGenero === 'Todos') {
      return personaje;
    }
    else {
      return personaje.gender === seleccionGenero;
    }
  }

  function filtroEspecie(personaje) {
    if (seleccionEspecie === 'Todos') {
      return personaje;
    }
    else {
      return personaje.species === seleccionEspecie;
    }
  }

  function filtroStatus(personaje) {
    if (seleccionStatus === 'Todos') {
      return personaje;
    }
    else {
      return personaje.status === seleccionStatus;
    }
  }

  function ordenarAlfabeticamente(a, b) {
    if (ordenAlfabetico === 0) {
      return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
    }
    else if (ordenAlfabetico === 1) {
      return a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1;
    }
  }

  return (
    <div>
      {/* <BotonesPaginas manejarCambioPaginas={manejarCambioPaginas} pagina={props.pagina}></BotonesPaginas>
      <StatusContext.Provider value={manejarSeleccionStatus}>
        <GeneroContext.Provider value={manejarSeleccionGenero}>
          <EspecieContext.Provider value={manejarSeleccionEspecie}>
            <OrdenacionContext.Provider value={manejarOrdenAflabetico}>
              <Filtros></Filtros>
            </OrdenacionContext.Provider>
          </EspecieContext.Provider>
        </GeneroContext.Provider>
      </StatusContext.Provider> */}
      <div className="ArtistsList container">
        <div className='row text-center'><h1>ARTISTS</h1></div>
        <div className='row'>
          {/* {props.listaPersonajes.filter(filtroEspecie).filter(filtroGenero).
          filter(filtroStatus).sort(ordenarAlfabeticamente).map(showArtist)} */}
          {props.artistsList.map(showArtist)}
        </div>
      </div>
    </div>
  )
}

export default ArtistsList;
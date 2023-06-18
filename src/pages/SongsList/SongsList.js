import { useState } from 'react';
// import EspecieContext from '../Contextos/EspecieContext';
// import GeneroContext from '../Contextos/GeneroContext';
// import StatusContext from '../Contextos/StatusContext';
// import OrdenacionContext from '../Contextos/OrdenacionContext';
// import Filtros from '../Filtros/Filtros';
import Song from 'components/Song/Song';
// import './ListaPersonajes.css';
// import BotonesPaginas from '../BotonesPaginas/BotonesPaginas';

const SongsList = (props) => {
  const [seleccionGenero, setSeleccionGenero] = useState('Todos');
  const [seleccionEspecie, setSeleccionEspecie] = useState('Todos');
  const [seleccionStatus, setSeleccionStatus] = useState('Todos');
  const [ordenAlfabetico, setOrdenAlfabetico] = useState(0);

  function showSong(song) {
    if (song.album_id == props.album_id) {
      return <Song
        key={song.id}
        id={song.id}
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
        imagename={song.imagename}
        tvshow_id={props.tvshow_id}>
      </Song>;
    }
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

  function tvshowfilter(song) {
    if (props.tvshow_id === song.tvshows_id) {
      return song;
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
      <h1>EPISODES</h1>
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
      <div className="SongsList container">
        <div className='row row-cols-3'>
          {/* {props.listaPersonajes.filter(filtroEspecie).filter(filtroGenero).
          filter(filtroStatus).sort(ordenarAlfabeticamente).map(showTvshow)} */}
          {props.songsList.map(showSong)}
        </div>
      </div>
    </div>
  )
}

export default SongsList;
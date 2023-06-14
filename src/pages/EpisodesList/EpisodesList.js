import { useState } from 'react';
// import EspecieContext from '../Contextos/EspecieContext';
// import GeneroContext from '../Contextos/GeneroContext';
// import StatusContext from '../Contextos/StatusContext';
// import OrdenacionContext from '../Contextos/OrdenacionContext';
// import Filtros from '../Filtros/Filtros';
import Episode from 'components/Episode/Episode';
// import './ListaPersonajes.css';
// import BotonesPaginas from '../BotonesPaginas/BotonesPaginas';

const EpisodesList = (props) => {
  const [seleccionGenero, setSeleccionGenero] = useState('Todos');
  const [seleccionEspecie, setSeleccionEspecie] = useState('Todos');
  const [seleccionStatus, setSeleccionStatus] = useState('Todos');
  const [ordenAlfabetico, setOrdenAlfabetico] = useState(0);

  function showEpisode(episode) {
    if(episode.tvshows_id == props.tvshow_id){
    return <Episode
      key={episode.id}
      id={episode.id}
      episode_number={episode.episode_number}
      name_rm={episode.name_rm}
      name_jp={episode.name_jp}
      name_en={episode.name_en}
      format={episode.format}
      resolution={episode.resolution}
      release_date={episode.release_date}
      type={episode.type}
      duration={episode.duration}
      file={episode.file}
      filename={episode.filename}
      image={episode.image}
      imagename={episode.imagename}>
    </Episode>;
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

  function tvshowfilter(episode) {
    console.log(episode.tvshows_id)
    if (props.tvshow_id === episode.tvshows_id) {
      return episode;
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
      <div className="EpisodesList container">
        <div className='row row-cols-3'>
          {/* {props.listaPersonajes.filter(filtroEspecie).filter(filtroGenero).
          filter(filtroStatus).sort(ordenarAlfabeticamente).map(showTvshow)} */}
          {props.episodesList.map(showEpisode)}
        </div>
      </div>
    </div>
  )
}

export default EpisodesList;
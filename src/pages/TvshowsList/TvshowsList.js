import { useState } from 'react';
// import EspecieContext from '../Contextos/EspecieContext';
// import GeneroContext from '../Contextos/GeneroContext';
// import StatusContext from '../Contextos/StatusContext';
// import OrdenacionContext from '../Contextos/OrdenacionContext';
// import Filtros from '../Filtros/Filtros';
import Tvshow from 'components/Tvshow/Tvshow';
// import './ListaPersonajes.css';
// import BotonesPaginas from '../BotonesPaginas/BotonesPaginas';

const TvshowsList = (props) => {

  const [seleccionGenero, setSeleccionGenero] = useState('Todos');
  const [seleccionEspecie, setSeleccionEspecie] = useState('Todos');
  const [seleccionStatus, setSeleccionStatus] = useState('Todos');
  const [ordenAlfabetico, setOrdenAlfabetico] = useState(0);

  function showTvshow(tvshow) {
    return <Tvshow
      key={tvshow.id}
      id={tvshow.id}
      name_rm={tvshow.name_rm}
      name_jp={tvshow.name_jp}
      name_en={tvshow.name_en}
      image={tvshow.image}
      start_date={tvshow.start_date}
      end_date={tvshow.end_date}
      episodes={tvshow.episodes}
      status={tvshow.status}>
    </Tvshow>;
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
      <div className="ListaPersonajes">
        {/* {props.listaPersonajes.filter(filtroEspecie).filter(filtroGenero).
        filter(filtroStatus).sort(ordenarAlfabeticamente).map(showTvshow)} */}
        {props.tvshowsList.map(showTvshow)}
      </div>
    </div>
  )
}

export default TvshowsList;
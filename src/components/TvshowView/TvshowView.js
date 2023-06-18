// import "./PersonajeCompleto.css"
import axios from 'axios';

const TvshowView = (props) => {

  const download = () => {
    axios({
      url: 'http://nananijiarchiveproject.test/api/download',
      method: 'GET',
      responseType: 'blob',
      params: {
        myFilePath: props.file
      }
    }).then(response => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', props.filename);
      document.body.appendChild(link);
      link.click();
    })
  }

  const filepath = () => {
    if (props.image) {
      const path = `http://nananijiarchiveproject.test/${props.image}`;
      return path;
    }
  }

  return (
    <div className="container backgroundinfo infoborders">
      <div className="row align-items-center">
        <div className="col-4 pt-3">
          <figure className="">
            <img className="artistimageborder" src={filepath()} alt='tvshow'></img>
          </figure>
        </div>
        <div className="col-8 tvshowsborder text-center" style={{ 'backgroundColor': 'white' }}>
          <p>
            <span className="characterinfotitle"> Name Japanese: </span>
            <span className="">{props.name_jp}</span>
          </p>
          <p>
            <span className="characterinfotitle"> Name Romaji: </span>
            <span className="">{props.name_rm}</span>
          </p>
          {!props.name_en ? '' : <p>
            <span className="characterinfotitle"> Name English: </span>
            <span className="">{props.name_en}</span>
          </p>}
          <p>
            <span className="characterinfotitle"> Start date: </span>
            <span className="">{props.start_date}</span>
          </p>
          {!props.end_date ? '' : <p>
            <span className="characterinfotitle"> End date: </span>
            <span className="">{props.end_date}</span>
          </p>}
          <p>
            <span className="characterinfotitle"> Total episodes: </span>
            <span className="">{props.episodes}</span>
          </p>
          <p>
            <span className="characterinfotitle"> Status: </span>
            <span className="">{props.status}</span>
          </p>
        </div>
      </div>
    </div>
  )
};

export default TvshowView;
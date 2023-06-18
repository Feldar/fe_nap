// import "./PersonajeCompleto.css"
import axios from 'axios';

const AlbumView = (props) => {

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
          <figure>
            <img className="artistimageborder" src={filepath()} alt='album'></img>
          </figure>
        </div>
        <div className="col-8 tvshowsborder text-center" style={{ 'backgroundColor': 'white' }}>
          <h1 className="charactername">{props.name_jp} / {props.name_rm}</h1>
          <p>
            <span className="characterinfotitle"> Album songs: </span>
            <span className="">{props.total_songs}</span>
          </p>
          <p>
            <span className="characterinfotitle"> Release price: </span>
            <span className="">¥{props.release_price}</span>
          </p>
          <p>
            <span className="characterinfotitle"> Media format: </span>
            <span className="">{props.media_format}</span>
          </p>
          <p>
            <span className="characterinfotitle"> Release date: </span>
            <span className="">{props.release_date}</span>
          </p>
          <p>
            <span className="characterinfotitle"> Album duration: </span>
            <span className="">{props.duration} min</span>
          </p>
        </div>
      </div>
    </div>
  )
};

export default AlbumView;
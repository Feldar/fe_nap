// import "./PersonajeCompleto.css"
import axios from 'axios';

const EpisodeView = (props) => {

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

  const imagePath = () => {
    if (props.image) {
      const path = `http://nananijiarchiveproject.test/${props.image}`;
      return path;
    }
  }

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12">
          <figure>
            <div>
              <img className='border' src={imagePath()} alt='Personaje'></img>
            </div>
          </figure>
        </div>
        <div className="col-12">
          <h3>Download information:</h3>
        </div>
        <div className="col-6">
          <p>Episode: {props.episode_number}</p>
          <p>Format: {props.format}</p>
          <p>resolution: {props.resolution}</p>
          <p>duration: {props.duration}</p>
          <p>Release date: {props.release_date}</p>
        </div>
        <div className="col-6 text-right">
          <button onClick={download}>Download</button>
        </div>
      </div>
    </div>
  )
};

export default EpisodeView;
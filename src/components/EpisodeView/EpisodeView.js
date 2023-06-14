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
    <div className="">
      <figure className="">
        <div>
          <img className='border' src={imagePath()} alt='Personaje'></img>
          <p>Episode {props.episode_number}</p>
          <p>Type: {props.type}</p>
          <p>Format: {props.format}</p>
          <p>Release date: {props.release_date}</p>
          <button onClick={download}>Download</button>
        </div>
      </figure>
    </div>
  )
};

export default EpisodeView;
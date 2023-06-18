import { Link } from 'react-router-dom';
import axios from 'axios';

const EpisodeDetails = (props) => {

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

  function imagePath() {
    if (props.image) {
      const path = `http://nananijiarchiveproject.test/${props.image}`;
      return path;
    }
  }

  return (
    <div className='container border-top pt-3'>
      <div className='row align-items-center'>
        <div className='col-3'>
          <figure className='figura'>
            <Link to={`/tvshows/${props.tvshow_id}/episodes/${props.id}`}>
              <img className='artistimageborder' src={imagePath()} alt='Personaje'></img>
            </Link>
          </figure>
        </div>
        <div className='col-5'>
          <h5>{props.tvshow_name}</h5>
          <p>{props.name_rm} {props.episode_number}</p>
            
        </div>
        <div className='col-2'>
        <p>{props.release_date}</p>
            
        </div>
        <div className="col-2">
        <button onClick={download}>Download</button>
        </div>
      </div>
    </div>
  )
};

export default EpisodeDetails;
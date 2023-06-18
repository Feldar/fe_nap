import { Link } from 'react-router-dom';
import axios from 'axios';

const SongDetails = (props) => {

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
    if (props.album_image) {
      const path = `http://nananijiarchiveproject.test/${props.album_image}`;
      return path;
    }
  }
  return (

      <div className='container border-top pt-3'>
        <div className='row align-items-center'>
          <div className='col-1 text-right'>
            <p>{props.song_number}</p>
          </div>
          <div className='col-1'>
            <figure>
              <img className='border' src={imagePath()} alt='Personaje'></img>
            </figure>
          </div>
          <div className='col-6'>
            <p>{props.name_rm} / {props.name_jp}</p>
          </div>
          <div className='col-2 text-center'>
            <p>Duration: {props.duration} min</p>
          </div>
          <div className='col-2 text-center'>
            <button onClick={download}>Download</button>
          </div>
        </div>
      </div>

  )
};

export default SongDetails;
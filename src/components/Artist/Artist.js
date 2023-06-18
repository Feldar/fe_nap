import { Link } from 'react-router-dom';
import axios from 'axios';

const ArtistDetails = (props) => {
    
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

    <div className='col-xs-12 col-sm-6 col-md-4 col-xl-3 border d-flex justify-content-center'>
      <figure className='figura'>

        <Link to={`/artists/${props.id}`}>
          <img className='border' src={imagePath()} alt='Personaje'></img>
        </Link>
        <figcaption className='figura'>{props.name_rm} | {props.name_jp}</figcaption>
        <p>{props.name_rm} | {props.start_date} | {props.episodes}</p>
        <p>Start date {props.start_date}</p>
        <p>Episodes: {props.episodes}</p>
      </figure>
    </div>
  )
};

export default ArtistDetails;
import { Link } from 'react-router-dom';
import axios from 'axios';

const TvshowDetails = (props) => {

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
    <div className='col-xs-12 col-sm-6 col-md-4 col-xl-3 border 
    image-container pt-3 mt-2 text-center listborders'
      style={{ backgroundColor: '#a0d8e5a2' }}>

      <Link to={`/tvshows/${props.id}`}>
        <img className='' src={imagePath()} alt='Personaje'></img>
      </Link>
      <Link to={`/tvshows/${props.id}`}>
        <div className="text-overlay">
          <div className="text-overlay-content">
            <p className='frame'>{props.name_rm} / {props.name_jp}</p>
          </div>
        </div>
      </Link>
      <div className='pt-3'>
        <p style={{
          'color': 'white',
          'textShadow': '2px 2px #00000083',
          'fontWeight': 'bold'
        }} >{props.name_rm} / {props.name_jp}</p>
      </div>
    </div>
  )
};

export default TvshowDetails;
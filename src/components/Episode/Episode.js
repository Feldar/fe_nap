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
      link.setAttribute('download', 'a.jpg');
      document.body.appendChild(link);
      link.click();
    })
  }

  const filepath = () => {
    if(props.file){
    const path = `http://nananijiarchiveproject.test/${props.file}`;
    return path;
    }
  }

  return (
    <div className='col border d-flex justify-content-center'>
      <figure className='figura'>
        <figcaption className='figura'>{props.name_rm}</figcaption>
        <img className='border' src={filepath()} alt='Personaje'></img>
        <p>Episode {props.episode_number}</p>
        <p>Type: {props.type}</p>
        <p>Format: {props.format}</p>
        <p>Release date: {props.release_date}</p>
        <button onClick={download}>Download</button>
      </figure>
    </div>
  )
};

export default EpisodeDetails;
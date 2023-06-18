// import "./PersonajeCompleto.css"
import axios from 'axios';

const SongView = (props) => {

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
    <div className="">
      <figure className="">
        <div>
          <img className="border" src={filepath()} alt='song'></img>
          <p>Name Japanese: <span className="">{props.name_jp}</span></p>
          <p>Name Romaji: <span className="">{props.name_rm}</span></p>
          {!props.name_en ? '' : <p>Name English: <span className="">{props.name_en}</span></p>}
          <p>Start date: <span className="">{props.start_date}</span></p>
          <p>End date: {!props.end_date ? '-' : <span className="">{props.end_date}</span>}</p>
          <p>Total episodes: <span className="">{props.episodes}</span></p>
          <p>Status: <span className="">{props.status}</span></p>
        </div>
      </figure>
    </div>
  )
};

export default SongView;
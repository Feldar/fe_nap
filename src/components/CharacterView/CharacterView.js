// import "./PersonajeCompleto.css"
import axios from 'axios';
import useScript from 'hooks/useScript';
import './CharacterView.css';

const CharacterView = (props) => {
  useScript('https://platform.twitter.com/widgets.js');

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
        <div className="col-4 characterinfoborder text-center" style={{ 'backgroundColor': 'white'}}>
          <h1 className="charactername" style={{ 'color': `${props.color}`}}>{props.name_jp} <br/> {props.name_rm}</h1>
          <p>
            <span className="characterinfotitle">Character color: </span>
            <span>{props.color} </span>
            <span style={{ 'color': `${props.color}` }}>⬤</span>
          </p>
          <p>
            <span className="characterinfotitle">Incorporation: </span>
            <span className="">{props.join_date}</span>
          </p>
          <p>
            <span className="characterinfotitle"> Status: </span>
            {props.status}
          </p>
          {!props.graduation_date ? '' : <p>
          <span className="characterinfotitle"> Graduation: </span>
          <span className="">{props.graduation_date}</span>
          </p>}
          <a href={props.profile_page}><p>Profile page</p></a>
          {!props.youtube_account ? '' : <a href={props.youtube_account}><p>Youtube account</p></a>}
        </div>

        <div className="col-4 ">
          <figure>
            <img src={filepath()} alt='artist'></img>
          </figure>
        </div>

        <div className="col-4">
        <a className="twitter-timeline" href={props.twitter_account} data-tweet-limit="2"></a>
        </div>
      </div>
      <div className="row alaign-items-center">
      
      </div>
    </div>
  )
};

export default CharacterView;
// import "./PersonajeCompleto.css"
import axios from 'axios';
import useScript from 'hooks/useScript';
import './ArtistView.css'

const ArtistView = (props) => {
  useScript('https://platform.twitter.com/widgets.js');

  const filepath = () => {
    if (props.image) {
      const path = `http://nananijiarchiveproject.test/${props.image}`;
      return path;
    }
  }

  return (
    <div className="container backgroundinfo infoborders">
      <div className="row align-items-center">
        <div className="col-4">
          <figure className="">
            <img className="artistimageborder" src={filepath()} alt='artist'></img>
          </figure>
        </div>
        <div className="col-4 artistinfoborder text-center" style={{ 'backgroundColor': 'white' }}>
          <h1 className="charactername" style={{ 'color': `${props.color}` }}>{props.name_jp} / {props.name_rm}</h1>
          <p>
            <span className="characterinfotitle"> Incorporation: </span>
            <span className="">{props.join_date}</span>
          </p>
          {!props.graduation_date ? '' : <p>
            <span className="characterinfotitle"> Graduation: </span>
            <p>
              <span className="characterinfotitle">Status: </span>
              <span className="">{props.status}</span>
            </p>
            <span className="">{props.graduation_date}</span>
          </p>}
          <a href={props.profile_page}><p>Profile page</p></a>
          {!props.blog ? '' : <a href={props.blog}><p>Blog</p></a>}
          {!props.tiktok_account ? '' : <a href={props.tiktok_account}><p>Tiktok account</p></a>}
          {!props.instagram_account ? '' : <a href={props.instagram_account}><p>Instagram account</p></a>}
          {!props.youtube_account ? '' : <a href={props.youtube_account}><p>Youtube account</p></a>}

        </div>
        <div className="col-4">
          <a className="twitter-timeline" href={props.twitter_account} data-tweet-limit="2"></a>
        </div>
      </div>
    </div>
  )
};

export default ArtistView;
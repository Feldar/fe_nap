import { Link } from 'react-router-dom';

const TvshowDetails = (props) => (

  <div className='col border d-flex justify-content-center'>
    <figure className='figura'>
      
      <Link to={`/tvshows/${props.id}`}>
        <img className='border' src={props.image} alt='Personaje'></img>
      </Link>
      <figcaption className='figura'>{props.name_rm} | {props.name_jp}</figcaption>
      <p>{props.name_rm} | {props.start_date} | {props.episodes}</p>
      <p>Start date {props.start_date}</p>
      <p>Episodes: {props.episodes}</p>
    </figure>
    </div>
);

export default TvshowDetails;
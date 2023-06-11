const EpisodeDetails = (props) => (

  <div className='col border d-flex justify-content-center'>
    <figure className='figura'>
      <figcaption className='figura'>{props.name_rm}</figcaption>
      <img className='border' src={props.file} alt='Personaje'></img>
      <p>Episode {props.episode_number}</p>
      <p>Type: {props.type}</p>
      <p>Format: {props.format}</p>
      <p>Release date: {props.release_date}</p>
    </figure>
  </div>
);

export default EpisodeDetails;
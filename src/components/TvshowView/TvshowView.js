// import "./PersonajeCompleto.css"

const TvshowView = (props) => (
  <div className="">
    <figure className="">
      <div>
        <img className="border" src={props.image} alt='tvshow'></img>
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
);

export default TvshowView;
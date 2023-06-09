import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import BotonLike from "../BotonLike/BotonLike";
// import "./Personaje.css";
// import likeIcon from '../../img/like.svg'
// import unlikeIcon from '../../img/unlike.svg'

const TvshowDetails = (props) => {

  const [like, setLike] = useState(false)
  // const [likeImg, setLikeImg] = useState(unlikeIcon)

  // function manejarLike(valor, id) {
  // 	if (valor === false) {
  // 		localStorage.setItem(id, valor);
  // 		setLikeImg(likeIcon);
  // 		setLike(true);
  // 	}
  // 	else {
  // 		localStorage.removeItem(id);
  // 		setLikeImg(unlikeIcon);
  // 		setLike(false);
  // 	}
  // }

  // function manejarImagenLike(id) {
  // 	if (localStorage[id] != undefined) {
  // 		setLikeImg(likeIcon);
  // 		setLike(true);
  // 	}
  // 	return likeImg
  // }

  // useEffect(manejarLike, []);

  return (
    <figure className='figura'>
      {/* <BotonLike manejarLike={manejarLike} id={props.id} likeImg={likeImg} 
      like={like} manejarImagenLike={manejarImagenLike}></BotonLike> */}
      <Link to={`/tvshows/${props.id}`}>
        <img className='img-personaje' src={props.image} alt='Personaje'></img>
      </Link>
      <figcaption className='figura'>{props.name_rm}</figcaption>
      <p>{props.name_rm} | {props.start_date} | {props.episodes}</p>
    </figure>
  )
}

export default TvshowDetails;
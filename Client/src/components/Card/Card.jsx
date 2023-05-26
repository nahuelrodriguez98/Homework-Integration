import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../Redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

function Card({id, name,status,species,gender,image, onClose, addFav, removeFav,  myFavorites}) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }
      else {
         setIsFav(true);
         addFav({id, name,status,species,gender,image, onClose})
      }
   }

   useEffect (() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id])

   return (
      <div className={style.container} >
         <div className={style.front}>
            <img className={style.image} src={image} alt='' />
         </div>
        
         <div className={style.back}>
         <button onClick={handleFavorite} className={style.btnFav}>{isFav ? '❤️' : '🤍'}</button>
            <Link to={`/detail/${id}`} className={style.link} >
               <h2 className={style.nombre}>{name}</h2>
            </Link>
            <div className={style.species}>
               <h2>{species}</h2>
               <h2>{gender}</h2>
               <h2>{status}</h2>
            </div>
            <button className={style.boton} onClick={() => onClose(id)}>Close</button>
            
         </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps= (dispatch) =>{
   return {
      addFav: (character) => { dispatch(addFav(character))},
      removeFav:(id)=> {dispatch(removeFav(id))}
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);
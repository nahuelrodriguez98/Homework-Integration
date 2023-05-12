import Card from "../Card/Card";
import { connect, useDispatch } from 'react-redux'
import style from './Favorites.module.css'
import { filterCards, orderCards } from "../Redux/actions";
import { useState } from 'react';

const Favorites = ({ myFavorites }) => {
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(!aux);
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <div className={style.container}>

            <select onChange={handleOrder} className={style.selectOne}>
                <option value="A">Ascendente</option>
                <option value="B">Descendente</option>
            </select>

            <select onChange={handleFilter}  className={style.selectTwo}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
                <option value="allCharacters">All Characters</option>
            </select>

        {
            myFavorites?.map(fav => {
                return (
                     <div className={style.cards}>
                        <Card 
                            key={fav.id}
                            id={fav.id}
                            name={fav.name}
                            species={fav.species}
                            status={fav.status}
                            gender={fav.gender}
                            image={fav.image}
                            origin={fav.origin}
                            onClose={fav.onClose}
                        />
                     </div>
                )
            })
        }
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites);
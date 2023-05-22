import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import style from './Nav.module.css'

const Nav = ({ onSearch }) => {
    return (
        <div className={style.container}>
            <SearchBar onSearch={onSearch} />
            <NavLink to="/home" className={style.home}>Home</NavLink >
            <NavLink to="/about" className={style.about}>About</NavLink >
            <NavLink to='/favorites' className={style.favourite}> Favorites </NavLink>
        </div>
    )
}
export default Nav;


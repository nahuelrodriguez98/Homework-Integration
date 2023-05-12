import axios from 'axios'
import { useState, useEffect } from 'react'; 
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import style from './components/App/App.module.css';
import Nav from './components/Nav/Nav'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';


const email = 'nahuelrodriguez_@outlook.com';
const password = '123asd';


function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const login = (userData) =>{
      if(userData.email === email && userData.password === password) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(()=>{
      !access && navigate('/')
   }, [access, navigate]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.data)
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose =(id)=>{
      
      const filteredCharacters = characters.filter(character => character.id !== Number(id));
      setCharacters(filteredCharacters);
   }

   return (
      <div className={style.container}>
         {
            location.pathname !== '/' && <Nav onSearch={onSearch}/>  
         }

         <Routes>
            <Route path='/home' element={ <Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/favorites' element={<Favorites/>} />
         </Routes>        
      </div>
   );
}

export default App;

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
const URL = 'http://localhost:3001/rickandmorty/login/';

function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;

         setAccess(access);
         access && navigate('/home');

      } catch (error) {
         console.log(error.message);
      }
   }

   useEffect(()=>{
      !access && navigate('/')
   }, [access, navigate]);

   const onSearch = async (id) => {
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         
               if (data.name) {
                 setCharacters((oldChars) => [...oldChars, data]);
               }
            
      } catch (error) {
         alert('¡No hay personajes con este ID!');
      }
      
   }

   const onClose =(id)=>{
      const filteredCharacters = characters.filter(character => character.id !== id);
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

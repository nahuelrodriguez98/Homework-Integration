import style from './SearBar.module.css'
import {useState} from 'react'


export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value); //Tomo el valor del input
   }

   return (
      <div className={style.container}>

         <input type='search' value={id} onChange={handleChange} className={style.input}  placeholder='Search by ID'/>

         <button className={style.button} onClick={() => {onSearch(id); setId('')}} >Submit</button>

      </div>
   );
}

import { useState } from 'react';
import validation from '../validation/validation';
import style from './From.module.css';

const Form = ({ login }) =>{
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });



    const handleChange = (event) =>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value 
        });

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }));
    }

    const handleSubmit = (event) =>{
            event.preventDefault();
            login(userData);
    }

    return(
        <form className={style.containerForm} onSubmit={handleSubmit}>
            <label htmlFor="email" className={style.email}>Email</label>
            <br />
            <input type="email" name='email' value={userData.email} onChange={handleChange} className={style.inpemail}/>
            {
            errors.email && <p style={{color:"red"}}>{errors.email}
            </p>}
            <br />
            <label htmlFor="password" className={style.password}>Password</label>
            <br />
            <input type="password" name="password" value={userData.password} onChange={handleChange} className={style.inpassword}/>
            {
            errors.password && <p style={{color:"red"}}>{errors.password}
            </p>}
            <button className={style.submit}>Submit</button>
        </form>
    )
}
export default Form;
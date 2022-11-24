import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom'
import { changeName } from '../store/slices/name.slice';
import './inputName.css'
import imgPokemon from '../assets/image 11.png'
import elipse1 from '../assets/Ellipse 3.png'
import elipse2 from '../assets/Ellipse 4.png'
const InputName = () => {

    const[userName, setUserName] = useState("")

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const enterName = () =>{
        dispatch(changeName(userName))
        navigate("/pokemons")
    }

    return (
        <div className='div-container'>
            <img className='img' src={imgPokemon} alt="" />
            <h1 className='h1-name'>¡Hola Entrenador!</h1>
            <p className='p-name'>Para poder comenzar, dame tu nombre</p>
           <div className='div-input'>
                <input 
                className='input-name'
                    type="text" 
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                    placeholder="Tu nombre..."
                />
                <button className='button-name' onClick={enterName}>Enter</button>
           </div>
           <div className='red'></div>
           <div className='black'></div>
          
            <img className='one' src={elipse1} alt="" />
            <img className='two' src={elipse2} alt="" />
           
        </div>
    );
};

export default InputName;
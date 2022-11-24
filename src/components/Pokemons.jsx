import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import imgpokedex from '../assets/image 11.png'
import circleUno from '../assets/Ellipse 3 (1).png'
import circleDos from '../assets/Ellipse 4.png'
import './pokemons.css'

const Pokemons = () => {
    const [pokemonsList, setPokemonsList] =useState([])
    const userName = useSelector(state => state.name)
    const[pokemonName, setPokemonName] = useState("")

    const [typePokemons, setTypePokemons] = useState([])

    const navigate = useNavigate()

    useEffect (()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(res => setPokemonsList(res.data.results))
        //https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154

        axios.get(`https://pokeapi.co/api/v2/type/`)
            .then(res=> setTypePokemons(res.data.results))
    },[])
    console.log(typePokemons)

    const searchPokemon = () =>{
        navigate(`/pokemons/${pokemonName}`)
    }

    const filterType = (e) =>{
        const url = e.target.value
        axios.get(url).then((res) => setPokemonsList(res.data.pokemon))
    }

    const [page, setPage] = useState(1)
    const pokemonsPerPage = 16
    const lastIndex = page*pokemonsPerPage
    const firstIndex = lastIndex-pokemonsPerPage
    const pokemonPaginated = pokemonsList.slice(firstIndex, lastIndex)
    const totalPages = Math.ceil(pokemonsList.length / pokemonsPerPage)
    
    const numbers =[]
    for(let i=1; i<=totalPages; i++){
        numbers.push(i)
    }
    console.log(numbers)

    return (
        <div className='div-container__pokemons'>
            <div className='red-dos'></div>
            <div className='black-dos'></div>
            <div className='div-imgs'>
                <img className='pokedex' src={imgpokedex} alt="" />
                <img className='circle-one' src={circleUno} alt="" />
                <img className='circle-two' src={circleDos} alt="" />
            </div>
            
            <div className='container-input__name'>

                <div className='div-name__pokemons'>
                    <p className='p-name__one'>Bienvenid@ {userName},  </p>
                    <p className='p-name__two'>aqui podras encontrar cualquier pokemon</p>
                </div>
                <div className='container-input'>
                        <input
                            className='input-pokemon'
                            type="text"
                            placeholder='search pokemon'
                            value={pokemonName}
                            onChange={(e => setPokemonName(e.target.value))}
                        />
                        <button className='button-pokemon' onClick={searchPokemon}>Search</button>
                        <select onChange={filterType} name="" id="">
                            {typePokemons.map((typePokemons)=>(
                                <option value={typePokemons.url} key={typePokemons.name}>{typePokemons.name}</option>
                            ))}
                            
                        </select>
                </div>
            </div>
            <ul >
                    {pokemonPaginated?.map(pokemon =>(
                        <PokemonCard 
                        url={pokemon.url ? pokemon.url : pokemon.pokemon.url}  
                        key={pokemon.url ? pokemon.url : pokemon.pokemon.url} 
                        />
                    ))}
            </ul>
            <div>
                <button
                    className='numbers'
                    onClick={()=> setPage(page-1)}
                    disabled={page===1}>
                        <i class="fa-solid fa-angles-left"></i>
                </button>
                {numbers.map(number => (
                        <button className='numbers' onClick={() => setPage(number)}>{number}</button>
                ))}
                <button
                    className='numbers' 
                    onClick={()=> setPage(page+1)}
                    disabled={page===totalPages}>
                        <i class="fa-solid fa-angles-right"></i>
                </button>
            </div>
        </div>
    );
};

export default Pokemons;
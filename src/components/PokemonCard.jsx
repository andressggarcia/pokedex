import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/pokemons.css'
const PokemonCard = ({url}) => {

    const [pokemon, setPokemon] = useState({})
    
    useEffect(() => {
        axios.get(url).then((res)=> setPokemon(res.data))
    },[])
    console.log(pokemon)        
    return (
        <Link className='link-card' to={`/pokemons/${pokemon.id}`}>
            <div className='div-container__card'>
                <img className='img-card' src={pokemon.sprites?.other.dream_world.front_default} alt="" />
                <h1 className='h1-card'>{pokemon.name?.toUpperCase()}</h1>
                <p className='p-type'>{pokemon.types?.[0].type.name}</p>
                <div className='br-dos'></div>
                <div className='div-statistics'>
                    <div>
                        <p className='p-statistics p-dos'>HP</p>
                        <p className='p-statistics'>{pokemon.stats?.[0].base_stat}</p>
                    </div>
                    <div>
                        <p className='p-statistics p-dos'>ATTACK</p>
                        <p className='p-statistics'>{pokemon.stats?.[1].base_stat}</p>
                    </div>
                    <div>
                        <p className='p-statistics p-dos'>DEFENSE</p>
                        <p className='p-statistics'>{pokemon.stats?.[2].base_stat}</p>
                    </div>
                    <div>
                        <p className='p-statistics p-dos'>SPEED</p>
                        <p className='p-statistics'>{pokemon.stats?.[5].base_stat}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default PokemonCard;
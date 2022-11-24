import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import imgpokedex from '../assets/image 11.png'
import circleUno from '../assets/Ellipse 3 (1).png'
import circleDos from '../assets/Ellipse 4.png'
import './pokemonsDetail.css'

const PokemonsDetail = () => {
    const [pokemon, setPokemon] = useState({})
    const {id} = useParams()

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
          .then(res => setPokemon(res.data))
      },[id])
    
    console.log(pokemon)
    return (
        <div className='conteiner-detail'>
                <div className='red-dos'></div>
                <div className='black-dos'></div>
                <div className='div-imgs'>
                    <img className='pokedex' src={imgpokedex} alt="" />
                    <img className='circle-one' src={circleUno} alt="" />
                    <img className='circle-two' src={circleDos} alt="" />
                </div>
           <div className='div-detail'>
                <img className='img-detail' src={pokemon.sprites?.other.dream_world.front_default} alt="" />
                <h1 className='id-detail'>#{pokemon.id}</h1>

                <div className='name-detail'>
                    <div className='br-three'></div>
                <h1>{pokemon.name}</h1>
                    <div className='br-three'></div>
                </div>

                <div className='weight-height'>
                <p className='p-weight'>Weigth <br />{pokemon.weight}</p>
                <p className='p-height'>Height <br />{pokemon.height}</p>
                </div>

                <div className='type-abilitie'>
                    <div className='type-detail'>
                        <h2>Type</h2>
                        <div className='type'>
                        <p className='type-one'>{pokemon.types?.[0].type.name}</p>
                        <p className='type-two'>{pokemon.types?.[1].type.name}</p>
                        </div>
                    </div>
                    <div className='abilitie-detail'>
                        <h2>Abilities</h2>
                        <div className='abilitie'>
                        <p className='abilitie-one'>{pokemon.abilities?.[0].ability.name}</p>
                        <p className='abilitie-two'>{pokemon.abilities?.[1].ability.name}</p>
                        </div>
                    </div>
                </div>
                <div className='stats'>
                    <div className='div-title'>
                    <h3 className='title-stats'>Stats</h3>
                    <div className='br-four'></div>
                    </div>
                    <div className='container-stats'>
                        <div className='div-stats'>
                            <h3>HP:</h3>
                            <p>{pokemon.stats?.[0].base_stat}</p>
                        </div>
                        <div className='div-stats'>
                            <h3>Attack:</h3>
                            <p>{pokemon.stats?.[0].base_stat}</p>
                        </div>
                    </div>
                    <div className='container-stats'>
                        <div className='div-stats'>
                            <h3>Defense:</h3>
                            <p>{pokemon.stats?.[0].base_stat}</p>
                        </div>
                        <div className='div-stats'>
                            <h3>Speed:</h3>
                            <p>{pokemon.stats?.[0].base_stat}</p>
                        </div>
                    </div>
                </div>
           </div>

        </div>
    );
};

export default PokemonsDetail;
import React, { useState } from 'react'
const axios = require('axios');
export const PokemonApi = () => {
    const [pokemon, setPokemon] = useState([])
    const api = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807').then(response=>{
     const data = response.data.results
     setPokemon(data);
    })
    }
    
    return (
        <div>
            <button onClick={api}>Cargar Pokemones</button>
            <ul>
            {   
                
                pokemon?.map((pokemon,l) => {
                    return <li key={l}>{pokemon.name}</li>
                })
                
            }
            </ul>
        </div>
    )
}

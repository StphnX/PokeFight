import React from 'react';
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PokemonInfo from './PokemonInfo';

function Pokemon() {

    const { id } = useParams();
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        getSinglePokemon();
    }, [id])

    const getSinglePokemon = () => {
        axios.get(`http://localhost:3000/api/pokemon/${id}`)
            .then((res) => {
                setPokemon(res.data);
                console.log(res.data.type);
            })
            .catch((error) => {
                console.log("Error fetching pokemon");
            });
    }

    return (
        <>
            {pokemon.type ? (
                <>
                    <div className="pokemon-card">
                        <img src={pokemon.sprites.artwork} alt={pokemon.name} />
                        <div className="pokemon-info-container">
                            <h3 className="pokemon-name-heading">{pokemon.name}</h3>
                            <h3>TYPE</h3>
                            <ul>
                                {pokemon.type.map((singleType, index) => (
                                    <li key={index}>{singleType}</li>
                                ))}
                            </ul>
                            <NavLink to={`/api/pokemon/${pokemon.pokedexId}/stats`}><span className="show-pokemon-info">SHOW STATS</span></NavLink>
                            <NavLink to={`/api/pokemon/${pokemon.pokedexId}/fight`}><span className="show-pokemon-info">CHOOSE FOR FIGHT</span></NavLink>
                        </div>
                    </div >
                </>
            ) : (
                <h1>No pokemon available</h1>
            )
            }
        </>
    );
}

export default Pokemon;
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PokemonInfo() {

    const { id, name, info } = useParams();
    const [pokemonInfo, setPokemonInfo] = useState([]);

    useEffect(() => {
        getPokemonInfo();
    }, [])

    const getPokemonInfo = () => {
        axios.get(`http://localhost:3000/api/pokemon/${id}/${info}`)
            .then((res) => {
                setPokemonInfo(res.data);
                console.log(pokemonInfo.stats.attack);
            })
            .catch((error) => {
                console.log("Error fetching pokemon");
            });
    }

    return (
        <>
            {pokemonInfo.stats ? (
                <>
                    <div className="stats-container">
                        <h2>STATS:</h2>
                        <ul>
                            <li>Attack: {pokemonInfo.stats.attack}</li>
                            <li>Defense: {pokemonInfo.stats.defense}</li>
                            <li>Hp: {pokemonInfo.stats.hp}</li>
                            <li>Special attack: {pokemonInfo.stats.special_attack}</li>
                            <li>Special defense: {pokemonInfo.stats.special_defence}</li>
                            <li>Speed: {pokemonInfo.stats.speed}</li>
                        </ul>
                    </div>
                </>
            ) : (
                <h2>No stats available</h2>
            )}
        </>
    );
}

export default PokemonInfo;
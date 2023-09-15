import React, { useState } from 'react';
import { useEffect } from 'react';
import PokeCard from './PokeCard';
import {useNavigate} from "react-router-dom"

function Pokefight({ allPokemons, singlePokemon }) {
  const [opponentPokemon, setOpponentPokemon] = useState(allPokemons[Math.floor(Math.random() * allPokemons.length)]);
  const [winner, setWinner] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    // const contestant = allPokemons[Math.floor(Math.random() * allPokemons.length)]
    // console.log(contestant)
    // setOpponentPokemon(contestant);
    // setWinner(null);
  }, []);

  const handleClick = () => {
    const fight = Math.floor(Math.random() * 10) % 2
    console.log(fight)
    if(fight == 0){
      navigate(`/pokewinner/${opponentPokemon.name}/${opponentPokemon.pokedexId}`)
      console.log(opponentPokemon)
      // setWinner(opponentPokemon)
    }else{
      navigate(`/pokewinner/${singlePokemon.name}/${singlePokemon.pokedexId}`)
      console.log(singlePokemon)
      // setWinner(singlePokemon)
    }
    console.log(winner)
  }


  
  return (

    <div>
      {
        !allPokemons && winner == null ?
          
            winner == null ?
            <p>Loading...</p>
            :
            <PokeCard pokemon={winner}/>
            
          
          :
          <div className="ring">
            <h3>Battle!</h3>
            {
              !singlePokemon ? <p>Loading contestant</p> :
                // <PokeCard pokemon={singlePokemon} opponent={false}/>
              <div >
                <h2>{singlePokemon.name}</h2>
                    <img src={singlePokemon.sprites.back}/>
                <ul>
                    <li>ATTACK: {singlePokemon.stats.attack}</li>
                    <li>DEFENCE: {singlePokemon.stats.defense}</li>
                    <li>HEALTH POINTS: {singlePokemon.stats.hp}</li>
                    <li>SPECIAL ATTACK: {singlePokemon.stats.special_attack}</li>
                    <li>SPECIAL DEFENCE: {singlePokemon.stats.special_defense}</li>
                    <li>SPEED: {singlePokemon.stats.speed}</li>
                </ul>
            </div>
              }
            {
              !opponentPokemon ? <p>Loading opponent</p> :
              // <PokeCard pokemon={opponentPokemon} opponent={true}/>
              <div >
                <h2>{opponentPokemon.name}</h2>
                    <img src={opponentPokemon.sprites.front}/>
                <ul>
                    <li>ATTACK: {opponentPokemon.stats.attack}</li>
                    <li>DEFENCE: {opponentPokemon.stats.defense}</li>
                    <li>HEALTH POINTS: {opponentPokemon.stats.hp}</li>
                    <li>SPECIAL ATTACK: {opponentPokemon.stats.special_attack}</li>
                    <li>SPECIAL DEFENCE: {opponentPokemon.stats.special_defense}</li>
                    <li>SPEED: {opponentPokemon.stats.speed}</li>
                </ul>
            </div>
            }
            <button onClick={handleClick}>FIGHT!!</button>
          </div>
      }
    </div>
  );
}

export default Pokefight;
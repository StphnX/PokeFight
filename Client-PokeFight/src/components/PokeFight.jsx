import React, { useState } from 'react';
import { useEffect } from 'react';

function Pokefight({allPokemons, singlePokemon}) {
  const [opponentPokemon, setOpponentPokemon] = useState(null);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const contestant = allPokemons[Math.floor(Math.random() * allPokemons.length)]
    console.log(contestant)
    setOpponentPokemon(contestant);
    setWinner(null);
  }, []);
 
  return (
    
    <div>
      {
        !allPokemons ?
        <p>Loading...</p>
        :
        <div>
          <h3>Battle!</h3>
          { 
            !singlePokemon ? <p>Loading contestant</p> :
            <p>{singlePokemon.name}</p>
          }
            !opponentPokemon ? <p>Loading opponent</p> :
            <p>{opponentPokemon.name}</p>
          }
        </div>
      }
    </div>
  );
}

export default Pokefight;
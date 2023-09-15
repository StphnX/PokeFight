import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'


const PokeCard = ({allPokemons}) => {
    const {winner, pokedexId} = useParams()
    const navigate = useNavigate();
    
    const handleClick = () => {
        console.log("get me out of here")
        navigate("/api/pokemon");
    } 

    
    
// TODO button to start over 

  return (
    <div >
        <h2>THE WINNER IS {winner}!!!</h2>
                {/* <img src={pokemon.sprites.artwork}/> */}
        <button onClick={handleClick}>Start new fight</button>
    </div>

  )
}

export default PokeCard
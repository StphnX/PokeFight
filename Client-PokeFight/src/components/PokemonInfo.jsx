import React from 'react';
import { useParams } from 'react-router-dom';

function PokemonInfo() {
    const {id, info} = useParams();

    return(
        <>
            <h1>Super detailed view with only the names or the types or the types and or the bases</h1>
        </>
    );
}

export default PokemonInfo;
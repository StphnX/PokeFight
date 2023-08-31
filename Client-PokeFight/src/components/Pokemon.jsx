import React from 'react';
import { useParams } from 'react-router-dom';

function Pokemon() {
    const {id} = useParams();

    return(
        <>
            <h1>Detailed view with the name, type and base</h1>
        </>
    );
}

export default Pokemon;
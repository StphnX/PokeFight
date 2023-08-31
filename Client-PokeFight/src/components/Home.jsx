import React from 'react';
import { useParams } from 'react-router-dom';

function Home() {
    const {id} = useParams();

    return(
        <>
            <h1>All the pokemon names in a list and includes a link to a detailed view</h1>
        </>
    );
}

export default Home;
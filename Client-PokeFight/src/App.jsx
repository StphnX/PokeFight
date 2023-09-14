import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Pokemon from './components/Pokemon';
import PokemonInfo from './components/PokemonInfo';
import PokeFight from './components/PokeFight';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonSelection, setPokemonSelection] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getPokemons();
  }, []);
  const getPokemons = () => {
    axios.get("http://localhost:3000/api/pokemon")
      .then((res) => {
        console.log(res.data);
        const sortedPokemons = res.data.sort(function (a, b) {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
        setPokemons(sortedPokemons);
        setPokemons(res.data);
        console.log(pokemons);
      });
  };

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
    setPokemonSelection(item);
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }


  const handleShowPokemon = () => {
    // Check if a Pokémon is selected
    if (pokemonSelection && pokemonSelection.pokedexId) {
      navigate(`/api/pokemon/${pokemonSelection.pokedexId}`);
    }
  }

  const formatResult = (pokemon) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>{pokemon.name}</span>
      </>
    )
  }

  return (
    <>
      <Routes>
        {/* <Route path='/api/pokemon' element={<App />} /> */}
        <Route path='/api/pokemon/:id/' element={<Pokemon />} />
        <Route path='/api/pokemon/:id/:info/' element={<PokemonInfo />} />
        <Route path='/api/pokemon/:id/fight/' element={<PokeFight allPokemons={pokemons} singlePokemon={pokemonSelection} />} />
      </Routes>
      <header>
        <h1>POKEMON FIGHT</h1>
        <div style={{ width: 400 }} className="search-container">
          <ReactSearchAutocomplete
            items={pokemons}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          // styling={
          //     {
          //       border: "2px solid black",
          //     }}
          />
        </div>
        <button onClick={handleShowPokemon}>Show Pokemon</button>
      </header>
    </>
  );
}

export default App;
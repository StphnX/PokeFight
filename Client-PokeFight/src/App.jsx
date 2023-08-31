import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Pokemon from './components/Pokemon';
import PokemonInfo from './components/PokemonInfo';
import Home from './components/Home';
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokemon/:id' element={<Pokemon />} />
          <Route path='/pokemon/:id/:info' element={<PokemonInfo />} />
        </Routes>
    </>
  )
}

export default App

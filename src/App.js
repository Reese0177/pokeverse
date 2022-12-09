import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {

  const [pokemonRaw, setPokemonRaw] = useState([]);

  useEffect(()=>{
    fetch(pokeApi).then((res)=>res.json()).then((json)=>{setPokemonRaw(json.results)});
  }, []);

  return (
    <div data-testid="app">
      <Navigation />
      <h1>Pokemon should appear here</h1>
      {pokemonRaw.map(pokemon => 
        <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      )}
    </div>
  );
}

export { App };

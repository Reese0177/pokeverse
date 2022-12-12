import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';
import {InputGroup, Form} from 'react-bootstrap';

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {

  const [pokemonRaw, setPokemonRaw] = useState([]);
  const [pokemonFiltered, setPokemonFiltered] = useState([]);

  useEffect(()=>{
    fetch(pokeApi).then((res)=>res.json()).then((json)=>{setPokemonRaw(json.results); setPokemonFiltered(json.results)});
  }, []);

  function handleChange(e) {
    const regex = new RegExp(e.target.value.replaceAll(' ','-'), 'gi');
    setPokemonFiltered(pokemonRaw.filter(pokemon => pokemon.name.match(regex)));
  }

  return (
    <div data-testid="app">
      <Navigation />
      <InputGroup>
        <Form.Control
          placeholder="Pokemon"
          onChange={handleChange}
        />
      </InputGroup>
      {pokemonFiltered.map(pokemon => 
        <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      )}
    </div>
  );
}

export { App };

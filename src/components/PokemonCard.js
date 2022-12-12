import React, {useState, useEffect} from 'react';
import { Card } from 'react-bootstrap';

function PokemonCard({ url, name }) {

  const [pokemon, setPokemon] = useState({sprites:{front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"}, abilities:[]});

  useEffect(()=>{
    fetch(url).then((res)=>res.json()).then((json)=>{setPokemon(json);});
  }, []);

  return (
    <Card>
      <Card.Img variant="top" src={pokemon.sprites.front_default} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text as="div">
          Abilities:
          <ul>
            {pokemon.abilities.map(el=><li key={name+el.ability.name}>{el.ability.name.split('-').map(word => word[0].toUpperCase() + word.substring(1)).join(' ')}</li>)}
          </ul>
      </Card.Text>
      </Card.Body>
    </Card>
  );
}

export { PokemonCard };

import React, { useState } from "react";
import ReactDOM from 'react-dom';
import PokemonList from "./PokemonList";

function App() {
  const [pokemon, setPokemon] = useState(["bulbasaur", "charmander"]);
  
  return (
    <PokemonList pokemon={pokemon}/>
  );
}

export default App;

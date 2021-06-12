import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import PokemonList from "./PokemonList";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // sets the loading message state to true so that it eenders.
    setLoading(true);

    let cancel;

    axios.get(currentPageUrl, {
      cancelToken:  new axios.CancelToken(c => cancel = c)
    }).then(res => {
      // once it is finished rendering, set the loading message state to false.
      setLoading(false);
      
      // set the various states.
      setNextPageUrl(res.data.next);
      setPrevPageUrl(res.data.previous);
      setPokemon(res.data.results.map(p => p.name));
    });

    return () => cancel();
  }, [currentPageUrl]);

  // If loading is set to true and axios is getting the data, display the loading message or animation.
  if (loading) return "loading...";

  return (
    <PokemonList pokemon={pokemon}/>
  );
}

export default App;

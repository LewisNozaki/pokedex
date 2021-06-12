import React, { useState, useEffect } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";
import Pagination from "./Pagination";

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

  // Set previous and next page state
  const goToNextPage = () => setCurrentPageUrl(nextPageUrl);

  const goToPreviousPage = () => setCurrentPageUrl(prevPageUrl);

  // If loading is set to true and axios is getting the data, display the loading message or animation.
  if (loading) return "loading...";

  return (
    <>
      <PokemonList pokemon={pokemon}/>
      <Pagination 
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
      />
    </>
  );
}

export default App;

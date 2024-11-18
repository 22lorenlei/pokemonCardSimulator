import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

// Use this one https://github.com/PokemonTCG/pokemon-tcg-data

let baseURL =
  "https://raw.githubusercontent.com/PokemonTCG/pokemon-tcg-data/refs/heads/master/cards/en/base1.json";

function PokemonCardSimulator() {
  const [pokemonURL, setPokemonURL] = useState(baseURL);

  const [pokemonCards, setPokemonCards] = useState(null);

  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < pokemonCards.length - 1) setCount((count) => count + 1);
  };

  // Go down by one card
  const decrement = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };

  useEffect(() => {
    // In case it doesn't load in time
    if (!pokemonURL) {
      return;
    }

    fetch(pokemonURL)
      .then((response) => response.json())
      .then((responseJson) => {
        setPokemonCards(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [pokemonURL]);

  if (!pokemonCards) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1> This is the pokemon card simulator page </h1>
      <div>
        <img src={pokemonCards[count].images.large}></img>
      </div>
      Card count: {count + 1} / {pokemonCards.length}
      <div>
        <button onClick={increment}>Go next</button>
        <button onClick={decrement}>Go back</button>
      </div>
      <Link to="/home">
        <button> Home </button>
      </Link>
    </>
  );
}

export default PokemonCardSimulator;

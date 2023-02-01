import React, { useState, useEffect } from "react";
import SelectedPokemon from "./SelectedPokemon";

function PokemonList() {
  const [pokemonUrl, setPokemonUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [pokemonData, setPokemonData] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  const [offset, setOffset] = useState(0)
  
  useEffect(() => {
    fetch(
        pokemonUrl
      )
        .then((res) => res.json())
        .then((data) => {
          setPokemonData(data);
        });
  }, [pokemonUrl]);

  const move = (direction) => {
    if (pokemonData[direction] !== null) {
      setPokemonUrl(pokemonData[direction])
      setOffset(direction === "previous" ? offset-20 : offset+20)
    }
  }

  return pokemonData 
  ? <div>
      <button onClick={() => move("previous")}>previous</button>
      <ul>
        {pokemonData.results.map((item, index) => {
          return <li key={item.url}>
            <div>{item.name}</div>
            <button onClick={() => setSelectedPokemon(offset+index+1)}>select</button>
          </li>;
        })}
      </ul>
      <button onClick={() => move("next")}>next</button>
      {selectedPokemon !== null && <SelectedPokemon pokemonId={selectedPokemon}/>}
    </div>
  : <div>loading...</div>;
}

export default PokemonList;

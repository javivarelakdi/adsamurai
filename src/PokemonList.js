import React, { useState, useEffect } from "react";
import SelectedPokemon from "./SelectedPokemon";

function PokemonList() {
    const [pokemonUrl, setPokemonUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [pokemonData, setPokemonData] = useState(null);
    const [selectedPokemon, setSelectedPokemon] = useState(null)
    
    useEffect(() => {
      fetch(
          pokemonUrl
        )
          .then((res) => res.json())
          .then((data) => {
            setPokemonData(data);
          });
  }, [pokemonUrl]);

    return pokemonData 
    ? <div>
        <button onClick={() => setPokemonUrl(pokemonData.previous !== null
            ? pokemonData.previous
            : pokemonUrl)}>previous</button>
        <ul>
          {pokemonData.results.map((item, index) => {
            return <li key={index+1}>
              <div>{item.name}</div>
              <button onClick={() => setSelectedPokemon(index+1)}>select</button>
            </li>;
          })}
        </ul>
        <button onClick={() => setPokemonUrl(pokemonData.next !== null
            ? pokemonData.next
            : pokemonUrl)}>next</button>
        {selectedPokemon !== null && <SelectedPokemon pokemonId={selectedPokemon}/>}
      </div>
    : <div>loading...</div>;
}

export default PokemonList;

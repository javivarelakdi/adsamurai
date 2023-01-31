import React, { useState, useEffect } from "react";

function SelectedPokemon({ pokemonId }) {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
          )
            .then((res) => res.json())
            .then((data) => {
              setPokemonData(data);
            });
    }, [pokemonId]);

    return pokemonData 
    ? <div>
        <div>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        </div>
        <div>name : {pokemonData.name}</div>
      </div>
    : <div>loading...</div>;
}

export default SelectedPokemon;

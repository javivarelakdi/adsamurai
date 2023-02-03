import React, { useState, useEffect } from "react";
import Box from "./components/box/box";
import Text from "./components/text/text";

function PokemonCard({ pokemonId }) {
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
    ? <Box pa={4} xsCol={8}>
        <Box flex="row" justifyContent="between">
          <Box><img src={pokemonData.sprites.front_default} alt={pokemonData.name} /></Box>
          <Text  tagName="span" caps bold sizing="f0">{pokemonData.name}</Text>
        </Box>
        <Box flex="row" justifyContent="between" alignItems="center" textAlign="center">
          {pokemonData.stats.map((stat) => {
            return (<Box xsCol={4}>
              <h3>{stat.stat.name}</h3>
              <p>{stat.base_stat}</p>
            </Box>);
          })}
        </Box>
      </Box>
    : <Box>loading...</Box>;
}

export default PokemonCard;

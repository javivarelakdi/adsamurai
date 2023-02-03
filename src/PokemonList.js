import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import Box from "./components/box/box";
import Text from "./components/text/text";
import Button from "./components/button/button";

function PokemonList() {
  const [pokemonUrl, setPokemonUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [pokemonData, setPokemonData] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  const [offset, setOffset] = useState(0)
  const [page, setpage] = useState(1)
  
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
      setpage(direction === "next" ? page + 1 : page - 1)
    }
  }

  return pokemonData 
  ? <Box flex="row" justifyContent="between">
      <Box flex="row" xsCol={4}>
        <Box tagName="ul" flex="row" xsCol={12}>
          {pokemonData.results.map((item, index) => {
            return <Box tagName="li" className="as-list-none" xsCol={12} key={item.url}>
              <Button btnType="secondary" onClick={() => setSelectedPokemon(offset+index+1)}>
                {item.name}
              </Button>
            </Box>;
          })}
        </Box>
        <Box flex="row" xsCol={12} ph={4} justifyContent="between">
          <Button onClick={() => move("previous")}>previous</Button>
          <Text>page {page}</Text>
          <Button onClick={() => move("next")}>next</Button>
        </Box>
      </Box>
      {selectedPokemon !== null && <PokemonCard pokemonId={selectedPokemon}/>}
    </Box>
  : <Box>loading...</Box>;
}

export default PokemonList;

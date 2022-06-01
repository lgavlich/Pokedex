import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PokemonCard from "../components/PokemonCard/PokemonCard";
import { getPokemon, getPokemons } from "../services/pokemon-api";
import s from "./PokemonView.module.css";

const allPokemons = 1126;
const limit = 50;

function HomeView() {
  const [gridColumnCount, setGridColumnCount] = useState(1);
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [morePokemon, setMorePokemon] = useState(true);

  const fetchData = () => {
    if (pokemons.length >= allPokemons) {
      setMorePokemon(false);
      return;
    }
    getPokemons(limit, offset).then(({ results }) => {
      Promise.all(results.map((data) => getPokemon(data.name))).then(
        (pokemon) => {
          setPokemons([...pokemons, ...pokemon]);
        }
      );
    });

    setOffset(offset + limit);
  };

  console.log(pokemons);
  useEffect(() => {
    if(pokemons?.length === 0){
      fetchData();
      console.log('work');
    }
  },[]);

  // useEffect(() => {
  //   // const grid = document.querySelector(".pokedex");
  //   // const gridComputedStyle = window.getComputedStyle(grid);
  //   const gridColumn = gridComputedStyle
  //     .getPropertyValue("grid-template-columns")
  //     .split(" ");
  //   setGridColumnCount(gridColumn.length);
  // }, []);
  return (
    <div className={s.container}>
      <h1 className={s.title}>Pokédex</h1>
      <InfiniteScroll
        className={s.pokedex}
        dataLength={pokemons.length}
        next={fetchData}
        hasMore={morePokemon}
        loader={
          <div
            style={{
              gridColumn: `span ${gridColumnCount}`,
              justifySelf: "center",
              padding: "15px",
            }}
          ></div>
        }
      >
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            types={pokemon.types}
            sprites={pokemon.sprites}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
}
export default HomeView;

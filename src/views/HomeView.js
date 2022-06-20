import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Row } from "react-bootstrap";
import PokemonCard from "../components/PokemonCard/PokemonCard";
import { getPokemon, getPokemons } from "../services/pokemon-api";
//import s from "./PokemonView.module.css";

const allPokemons = 1126;
const limit = 50;

function HomeView() {
  // const [gridColumnCount] = useState(1);
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
    if (pokemons?.length === 0) {
      fetchData();
      console.log("work");
    }
  }, []);

  // useEffect(() => {
  //   const grid = document.querySelector(".pokedex");
  //   const gridComputedStyle = window.getComputedStyle(grid);
  //   const gridColumn = gridComputedStyle
  //     .getPropertyValue("grid-template-columns")
  //     .split(" ");
  //   setGridColumnCount(gridColumn.length);
  // }, []);
  return (
    <section>
      <InfiniteScroll
        dataLength={pokemons.length}
        next={fetchData}
        hasMore={morePokemon}
        loader={
          <div className="mb-4 d-flex justify-content-center align-item-center"></div>
        }
      >
        <Row>
          {pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              types={pokemon.types}
              sprites={pokemon.sprites}
            />
          ))}
        </Row>
      </InfiniteScroll>
    </section>
  );
}
export default HomeView;

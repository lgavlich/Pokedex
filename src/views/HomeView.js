import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Row } from "react-bootstrap";
import PokemonCard from "../components/PokemonCard/PokemonCard";
import { getPokemon, getPokemons } from "../services/pokemon-api";

const allPokemons = 1126;
const limit = 50;

function HomeView() {
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

  useEffect(() => {
    if (pokemons?.length === 0) {
      fetchData();
    }
  }, []);

  
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
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </Row>
      </InfiniteScroll>
    </section>
  );
}
export default HomeView;

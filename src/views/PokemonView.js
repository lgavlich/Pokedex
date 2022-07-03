import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPokemon } from "../services/pokemon-api";
import getPokemonImage from "../utils/getPokemonImage";
import pokemonsOperations from "../redux/pokemon-operations";
import { useDispatch, useSelector } from "react-redux";
import getVisiblePokemons from "../redux/pokemon-selector";
import { deleteFavoritePokemonSuccess } from "../redux/pokemon-actions";

import s from "./PokemonView.module.css";

function PokemonView() {
  const { name: PokemonName } = useParams();

  const [pokemon, setPokemon] = useState(null);

  const [isPokemonFavorite, setIsPokemonFavorite] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 

  const favoritePokemons = useSelector(getVisiblePokemons.getFavoritePokemons);
  useEffect(() => {
    async function fetchData() {
      const { id, weight, height, name, types, stats, sprites } =
        await getPokemon(PokemonName);
      setPokemon({
        sprite: getPokemonImage(sprites),
        id,
        weight,
        height,
        name,
        types,
        stats,
      });
    }
    fetchData();
  }, [PokemonName]);
  useEffect(() => {
    const isFavorite = pokemon
      ? favoritePokemons.find((el) => el.id === pokemon.id)
      : false;
    if (isFavorite) {
      setIsPokemonFavorite(true);
      return;
    }
    setIsPokemonFavorite(false);
  }, [favoritePokemons, pokemon]);

  const addFavorite = (pokemon) => {
    dispatch(pokemonsOperations.addFavoritePokemon(pokemon));
  };
  const removeFromFavorite = (id) => {
    dispatch(deleteFavoritePokemonSuccess(id));
  };
  return (
    <>
      {pokemon && (
        <div className={s.container}>
          <div className={s.pokemon_container}>
            <div className={s.container_name}>
              <h1 className={s.pokemon_name}>
                {pokemon.name}
                <span> Nº{String(pokemon.id).padStart(3, 0)}</span>
              </h1>
              <button
                className={s.btn}
                type="button"
                onClick={() => navigate("/")}
              >
                Go back
              </button>
              <div className={s.btn_wrapper}></div>
            </div>
            <img
              className={s.image}
              src={`${pokemon.sprite}`}
              alt={`${pokemon.name}`}
            />
            <div className={s.container_info}>
              <div>
                Types:
                {pokemon.types.map(({ type }) => (
                  <div key={type.name} className={`${type.name}`}>
                    {type.name}
                  </div>
                ))}
              </div>

              <div>
                Weight: <span>{pokemon.weight / 10} kg</span>
              </div>
              <div>
                Height: <span>{pokemon.height / 10} m</span>
              </div>

              {pokemon.stats.map(({ base_stat, stat }) => {
                const { name } = stat;

                return (
                  <div className={s.container_stat} key={name}>
                    {name}: <span>{base_stat}</span>
                  </div>
                );
              })}
            </div>
            {isPokemonFavorite ? (
              <button className={s.delete}
                type="button"
                onClick={() => removeFromFavorite(pokemon.id)}
              >
                delete
              </button>
            ) : (
              <button className={s.add} type="button" onClick={() => addFavorite(pokemon)}>
               add
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
export default PokemonView;

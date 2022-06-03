import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPokemon } from "../services/pokemon-api";
import getPokemonImage from "../utils/getPokemonImage";
import s from "./PokemonView.module.css";

function PokemonView() {
  const { name: PokemonName } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const navigate = useNavigate();

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
                  <div id="pokemon-type" className={`${type.name}`}>
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
          </div>
        </div>
      )}
    </>
  );
}
export default PokemonView;

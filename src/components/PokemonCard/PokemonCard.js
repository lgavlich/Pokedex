import React from "react";
import { useEffect } from "react";
import { useInsertionEffect } from "react";
import { useNavigate } from "react-router-dom";
import getPokemonImage from "../../utils/getPokemonImage";
import s from "./PokemonCard.module.css";

function PokemonCard(icons) {
  const navigate = useNavigate();
  const elTypes = icons.types.map((typesInfo) => typesInfo.type.name);
  useEffect(() => {
    async function Input({ onFormSubmit }) {
      const [pokemon, setPokemon] = useState("");
      const [Id, setId] = useState("");
  
      const pokemonID = pokemon.id;

      const inputValue = (event) => {
        const { pokemon, value } = event.target;
        switch (pokemon) {
          case "pokemon":
            setPokemon(value);
            break;

          case "Id":
            setId(value);
            break;

          default:
            return;
        }
      };

      const addPokemon = (event) => {
        event.preventDefault();

        onFormSubmit({ name: pokemon, pokemonId: pokemonID });
        formReset();
      };

      const formReset = () => {
        setPokemon("");
    
      };
  
      return (
        <div className={s.card} onClick={() => navigate(`/pokemon/${icons.name}`)}>
          <img
            className={s.pokemon_img}
            src={`${getPokemonImage(icons.sprites)}`}
            alt={`${icons.name}`}
          />
          <h2 className={s.pokemon_name}>{`${icons.id}. ${icons.name}`}</h2>
          <p className={s.pokemon_title}>{`${elTypes.join(" | ")}`}</p>
          <div className={s.Container}>
            <form className={s.form} onSubmit={addPokemon}>
              <label className={s.formItem}>
                Pokemon{" "}
                <input
                  type="text"
                  name="name"
                  value={pokemon}
                  onChange={inputValue}
                />
              </label>
              <label className={s.formItem}>
                ID{" "}
                <input
                  type="id"
                  name="number"
           
                  value={Id}
                  onChange={inputValue}
                />
              </label>
              <button type="submit" className={s.button}>
                Add pokemon
              </button>
            </form>
          </div>
        </div>
      );
    }
  
export default PokemonCard;

import React from "react";
import { useNavigate } from "react-router-dom";
import getPokemonImage from "../../utils/getPokemonImage";
import s from "./PokemonCard.module.css";

function PokemonCard(icons) {
  const navigate = useNavigate();
  const elTypes = icons.types.map((typesInfo) => typesInfo.type.name);
  return (
    <div
      className={`pokemon ${elTypes[0]}`}
      onClick={() => navigate(`/pokemon/${icons.name}`)}
    >
      <img
        className={s.pokemon_img}
        src={`${getPokemonImage(icons.sprites)}`}
        alt={`${icons.name}`}
      />
      <h2 className={s.pokemon_name}>{`${icons.id}. ${icons.name}`}</h2>
      <p className={s.pokemon_title}>{`${elTypes.join(" | ")}`}</p>
    </div>
  );
}
export default PokemonCard;

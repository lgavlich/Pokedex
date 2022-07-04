import { useNavigate } from "react-router-dom";
import getPokemonImage from "../../utils/getPokemonImage";
import s from "./PokemonCard.module.css";

function PokemonCard({ pokemon }) {
  const navigate = useNavigate();

  const elTypes = pokemon?.types?.map((typesInfo) => typesInfo.type.name);


  return (
    <div
      className={s?.card}
      onClick={() => navigate(`/pokemon/${pokemon.name}`)}
    >
      <img
        className={s.pokemon_img}
        src={
          pokemon.hasOwnProperty("sprites")
            ? `${getPokemonImage(pokemon.sprites)}`
            : pokemon?.sprite
        }
        alt={`${pokemon.name}`}
      />
      <h2 className={s?.pokemon_name}>{`${pokemon?.id}. ${pokemon?.name}`}</h2>
      <p className={s?.pokemon_title}>{`${elTypes?.join(" | ")}`}</p>
      <div className={s?.Container}>
      </div>
    </div>
  );
}

export default PokemonCard;

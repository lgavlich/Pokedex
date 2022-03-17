import { useLocation } from "react-router-dom";

export default function PokemonCard({ img, name, type }) {
  const location = useLocation();
  console.log(location);
  return (
    <div className="">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
        alt={pokemon.name}
      />
      <div className="">
        <h2>{name}</h2>
        <h3>{type}</h3>
      </div>
    </div>
  );
}

import { useSelector, useDispatch, useEffect } from "react-redux";
import Card from "../components/PokemonCard";
import { getVisiblePokemons } from "../redux/pokemon-selector";
import pokemonsOperations from "../..redux/pokemon-operations";
function FavoritePokemonView() {
  const favoritePokemon = useSelector(getVisiblePokemons);
  const dispatch = useDispatch();

  useEffect(
    () => dispatch(pokemonsOperations.addFavoritePokemon()),
    [dispatch]
  );

  const deletePokemon = (name) =>
    dispatch(pokemonsOperations.deleteFavoritePokemon(name));

  return (
    <div>
      {favoritePokemon.map(({ pokemon }) => (
        <Card
          key={pokemon.name}
          pokemon={pokemon}
          deletePokemon={() => deletePokemon(pokemon)}
        />
      ))}
    </div>
  );
}
export default FavoritePokemonView;

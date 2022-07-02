import { useSelector, useDispatch, useEffect } from "react-redux";
import Card from "../components/PokemonCard";
import selectors from "../redux/pokemon-selector";
import pokemonsOperations from "../..redux/pokemon-operations";
function FavoritePokemonView() {
  const favoritePokemon = useSelector(selectors.getVisiblePokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    async function addFavoritPokemon() {
      const parseFavoritePokemon = JSON.parse(
        await localStorage.getItem("favoritePokemon")
      );
      const parsePage = JSON.parse(await localStorage.getItem);
      dispatch(parsePage);
      if (parseFavoritePokemon !== 0) {
        dispatch(
          pokemonsOperations.addFavoritePokemon(
            parseFavoritePokemon,
            favoritePokemon
          )
        );
      }
    }
    addFavoritPokemon();
  }, []);

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

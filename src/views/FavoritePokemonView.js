import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import PokemonCard from "../components/PokemonCard/PokemonCard";
import getVisiblePokemons from "../redux/pokemon-selector";
import pokemonsOperations from "../redux/pokemon-operations";
import { Row, Col } from "react-bootstrap";
function FavoritePokemonView() {
  const favoritePokemon = useSelector(getVisiblePokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    async function addFavoritePokemon() {
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
    addFavoritePokemon();
  }, []);

  const deletePokemon = (name) =>
    dispatch(pokemonsOperations.deleteFavoritePokemon(name));

  return (
    <div>
      <Row>
        {favoritePokemon.map(({ pokemon }) => (
          <Col key={pokemon.name}>
            <PokemonCard
              key={pokemon.name}
              pokemon={pokemon}
              deletePokemon={() => deletePokemon(pokemon)}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default FavoritePokemonView;

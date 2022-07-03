import {
  addFavoritePokemonRequest,
  fetchPokemonRequest,
  fetchPokemonSuccess,
  fetchPokemonError,
  deleteFavoritePokemonRequest,
  deleteFavoritePokemonSuccess,
  deleteFavoritePokemonError,
} from "./pokemon-actions";

const fetchPokemons = () => async (dispatch) => {
  dispatch(fetchPokemonRequest());
  try {
    dispatch(fetchPokemonSuccess());
  } catch (error) {
    dispatch(fetchPokemonError(error));
  }
};
const addFavoritePokemon = (pokemon) => async (dispatch) => {
  dispatch(addFavoritePokemonRequest(pokemon));

};
const deleteFavoritePokemon = (id, favoritePokemon) => async (dispatch) => {
  dispatch(deleteFavoritePokemonRequest());
  try {
    dispatch(deleteFavoritePokemonSuccess(id, favoritePokemon));
  } catch (error) {
    dispatch(deleteFavoritePokemonError(error));
  }
};

const pokemonsOperations = {
  fetchPokemons,
  addFavoritePokemon,
  deleteFavoritePokemon,
};
export default pokemonsOperations;

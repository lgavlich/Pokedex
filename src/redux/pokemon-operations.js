import {
  addFavoritePokemonRequest,
  addFavoritePokemonSuccess,
  addFavoritePokemonError,
  fetchPokemonRequest,
  fetchPokemonSuccess,
  fetchPokemonError,
  deleteFavoritePokemonRequest,
  deleteFavoritePokemonSuccess,
  deleteFavoritePokemonError,
} from "./pokemon-actions";
import axios from "axios";

const fetchPokemons = () => async (dispatch) => {
  dispatch(fetchPokemonRequest());
  try {
    dispatch(fetchPokemonSuccess());
  } catch (error) {
    dispatch(fetchPokemonError(error));
  }
};
const addFavoritePokemon = (pokemon, favoritePokemon) => async (dispatch) => {
  //const pokemons = { name: pokemon.name, id: pokemon.id };
  dispatch(addFavoritePokemonRequest(pokemon, favoritePokemon));
  try {
    const { pokemon } = await axios.post("/pokemons, pokemons");
    dispatch(addFavoritePokemonSuccess(pokemon));
  } catch (error) {
    dispatch(addFavoritePokemonError(error));
  }
};
const deleteFavoritePokemon = (name, favoritePokemon) => async (dispatch) => {
  dispatch(deleteFavoritePokemonRequest());
  try {
    dispatch(deleteFavoritePokemonSuccess(name, favoritePokemon));
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

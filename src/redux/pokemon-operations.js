import axios from "axios";

import {
  addFavoritePokemonRequest,
  addFavoritePokemonSuccess,
  addFavoritePokemonError,
  removePokemonRequest,
  removePokemonSuccess,
  removePokemonError,
  deleteFavoritePokemonRequest,
  deleteFavoritePokemonSuccess,
  deleteFavoritePokemonError,
} from "/pokemon-actions";

export const addFavoritePokemon = (pokemon, favoritePokemon) => (dispatch) => {
  dispatch(addFavoritePokemonRequest());

  axios
    .post("/pokemon", favoritePokemon)
    .then(({ data }) => dispatch(addFavoritePokemonSuccess(data)))
    .catch((error) => dispatch(addFavoritePokemonError(error)));
};

export const removePokemon = (name) => (dispatch) => {
  dispatch(removePokemonRequest());

  axios
    .delete(`/pokemon/${name}`)
    .then(() => dispatch(removePokemonSuccess(name)))
    .catch((error) => dispatch(removePokemonError(error)));
};
export const deleteFavoritePokemon = (name, favoritePokemons) => (dispatch) => {
  dispatch(deleteFavoritePokemonRequest());
  axios
    .delete(`/pokemon/${name}`)
    .then(() => dispatch(deleteFavoritePokemonSuccess(name, favoritePokemons)))
    .catch((error) => dispatch(deleteFavoritePokemonError(error)));
};

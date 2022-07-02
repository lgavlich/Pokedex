import {
  addFavoritePokemonRequest,
  // addFavoritePokemonSuccess,
  // addFavoritePokemonError,
  removePokemonRequest,
  // removePokemonSuccess,
  // removePokemonError,
  deleteFavoritePokemonRequest,
  // deleteFavoritePokemonSuccess,
  // deleteFavoritePokemonError,
} from "./pokemon-actions";

export const addFavoritePokemon = (pokemon) => (dispatch) => {
  dispatch(addFavoritePokemonRequest(pokemon));
  // axios
  //   .post("/pokemon", favoritePokemon)
  //   .then(({ data }) => dispatch(addFavoritePokemonSuccess(data)))
  //   .catch((error) => dispatch(addFavoritePokemonError(error)));
};

export const removePokemon = (pokemon) => (dispatch) => {
  dispatch(removePokemonRequest(pokemon));

  //   axios
  //     .delete(`/pokemon/${name}`)
  //     .then(() => dispatch(removePokemonSuccess(name)))
  //     .catch((error) => dispatch(removePokemonError(error)));
};
export const deleteFavoritePokemon =
  (pokemon, addFavoritePokemon) => (dispatch) => {
    dispatch(deleteFavoritePokemonRequest(pokemon, addFavoritePokemon));
    //   axios
    //     .delete(`/pokemon/${name}`)
    //     .then(() => dispatch(deleteFavoritePokemonSuccess(name, favoritePokemons)))
    //     .catch((error) => dispatch(deleteFavoritePokemonError(error)));
  };

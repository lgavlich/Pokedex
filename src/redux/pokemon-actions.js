import { createAction } from "@reduxjs/toolkit";
export const addFavoritePokemonRequest = createAction(
  "pokemon/addFavoritePokemonRequest"
);
export const addFavoritePokemonSuccess = createAction(
  "pokemon/addFavoritePokemonSuccess"
);
export const addFavoritePokemonError = createAction(
  "pokemon/addFavoritePokemonError"
);
export const fetchPokemonRequest = createAction("pokemon/fetchPokemonRequest");
export const fetchPokemonSuccess = createAction("pokemon/fetchPokemonSuccess");
export const fetchPokemonError = createAction("pokemon/fetchPokemonError");

export const deleteFavoritePokemonRequest = createAction(
  "pokemon/deleteFavoritePokemonRequest"
);
export const deleteFavoritePokemonSuccess = createAction(
  "pokemon/deleteFavoritePokemonSuccess"
);
export const deleteFavoritePokemonError = createAction(
  "pokemon/deleteFavoritePokemonError"
);
export const changeFilter = createAction("pokemon/changeFilter");

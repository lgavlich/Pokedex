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
export const removePokemonRequest = createAction(
  "pokemon/removePokemonRequest"
);
export const removePokemonSuccess = createAction(
  "pokemon/removePokemonSuccess"
);
export const removePokemonError = createAction("pokemon/removePokemonError");

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

import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addFavoritePokemonRequest,
  fetchPokemonSuccess,
  deleteFavoritePokemonSuccess,
  changeFilter,
} from "./pokemon-actions";

const favoritePokemon = createReducer([], {
  [addFavoritePokemonRequest]: (state, { payload }) => [...state, payload],
  [deleteFavoritePokemonSuccess]: (_, { payload }) => payload,
  [fetchPokemonSuccess]: (state, { payload }) =>
    state.filter(({ name }) => name !== payload),
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  favoritePokemon,
  filter,
});

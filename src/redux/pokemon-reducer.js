import { combineReducer } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addFavoritePokemonSuccess,
  removePokemonSuccess,
  deleteFavoritePokemonSuccess,
  changeFilter,
} from "/pokemon-actions";

const favoritePokemon = createReducer([], {
  [addFavoritePokemonSuccess]: (state, { payload }) => [...state, payload],
  [deleteFavoritePokemonSuccess]: (_, { payload }) => payload,
  [removePokemonSuccess]: (state, { payload }) =>
    state.filter(({ name }) => name !== payload),
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducer({
  favoritePokemon,
  filter,
});

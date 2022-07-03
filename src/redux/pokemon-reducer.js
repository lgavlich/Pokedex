import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addFavoritePokemonRequest,

  deleteFavoritePokemonSuccess,
  changeFilter,
} from "./pokemon-actions";

const favoritePokemon = createReducer([], {
  [addFavoritePokemonRequest]: (state, { payload }) => {
    const filtered = state.filter((el) => el.id !== payload.id);
    return [...filtered, payload];
  },
  [deleteFavoritePokemonSuccess]: (state, { payload }) =>
    state.filter((el) => el.id !== payload),
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  favoritePokemon,
  filter,
});

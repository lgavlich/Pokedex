import { createSelector } from "reselect";

export const getAllPokemons = (state) => state.allPokemon.pokemon;
export const getFavoritePokemon = (state) => state.favoritePokemon.pokemon;
export const getVisiblePokemons = createSelector([
  getAllPokemons,
  getFavoritePokemon,
]);

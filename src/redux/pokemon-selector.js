const getAllPokemons = (state) => state.allPokemon.pokemon;
const getFavoritePokemon = (state) => state.favoritePokemon.pokemon;

const getVisiblePokemons = { getFavoritePokemon, getAllPokemons };
export default getVisiblePokemons;

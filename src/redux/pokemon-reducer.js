import { GET_POKEMONS, GET_POKEMON, CHANGE_FILTER } from "./pokemon-actions";
const initialState = {
  pokemons: [],
  pokemon: {},
  loading: true,
};

const pokemons = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        loading: false,
      };
    case GET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

const changeFilter = (state = "ALL", action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  pokemons,
  changeFilter,
};

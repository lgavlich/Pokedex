import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export function fetchPokemon(url) {
    return axios
        .get(url)
        .then((response) => {
            return response.data;
        });
}
 
export function fetchAllPokemon() {
        .get(BASE_URL)
        .then((response) => {
            return response.data;
        });
}

export function fetchNamePokemon(name) {
    .get(`${BASE_URL}/${name}`)
    .then((response) => {
            return response.data;
        });
}


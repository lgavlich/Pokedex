import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
export default function PokemonList({ pokemons }) {
  //const { url } = useRouteMatch();
  const location = useLocation();
  console.log(location);
  return (
    <ul>
      {pokemons.map(({ id, original_title }) => (
        <li key={id}>
          <Link
            to={
              {
                // pathname: `${url}/${id}`,
                //state: { from: location },
              }
            }
          ></Link>
        </li>
      ))}
    </ul>
  );
}

PokemonList.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

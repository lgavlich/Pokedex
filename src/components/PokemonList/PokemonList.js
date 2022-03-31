import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

export default function PokemonList({ pokemons }) {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <ul>
        {pokemons.map(({ id, name }) => (
          <li key={id}>
            {/* <Link to={`${url}/${id}`}>{original_title}</Link> */}
            <Link
              to={{
                pathname: `/pokemons/${id}`,
                state: { from: location },
              }}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
};

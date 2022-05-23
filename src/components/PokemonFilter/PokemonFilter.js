import React from "react";
import PropTypes from "prop-types";
import pokeTypes from "../../utils/pokeTypes";

export default function PokemonFilter({ handleChange }) {
  <div className="text-center">
    <select name="type" onChange={handleChange}>
      <option value="ALL">ALL</option>
      {pokeTypes.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  </div>;
}

PokemonFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

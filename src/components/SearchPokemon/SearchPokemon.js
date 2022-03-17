import { useState } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

export default function SearchPokemon({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleSearchPokemon = (e) => {
    setValue(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim() === "") {
      return toast.error("Enter correct request!");
    }
    onSubmit(value);
    formReset();
  };

  const formReset = () => {
    setValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="SearchForm">
        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          value={value}
          autoFocus
          placeholder="Search pokemon"
          onChange={handleSearchPokemon}
        />
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
      </form>
    </div>
  );
}

SearchPokemon.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

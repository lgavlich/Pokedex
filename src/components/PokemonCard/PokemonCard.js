import React from "react";
import { Link } from "react-router-dom";
//import Image from "next/image";
import PropTypes from "prop-types";
import { colorPicker } from "../../utils/color";
import { showPokemonId } from "../../utils/showPokemonId";

const PokemonCard = ({ pokemon }) => {
  const pokemonColor = colorPicker(pokemon.types[0].type.name);
  return (
    <Link href={`/${pokemon.id}`} passHref>
      <div className="">
        <div className="">
          <div className={` ${pokemonColor}`}>
            <img
              width={200}
              height={200}
              className=" "
              src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
              alt={pokemon.name}
            />
          </div>

          <div className="">{showPokemonId(pokemon.id)}</div>
          <div>
            <div className=" ">{pokemon.name}</div>

            <div className="">Type: </div>
            <div className="text-lg ">
              {pokemon.types.map((type) => (
                <span
                  key={type.type.name}
                  className={`rounded-lg mb-4 flex  p-2 mx-1  ${colorPicker(
                    type.type.name
                  )}`}
                >
                  #{type.type.name}
                </span>
              ))}
            </div>
          </div>

          <div className="">Abilities: </div>
          <div className="text-lg  flex text-gray-800">
            {pokemon.abilities.map((data) => (
              <span key={data.ability.name} className=" ">
                #{data.ability.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    types: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.shape({
          name: PropTypes.string,
        }),
      })
    ),
    name: PropTypes.string,
    abilities: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
  }).isRequired,
};
export default PokemonCard;

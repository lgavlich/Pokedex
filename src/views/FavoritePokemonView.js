import { useSelector } from "react-redux";
import PokemonCard from "../components/PokemonCard/PokemonCard";
import getVisiblePokemons from "../redux/pokemon-selector";
import { Col, Row } from "react-bootstrap";
import s from "./FavoritePokemonView.module.css";
function FavoritePokemonView() {
  const favoritePokemon = useSelector(getVisiblePokemons.getFavoritePokemons);
  
  return (
    <Row>
      <div className={s.favorite_container}>
        {favoritePokemon.length > 0 &&
          favoritePokemon.map((pokemon) => (
            <Col key={pokemon.name}>
              <PokemonCard key={pokemon.name} pokemon={pokemon} />
            </Col>
          ))}
      </div>
    </Row>
  );
}

export default FavoritePokemonView;

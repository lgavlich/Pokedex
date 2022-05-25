import { Route, Routes } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";
import HomeView from "./views/HomeView";
import PokemonView from "./views/PokemonView";
import FavoritePokemonView from "./views/FavoritePokemonView";

export default function App() {
  return (
    <Container>
      <AppBar />

      <Routes>
        <Route path="/" exact>
          <HomeView />
        </Route>

        <Route path="/Pokemon">
          <PokemonView />
        </Route>

        <Route path="/favorite">
          <FavoritePokemonView />
        </Route>
      </Routes>
    </Container>
  );
}

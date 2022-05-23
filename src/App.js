import { Routes, Route } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import MoviesPage from "./views/MoviesPage/MoviesPage";

export default function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<PokemonCard />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </>
  );
}

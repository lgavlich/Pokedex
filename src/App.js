import { Route, Routes } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
//import Container from "./components/Container/Container";
import HomeView from "./views/HomeView/HomeView";
import PokemonView from "./views/PokemonView/PokemonView";

export default function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" exact element={<HomeView />} />

        <Route path="/pokemon/:name" element={<PokemonView />} />
      </Routes>
    </>
  );
}

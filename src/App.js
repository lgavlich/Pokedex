import { Route, Routes } from "react-router-dom";

//import { Suspense } from "react";
import AppBar from "./components/AppBar/AppBar";
import HomeView from "./views/HomeView";
import PokemonView from "./views/PokemonView";

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

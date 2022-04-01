import { Routes, Route } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import HomePage from "./views/HomePage/HomePage";
import MoviesPage from "./views/MoviesPage/MoviesPage";

export default function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

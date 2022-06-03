import Navigation from "../Navigation/Navigation";
import s from "./AppBar.module.css";

export default function AppBar() {
  return (
    <header>
      <h1 className={s.title}>Pokédex</h1>
      <Navigation />
    </header>
  );
}

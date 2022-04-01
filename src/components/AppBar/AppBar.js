import s from "../AppBar/AppBar.module.css";
import Navigation from "../Navigation/Navigation";

export default function AppBar() {
  return (
    <header className={s.header}>
      <Navigation />
    </header>
  );
}

import { NavLink } from "react-router-dom";
import s from "../Navigation/nav.module.css";

export default function Navigation() {
  <nav>
    <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
      HomePage
    </NavLink>
    <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}>
      MoviesPage
    </NavLink>
  </nav>;
}

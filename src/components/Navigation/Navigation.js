import { NavLink } from "react-router-dom";
import s from "../Navigation/Navigation.module.css";

const Navigation = () => (
  <nav className={s.nav}>
    <ul className={s.list}>
      <li className={s.item}>
        <NavLink
          to="/"
          exact
          className={s.link}
          activeClassName={s.link__active}
        >
          Pokemon
        </NavLink>
      </li>
      <li className={s.item}>
        <NavLink
          to="/favorite"
          className={s.link}
          activeClassName={s.link__active}
        >
          Favorite
        </NavLink>
      </li>
    </ul>
  </nav>
);
export default Navigation;

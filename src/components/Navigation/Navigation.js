import { useNavigate } from "react-router-dom";
import s from "../Navigation/nav.module.css";

export default function Navigation() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")} type="button" className={s.link}>
        HomePage
      </button>
      <button
        onClick={() => navigate("/movies")}
        type="button"
        className={s.link}
      >
        MoviesPage
      </button>
    </div>
  );
}

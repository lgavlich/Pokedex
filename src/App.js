import { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Container from "./components/Container/Container.js";
import AppBar from "./components/AppBar/AppBar.js";
//const HomePage = lazy(() => import("./views/HomePage/HomePage.js"));
//const MoviesPage = lazy(() => import("./views/MoviesPage/MoviesPage.js"));
//const MovieDetailsPage = lazy(() =>
// import("./views/MovieDetailsPage/MovieDetailsPage.js")
//);

export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Container>
  );
}

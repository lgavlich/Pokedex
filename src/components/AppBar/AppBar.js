import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
//import s from "../AppBar/AppBar.module.css";
import { Container } from "react-bootstrap";

export default function AppBar() {
  return (
    <header className="{s.header}">
      <Container fluid>
        <div className="">
          <Link to="/">
            <img title="Go to home" alt="Go to home" src={logo} />
          </Link>
        </div>
      </Container>
    </header>
  );
}
//import Navigation from "../Navigation/Navigation";

//export default function AppBar() {
//return (
//  <header className={s.header}>
//     <Navigation />
//   </header>
// );
//}

import React from "react";
import logoImg from "../../assets/images/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <header>
        <nav id="navbar">
          <div className="nav-brand">
            <Link to="/">
              <img src={logoImg} alt="" />
            </Link>
          </div>
          <ul className="nav-list">
            <li>
              <Link to="/">ÍNICIO</Link>
            </li>
            <li>
              <Link to="/lojas">LOJAS</Link>
            </li>
            <li>
              <Link to="/reciclagem">RECICLAGEM</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;

import React from "react";
import LOGO from "../assets/logo.png";
import CART from "../assets/cart.png";
import NAP from "../assets/nap.png";
import PUFF from "../assets/puff.png";
import RAIN from "../assets/rain.png";
import { SlArrowDown } from "react-icons/sl";

import "../styles/Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar-container">
      <span>
        <img src={LOGO} alt="logo pufi" />
      </span>
      <div className="navbar-links">
        <a className="link" href="#puff">
          <img src={PUFF} alt="logo pufi" />
          PUFI PUFF
        </a>
        <a href="#rain">
          <img src={RAIN} alt="logo pufi" />
          PUFI RAIN
        </a>
        <a href="#cart">
          <img src={CART} alt="logo pufi" />
          PUFI CART
        </a>
        <a href="#nap">
          <img src={NAP} alt="logo pufi" />
          PUFI NAP
        </a>
      </div>
      <div className="navbar-buttons">
        <button>
          MI CUENTA <SlArrowDown />
        </button>
        <button>MI COMPRA</button>
      </div>
    </nav>
  );
}

export default Navbar;

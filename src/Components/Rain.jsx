import React from "react";
import UMBRELLA from "../assets/umbrella.png";

import "../styles/Rain.scss";

function Rain() {
  return (
    <section id="rain" className="rain-container">
      <div>
        <button>SHOP</button>
        <div></div>
      </div>
      <div>
        <img src={UMBRELLA} alt="un paraguas" />
        <h2>Pufi RAIN</h2>
        <p>Descripción del producto. Este es un texto simulado</p>

        <a href="·">{"> ver mas"}</a>
      </div>
    </section>
  );
}

export default Rain;

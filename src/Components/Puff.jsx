import React from "react";
import PUFFPERSON from "../assets/puffInflable.png";

import "../styles/Puff.scss";

function Puff() {
  return (
    <section id="puff" className={"section-container"}>
      <div>
        <div></div>
      </div>
      <div>
        <img src={PUFFPERSON} alt="persona en un puff inflable" />
        <h2>Pufi PUFF</h2>
        <p>Descripción del producto. Este es un texto simulado</p>

        <a href="·">{"> ver mas"}</a>
      </div>
    </section>
  );
}

export default Puff;

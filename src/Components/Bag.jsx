import React from "react";

import BAG from "../assets/womenWhitBag.jpeg";
import NAPBAG from "../assets/napBag.png";

function Bag() {
  return (
    <section id="nap" className="section-container">
      <div
        style={{ background: `url(${BAG})`, backgroundSize: " cover" }}
      ></div>
      <div>
        <img src={NAPBAG} alt="carteras" />
        <h2>Pufi NAP</h2>
        <p>Descripción del producto. Este es un texto simulado</p>

        <a href="·">{"> ver mas"}</a>
      </div>
    </section>
  );
}

export default Bag;

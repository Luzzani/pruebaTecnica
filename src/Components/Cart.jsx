import React from "react";
import BAGCAR from "../assets/bagCar.jpeg";
import CART from "../assets/cartImage.png";

function Cart() {
  return (
    <section id="cart" className="rain-container">
      <div
        style={{ background: `url(${BAGCAR})`, backgroundSize: " cover" }}
      ></div>
      <div>
        <img src={CART} alt="carteras"/>
        <h2>Pufi CART</h2>
        <p>Descripción del producto. Este es un texto simulado</p>
        <a href="·">{"> ver mas"}</a>
      </div>
    </section>
  );
}

export default Cart;

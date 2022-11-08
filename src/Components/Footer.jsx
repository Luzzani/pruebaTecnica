import React from "react";

import LOGO from "../assets/logoFooter.png";
import QR from "../assets/QR.png";
import SAFE from "../assets/purchase.png";
import BRAND from "../assets/brand.png";

import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

import "../styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div>
        <img src={LOGO} alt="logo Pufi" />
        <ul>
          <li>
            {" "}
            <a href="#rain"> PUFI RAIN</a>
          </li>
          <li>
            {" "}
            <a href="#puff"> PUFI PUFF</a>
          </li>
          <li>
            {" "}
            <a href="#cart"> PUFI CART</a>
          </li>
          <li>
            {" "}
            <a href="#nap"> PUFI NAP</a>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <a href="#"> CONTACTO</a>
          </li>
          <li>
            {" "}
            <a href="#"> AYUDA</a>
          </li>
          <li>
            {" "}
            <a href="#"> CÓMO COMPRAR</a>
          </li>
          <li>
            {" "}
            <a href="#"> TÉRMINOS & CONDICIONES</a>
          </li>
        </ul>
        <ul>
          <li>COMPRA 100% SEGURA</li>
          <li>
            <img src={QR} alt="código QR" />
            <img src={SAFE} alt="Escudo compra segura" />
            <span>
              COMPRÁ CON <br /> LA GARANTÍA <br /> DE PUFI
            </span>
          </li>
        </ul>
        <div>
          <span>
            SEGUINOS EN <FaFacebookF />
            <AiOutlineTwitter />
            <AiFillInstagram />
          </span>
        </div>
      </div>
      <div>
        <p>PUFI Copyright 2017 - Todos los derechos reservados</p>
        <img src={BRAND} alt="brand" />
      </div>
    </footer>
  );
}

export default Footer;

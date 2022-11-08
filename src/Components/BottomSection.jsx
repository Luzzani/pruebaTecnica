import { useState } from "react";
import { useDispatch } from "react-redux";
import { setInputEmail } from "../redux/action";

import FOTO1 from "../assets/collage1.jpg";
import FOTO2 from "../assets/collageparaguas.jpeg";
import FOTO3 from "../assets/womenWhitBag.jpeg";
import FOTO4 from "../assets/personasEnPuff.jpg";
import FOTO5 from "../assets/gente-bajo-los-paraguas.png";
import FOTO6 from "../assets/homeImage.jpg";

import { AiOutlineArrowRight } from "react-icons/ai";

import "../styles/BottomSection.scss";

var regex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function BottomSection() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");

  const changeHandler = (e) => {
    e.preventDefault();

    setEmail(e.target.value);
    setError("");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!email.toLowerCase().match(regex)) {
      setError("Ingrese un correo válido");
      return;
    } else {
      dispatch(setInputEmail(email));
      setError("");
      setEmail("");
    }
  };

  return (
    <section className="bottom-container">
      <div>
        <span>INSTAGRAM</span>
        <h3>#ESPUFI</h3>
      </div>
      <div className="collage-image">
        <img src={FOTO1} alt="" />
        <img src={FOTO2} alt="" />
        <img src={FOTO3} alt="" />
        <img src={FOTO4} alt="" />
        <img src={FOTO5} alt="" />
        <img src={FOTO6} alt="" />
      </div>
      <div>
        <span>NEWSLETTER</span>
        <h3>SUSCRIBITE</h3>
        <h4>Y enterate de todas las novedades</h4>
        <form onSubmit={submitHandler}>
          <input
            className={error !== "" ? "error" : ""}
            type="text"
            onChange={changeHandler}
            placeholder="Ingresa tu email"
          />
          <button>
            <AiOutlineArrowRight />
          </button>
          <b>{error}</b>
        </form>
      </div>
    </section>
  );
}

export default BottomSection;

import "./index.css";
import logo from "../imagens/logo.png";
import { ImExit } from "react-icons/im";
import { FiUser } from "react-icons/fi"
import { TiShoppingCart } from "react-icons/ti";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Header() {

  const [open, setOpen] = useState(false);

  return (

    <header className="cabecalho">
      <img src={logo} alt="logo" className="logo" />
      <FaBars className="menu-icon" onClick={() => setOpen(!open)} />
      
      <div className="nav-container">
        <nav className={`nav ${open ? "active" : ""}`}>
          <a href="#">RIVEN SALE</a>
          <a href="#">ÚLTIMAS UNIDADES</a>
          <a href="#">MASCULINO</a>
          <a href="#">FEMININO</a>
          <a href="#">LANÇAMENTOS</a>
        </nav>

      </div>


      <div className="acoes">

        <TiShoppingCart className="i-cart" />
        <FiUser className="i-user" />
        <ImExit className="i-exit" />
      </div>
    </header>


  );
}
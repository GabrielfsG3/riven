import "./index.css";
import { ImExit } from "react-icons/im";
import { FiUser } from "react-icons/fi"
import { TiShoppingCart } from "react-icons/ti";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";



export default function Header() {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);

    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`header-wrapper ${scrolled ? "scrolled" : "top"}`}>
      <header className="cabecalho">
        <img src="/imagens/logo.png" alt="logo" className="logo" />
        <FaBars className="menu-icon" onClick={() => setOpen(!open)} />

        <div className="nav-container">
          <nav className={`nav ${open ? "active" : ""}`}>
            <a href="#">RIVEN SALE</a>
            <a href="#">ÚLTIMAS UNIDADES</a>
            <a href="#">MASCULINO</a>
            <a href="#">FEMININO</a>
            <a href="#album">LANÇAMENTOS</a>
          </nav>

        </div>


        <div className="acoes">

          <TiShoppingCart className="i-cart" />
          <FiUser className="i-user" />
          <ImExit className="i-exit" />
        </div>
      </header>
    </div>



  );
}
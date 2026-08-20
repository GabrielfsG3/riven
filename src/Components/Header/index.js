import "./index.css";
import { ImExit } from "react-icons/im";
import { FiUser } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";
import { useState, useContext } from "react";
import { FaBars } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header() {

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className={`header-wrapper `}>
      <header className="cabecalho">

        <FaBars className="menu-icon" onClick={() => setOpen(!open)} />

        <img src="/imagens/logo.webp" alt="logo" className="logo" />

        <nav className={`nav ${open ? "active" : ""}`}>
          <Link to="/ultimas-unidades">ÚLTIMAS UNIDADES</Link>
          <Link to="/masculino">MASCULINO</Link>
          <Link to="/feminino">FEMININO</Link>
          <Link to="/lancamentos">LANÇAMENTOS</Link>
        </nav>

        <div className="acoes">
          <div className="cart-container">
            <TiShoppingCart className="i-cart" onClick={() => navigate("/cart")} />

            {cartCount > 0 && (
              <span className="cart-count">{cartCount}</span>
            )}
          </div>


          <FiUser className="i-user" />
          <ImExit className="i-exit" />
        </div>

      </header>
    </div>
  );
}
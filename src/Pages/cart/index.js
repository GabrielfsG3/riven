import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./index.css";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
  } = useContext(CartContext);

  const total = cart.reduce(
    (acc, item) => acc + item.preco * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1 className="cart-title">Seu Carrinho</h1>

      {cart.length === 0 ? (
        <p className="empty">Seu carrinho está vazio</p>
      ) : (
        <div className="cart-content">

          <div className="cart-items">
            {cart.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.nome} />

                <div className="item-info">
                  <h3>{item.nome}</h3>

                  <div className="quantity-control">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remover
                  </button>
                </div>

                <div className="item-price">
                  R$ {(item.preco * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Resumo</h2>
            <p>Total:</p>
            <span>R$ {total.toFixed(2)}</span>

            <button className="checkout-btn">
              Finalizar Compra
            </button>
          </div>

        </div>
      )}
    </div>
  );
}
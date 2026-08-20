import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./index.css";

export default function ProductCard({ produto }) {
  const [activeImage, setActiveImage] = useState(0);
  const { addToCart } = useContext(CartContext);

  const images = [produto.image].filter(Boolean); // Começa com a imagem principal e filtra valores falsy
  if (produto.image2) images.push(produto.image2);


  const handleNextImage = () => {
    setActiveImage(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrevImage = () => {
    setActiveImage(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleBuy = () => {
    addToCart(produto);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            className={`product-image ${activeImage === idx ? "active" : ""}`}
            alt={produto.nome}
          />
        ))}

        {images.length > 1 && (
          <div className="image-swiper-buttons">
            <button className="swiper-button prev" onClick={handlePrevImage}>‹</button>
            <button className="swiper-button next" onClick={handleNextImage}>›</button>
          </div>
        )}
      </div>

      <div className="product-info">
        <p className="product-name">{produto.nome}</p>
        <p className="product-price">
          {new Intl.NumberFormat("pt-BR", 
          {
          style: "currency",
          currency: "BRL"
        }).format(
          produto.preco)}
          </p>
      </div>

      <div className="buy-button-wrapper">
        <button className="buy-button" onClick={handleBuy}>
          Comprar
        </button>
      </div>
    </div>
  );
}
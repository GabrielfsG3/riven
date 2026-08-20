import Content from "../../Components/Content";
import ProductCard from "../../Components/ProductCard";
import Header from "../../Components/Header";
import "./index.css";
import Search from "../../Components/Search";
import { products } from "../../data/products";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter(produto =>
    produto.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
      <Search search={search} onChange={setSearch} />
      <Content />

      <section className="products">
        <h2 className="products-title">CAMISAS</h2>

        <div className="container">
          <div className="grid">
            {filteredProducts.map(produto => (
              <ProductCard
                key={produto.id}
                produto={produto}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
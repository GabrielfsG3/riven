import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Cart from "../Pages/cart";

import "../App.css";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <div className="App-header">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
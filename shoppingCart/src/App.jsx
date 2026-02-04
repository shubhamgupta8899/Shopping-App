import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Navbar from "./components/Navbar";
import ProductDetailed from "./pages/ProductDetailed";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 font-sans">
        <Navbar  />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetailed />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

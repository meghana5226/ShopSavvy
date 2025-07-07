import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import AddProduct from './components/AddProduct';
import './index.css';

const products = [
  {
    name: "Realme Narzo 60",
   image: "/images/product1.jpg",
    prices: { amazon: "₹13,999", flipkart: "₹14,499", meesho: "₹13,750" },
    links: { amazon: "#", flipkart: "#", meesho: "#" }
  },
  {
    name: "Samsung Galaxy M14",
    image: "/images/product2.jpg",
    prices: { amazon: "₹12,999", flipkart: "₹13,399", meesho: "₹12,450" },
    links: { amazon: "#", flipkart: "#", meesho: "#" }
  },
  {
    name: "Redmi 12 5G",
    image: "/images/product3.jpg",
    prices: { amazon: "₹10,499", flipkart: "₹10,999", meesho: "₹10,250" },
    links: { amazon: "#", flipkart: "#", meesho: "#" }
  },
  {
    name: "iQOO Z7",
    image: "/images/product4.jpg",
    prices: { amazon: "₹16,999", flipkart: "₹17,499", meesho: "₹16,750" },
    links: { amazon: "#", flipkart: "#", meesho: "#" }
  },
  {
    name: "Poco X5 Pro",
    image: "/images/product5.jpg",
    prices: { amazon: "₹19,999", flipkart: "₹20,499", meesho: "₹19,750" },
    links: { amazon: "#", flipkart: "#", meesho: "#" }
  },
  {
    name: "Vivo T2",
    image: "/images/product6.jpg",
    prices: { amazon: "₹14,999", flipkart: "₹15,499", meesho: "₹14,450" },
    links: { amazon: "#", flipkart: "#", meesho: "#" }
  },
  {
    name: "Lava Blaze 5G",
    image: "/images/product7.jpg",
    prices: { amazon: "₹10,999", flipkart: "₹11,299", meesho: "₹10,550" },
    links: { amazon: "#", flipkart: "#", meesho: "#" }
  },
  {
    name: "Motorola G73",
    image: "/images/product8.jpg",
    prices: { amazon: "₹15,999", flipkart: "₹16,499", meesho: "₹15,250" },
    links: { amazon: "#", flipkart: "#", meesho: "#" }
  },
  {
    name: "Infinix Zero 5G",
    image: "/images/product9.jpg",
    prices: { amazon: "₹12,499", flipkart: "₹12,799", meesho: "₹12,250" },
    links: { amazon: "#", flipkart: "#", meesho: "#" }
  },
  {
    name: "Samsung M04",
    image: "/images/product10.jpg",
    prices: { amazon: "₹8,499", flipkart: "₹8,999", meesho: "₹8,250" },
    links: { amazon: "#", flipkart: "#", meesho: "#" }
  }
];

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <section id="products" className="product-section">
                <h2>Top Deals</h2>
                <div className="product-grid">
                  {products.map((p, i) => (
                    <ProductCard key={i} {...p} />
                  ))}
                  
                </div>
              </section>
            </>
          }
        />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
    </Router>
  );
}

export default App;

// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from backend
  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:10000/api/products");
      setProducts(res.data);
    } catch (err) {
      console.error("Fetch error:", err);
      alert("Failed to fetch products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle delete from UI
  const handleDelete = (id) => {
    const updated = products.filter((p) => p._id !== id);
    setProducts(updated);
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">🛍️ All Products</h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          No products found. Use "Add Product" to create one.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;

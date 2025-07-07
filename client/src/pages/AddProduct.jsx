import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    image: "",
    description: "",
    price: "",
    category: "",
    stock: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting product:", product);
    try {
      const res = await axios.post("http://localhost:10000/api/products", product);
      console.log("Response:", res);
      alert("Product added ✅");
      navigate("/");
    } catch (err) {
      console.error("Error:", err.response?.data || err.message);
      alert("Error adding product");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">➕ Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.keys(product).map((key) => (
          <input
            key={key}
            type={key === "price" || key === "stock" ? "number" : "text"}
            name={key}
            value={product[key]}
            onChange={handleChange}
            placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
            required
            className="w-full border p-2 rounded"
          />
        ))}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
import React, { useState } from 'react';

function AddProduct() {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    amazon: '',
    flipkart: '',
    meesho: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product added:', formData);
    alert('Product added successfully!');
    setFormData({
      name: '',
      image: '',
      amazon: '',
      flipkart: '',
      meesho: '',
    });
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="amazon" placeholder="Amazon Price" value={formData.amazon} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="flipkart" placeholder="Flipkart Price" value={formData.flipkart} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="meesho" placeholder="Meesho Price" value={formData.meesho} onChange={handleChange} className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;

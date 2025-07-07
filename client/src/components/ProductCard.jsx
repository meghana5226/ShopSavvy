import React from 'react';
import { motion } from 'framer-motion';

function ProductCard({ image, name, prices, links }) {
  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <div className="prices">
        <div>Amazon: {prices.amazon}</div>
        <div>Flipkart: {prices.flipkart}</div>
        <div>Meesho: {prices.meesho}</div>
      </div>
      <div className="btns">
        <a href={links.amazon} className="buy-btn" target="_blank" rel="noreferrer">Buy on Amazon</a>
        <a href={links.flipkart} className="buy-btn" target="_blank" rel="noreferrer">Buy on Flipkart</a>
        <a href={links.meesho} className="buy-btn" target="_blank" rel="noreferrer">Buy on Meesho</a>
      </div>
    </motion.div>
  );
}

export default ProductCard;

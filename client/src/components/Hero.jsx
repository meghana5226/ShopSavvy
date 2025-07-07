import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, PlusCircle, ChevronsDown } from 'lucide-react';
import { motion } from 'framer-motion';

// Typewriter Effect with blinking cursor
function TypewriterText({ text, speed = 50 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);

    const cursorBlink = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorBlink);
    };
  }, [text, speed]);

  return (
    <span>
      {displayedText}
      <span style={{ opacity: showCursor ? 1 : 0 }} className="text-white">
        |
      </span>
    </span>
  );
}

function Hero() {
  return (
    <div
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/images/background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        position: 'relative',
        color: 'white',
        textAlign: 'center',
      }}
    >
      {/* Glassmorphic Card with Fade-in Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={{
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(15px)',
          borderRadius: '25px',
          padding: '3rem 2rem',
          maxWidth: '800px',
          width: '100%',
          boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
        }}
      >
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-wide"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ShopSavvy
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl mt-6 mb-10 tracking-wider font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <TypewriterText
            text="Compare prices across Amazon, Flipkart, Meesho & save more!"
            speed={45}
          />
        </motion.p>

        {/* Buttons with Pulse Idle Animation */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <motion.a
            href="#products"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="flex items-center justify-center gap-2 px-8 py-3 font-semibold text-white rounded-full shadow-lg transition-all duration-300 bg-gradient-to-r from-purple-500 to-indigo-600 hover:brightness-110 text-lg"
          >
            <ShoppingCart className="w-5 h-5" />
            🛍️ Explore Deals
          </motion.a>

          <motion.div
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
          >
            <Link
              to="/add"
              className="flex items-center justify-center gap-2 px-8 py-3 font-semibold text-white rounded-full shadow-lg transition-all duration-300 bg-gradient-to-r from-orange-400 to-red-500 hover:brightness-110 text-lg"
            >
              <PlusCircle className="w-5 h-5" />
              ➕ Add Product
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Down Icon */}
      <motion.div
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <a href="#products" title="Scroll down">
          <ChevronsDown className="w-8 h-8 text-white opacity-80" />
        </a>
      </motion.div>
    </div>
  );
}

export default Hero;

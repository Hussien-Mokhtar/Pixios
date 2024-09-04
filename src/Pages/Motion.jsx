import React from 'react';
import { motion } from 'framer-motion';
import pink from "../Pixio/blue.png"

const SplashScreen = ({ onClose }) => {
  return (
        
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 5, ease: 'easeInOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
      }}
    >
      <div style={{ position: 'relative' }}>
        <img
          src={pink}
          alt="Splash Screen"
          style={{ width: '100%', height: 'auto', objectFit: 'cover',
          }}
        />
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            backgroundColor: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer'
          }}
        >
          ✕
        </button>
      </div>
    </motion.div>
  );
};

export default SplashScreen;

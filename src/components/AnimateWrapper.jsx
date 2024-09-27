import React from 'react';
import { motion } from 'framer-motion';

// Reusable animation wrapper
const AnimateWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }}  // Final state after animation
      transition={{ duration: 1 }}    // Animation duration
    >
      {children}
    </motion.div>
  );
};

export default AnimateWrapper;

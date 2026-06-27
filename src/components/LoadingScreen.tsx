import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#040810]"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.1, 
        filter: "blur(20px)",
        transition: { duration: 0.8, ease: "easeInOut" } 
      }}
    >
      <div className="relative flex items-center justify-center">
        <svg width="150" height="150" viewBox="0 0 100 100" className="overflow-visible">
          {/* First P */}
          <motion.path
            d="M 20 20 V 80 M 20 20 H 45 C 60 20 60 50 45 50 H 20"
            fill="none"
            stroke="#4f8ef7"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          {/* Second P */}
          <motion.path
            d="M 55 20 V 80 M 55 20 H 80 C 95 20 95 50 80 50 H 55"
            fill="none"
            stroke="#7c3aed"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
          />
        </svg>
        
        <motion.div 
          className="absolute inset-0 bg-accent-blue/10 blur-[100px] rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;

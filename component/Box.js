import React from "react";
import { motion } from "framer-motion";

const Box = ({ width, height, title, children }) => {
  return (
    <motion.div
      style={{
        width: width || 'auto',
        height: height || 'auto',
        backgroundColor: "rgba(31, 41, 55, 0.55)", // Dark background with some transparency
        borderRadius: "10px",
        padding: "15px",
        display: "flex",
        flexDirection: "column",
        backdropFilter: "blur(50px)", // Add blur effect for glass-like appearance
        border: "1px solid rgba(255, 255, 255, 0.1)", // Subtle border
      }}
      whileHover={{ scale: 1.02 }}
    >
      {title && <h2 style={{ color: "#FFFFFF", marginBottom: "10px" }}>{title}</h2>}
      {children}
    </motion.div>
  );
};

export default Box;
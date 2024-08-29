import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Box = () => {
  const [color, setColor] = useState("#9945FF"); // Default color

  useEffect(() => {
    const fetchColor = async () => {
      const response = await fetch('/api/color');
      const data = await response.json();
      setColor(data.color);
    };

    fetchColor();
    const intervalId = setInterval(fetchColor, 100); // Poll every 100ms

    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.div
      style={{
        width: 200,
        height: 200,
        backgroundColor: "#FFFFFF", // White box
        border: `2px solid ${color}`, // Dynamic border color
        position: "absolute",
        zIndex: 1, // Make sure it's on top of the background
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)", // Center the box
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: `0px 0px 15px 10px ${color}80`, // Dynamic glowing effect
        borderRadius: "20px", // Rounded corners
      }}
      whileHover={{ scale: 1.1 }} // Slightly increase size on hover
    >
      {/* Add any content here if needed, currently empty */}
    </motion.div>
  );
};

export default Box;
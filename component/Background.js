import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
  useTransform,
} from "framer-motion";

const COLORS = ["#9945FF", "#14F195"]; // Solana Purple and Solana Green

const Background = () => {
  const colorProgress = useMotionValue(0);
  const [currentColor, setCurrentColor] = useState(COLORS[0]);

  const backgroundColor = useTransform(colorProgress, [0, 1], COLORS);

  useEffect(() => {
    animate(colorProgress, [0, 1], {
      ease: "easeInOut",
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [colorProgress, backgroundColor]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000000 50%, ${backgroundColor})`;

  return (
    <motion.div
      style={{
        backgroundImage,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backdropFilter: "blur(5px)",
      }}
    >
      <Canvas style={{ position: "absolute", top: 0, left: 0 }}>
        <Stars
          radius={80}
          depth={60}
          count={2000}
          factor={7}
          fade
          speed={2}
          scale={useTransform(colorProgress, [0, 0.5, 1], [0.9, 1.1, 0.9])}
        />
      </Canvas>
    </motion.div>
  );
};

export default Background;
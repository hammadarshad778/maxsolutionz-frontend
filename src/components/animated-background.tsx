"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function AnimatedBackground() {
  const [isMounted, setIsMounted] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 120 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsMounted(true);
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 250); // Offset by half width/height to center the glow
      cursorY.set(e.clientY - 250);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[-50] overflow-hidden bg-[#030D0A]">
      {/* Drifting mesh gradients */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-primary/20 blur-[120px]"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-500/20 blur-[120px]"
      />

      {/* Mouse Follower Glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-primary/15 rounded-full blur-[100px]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
      
      {/* Falling Snow Layers */}
      <div 
        className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='300' height='300' viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231AECBB' fill-opacity='0.4'%3E%3Ccircle cx='20' cy='30' r='3'/%3E%3Ccircle cx='120' cy='110' r='2'/%3E%3Ccircle cx='220' cy='50' r='4'/%3E%3Ccircle cx='80' cy='210' r='2.5'/%3E%3Ccircle cx='250' cy='260' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '300px 300px',
          animation: 'snowFall1 20s linear infinite'
        }}
      />
      <div 
        className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] opacity-15"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231AECBB' fill-opacity='0.3'%3E%3Ccircle cx='40' cy='50' r='1.5'/%3E%3Ccircle cx='140' cy='20' r='1'/%3E%3Ccircle cx='90' cy='150' r='2'/%3E%3Ccircle cx='180' cy='130' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          animation: 'snowFall2 35s linear infinite'
        }}
      />
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes snowFall1 {
          0% { transform: translateY(0) translateX(0); }
          100% { transform: translateY(300px) translateX(150px); }
        }
        @keyframes snowFall2 {
          0% { transform: translateY(0) translateX(0); }
          100% { transform: translateY(200px) translateX(-100px); }
        }
      `}} />
    </div>
  );
}

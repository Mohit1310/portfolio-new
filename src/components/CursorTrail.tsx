'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const TRAIL_LENGTH = 20;

interface TrailDot {
  x: number;
  y: number;
}

export default function CursorTrail() {
  const [trail, setTrail] = React.useState<TrailDot[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTrail((prevTrail) => [
        { x: e.clientX, y: e.clientY },
        ...prevTrail.slice(0, TRAIL_LENGTH - 1),
      ]);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setTrail([]);
      }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {trail.map((dot, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full w-4 h-4"
          style={{
            left: dot.x,
            top: dot.y,
            background: `linear-gradient(90deg, rgba(59,130,246,0.5), rgba(236,72,153,0.5))`,
          }}
          initial={{ scale: 0, opacity: 0.7 }}
          animate={{
            scale: 1 - index * 0.05,
            opacity: 0.7 - index * 0.03,
          }}
          transition={{ duration: 0.2 }}
        />
      ))}
    </div>
  );
}

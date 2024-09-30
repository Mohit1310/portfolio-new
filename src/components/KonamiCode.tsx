'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export default function KonamiCode() {
  const [input, setInput] = useState<string[]>([]);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showEasterEgg) {
        setShowEasterEgg(false);
        return;
      }

      setInput((prev) => {
        const newInput = [...prev, e.key];
        if (newInput.length > KONAMI_CODE.length) {
          return newInput.slice(1);
        }
        return newInput;
      });
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showEasterEgg]);

  useEffect(() => {
    if (input.join(',') === KONAMI_CODE.join(',')) {
      setShowEasterEgg(true);
      setInput([]);
    }
  }, [input]);

  return (
    <AnimatePresence>
      {showEasterEgg && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={() => setShowEasterEgg(false)}
        >
          <div className="bg-white p-8 rounded-lg shadow-xl text-center text-gray-900">
            <h2 className="text-2xl font-bold mb-4">You found the secret!</h2>
            <p>Here&apos;s a special message just for you:</p>
            <motion.p
              className="text-3xl font-semibold mt-4 bg-clip-text text-transparent bg-[length:200%_auto] bg-gradient-to-r from-blue-500 to-red-500"
              animate={{
                backgroundPosition: ['0% center', '200% center'],
              }}
              transition={{
                duration: 2,
                ease: 'linear',
                repeat: Infinity,
              }}
            >
              &quot;You&apos;re awesome!&quot;
            </motion.p>
            <p className="mt-4 text-sm text-gray-500">Press ESC to close</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

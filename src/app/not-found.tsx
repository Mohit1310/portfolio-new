'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cpu, Frown, Smile } from 'lucide-react';

export default function NotFound() {
  const [isFixed, setIsFixed] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 10) {
      setIsFixed(true);
    }
  }, [count]);

  const handleClick = () => {
    if (!isFixed) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-300 mb-4">
        Oops! Page Not Found
      </h2>
      <div className="text-center mb-8">
        <p className="text-gray-400 mb-2">
          Looks like this page is still under development.
        </p>
        <p className="text-gray-400">Want to help fix it?</p>
      </div>
      <div className="mb-8 text-center">
        <button
          onClick={handleClick}
          className={`text-6xl mb-4 transition-transform duration-200 ${
            isFixed ? 'cursor-default' : 'hover:scale-110 active:scale-95'
          }`}
        >
          {isFixed ? (
            <Smile className="text-green-500" />
          ) : (
            <Frown className="text-yellow-500" />
          )}
        </button>
        <p className="text-gray-400">
          {isFixed
            ? "Great job! You've fixed the 404. If only all bugs were this easy!"
            : `Click the emoji to fix (${count}/10)`}
        </p>
      </div>
      {isFixed && (
        <div className="text-center mb-8 animate-bounce">
          <Cpu className="text-4xl text-blue-500 mb-2" />
          <p className="text-gray-400">
            Error fixed! But the page is still missing...
          </p>
        </div>
      )}
      <Link
        href="/"
        className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl"
      >
        Back to Portfolio
      </Link>
    </div>
  );
}

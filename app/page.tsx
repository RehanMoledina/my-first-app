'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  // Load the count from localStorage, if it exists
  useEffect(() => {
    const savedCount = localStorage.getItem('taskCount');
    if (savedCount !== null) {
      setCount(Number(savedCount));
    }
  }, []);

  // Save the count to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('taskCount', String(count));
  }, [count]);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => (c > 0 ? c - 1 : 0));
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 font-sans">
      <h1 className="text-5xl md:text-6xl font-bold text-white shadow-lg mb-8">
        Daily Task Counter
      </h1>
      <div className="bg-white bg-opacity-40 rounded-xl px-10 py-8 flex flex-col items-center">
        <div className="text-4xl font-semibold mb-6">{count}</div>
        <div className="flex gap-4">
          <button
            onClick={decrement}
            className="px-5 py-2 rounded-lg bg-purple-600 text-white text-lg font-bold hover:bg-purple-700 transition"
            aria-label="Decrease count"
          >
            -
          </button>
          <button
            onClick={increment}
            className="px-5 py-2 rounded-lg bg-blue-600 text-white text-lg font-bold hover:bg-blue-700 transition"
            aria-label="Increase count"
          >
            +
          </button>
          <button
            onClick={reset}
            className="px-5 py-2 rounded-lg bg-pink-500 text-white text-lg font-bold hover:bg-pink-600 transition"
            aria-label="Reset count"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

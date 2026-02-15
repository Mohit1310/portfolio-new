'use client';

import { useState } from 'react';

export const DemoCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="my-6 rounded-2xl border border-white/15 bg-black/25 p-4">
      <p className="text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
        Interactive Demo
      </p>
      <p className="mt-2 text-base text-white">Clicks: {count}</p>
      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setCount((prev) => prev + 1)}
          className="rounded-full bg-[color:var(--accent-cyan)] px-4 py-2 text-xs font-semibold text-black"
        >
          Add
        </button>
        <button
          type="button"
          onClick={() => setCount(0)}
          className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

'use client';

import { useMemo, useState } from 'react';
import { OutputQuiz } from './output-quiz';

interface OutputPanelProps {
  expectedOrder: string[];
}

export const OutputPanel = ({ expectedOrder }: OutputPanelProps) => {
  const [mode, setMode] = useState<'practice' | 'expected'>('practice');

  const orderPreview = useMemo(
    () => expectedOrder.map((entry, index) => `${index + 1}. ${entry}`).join('\n'),
    [expectedOrder]
  );

  const isPractice = mode === 'practice';

  return (
    <div className="rounded-xl border border-white/10 bg-black/25 p-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-(--text-muted)">
          Output Challenge
        </p>
        <div className="inline-flex rounded-full border border-white/15 bg-black/35 p-0.5">
          <button
            type="button"
            onClick={() => setMode('practice')}
            className={`rounded-full px-3 py-1 text-[11px] font-semibold transition ${
              isPractice
                ? 'bg-(--accent-cyan) text-black'
                : 'text-(--text-muted) hover:text-white'
            }`}
          >
            Practice
          </button>
          <button
            type="button"
            onClick={() => setMode('expected')}
            className={`rounded-full px-3 py-1 text-[11px] font-semibold transition ${
              !isPractice
                ? 'bg-(--accent-cyan) text-black'
                : 'text-(--text-muted) hover:text-white'
            }`}
          >
            Show Expected
          </button>
        </div>
      </div>

      {isPractice ? (
        <OutputQuiz expectedOrder={expectedOrder} embedded />
      ) : (
        <pre className="mt-3 whitespace-pre-wrap text-xs leading-relaxed text-white/90 md:text-sm">
          {orderPreview}
        </pre>
      )}
    </div>
  );
};

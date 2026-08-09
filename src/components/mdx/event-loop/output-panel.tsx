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
    <div className="rounded-md border border-(--line) bg-(--surface) p-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-[11px] font-semibold text-(--text-muted)">
          Output Challenge
        </p>
        <div className="inline-flex rounded-md border border-(--line) bg-(--bg) p-0.5">
          <button
            type="button"
            aria-pressed={isPractice}
            onClick={() => setMode('practice')}
            className={`rounded px-3 py-1 text-[11px] font-medium transition ${
              isPractice
                ? 'bg-(--text-primary) text-(--bg)'
                : 'text-(--text-muted) hover:text-(--text-primary)'
            }`}
          >
            Practice
          </button>
          <button
            type="button"
            aria-pressed={!isPractice}
            onClick={() => setMode('expected')}
            className={`rounded px-3 py-1 text-[11px] font-medium transition ${
              !isPractice
                ? 'bg-(--text-primary) text-(--bg)'
                : 'text-(--text-muted) hover:text-(--text-primary)'
            }`}
          >
            Show Expected
          </button>
        </div>
      </div>

      {isPractice ? (
        <OutputQuiz expectedOrder={expectedOrder} embedded />
      ) : (
        <pre className="mt-3 whitespace-pre-wrap font-mono text-xs leading-relaxed md:text-sm">
          {orderPreview}
        </pre>
      )}
    </div>
  );
};

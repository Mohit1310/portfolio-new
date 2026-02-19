'use client';

import { useState } from 'react';

interface OutputQuizProps {
  expectedOrder: string[];
  embedded?: boolean;
}

const normalize = (value: string) =>
  value
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

export const OutputQuiz = ({ expectedOrder, embedded = false }: OutputQuizProps) => {
  const [guess, setGuess] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const expectedLines = expectedOrder.map((line) => line.trim());
  const guessedLines = normalize(guess);
  const isCorrect =
    guessedLines.length === expectedLines.length &&
    guessedLines.every((line, index) => line === expectedLines[index]);

  return (
    <div className={embedded ? 'mt-3' : 'mt-3 rounded-xl border border-white/10 bg-black/20 p-3'}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-(--text-muted)">
        Test Yourself
      </p>
      <p className="mt-1 text-xs text-(--text-muted)">
        Write the console output in order, one line per entry.
      </p>

      <textarea
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value);
          setIsChecked(false);
        }}
        placeholder="Example: A D C - promise B - timeout"
        className="mt-2 min-h-28 w-full rounded-lg border border-white/15 bg-black/35 px-3 py-2 text-xs text-white outline-none transition focus:border-(--accent-cyan)/70 md:text-sm"
      />

      <div className="mt-2 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setIsChecked(true)}
          className="rounded-full bg-(--accent-cyan) px-3 py-1.5 text-xs font-semibold text-black disabled:cursor-not-allowed disabled:opacity-45"
          disabled={!guess.trim()}
        >
          Check Output
        </button>
        <button
          type="button"
          onClick={() => {
            setGuess('');
            setIsChecked(false);
          }}
          className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-white"
        >
          Clear
        </button>
      </div>

      {isChecked && (
        <p
          className={`mt-2 text-xs font-semibold ${
            isCorrect ? 'text-emerald-300' : 'text-orange-300'
          }`}
        >
          {isCorrect
            ? 'Correct. You nailed the event loop order.'
            : 'Not quite. Use "Show Expected" to compare and try again.'}
        </p>
      )}
    </div>
  );
};

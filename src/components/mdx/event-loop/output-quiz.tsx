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
    <div
      className={
        embedded
          ? 'mt-3'
          : 'mt-3 rounded-md border border-(--line) bg-(--surface) p-3'
      }
    >
      <p className="text-[11px] font-semibold text-(--text-muted)">
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
        className="input mt-2 min-h-28 font-mono text-xs md:text-sm"
      />

      <div className="mt-2 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setIsChecked(true)}
          className="rounded-md bg-(--text-primary) px-3 py-1.5 text-xs font-medium text-(--bg) disabled:cursor-not-allowed disabled:opacity-45"
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
          className="rounded-md border border-(--line-strong) px-3 py-1.5 text-xs font-medium"
        >
          Clear
        </button>
      </div>

      {isChecked && (
        <p
          className={`mt-2 text-xs font-medium ${
            isCorrect
              ? 'text-emerald-700 dark:text-emerald-400'
              : 'text-amber-700 dark:text-amber-400'
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

'use client';

import { useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';

type QueueItem = {
  id: string;
  label: string;
};

type Step = {
  title: string;
  explanation: string;
  stack: string[];
  taskQueue: QueueItem[];
  microtaskQueue: QueueItem[];
  output: string[];
};

interface EventLoopSimulatorProps {
  title: string;
  subtitle: string;
  code: string;
  expectedOrder: string[];
  steps: Step[];
}

const QueueCard = ({
  title,
  items,
  emptyLabel,
}: {
  title: string;
  items: string[];
  emptyLabel: string;
}) => {
  return (
    <div className="rounded-xl border border-white/10 bg-black/25 p-3">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-(--text-muted)">
        {title}
      </p>
      <div className="mt-2 space-y-2">
        {items.length ? (
          items.map((item, index) => (
            <div
              key={`${title}-${item}-${index}`}
              className={twMerge(
                'rounded-md border px-2 py-1 text-xs md:text-sm',
                index === 0
                  ? 'border-(--accent-cyan)/60 bg-(--accent-cyan)/15 text-cyan-100'
                  : 'border-white/10 bg-white/5 text-white/85'
              )}
            >
              {item}
            </div>
          ))
        ) : (
          <p className="rounded-md border border-dashed border-white/10 px-2 py-1 text-xs text-(--text-muted)">
            {emptyLabel}
          </p>
        )}
      </div>
    </div>
  );
};

export const EventLoopSimulator = ({
  title,
  subtitle,
  code,
  expectedOrder,
  steps,
}: EventLoopSimulatorProps) => {
  const [stepIndex, setStepIndex] = useState(0);
  const currentStep = steps[stepIndex];

  const orderPreview = useMemo(
    () => expectedOrder.map((entry, index) => `${index + 1}. ${entry}`).join('\n'),
    [expectedOrder]
  );

  const canGoBack = stepIndex > 0;
  const canGoNext = stepIndex < steps.length - 1;

  return (
    <section className="my-8 overflow-hidden rounded-3xl border border-white/10 bg-black/35">
      <div className="border-b border-white/10 p-4 md:p-5">
        <p className="text-xs uppercase tracking-[0.14em] text-(--text-muted)">
          Interactive Event Loop Demo
        </p>
        <h4 className="mt-1 text-lg font-semibold text-white md:text-xl">{title}</h4>
        <p className="mt-1 text-sm text-(--text-muted)">{subtitle}</p>
      </div>

      <div className="grid gap-4 p-4 md:grid-cols-2 md:gap-5 md:p-5">
        <div className="rounded-xl border border-white/10 bg-black/25 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-(--text-muted)">
            Code
          </p>
          <pre className="mt-2 overflow-x-auto text-xs leading-relaxed text-white/90 md:text-sm">
            <code>{code}</code>
          </pre>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/25 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-(--text-muted)">
            Expected Console Order
          </p>
          <pre className="mt-2 whitespace-pre-wrap text-xs leading-relaxed text-white/90 md:text-sm">
            {orderPreview}
          </pre>
        </div>
      </div>

      <div className="border-y border-white/10 bg-black/25 p-4 md:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-semibold text-white">
            Step {stepIndex + 1} / {steps.length}: {currentStep.title}
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setStepIndex(0)}
              className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-white disabled:cursor-not-allowed disabled:opacity-45"
              disabled={!canGoBack}
            >
              Reset
            </button>
            <button
              type="button"
              onClick={() => setStepIndex((prev) => Math.max(0, prev - 1))}
              className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-white disabled:cursor-not-allowed disabled:opacity-45"
              disabled={!canGoBack}
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() => setStepIndex((prev) => Math.min(steps.length - 1, prev + 1))}
              className="rounded-full bg-(--accent-cyan) px-3 py-1.5 text-xs font-semibold text-black disabled:cursor-not-allowed disabled:opacity-45"
              disabled={!canGoNext}
            >
              Next
            </button>
          </div>
        </div>

        <p className="mt-3 text-sm text-(--text-muted)">{currentStep.explanation}</p>
      </div>

      <div className="grid gap-3 p-4 md:grid-cols-3 md:gap-4 md:p-5">
        <QueueCard
          title="Call Stack (Top First)"
          items={currentStep.stack}
          emptyLabel="Call stack is empty"
        />
        <QueueCard
          title="Microtask Queue (Front First)"
          items={currentStep.microtaskQueue.map((item) => item.label)}
          emptyLabel="No microtasks waiting"
        />
        <QueueCard
          title="Task Queue (Front First)"
          items={currentStep.taskQueue.map((item) => item.label)}
          emptyLabel="No tasks waiting"
        />
      </div>

      <div className="border-t border-white/10 p-4 md:p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-(--text-muted)">
          Console Output So Far
        </p>
        <div className="mt-2 rounded-xl border border-white/10 bg-black/25 p-3">
          {currentStep.output.length ? (
            <ol className="space-y-1 text-sm text-white/90">
              {currentStep.output.map((line, index) => (
                <li key={`${line}-${index}`}>{index + 1}. {line}</li>
              ))}
            </ol>
          ) : (
            <p className="text-sm text-(--text-muted)">No console output yet.</p>
          )}
        </div>
      </div>
    </section>
  );
};

const simpleSteps: Step[] = [
  {
    title: 'Script starts on call stack',
    explanation: 'Global script enters the call stack.',
    stack: ['global()'],
    microtaskQueue: [],
    taskQueue: [],
    output: [],
  },
  {
    title: 'Synchronous log runs immediately',
    explanation: 'console.log("A") executes while still in the script.',
    stack: ['global()', 'console.log("A")'],
    microtaskQueue: [],
    taskQueue: [],
    output: ['A'],
  },
  {
    title: 'Timeout callback is scheduled as task',
    explanation: 'setTimeout(..., 0) does not run now; callback goes to task queue.',
    stack: ['global()'],
    microtaskQueue: [],
    taskQueue: [{ id: 't1', label: 'timeout callback -> "B - timeout"' }],
    output: ['A'],
  },
  {
    title: 'Promise callback is scheduled as microtask',
    explanation: 'Promise.then callback enters microtask queue.',
    stack: ['global()'],
    microtaskQueue: [{ id: 'm1', label: 'promise callback -> "C - promise"' }],
    taskQueue: [{ id: 't1', label: 'timeout callback -> "B - timeout"' }],
    output: ['A'],
  },
  {
    title: 'Last synchronous log runs',
    explanation: 'console.log("D") is still part of script execution.',
    stack: ['global()', 'console.log("D")'],
    microtaskQueue: [{ id: 'm1', label: 'promise callback -> "C - promise"' }],
    taskQueue: [{ id: 't1', label: 'timeout callback -> "B - timeout"' }],
    output: ['A', 'D'],
  },
  {
    title: 'Script finishes, stack becomes empty',
    explanation: 'Event loop now checks queues because call stack is empty.',
    stack: [],
    microtaskQueue: [{ id: 'm1', label: 'promise callback -> "C - promise"' }],
    taskQueue: [{ id: 't1', label: 'timeout callback -> "B - timeout"' }],
    output: ['A', 'D'],
  },
  {
    title: 'Microtask queue drains first',
    explanation: 'Promise callback runs before task queue callbacks.',
    stack: ['promise callback'],
    microtaskQueue: [],
    taskQueue: [{ id: 't1', label: 'timeout callback -> "B - timeout"' }],
    output: ['A', 'D', 'C - promise'],
  },
  {
    title: 'Next task runs',
    explanation: 'Timeout callback finally executes.',
    stack: ['timeout callback'],
    microtaskQueue: [],
    taskQueue: [],
    output: ['A', 'D', 'C - promise', 'B - timeout'],
  },
];

const complexSteps: Step[] = [
  {
    title: 'Script enters stack',
    explanation: 'Global script begins.',
    stack: ['global()'],
    microtaskQueue: [],
    taskQueue: [],
    output: [],
  },
  {
    title: 'First sync log',
    explanation: 'console.log("1") runs immediately.',
    stack: ['global()', 'console.log("1")'],
    microtaskQueue: [],
    taskQueue: [],
    output: ['1'],
  },
  {
    title: 'First timeout is queued as task',
    explanation: 'Callback for "2 - timeout 1" waits in task queue.',
    stack: ['global()'],
    microtaskQueue: [],
    taskQueue: [{ id: 't1', label: 'timeout 1 -> "2 - timeout 1"' }],
    output: ['1'],
  },
  {
    title: 'Promise microtask is queued',
    explanation: 'Callback for "4 - microtask 1" goes to microtask queue.',
    stack: ['global()'],
    microtaskQueue: [{ id: 'm1', label: 'microtask 1 -> "4 - microtask 1"' }],
    taskQueue: [{ id: 't1', label: 'timeout 1 -> "2 - timeout 1"' }],
    output: ['1'],
  },
  {
    title: 'Second sync log',
    explanation: 'console.log("6") runs before async callbacks.',
    stack: ['global()', 'console.log("6")'],
    microtaskQueue: [{ id: 'm1', label: 'microtask 1 -> "4 - microtask 1"' }],
    taskQueue: [{ id: 't1', label: 'timeout 1 -> "2 - timeout 1"' }],
    output: ['1', '6'],
  },
  {
    title: 'Script ends, microtasks run first',
    explanation: 'Event loop drains microtask queue.',
    stack: ['microtask 1'],
    microtaskQueue: [],
    taskQueue: [{ id: 't1', label: 'timeout 1 -> "2 - timeout 1"' }],
    output: ['1', '6', '4 - microtask 1'],
  },
  {
    title: 'Microtask schedules another timeout',
    explanation: 'setTimeout inside microtask queues "5 - timeout inside microtask" behind existing tasks.',
    stack: [],
    microtaskQueue: [],
    taskQueue: [
      { id: 't1', label: 'timeout 1 -> "2 - timeout 1"' },
      { id: 't2', label: 'timeout 2 -> "5 - timeout inside microtask"' },
    ],
    output: ['1', '6', '4 - microtask 1'],
  },
  {
    title: 'First task executes',
    explanation: 'timeout 1 callback logs "2 - timeout 1".',
    stack: ['timeout 1 callback'],
    microtaskQueue: [],
    taskQueue: [{ id: 't2', label: 'timeout 2 -> "5 - timeout inside microtask"' }],
    output: ['1', '6', '4 - microtask 1', '2 - timeout 1'],
  },
  {
    title: 'Microtask created inside timeout runs before next task',
    explanation: 'Promise.then inside timeout 1 becomes a microtask and executes immediately before timeout 2.',
    stack: ['microtask from timeout 1'],
    microtaskQueue: [],
    taskQueue: [{ id: 't2', label: 'timeout 2 -> "5 - timeout inside microtask"' }],
    output: [
      '1',
      '6',
      '4 - microtask 1',
      '2 - timeout 1',
      '3 - microtask inside timeout',
    ],
  },
  {
    title: 'Second task executes',
    explanation: 'Now timeout 2 logs "5 - timeout inside microtask".',
    stack: ['timeout 2 callback'],
    microtaskQueue: [],
    taskQueue: [],
    output: [
      '1',
      '6',
      '4 - microtask 1',
      '2 - timeout 1',
      '3 - microtask inside timeout',
      '5 - timeout inside microtask',
    ],
  },
];

const timeoutSteps: Step[] = [
  {
    title: 'Script starts',
    explanation: 'Global script enters stack and sets reference start time.',
    stack: ['global()'],
    microtaskQueue: [],
    taskQueue: [],
    output: [],
  },
  {
    title: 'A 1000ms timeout is scheduled',
    explanation: 'This callback cannot run before at least 1000ms.',
    stack: ['global()'],
    microtaskQueue: [],
    taskQueue: [{ id: 't1', label: 'timeout(1000) -> "T1 ~1000ms" (waiting timer)' }],
    output: [],
  },
  {
    title: 'A 0ms timeout is scheduled',
    explanation: '0ms means minimum delay, not immediate execution.',
    stack: ['global()'],
    microtaskQueue: [],
    taskQueue: [
      { id: 't1', label: 'timeout(1000) -> "T1 ~1000ms" (waiting timer)' },
      { id: 't2', label: 'timeout(0) -> "T2 ~0ms"' },
    ],
    output: [],
  },
  {
    title: 'Promise microtask is queued',
    explanation: 'Promise.then goes to microtask queue.',
    stack: ['global()'],
    microtaskQueue: [{ id: 'm1', label: 'promise callback -> "Microtask"' }],
    taskQueue: [
      { id: 't1', label: 'timeout(1000) -> "T1 ~1000ms" (waiting timer)' },
      { id: 't2', label: 'timeout(0) -> "T2 ~0ms"' },
    ],
    output: [],
  },
  {
    title: 'Sync log runs',
    explanation: 'console.log("Sync end") executes during script.',
    stack: ['global()', 'console.log("Sync end")'],
    microtaskQueue: [{ id: 'm1', label: 'promise callback -> "Microtask"' }],
    taskQueue: [
      { id: 't1', label: 'timeout(1000) -> "T1 ~1000ms" (waiting timer)' },
      { id: 't2', label: 'timeout(0) -> "T2 ~0ms"' },
    ],
    output: ['Sync end (near 0ms)'],
  },
  {
    title: 'Microtask runs first',
    explanation: 'After stack clears, microtask runs before any timeout.',
    stack: ['promise callback'],
    microtaskQueue: [],
    taskQueue: [
      { id: 't1', label: 'timeout(1000) -> "T1 ~1000ms" (waiting timer)' },
      { id: 't2', label: 'timeout(0) -> "T2 ~0ms"' },
    ],
    output: ['Sync end (near 0ms)', 'Microtask (near 0ms)'],
  },
  {
    title: '0ms timeout executes next',
    explanation: 'Now task queue callback with 0ms delay runs.',
    stack: ['timeout(0) callback'],
    microtaskQueue: [],
    taskQueue: [{ id: 't1', label: 'timeout(1000) -> "T1 ~1000ms" (waiting timer)' }],
    output: ['Sync end (near 0ms)', 'Microtask (near 0ms)', 'T2 ~0ms'],
  },
  {
    title: '1000ms timeout executes later',
    explanation: 'Only after its timer threshold and an available stack turn does timeout(1000) run.',
    stack: ['timeout(1000) callback'],
    microtaskQueue: [],
    taskQueue: [],
    output: ['Sync end (near 0ms)', 'Microtask (near 0ms)', 'T2 ~0ms', 'T1 ~1000ms+'],
  },
];

export const EventLoopSimpleDemo = () => (
  <EventLoopSimulator
    title="Simple Example"
    subtitle="Synchronous logs vs Promise microtask vs setTimeout task"
    code={`console.log('A');\n\nsetTimeout(() => {\n  console.log('B - timeout');\n}, 0);\n\nPromise.resolve().then(() => {\n  console.log('C - promise');\n});\n\nconsole.log('D');`}
    expectedOrder={['A', 'D', 'C - promise', 'B - timeout']}
    steps={simpleSteps}
  />
);

export const EventLoopComplexDemo = () => (
  <EventLoopSimulator
    title="Complex Example"
    subtitle="Nested microtasks and tasks with ordering across turns"
    code={`console.log('1');\n\nsetTimeout(() => {\n  console.log('2 - timeout 1');\n\n  Promise.resolve().then(() => {\n    console.log('3 - microtask inside timeout');\n  });\n}, 0);\n\nPromise.resolve().then(() => {\n  console.log('4 - microtask 1');\n\n  setTimeout(() => {\n    console.log('5 - timeout inside microtask');\n  }, 0);\n});\n\nconsole.log('6');`}
    expectedOrder={[
      '1',
      '6',
      '4 - microtask 1',
      '2 - timeout 1',
      '3 - microtask inside timeout',
      '5 - timeout inside microtask',
    ]}
    steps={complexSteps}
  />
);

export const EventLoopTimeoutDemo = () => (
  <EventLoopSimulator
    title="Timeout Not Zero Example"
    subtitle="Why setTimeout with 1000ms is a minimum delay, not exact timing"
    code={`const start = Date.now();\n\nsetTimeout(() => {\n  console.log('T1 ~1000ms', Date.now() - start);\n}, 1000);\n\nsetTimeout(() => {\n  console.log('T2 ~0ms', Date.now() - start);\n}, 0);\n\nPromise.resolve().then(() => {\n  console.log('Microtask', Date.now() - start);\n});\n\nconsole.log('Sync end', Date.now() - start);`}
    expectedOrder={['Sync end', 'Microtask', 'T2 ~0ms', 'T1 ~1000ms (or later)']}
    steps={timeoutSteps}
  />
);

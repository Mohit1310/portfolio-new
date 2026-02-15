export type QueueItem = {
  id: string;
  label: string;
};

export type Step = {
  title: string;
  explanation: string;
  stack: string[];
  taskQueue: QueueItem[];
  microtaskQueue: QueueItem[];
  output: string[];
};

export type EventLoopScenario = {
  title: string;
  subtitle: string;
  code: string;
  expectedOrder: string[];
  steps: Step[];
};

export interface EventLoopSimulatorProps extends EventLoopScenario {}

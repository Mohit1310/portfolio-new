'use client';

import { useEffect, useState } from 'react';

export const useStepper = (length: number, intervalMs = 1100) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(false);

  const isLast = length === 0 || stepIndex === length - 1;
  const canGoBack = stepIndex > 0;
  const canGoNext = !isLast;

  useEffect(() => {
    if (!isAutoplay || isLast) {
      return;
    }

    const timer = window.setInterval(() => {
      setStepIndex((prev) => {
        if (prev >= length - 1) {
          setIsAutoplay(false);
          window.clearInterval(timer);
          return prev;
        }

        const next = prev + 1;
        if (next >= length - 1) {
          setIsAutoplay(false);
        }
        return next;
      });
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [isAutoplay, isLast, length, intervalMs]);

  const reset = () => {
    setIsAutoplay(false);
    setStepIndex(0);
  };

  const previous = () => {
    setIsAutoplay(false);
    setStepIndex((prev) => Math.max(0, prev - 1));
  };

  const next = () => {
    setIsAutoplay(false);
    setStepIndex((prev) => Math.min(length - 1, prev + 1));
  };

  const toggle = () => {
    if (length === 0) {
      return;
    }

    if (!isAutoplay && isLast) {
      setStepIndex(0);
      setIsAutoplay(true);
      return;
    }

    setIsAutoplay((prev) => !prev);
  };

  return {
    stepIndex,
    isAutoplay,
    isLast,
    canGoBack,
    canGoNext,
    reset,
    previous,
    next,
    toggle,
  };
};

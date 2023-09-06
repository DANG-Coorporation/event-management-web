import { useEffect } from "react";

let timerRef = null;
let timerRef2 = null;
export const startDelayTimerAsync = async (delay, callback) => {
  clearTimeout(timerRef);

  return new Promise((resolve) => {
    timerRef = setTimeout(async () => {
      if (callback) {
        await callback();
      }
      resolve(); // Resolve the promise when the timer completes
    }, delay);
  });
};

export const startDelayTimer = (delay, callback) => {
  clearTimeout(timerRef2);

  timerRef2 = setTimeout(() => {
    if (callback) {
      callback();
    }
  }, delay);
};

export const useCleanUpTimer = () => {
  useEffect(() => {
    return () => clearTimeout(timerRef);
  }, []);
};

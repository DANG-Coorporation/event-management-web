// const debounce = (callback, wait) => {
//   let timeout;
//   console.log("debug-timeout", wait);
//   return function (...args) {
//     const later = () => {
//       timeout = null;
//       callback(...args);
//     };

//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//   };
// };

// export default debounce;

import { useEffect, useRef } from "react";

let timerRef = null;

export const startDelayTimerAsync = async (delay, callback) => {
  clearTimeout(timerRef);

  return new Promise((resolve) => {
    timerRef = setTimeout(async () => {
      console.log(
        "debug-delay delay ms telah berlalu setelah perubahan data terakhir."
      );
      if (callback) {
        await callback();
      }
      resolve(); // Resolve the promise when the timer completes
    }, delay);
  });
};

export const startDelayTimer = (delay = 2000, callback) => {
  clearTimeout(timerRef);

  timerRef = setTimeout(() => {
    console.log(
      "debug-delay 1 detik telah berlalu setelah perubahan data terakhir."
    );
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

import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * @typedef {Object} Timer
 * @property {string} id - The unique identifier for the timer. Generated using Date.now()
 * @property {number} duration - The duration of the timer in milliseconds.
 * @property {number} timeLeft - The remaining time of the timer in milliseconds.
 * @property {number} endAt - The end time of the timer in milliseconds.
 * @property {boolean} isRunning - Indicates if the timer is currently running.
 */

export const useTimerStore = create(
  persist((set) => ({
    timers: [],
    addTimer: (duration) => {
      set((curr) => ({
        timers: [
          ...curr.timers,
          {
            id: Date.now(),
            duration,
            timeLeft: duration,
            endAt: Date.now() + duration,
            isRunning: true,
          },
        ],
      }));
    },
  })),
  {
    name: "timer-storage",
  }
);

"use client";

import { useState } from "react";
import InputField from "./InputField";
import { useTimerStore } from "../timer.store";

export default function Timer() {
  const [time, setTime] = useState({ hrs: "00", mins: "01", secs: "00" });
  const addTimer = useTimerStore((s) => s.addTimer);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTime((curr) => ({
      ...curr,
      [name]: formatTimeValue(value, name === "hrs" ? 23 : 59),
    }));
  };

  const handleAddTimer = () => {
    const ms =
      parseInt(time.hrs, 10) * 3600000 +
      parseInt(time.mins, 10) * 60000 +
      parseInt(time.secs, 10) * 1000;

    if (ms < 10000) {
      alert("Timer must be at least 10 seconds");
      return;
    }

    addTimer(ms);
  };

  return (
    <div className="mx-auto flex w-fit flex-col gap-4">
      <div className="flex items-center justify-between">
        {["hr", "min", "sec"].map((label) => (
          <p className="text-center font-bold w-full" key={label}>
            {label}
          </p>
        ))}
      </div>
      <div className="flex items-center rounded-md border border-neutral bg-base-200">
        <InputField
          value={String(time.hrs).padStart(2, "0")}
          onChange={handleInputChange}
          name="hrs"
        />
        <p className="text-lg">:</p>
        <InputField
          value={String(time.mins).padStart(2, "0")}
          onChange={handleInputChange}
          name="mins"
        />
        <p className="text-lg">:</p>
        <InputField
          value={String(time.secs).padStart(2, "0")}
          onChange={handleInputChange}
          name="secs"
        />
      </div>
      <div className="flex items-end">
        <button
          className="btn btn-success"
          onClick={() => {
            handleAddTimer();
          }}
        >
          Add Timer
        </button>
      </div>
    </div>
  );
}

const formatTimeValue = (value, maxValue) => {
  const intValue = parseInt(value, 10);

  if (isNaN(intValue)) return 0;
  const numberValue = Number(intValue.toString().slice(-2));

  return Math.min(numberValue, maxValue);
};

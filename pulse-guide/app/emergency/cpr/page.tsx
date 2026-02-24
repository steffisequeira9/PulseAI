"use client";
import { useState, useEffect } from "react";

export default function CPRPage() {
  const [count, setCount] = useState(0);
  const [timestamps, setTimestamps] = useState<number[]>([]);
  const [feedback, setFeedback] = useState("Start compressions");

  const handleCompression = () => {
    const now = Date.now();

    setCount((prev) => (prev === 30 ? 1 : prev + 1));
    setTimestamps((prev) => [...prev.slice(-5), now]);
  };

  useEffect(() => {
    if (timestamps.length > 3) {
      const intervals = timestamps
        .slice(1)
        .map((time, i) => time - timestamps[i]);

      const avgInterval =
        intervals.reduce((a, b) => a + b, 0) / intervals.length;

      const bpm = 60000 / avgInterval;

      if (bpm < 100) setFeedback("Push Faster!");
      else if (bpm > 120) setFeedback("Slow Down!");
      else setFeedback("Perfect Rhythm!");
    }
  }, [timestamps]);
  useEffect(() => {
  const interval = setInterval(() => {
    const audio = new Audio("/beep.mp3");
    audio.play();
  }, 545); // 110 BPM ≈ 545ms

  return () => clearInterval(interval);
}, []);

  return (
    <div
      onClick={handleCompression}
      className="flex flex-col items-center justify-center h-screen bg-black text-white cursor-pointer"
    >
      <h1 className="text-4xl text-red-500 mb-4">CPR MODE</h1>

      <div className="text-7xl font-bold">{count}</div>

      <p className="mt-6 text-xl text-red-400">{feedback}</p>

      <p className="mt-4 text-gray-400">
        Tap anywhere to simulate compressions
      </p>
    </div>
  );
}
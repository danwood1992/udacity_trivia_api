import React, { useEffect, useRef } from 'react';

interface TimerProps {
  duration: number;
  setQuizEnded: (value: boolean) => void;
}

const Timer: React.FC<TimerProps> = ({ duration, setQuizEnded }) => {
  const timerRef = useRef<HTMLDivElement>(null);
  // Use `number` for the interval ID in a browser environment
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    let remainingTime = duration;
    if (timerRef.current) {
      timerRef.current.textContent = `${remainingTime}`; // Initialize with the full duration
    }

    intervalRef.current = window.setInterval(() => { // Use `window.setInterval` to clarify the browser API
      remainingTime -= 1;
      if (timerRef.current) {
        timerRef.current.textContent = `${remainingTime}`; // Update text content
      }

      if (remainingTime <= 0 && intervalRef.current) {
        clearInterval(intervalRef.current);
        setQuizEnded(true); // Trigger the end of the quiz
      }
    }, 1000);

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current); // Cleanup on unmount or duration change
      }
    };
  // Include `setQuizEnded` in the dependencies array to address the warning
  }, [duration, setQuizEnded]); 

  return <div ref={timerRef}></div>;
};

export default Timer;



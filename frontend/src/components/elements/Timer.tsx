import React, { useEffect, useRef } from 'react';

interface TimerProps {
  duration: number; // Define props with types
  setQuizEnded: (value: boolean) => void;
}

const Timer: React.FC<TimerProps> = ({ duration, setQuizEnded }) => {
  const timerRef = useRef<HTMLDivElement>(null); // Specify the type for the ref
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // Correct type for setInterval in NodeJS

  useEffect(() => {
    let remainingTime = duration;
    if (timerRef.current) {
      timerRef.current.textContent = `${remainingTime}`; // Initialize with the full duration
    }

    intervalRef.current = setInterval(() => {
      remainingTime -= 1;
      if (timerRef.current) {
        timerRef.current.textContent = `${remainingTime}`; // Update the DOM directly
      }

      if (remainingTime <= 0 && intervalRef.current) {
        clearInterval(intervalRef.current);
        setQuizEnded(true); // Call the function to end the quiz
      }
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current); // Cleanup on component unmount
      }
    };
  }, [duration]);

  return <div ref={timerRef}></div>;
};

export default Timer;


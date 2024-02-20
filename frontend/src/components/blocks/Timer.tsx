import React, { useEffect, useState } from 'react';

interface SimpleTimerProps {
  duration: number; 
  start: boolean;
  stop: boolean;
}

const SimpleTimer: React.FC<SimpleTimerProps> = ({ duration,start,stop }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId: NodeJS.Timeout | null = null;

    if (isRunning && timeLeft > 0) {
      timerId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft <= 0) {
      setIsRunning(false); 
      clearInterval(timerId!);
    }

    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [timeLeft, isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
    setTimeLeft(duration); // Reset timer
  };

  useEffect(() => {
    if (start) startTimer();
    if (stop) stopTimer();
  }, [start, stop]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div>Time Left: {timeLeft}s</div>
     
    </div>
  );
};

export default SimpleTimer;


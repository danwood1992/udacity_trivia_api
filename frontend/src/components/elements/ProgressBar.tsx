import React, { useRef, useEffect } from 'react';

interface ProgressBarProps {
  duration: number;
}

const ProgressBar = ({ duration }: ProgressBarProps) => {
  // Explicitly type the ref to point to an HTMLDivElement
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progressBarRef.current) {
      progressBarRef.current.style.animationDuration = `${duration}s`;
    }
  }, [duration]);

  return (
    <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
      <div
        ref={progressBarRef} // This ref now correctly points to an HTMLDivElement
        className="bg-red-500 h-4 rounded-full animate-progress"
      ></div>
    </div>
  );
};

export default ProgressBar;


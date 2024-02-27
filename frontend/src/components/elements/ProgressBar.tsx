import React, { useRef, useEffect } from 'react';

interface ProgressBarProps {
    duration: number;
    }

const ProgressBar = ({ duration }:ProgressBarProps) => {
  const progressBarRef = useRef(null);

  useEffect(() => {
    // Directly manipulate the DOM element to set the animation duration
    if (progressBarRef.current) {
      progressBarRef.current.style.animationDuration = `${duration}s`;
    }
  }, [duration]);

  return (
    <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
      <div
        ref={progressBarRef}
        className="bg-blue-600 h-4 rounded-full animate-progress"
      ></div>
    </div>
  );
};

export default ProgressBar;

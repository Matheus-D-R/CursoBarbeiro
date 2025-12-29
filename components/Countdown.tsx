import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          // Reset for evergreen effect
          return { minutes: 14, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value: number) => value.toString().padStart(2, '0');

  return (
    <div className="flex items-center justify-center gap-2 bg-red-600/20 border border-red-600 text-red-500 p-3 rounded-lg font-bold text-xl md:text-2xl animate-pulse">
      <Clock className="w-6 h-6" />
      <span>{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}</span>
    </div>
  );
};

import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ startTime, endTime }) => {
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    const start = new Date(startTime);
    const end = new Date(endTime);
    const totalDuration = (end - start) / 1000; // Total duration in seconds

    // Calculate time elapsed since the start time
    const currentTime = new Date();
    const timeElapsed = (currentTime - start) / 1000; // Time elapsed in seconds

    // Calculate remaining time
    const remainingTime = totalDuration - timeElapsed;
    console.log(remainingTime);
    // Set the initial remaining time or 0 if the time has passed
    setTimeRemaining(Math.max(remainingTime, 0));

    if (remainingTime > 0) {
      // Set up the countdown timer
      const intervalId = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(intervalId);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      console.log("working");

      // Cleanup interval on component unmount
      return () => clearInterval(intervalId);
    }
  }, [startTime, endTime]);

  // Convert timeRemaining to hours, minutes, and seconds
  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = Math.floor(timeRemaining % 60);

  return (
    <div>
      {hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds} remaining
    </div>
  );
};

export default CountdownTimer;

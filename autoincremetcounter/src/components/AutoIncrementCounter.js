import React, { useState, useEffect } from "react";

function AutoIncrementCounter() {
  const [count, setCount] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let intervalId;

    if (!isPaused) {
      intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isPaused]);

  const handlePauseToggle = () => {
    setIsPaused((prevIsPaused) => !prevIsPaused);
  };

  const handleReset = () => {
    setCount(0);
    setIsPaused(true);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handlePauseToggle}>
        {isPaused ? "Resume" : "Pause"}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default AutoIncrementCounter;

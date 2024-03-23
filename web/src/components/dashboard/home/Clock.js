import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(getFormattedTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getFormattedTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function getFormattedTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  return (
    <>
      {time}
    </>
  );
}

export default Clock;
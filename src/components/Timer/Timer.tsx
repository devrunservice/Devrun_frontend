import React, {useState, useEffect} from 'react';
import * as St from './style';

const Timer = ({page}: {page: string}) => {
  const MINUTES_IN_MS = 5 * 60 * 1000;
  const INTERVAL = 1000;
  const [timeLeft, setTimeLeft] = useState<number>(MINUTES_IN_MS);

  const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(
    2,
    '0'
  );
  const second = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, '0');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - INTERVAL);
    }, INTERVAL);

    if (timeLeft <= 0) {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);

  return (
    <St.Timer page={page}>
      {minutes} : {second}
    </St.Timer>
  );
};

export default Timer;

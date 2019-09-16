import { useEffect, useRef } from 'react';

const useInterval = (callback, delay, timerState) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    const tick = () => savedCallback.current();

    let id;
    if (
      delay !== null &&
      timerState !== 'stopped' &&
      timerState !== 'paused'
    ) {
      id = setInterval(tick, delay);
      return () => clearInterval(id);
    }

    return () => clearInterval(id);
  }, [delay, timerState]);
};

export default useInterval;

import { useEffect, useRef } from 'react';

const useInterval = (callback, delay, state) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    const tick = () => savedCallback.current();
    let id;
    if (delay !== null && state !== 'stopped' && state !== 'paused') {
      id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    return () => clearInterval(id);
  }, [delay, state]);
};

export default useInterval;
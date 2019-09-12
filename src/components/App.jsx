import { hot } from 'react-hot-loader/root';
import React, { useState, useEffect, useRef } from 'react';

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

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [timerState, setTimerState] = useState('stopped');

  useInterval(() => {
    setSeconds(seconds + 1);
  }, 1000, timerState);


  const handleStop = () => {
    setTimerState('stopped');
    setSeconds(0);
  };

  let firstButton;
  if (timerState === 'stopped') firstButton = 'Start';
  if (timerState === 'running') firstButton = 'Pause';
  if (timerState === 'stopped' && seconds !== 0) firstButton = 'Resume';

  return (
    <>
      <h1>Hello Mother Fucker</h1>
      {seconds}
      <button
        type="submit"
        onClick={(timerState === 'stopped')
          ? () => setTimerState('running') : () => setTimerState('stopped')}
      >
        {firstButton}
      </button>
      <button
        type="submit"
        onClick={handleStop}
      >
        Stop
      </button>
      <button
        type="submit"
      >
        Skip
      </button>
    </>
  );
};

export default hot(App);

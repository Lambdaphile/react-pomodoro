import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import useInterval from '../hooks/Timer';

const App = () => {
  const [seconds, setSeconds] = useState(1);
  const [timerState, setTimerState] = useState('stopped');
  const [pomodoroState, setPomodoroState] = useState(1);
  const [totalSessions, setTotalSession] = useState(8);

  useInterval(() => {
    if (seconds === 0) {
      handleSkip();
    } else {
      setSeconds(seconds - 1);
    }
  }, 1000, timerState);

  const handleStop = () => {
    setTimerState('stopped');
    setPomodoroState(1);
    setSeconds(1500);
  };

  const handleSkip = () => {
    if (pomodoroState % 2 !== 0) {
      setSeconds(3);
    } else if (pomodoroState === totalSessions) {
      setSeconds(1200);
    } else {
      setSeconds(1);
      setTimerState('stopped');
    }
    setPomodoroState(pomodoroState + 1);
  };

  let firstButton;
  if (timerState === 'stopped') firstButton = 'Start';
  if (timerState === 'running') firstButton = 'Pause';
  if (timerState === 'paused') firstButton = 'Resume';

  const minutesLeft = Math.floor(seconds / 60);
  const secondsLeft = Math.floor(seconds - (minutesLeft * 60));
  const timeLeft = `${minutesLeft} : ${secondsLeft}`;

  return (
    <>
      <h1>Hello Mother Fucker</h1>
      {timeLeft}
      <button
        type="submit"
        onClick={(timerState === 'stopped' || timerState === 'paused')
          ? () => setTimerState('running') : () => setTimerState('paused')}
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
        style={pomodoroState === 1 && timerState === 'stopped' ? { display: 'none' } : { display: 'inline-block' }}
        type="submit"
        onClick={handleSkip}
      >
        Skip
      </button>
    </>
  );
};

export default hot(App);

import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';

import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

import useInterval from '../hooks/useInterval';
import Settings from './Settings';

const Display = styled.div`
  margin: 100px auto;
  text-align: center;
`;

const formatToMMSS = seconds => {
  // Calculate current minutes and seconds...
  const currentMinutes = Math.floor(seconds / 60);
  const currentSeconds = Math.floor(seconds - currentMinutes * 60);

  let currentTime = `${currentMinutes} : ${currentSeconds}`;
  // Format if necessary...
  if (currentMinutes < 10 && currentSeconds < 10) {
    currentTime = `0${currentMinutes} : 0${currentSeconds}`;
  } else if (currentMinutes < 10) {
    currentTime = `0${currentMinutes} : ${currentSeconds}`;
  } else if (currentSeconds < 10) {
    currentTime = `${currentMinutes} : 0${currentSeconds}`;
  }

  return currentTime;
};

const getButtonText = timerState => {
  if (timerState === 'running') return 'Pause';
  if (timerState === 'paused') return 'Resume';
  return 'Start';
};

const App = () => {
  // Default settings...
  if (
    !localStorage.getItem('workDuration') ||
    !localStorage.getItem('shortBreakDuration') ||
    !localStorage.getItem('longBreakDuration') ||
    !localStorage.getItem('totalSessionNumber')
  ) {
    localStorage.setItem('workDuration', 1500);
    localStorage.setItem('shortBreakDuration', 300);
    localStorage.setItem('longBreakDuration', 1200);
    localStorage.setItem('totalSessionNumber', 4);
  }

  /**
   * Keep sessions duration locally to prevent calling
   * localStorage.setItem() unnecessarily.
   */
  const workDuration = parseInt(
    localStorage.getItem('workDuration'),
    10,
  );
  const shortBreakDuration = parseInt(
    localStorage.getItem('shortBreakDuration'),
    10,
  );
  const longBreakDuration = parseInt(
    localStorage.getItem('longBreakDuration'),
    10,
  );
  const totalSessionNumber = parseInt(
    localStorage.getItem('totalSessionNumber'),
    10,
  );

  const [seconds, setSeconds] = useState(workDuration);
  const [timerState, setTimerState] = useState('stopped');
  const [sessionCounter, setSessionCounter] = useState(1);

  const handleStop = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Are you sure you want to reset Pomodoro?')) {
      setSeconds(workDuration);
      setSessionCounter(1);
      setTimerState('stopped');
    }
  };

  /**
   * Since session are represented as numbers (breaks included)
   * A pomodoro with four work sessions equals eight total sessions
   * i.e. 1 - work, 2 - short break, 3 - work... 8 - long break.
   *
   * Odd numbers are always work sessions and even number - break.
   */
  const handleSkip = () => {
    if (sessionCounter === totalSessionNumber) {
      setSeconds(longBreakDuration);
    } else if (sessionCounter % 2 !== 0) {
      setSeconds(shortBreakDuration);
    } else {
      setSeconds(workDuration);
      setTimerState('stopped');
    }

    setSessionCounter(sessionCounter + 1);
  };

  const handleSettingsChange = settings => {
    // eslint-disable-next-line no-restricted-syntax
    for (const value of settings) {
      if (value[0] === 'totalSessionNumber') {
        localStorage.setItem(value[0], value[1] * 2);
      } else {
        localStorage.setItem(value[0], value[1]);
      }
    }
  };

  useInterval(
    () => {
      if (seconds === 0) handleSkip();
      else setSeconds(seconds - 1);
    },
    1000,
    timerState,
  );

  const timeLeft = formatToMMSS(seconds);
  const buttonText = getButtonText(timerState);
  return (
    <>
      <Display>{timeLeft}</Display>
      <Button
        inverted
        color="purple"
        onClick={
          timerState === 'stopped' || timerState === 'paused'
            ? () => setTimerState('running')
            : () => setTimerState('paused')
        }
      >
        {buttonText}
      </Button>
      <Button inverted color="blue" onClick={handleStop}>
        Stop
      </Button>
      <Button
        inverted
        color="orange"
        style={
          sessionCounter === 1 && timerState === 'stopped'
            ? { display: 'none' }
            : { display: 'inline-block' }
        }
        onClick={handleSkip}
      >
        Skip
      </Button>

      <Settings
        workDuration={workDuration}
        shortBreakDuration={shortBreakDuration}
        longBreakDuration={longBreakDuration}
        handleNewSettings={handleSettingsChange}
      />
    </>
  );
};

export default hot(App);

import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';
import useInterval from '../hooks/useInterval';
import Controls from './Controls';
import Settings from './Settings';

const Display = styled.div`
  font-size: 80px;
  height: 400px;
  padding-top: 220px;
  @media only screen and (min-width: 480px) {
    font-size: 100px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 120px;
  }
  @media only screen and (min-width: 992px) {
    font-size: 150px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 200px;
  }
`;

const Timer = styled.section`
  color: white;
`;

const getTimeInMMSS = seconds => {
  const minutesLeft = Math.floor(seconds / 60);
  const secondsLeft = Math.floor(seconds - minutesLeft * 60);

  /**
   * Converts to MM:SS format...
   */
  let timeLeft = `${minutesLeft} : ${secondsLeft}`;
  if (minutesLeft < 10 && secondsLeft < 10) {
    timeLeft = `0${minutesLeft} : 0${secondsLeft}`;
  } else if (minutesLeft < 10) {
    timeLeft = `0${minutesLeft} : ${secondsLeft}`;
  } else if (secondsLeft < 10) {
    timeLeft = `${minutesLeft} : 0${secondsLeft}`;
  }

  return timeLeft;
};

const App = () => {
  /**
   * Checks for previously set settings, if not available -
   * sets the numbers below (defaults)...
   */
  if (
    !localStorage.getItem('pomodoroDuration') ||
    !localStorage.getItem('shortBreakDuration') ||
    !localStorage.getItem('longBreakDuration') ||
    !localStorage.getItem('longBreakDelay')
  ) {
    localStorage.setItem('pomodoroDuration', 1500);
    localStorage.setItem('shortBreakDuration', 300);
    localStorage.setItem('longBreakDuration', 1200);
    localStorage.setItem('longBreakDelay', 4);
  }

  /**
   * Saves settings programmatically in order
   * to prevent calling localStorage methods every
   * time we need duration of a session...
   */
  const pomodoroDuration = parseInt(
    localStorage.getItem('pomodoroDuration'),
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
  const longBreakDelay = parseInt(
    localStorage.getItem('longBreakDelay'),
    10,
  );

  const [seconds, setSeconds] = useState(pomodoroDuration);
  const [timerState, setTimerState] = useState('stopped');
  const [sessionCounter, setSessionCounter] = useState(1);

  const handleStop = () => {
    if (confirm('Are you sure you want to reset Pomodoro?')) {
      setSeconds(pomodoroDuration);
      setSessionCounter(1);
      setTimerState('stopped');
    }
  };

  /**
   * Session are represented as numbers (breaks included).
   * A timer with four pomodoro sessions equals eight total
   * sessions with breaks.
   *
   * e.g. 1 - work, 2 - short break, 3 - work... 8 - long break.
   * Odd numbers are always pomodoro sessions and even numbers - break.
   */
  const handleSkip = () => {
    if (sessionCounter === longBreakDelay) {
      setSeconds(longBreakDuration);
    } else if (sessionCounter % 2 !== 0) {
      setSeconds(shortBreakDuration);
    } else {
      setSeconds(pomodoroDuration);
      setTimerState('stopped');
    }

    setSessionCounter(sessionCounter + 1);
  };

  useInterval(
    () => {
      if (seconds === 0) handleSkip();
      else setSeconds(seconds - 1);
    },
    1000,
    timerState,
  );

  const handleSettingsChange = settings => {
    Array.from(settings).forEach(setting => {
      if (setting[0] === 'longBreakDelay') {
        localStorage.setItem(setting[0], setting[1] * 2);
      } else {
        localStorage.setItem(setting[0], setting[1]);
      }
    });

    setSeconds(localStorage.getItem('pomodoroDuration'));
    setTimerState('stopped');
    setSessionCounter(1);
  };

  let firstButtonText;
  if (timerState === 'stopped') firstButtonText = 'Start';
  else if (timerState === 'running') firstButtonText = 'Pause';
  else firstButtonText = 'Resume';
  const time = getTimeInMMSS(seconds);

  return (
    <>
      <Container fluid textAlign="center">
        <Timer>
          <Display>{time}</Display>
          <Controls
            isDisabled={
              !!(timerState === 'stopped' && sessionCounter === 1)
            }
            onSkip={handleSkip}
            onStart={
              timerState === 'stopped' || timerState === 'paused'
                ? () => setTimerState('running')
                : () => setTimerState('paused')
            }
            onStop={handleStop}
            textContext={firstButtonText}
          />
        </Timer>

        <Settings
          onSettingsChange={handleSettingsChange}
          longBreakDelay={longBreakDelay}
          longBreak={longBreakDuration}
          shortBreak={shortBreakDuration}
          pomodoro={pomodoroDuration}
        />
      </Container>
    </>
  );
};

export default hot(App);

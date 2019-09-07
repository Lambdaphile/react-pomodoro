import React from 'react';
import styled from 'styled-components';
import TimerControls from './Controls';

const Timer = styled.div`
  height: 100px;
  width: 200px;
  background-color: yellow;
  font-size: 34px;
`;

export default class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workSeconds: 1500,
      breakSeconds: 300,
      state: 'idle',
    };
  }

  handleStart = () => {
    this.workTimer = setInterval(() => this.countDown(), 1000);
    this.setState({ state: 'start' });
  }

  countDown = () => {
    this.setState((prevState) => ({ workSeconds: prevState.workSeconds - 1 }));
  }

  handleStop = () => {
    clearInterval(this.workTimer);
    this.setState({ workSeconds: 1500, state: 'idle' });
  }

  handlePause = () => {
    this.setState((prevState) => ({ workSeconds: prevState.workSeconds, state: 'paused' }));
    clearInterval(this.workTimer);
  }

  handleDone = () => {
  }

  convertToPomodoro = () => {
    const { workSeconds } = this.state;
    const pomodoroMinutes = Math.floor(workSeconds / 60);
    const pomodoroSeconds = Math.floor(workSeconds - (pomodoroMinutes * 60));

    return { minutes: pomodoroMinutes, seconds: pomodoroSeconds };
  }

  render() {
    const { state } = this.state;
    const pomodoro = this.convertToPomodoro();
    let displayPomodoroTime = `${pomodoro.minutes} : ${pomodoro.seconds}`;

    if (pomodoro.minutes < 10
        && pomodoro.seconds < 10) displayPomodoroTime = `0${pomodoro.minutes} : 0${pomodoro.seconds}`;
    if (pomodoro.minutes < 10) displayPomodoroTime = `0${pomodoro.minutes} : ${pomodoro.seconds}`;
    if (pomodoro.seconds < 10) displayPomodoroTime = `${pomodoro.minutes} : 0${pomodoro.seconds}`;

    return (
      <>
        <Timer>{displayPomodoroTime}</Timer>
        <TimerControls
          state={state}
          handleStart={this.handleStart}
          handlePause={this.handlePause}
          handleStop={this.handleStop}
          handleDone={this.handleDone}
        />
      </>
    );
  }
}

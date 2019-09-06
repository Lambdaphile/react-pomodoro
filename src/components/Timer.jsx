import React from 'react';
import styled from 'styled-components';
import Controls from './Controls';

const StyledTimer = styled.div`
  height: 100px;
  width: 200px;
  background-color: yellow;
  font-size: 34px;
`;

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 1500,
    };
  }

  componentDidMount() {
    this.time = setInterval(
      () => this.countDown(),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }

  handleStart = () => {
    this.componentDidMount();
  }

  handleStop = () => {
    this.componentWillUnmount();
    this.setState({ seconds: 1500 });
  }

  countDown = () => {
    this.setState((prevState) => ({ seconds: prevState.seconds - 1 }));
  }

  convertToMinutes = () => {
    const { seconds } = this.state;

    const timerMinutes = Math.floor(seconds / 60);
    let timerSeconds = Math.floor(seconds - (timerMinutes * 60));
    if (timerSeconds === 0) timerSeconds = '00';

    return { minutes: timerMinutes, seconds: timerSeconds };
  }

  render() {
    const timer = this.convertToMinutes();
    const display = `${timer.minutes} : ${timer.seconds}`;

    return (
      <fragment>
        <StyledTimer>
          {display}
        </StyledTimer>
        <Controls
          handleStart={this.handleStart}
          handleStop={this.handleStop}
        />
      </fragment>
    );
  }
}

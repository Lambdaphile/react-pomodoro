import React, { useState } from 'react';
import styled from 'styled-components';
import Controls from './Controls';

const Display = styled.div`
  font-size: 64px;
  color: white;
`;

const Timer = () => {
  let [time, setTime] = useState(1500);
  const [state, setState] = useState('stopped');

  const countDown = () => {
    setTime(time - 1);
    console.log(time);
  };

  let timerr;
  const handleStart = () => {
    timerr = setInterval(() => countDown(), 1000);
    setState('running');
  };

  const handleStop = () => {
    clearInterval(timerr);
  };

  const handlePause = () => {
    clearInterval(timerr);
    setState('stopped');
  };

  const handleSkip = () => {
  };

  const getTimeLeft = () => {
    const timed = time;
    const minutesLeft = Math.floor(timed / 60);
    const secondsLeft = Math.floor(timed - (minutesLeft * 60));

    // Stop premature optimizations, do them after your code finished
    let formattedTime = `${minutesLeft} : ${secondsLeft}`;
    if (secondsLeft < 10) formattedTime = `${minutesLeft} : 0${secondsLeft}`;
    if (minutesLeft < 10) formattedTime = `0${minutesLeft} : ${secondsLeft}`;
    if (minutesLeft < 10
      && secondsLeft < 10) formattedTime = `0${minutesLeft} : 0${secondsLeft}`;

    return formattedTime;
  };

  const timeLeft = getTimeLeft();

  return (
    <>
      <Display>{timeLeft}</Display>
      <Controls
        timerState={state}
        handleStart={handleStart}
        handlePause={handlePause}
        handleSkip={handleSkip}
        handleStop={handleStop}
      />
    </>
  );
};

export default Timer;

// export default class Timer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       workSeconds: 1500,
//       breakSeconds: 300,
//     };
//   }

//   handleStart = () => {
//     this.timer = setInterval(() => this.countDown(), 1000);
//     this.setState({ state: 'start' });
//   }

//   countDown = () => {
//     this.setState((prevState) => ({ workSeconds: prevState.workSeconds - 1 }));
//   }

//   handleStop = () => {
//     clearInterval(this.workTimer);
//     this.setState({ workSeconds: 1500, state: 'idle' });
//   }

//   handlePause = () => {
//     this.setState((prevState) => ({ workSeconds: prevState.workSeconds, state: 'paused' }));
//     clearInterval(this.workTimer);
//   }

//   handleSkip = () => {
//   }


//   render() {

//     return (
//       <>
//         <Display>{displayPomodoroTime}</Display>
//         <TimerControls
//           state={state}
//           handleStart={this.handleStart}
//           handlePause={this.handlePause}
//           handleStop={this.handleStop}
//           handleDone={this.handleDone}
//         />
//       </>
//     );
//   }
// }

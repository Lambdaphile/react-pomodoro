import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

const Container = styled.div`
  margin-top: 100px;
`;

const Controls = ({
  handleStart, handlePause, handleStop, handleSkip, timerState
}) => {
  if (timerState === 'running') {
    return (
      <Container>
        <Button
          inverted
          size="large"
          color="white"
          onClick={handlePause}
        >
          Pause
        </Button>
        <Button
          inverted
          size="large"
          color="white"
          onClick={handleStop}
        >
          Stop
        </Button>
        <Button
          inverted
          size="large"
          color="white"
          onClick={handleSkip}
        >
          Skip
        </Button>
      </Container>
    );
  }

  if (timerState === 'paused') {
    return (
      <Container>
        <Button
          inverted
          size="large"
          color="white"
          onClick={handleStart}
        >
          Resume
        </Button>
        <Button
          inverted
          size="large"
          color="white"
          onClick={handleStop}
        >
          Stop
        </Button>
        <Button
          inverted
          size="large"
          color="white"
          onClick={handleSkip}
        >
          Skip
        </Button>
      </Container>
    );
  }

  return (
    <Container>
      <Button
        inverted
        size="large"
        color="white"
        onClick={handleStart}
      >
        Start
      </Button>
      <Button
        inverted
        size="large"
        color="white"
        onClick={handleStop}
      >
        Stop
      </Button>
      <Button
        inverted
        size="large"
        color="white"
        onClick={handleSkip}
      >
        Skip
      </Button>
    </Container>
  );
};

Controls.propTypes = {
  timerState: PropTypes.string.isRequired,
  handleStart: PropTypes.func.isRequired,
  handlePause: PropTypes.func.isRequired,
  handleStop: PropTypes.func.isRequired,
  handleSkip: PropTypes.func.isRequired,
};

export default Controls;

// if (state === 'start') {
//   return (
//     <Controls>
//       <Button
//         inverted
//         color="white"
//         onClick={handlePause}
//       >
//         Pause
//       </Button>
//       <Button
//         inverted
//         color="white"
//         onClick={handleStop}
//       >
//         Stop
//       </Button>
//     </Controls>
//   );
// }

// if (state === 'paused') {
//   return (
//     <Controls>
//       <Button
//         inverted
//         color="orange"
//         onClick={handleStart}
//       >
//         Resume
//       </Button>
//       <Button
//         inverted
//         color="orange"
//         onClick={handleDone}
//       >
//         Done
//       </Button>
//     </Controls>
//   );
// }

// if (state === 'idle') {
//   return (
//     <Controls>
//       <Button
//         inverted
//         size="large"
//         color="white"
//         onClick={handleStart}
//       >
//         Start
//       </Button>
//       <Button
//         inverted
//         size="large"
//         color="white"
//         onClick={handleStop}
//       >
//         Stop
//       </Button>
//     </Controls>
//   );
// }

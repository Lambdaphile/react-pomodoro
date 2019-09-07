import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

const Controls = styled.div`
  margin-top: 100px;
  text-align: center;
`;

const PomodoroControls = ({
  state, handleStart, handlePause, handleStop, handleDone,
}) => {
  if (state === 'start') {
    return (
      <Controls>
        <Button
          inverted
          color="orange"
          onClick={handlePause}
        >
          Pause
        </Button>
        <Button
          inverted
          color="orange"
          onClick={handleStop}
        >
          Stop
        </Button>
      </Controls>
    );
  }

  if (state === 'paused') {
    return (
      <Controls>
        <Button
          inverted
          color="orange"
          onClick={handleStart}
        >
          Resume
        </Button>
        <Button
          inverted
          color="orange"
          onClick={handleDone}
        >
          Done
        </Button>
      </Controls>
    );
  }

  if (state === 'idle') {
    return (
      <Controls>
        <Button
          inverted
          color="orange"
          onClick={handleStart}
        >
          Start
        </Button>
        <Button
          inverted
          color="orange"
          onClick={handleStop}
        >
          Stop
        </Button>
      </Controls>
    );
  }
};

PomodoroControls.propTypes = {
  state: PropTypes.string.isRequired,
  handleStart: PropTypes.func.isRequired,
  handlePause: PropTypes.func.isRequired,
  handleStop: PropTypes.func.isRequired,
  handleDone: PropTypes.func.isRequired,
};

export default PomodoroControls;

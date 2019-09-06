import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

const StyledControls = styled.div`
  margin-top: 100px;
  text-align: center;
`;

const Controls = ({ handleStart, handleStop }) => (
  <StyledControls>
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
  </StyledControls>
);

Controls.propTypes = {
  handleStart: PropTypes.func.isRequired,
  handleStop: PropTypes.func.isRequired,
};

export default Controls;

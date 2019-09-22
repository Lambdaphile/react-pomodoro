import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid } from 'semantic-ui-react';

const Controls = ({
  isDisabled,
  onSkip,
  onStart,
  onStop,
  textContext,
}) => {
  return (
    <>
      <Grid centered stackable>
        <Grid.Column width="3">
          <Button
            circular
            color="grey"
            fluid
            inverted
            onClick={onStart}
            size="huge"
          >
            {textContext}
          </Button>
        </Grid.Column>
        <Grid.Column width="3">
          <Button
            circular
            color="grey"
            disabled={isDisabled}
            fluid
            inverted
            onClick={onStop}
            size="huge"
          >
            Stop
          </Button>
        </Grid.Column>
        <Grid.Column width="3">
          <Button
            circular
            color="grey"
            disabled={isDisabled}
            fluid
            inverted
            onClick={onSkip}
            size="huge"
          >
            Skip
          </Button>
        </Grid.Column>
      </Grid>
    </>
  );
};

Controls.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  onSkip: PropTypes.func.isRequired,
  onStart: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
  textContext: PropTypes.string.isRequired,
};

export default Controls;

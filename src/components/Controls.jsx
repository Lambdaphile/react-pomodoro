import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Header, Icon, Modal } from 'semantic-ui-react';

const Controls = ({
  isDisabled,
  onSkip,
  onStart,
  onStop,
  textContext,
}) => {
  const [modalState, setModalState] = useState(false);

  const handleOpen = () => {
    setModalState(true);
  };

  const handleYes = () => {
    onStop();
    setModalState(false);
  };
  const handleNo = () => setModalState(false);

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
          <Modal
            basic
            open={modalState}
            size="small"
            trigger={(
              <Button
                circular
                color="grey"
                disabled={isDisabled}
                fluid
                inverted
                onClick={handleOpen}
                size="huge"
              >
                Stop
              </Button>
            )}
          >
            <Header content="Stop Pomodoro" />
            <Modal.Content>
              <p>Are you sure you want to reset Pomodoro?</p>
            </Modal.Content>
            <Modal.Actions>
              <Button basic color="red" inverted onClick={handleNo}>
                <Icon name="remove" />
                No
              </Button>
              <Button color="green" inverted onClick={handleYes}>
                <Icon name="checkmark" />
                Yes
              </Button>
            </Modal.Actions>
          </Modal>
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

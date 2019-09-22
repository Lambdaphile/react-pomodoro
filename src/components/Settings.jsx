import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Button,
  Form,
  Grid,
  Header,
  Icon,
  Input,
  Modal,
} from 'semantic-ui-react';

const Label = styled.label`
  color: white;
`;

const FormActions = styled.div`
  float: right;
  margin-top: 30px;
  margin-right: 15px;
  width: 180px;
  @media only screen and (min-width: 768px) {
    margin-right: 0;
  }
`;

const RangeInput = styled.input`
  width: 100%;
  &:hover {
    color: red;
  }
`;

const SettingsButton = styled.div`
  color: grey;
  font-size: 35px;
  margin: 20px;
  position: absolute;
  right: 0;
  top: 0;
  &:hover {
    color: white;
  }
  @media only screen and (min-width: 768px) {
    font-size: 40px;
    margin: 30px;
  }
`;

const Settings = ({
  onSettingsChange,
  longBreak,
  longBreakDelay,
  shortBreak,
  pomodoro,
}) => {
  const handleFormSubmit = e => {
    const newSettings = new FormData(e.target);
    onSettingsChange(newSettings);
  };

  return (
    <Modal
      basic
      trigger={(
        <SettingsButton>
          <Icon name="settings" />
        </SettingsButton>
      )}
      size="small"
    >
      <Header>
        <p>Custom Pomodoro Settings:</p>
      </Header>
      <Modal.Content>
        <Form onSubmit={handleFormSubmit}>
          <Form.Field>
            <Grid stackable>
              <Grid.Row>
                <Grid.Column floated="left" width="5">
                  <Label>Pomodoro duration:</Label>
                  <Input
                    defaultValue={pomodoro}
                    fluid
                    name="pomodoroDuration"
                    placeholder="25"
                    size="small"
                    type="number"
                  />
                </Grid.Column>
                <Grid.Column width="5">
                  <Label>Short short break duration:</Label>
                  <Input
                    defaultValue={shortBreak}
                    fluid
                    name="shortBreakDuration"
                    placeholder="5"
                    size="small"
                    type="number"
                  />
                </Grid.Column>
                <Grid.Column floated="right" width="5">
                  <Label>Long break duration:</Label>
                  <Input
                    defaultValue={longBreak}
                    fluid
                    name="longBreakDuration"
                    placeholder="20"
                    size="small"
                    type="number"
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width="16">
                  <Label>
                    Long break delay:
                    <RangeInput
                      defaultValue={longBreakDelay}
                      name="longBreakDelay"
                      max="12"
                      min="0"
                      step="1"
                      type="range"
                    />
                  </Label>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form.Field>
          <FormActions>
            <Button color="green" type="submit">
              Submit
            </Button>
            <Button color="red" floated="right" type="submit">
              Cancel
            </Button>
          </FormActions>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

Settings.propTypes = {
  onSettingsChange: PropTypes.func.isRequired,
  longBreak: PropTypes.number.isRequired,
  longBreakDelay: PropTypes.number.isRequired,
  pomodoro: PropTypes.number.isRequired,
  shortBreak: PropTypes.number.isRequired,
};

export default Settings;

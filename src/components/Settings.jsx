import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import {
  Modal,
  Header,
  Button,
  Form,
  Input,
  Icon,
  Grid,
} from 'semantic-ui-react';

const Label = styled.label`
  color: white;
`;

const FormActions = styled.div`
  float: right;
  margin-top: 30px;
  width: 180px;
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

const RangeInput = styled.input`
  width: 100%;
  &:hover {
    color: red;
  }
`;

/**
 * Work, short break, long break duration and
 * session count
 */
const Settings = ({
  handleNewSettings,
  longBreakDuration,
  shortBreakDuration,
  totalSessionNumber,
  workDuration,
}) => {
  const handleFormSubmit = e => {
    const newSettings = new FormData(e.target);
    handleNewSettings(newSettings);
  };

  return (
    <Modal
      basic
      trigger={
        <SettingsButton>
          <Icon name="settings" />
        </SettingsButton>
      }
      size="small"
    >
      <Header>
        <p>Custom Pomodoro Settings:</p>
      </Header>
      <Modal.Content>
        <Form onSubmit={handleFormSubmit}>
          <Form.Field>
            <Grid centered stackable>
              <Grid.Row>
                <Grid.Column floated="left" fluid width="5">
                  <Label>Work Duration:</Label>
                  <Input
                    defaultValue={workDuration}
                    fluid
                    id="work-duration"
                    name="workDuration"
                    placeholder="25"
                    size="small"
                    type="number"
                  />
                </Grid.Column>
                <Grid.Column fluid width="5">
                  <Label>Short Break Duration:</Label>
                  <Input
                    defaultValue={shortBreakDuration}
                    fluid
                    id="short-break"
                    name="shortBreakDuration"
                    placeholder="5"
                    size="small"
                    type="number"
                  />
                </Grid.Column>
                <Grid.Column floated="right" fluid width="5">
                  <Label>Long Break Duration:</Label>
                  <Input
                    defaultValue={longBreakDuration}
                    id="long-break"
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
                    Sessions
                    <RangeInput
                      defaultValue={totalSessionNumber}
                      id="session-count"
                      max="12"
                      min="0"
                      name="totalSessionNumber"
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
            <Button floated="right" color="red" type="submit">
              Cancel
            </Button>
          </FormActions>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

Settings.propTypes = {
  workDuration: PropTypes.number.isRequired,
  shortBreakDuration: PropTypes.number.isRequired,
  longBreakDuration: PropTypes.number.isRequired,
  handleNewSettings: PropTypes.func.isRequired,
};

export default Settings;

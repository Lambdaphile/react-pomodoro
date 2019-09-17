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
} from 'semantic-ui-react';

const SettingsInput = styled.input`
  display: inline-block !important;
  width: 200px !important;
  margin-right: 10px !important;
`;

const Label = styled.label`
  color: white !important;
`;

const SettingsButton = styled.div`
  position: absolute;
  margin: 30px !important;
  font-size: 40px;
  top: 0;
  right: 0;
  @media only screen and (max-width: 400px) {
    font-size: 35px;
    margin: 20px;
  }
`;

/**
 * Work, short break, long break duration and
 * session count
 */
const Settings = ({
  workDuration,
  shortBreakDuration,
  longBreakDuration,
  handleNewSettings,
}) => {
  const handleFormSubmit = e => {
    const newSettings = new FormData(e.target);
    handleNewSettings(newSettings);
  };

  return (
    <Modal
      trigger={
        <SettingsButton>
          <Icon color="grey" name="settings" />
        </SettingsButton>
      }
      size="small"
      basic
    >
      <Header>
        <p>Enter Your Pomodoro Settings:</p>
      </Header>
      <Modal.Content>
        <Form onSubmit={handleFormSubmit}>
          <Form.Field>
            <SettingsInput
              id="work-duration"
              name="workDuration"
              defaultValue={workDuration}
              type="number"
              placeholder="e.g 25 minutes..."
            />
            <SettingsInput
              id="short-break"
              name="shortBreakDuration"
              defaultValue={shortBreakDuration}
              type="number"
              placeholder="e.g 5 minutes.."
            />
            <SettingsInput
              id="long-break"
              name="longBreakDuration"
              defaultValue={longBreakDuration}
              type="number"
              placeholder="e.g. 20 minutes..."
            />
          </Form.Field>
          <Form.Field>
            <Label>
              Sessions
              <Input
                id="session-count"
                name="totalSessionNumber"
                type="range"
                min="0"
                max="12"
                step="0"
              />
            </Label>
          </Form.Field>
          <Button type="submit">Submit</Button>
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

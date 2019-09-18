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
  display: inline-block;
  width: 200px !important;
  margin-right: 10px !important;
`;

const Label = styled.label`
  color: white;
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
      trigger={(
        <SettingsButton>
          <Icon name="settings" />
        </SettingsButton>
      )}
      basic
      size="small"
    >
      <Header>
        <p>Enter Your Pomodoro Settings:</p>
      </Header>
      <Modal.Content>
        <Form onSubmit={handleFormSubmit}>
          <Form.Field>
            <SettingsInput
              defaultValue={workDuration}
              id="work-duration"
              name="workDuration"
              placeholder="e.g 25 minutes..."
              type="number"
            />
            <SettingsInput
              defaultValue={shortBreakDuration}
              id="short-break"
              name="shortBreakDuration"
              placeholder="e.g 5 minutes.."
              type="number"
            />
            <SettingsInput
              defaultValue={longBreakDuration}
              id="long-break"
              name="longBreakDuration"
              placeholder="e.g. 20 minutes..."
              type="number"
            />
          </Form.Field>
          <Form.Field>
            <Label>
              Sessions
              <Input
                id="session-count"
                max="12"
                min="0"
                name="totalSessionNumber"
                step="0"
                type="range"
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

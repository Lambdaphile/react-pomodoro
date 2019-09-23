import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const Container = styled.div`
  color: gray;
  font-size: 32px;
  left: 0;
  margin: 25px 15px;
  position: absolute;
  top: 0;
`;

const Pomodoro = ({ longBreakDelay, sessionCounter, timerState }) => {
  const pomodoro = [];
  for (let i = 0; i < longBreakDelay; i += 1) {
    if (i % 2 !== 0) {
      // When a pomodoro session is completed...
      if (i < sessionCounter) {
        pomodoro.push(
          <Icon.Group>
            <Icon
              name="circle notch"
              style={{ color: '#629d62', fontSize: '36px' }}
            />
            <Icon
              name="circle dot outline"
              style={{
                color: '#629d62',
                fontSize: '18px',
                left: '46.5%',
                top: '46%',
              }}
            />
          </Icon.Group>,
        );
        // When a pomodoro session is started...
      } else if (timerState !== 'stopped' && i === sessionCounter) {
        pomodoro.push(
          <Icon.Group>
            <Icon
              loading
              name="circle notch"
              style={{ color: '#baba45', fontSize: '36px' }}
            />
            <Icon
              name="circle dot outline"
              style={{
                color: '#baba45',
                fontSize: '18px',
                left: '46.5%',
                top: '46%',
              }}
            />
          </Icon.Group>,
        );
        // idle...
      } else {
        pomodoro.push(
          <Icon.Group>
            <Icon name="circle notch" style={{ fontSize: '36px' }} />
            <Icon
              name="circle dot outline"
              style={{
                fontSize: '18px',
                left: '46.5%',
                top: '46%',
                borderRadius: '100%',
              }}
            />
          </Icon.Group>,
        );
      }
    }
  }

  return <Container>{pomodoro}</Container>;
};

Pomodoro.propTypes = {
  longBreakDelay: PropTypes.number.isRequired,
  sessionCounter: PropTypes.number.isRequired,
  timerState: PropTypes.string.isRequired,
};

export default Pomodoro;

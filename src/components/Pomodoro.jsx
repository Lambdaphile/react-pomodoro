import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Segment } from 'semantic-ui-react';
import Timer from './Timer';

const Pomodoro = styled.div`
  background-color: lightcoral;
  border-radius: 6px;
  display: relative;
  height: 300px;
  padding-top: 110px;
`;

const App = () => {
  const [seconds, setSeconds] = useState(1500);

  return (
    <Container>
      <Segment raised textAlign="center">
        <Pomodoro>
          <Timer />
        </Pomodoro>
      </Segment>
    </Container>
  );
};

export default hot(App);

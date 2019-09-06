import { hot } from 'react-hot-loader/root';
import React from 'react';
import styled from 'styled-components';
import Timer from './Timer';

const Panel = styled.div`
  border-radius: 6px;
  border: 2px solid orange;
  display: relative;
  margin: auto auto;
  margin-top: 5px;
  height: 300px;
  width: 1000px;
`;

class App extends React.Component {
  handleStart = () => {
  }

  handleStop = () => {
  }

  render() {
    return (
      <Panel>
        <Timer />
      </Panel>
    );
  }
}

export default hot(App);

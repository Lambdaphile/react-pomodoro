import { hot } from 'react-hot-loader/root';
import React from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

const Panel = styled.div`
  border-radius: 6px;
  border: 2px solid orange;
  display: relative;
  margin: auto auto;
  height: 300px;
  width: 1000px;
`;

const Controls = styled.div`
  margin-top: 100px;
  text-align: center;
`;

const Clock = styled.div`
  border-bottom: 2px solid orange;
  width: 400px;
  margin: 100px auto;
`;

function callAlert() { alert('Hi!'); }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      please: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      please: true,
    });

    callAlert(this.state);
  }

  render() {
    return (
      <Panel>
        <Clock>
          {new Date().toLocaleDateString()}
        </Clock>
        <Controls>
          <Button
            inverted
            color="orange"
            onClick={this.handleClick}
          >
          Start
          </Button>
          <Button
            inverted
            color="orange"
            onClick={this.handleClick}
          >
          Stop
          </Button>
        </Controls>
      </Panel>
    );
  }
}

export default hot(App);

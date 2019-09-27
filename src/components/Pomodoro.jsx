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
							name="smile"
							style={{
								color: '#629d62',
								fontSize: '34px',
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
							name="smile"
							style={{
								color: '#baba45',
								fontSize: '34px',
							}}
						/>
					</Icon.Group>,
				);
				// idle...
			} else {
				pomodoro.push(
					<Icon.Group>
						<Icon
							name="meh"
							style={{
								fontSize: '34px',
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

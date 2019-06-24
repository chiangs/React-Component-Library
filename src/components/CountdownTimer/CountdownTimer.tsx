import * as React from 'react';
import css from './CountdownTimer.module.css';
import CountdownTarget from './CountdownTarget';
import CountdownTime from './CountdownTime';

type Props = {};

const CountdownTimer: React.FC<Props> = props => {
	return (
		<aside data-test='' className={css.CountdownTimer}>
			<CountdownTarget />
			<CountdownTime />
			{props.children}
		</aside>
	);
};

export default CountdownTimer;

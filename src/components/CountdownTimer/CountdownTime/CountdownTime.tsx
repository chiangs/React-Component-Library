import * as React from 'react';
import css from './CountdownTime.module.css';
import TimerUnit from './TimerUnit';

type Props = {
	days: string;
	hours: string;
	minutes: string;
	seconds: string;
};

const CountdownTime: React.FC<Props> = props => {
	return (
		<section data-test='' className={css.CountdownTime}>
			<TimerUnit />
			<TimerUnit />
			<TimerUnit />
			<TimerUnit />
		</section>
	);
};

export default CountdownTime;

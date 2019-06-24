import React, { useState } from 'react';
import css from './CountdownTimer.module.css';
import CountdownTarget from './CountdownTarget';
import CountdownTime from './CountdownTime';
import { TimeUnitObj } from './_types/types';

type Props = {};

const CountdownTimer: React.FC<Props> = props => {
	const [now, setNow] = useState<Date>(new Date(Date.now()));
	const [countdown, setCountdown] = useState<TimeUnitObj[]>([
		{ count: 1, unit: 'days' },
		{ count: 1, unit: 'hours' },
		{ count: 1, unit: 'minutes' },
		{ count: 1, unit: 'seconds' }
	]);

	return (
		<aside data-test='' className={css.CountdownTimer}>
			<CountdownTarget targetText='Time to ' targetDateTime={now} />
			<CountdownTime countdown={countdown} />
			{props.children}
		</aside>
	);
};

export default CountdownTimer;

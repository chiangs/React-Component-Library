import React, { useEffect, useState } from 'react';
import CountdownTarget from './CountdownTarget';
import CountdownTime from './CountdownTime';
import CountdownTimerContext from './CountdownTimer.context';
import css from './CountdownTimer.module.css';
import { getCountdown } from './_services/dateTime.service';
import { Countdown } from './_types/types';

type Props = {};

const CountdownTimer: React.FC<Props> = props => {
	const targetText: string = 'Time to';
	const [now, setNow] = useState<Date>(new Date());
	const [target, setTarget] = useState<Date>(new Date());
	const [countdown, setCountdown] = useState<Countdown>({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	});

	useEffect(() => {
		const targetDateTime: Date = new Date(2021, 11, 28);
		const currentDateTime: Date = new Date(Date.now());
		setTarget(targetDateTime);
		setNow(currentDateTime);
	}, []);

	useEffect(() => {
		setCountdown(getCountdown(target, now));
	}, [now]);

	const context = {
		targetDateTime: target,
		currentDateTime: now,
		countdown: countdown
	};

	return (
		<CountdownTimerContext.Provider value={context}>
			<aside data-test='' className={css.CountdownTimer}>
				<CountdownTarget targetText={targetText} />
				<CountdownTime />
				{props.children}
			</aside>
		</CountdownTimerContext.Provider>
	);
};

export default CountdownTimer;

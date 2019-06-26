import React, { useEffect, useState } from 'react';
import CountdownTarget from './CountdownTarget';
import CountdownTime from './CountdownTime';
import CountdownTimerContext from './CountdownTimer.context';
import css from './CountdownTimer.module.css';
import { getCountdown, toMilliseconds } from './_services/dateTime.service';
import { Countdown } from './_types/types';
import { SECONDS, initCountdown } from './_data/constants';

type Props = {};

const CountdownTimer: React.FC<Props> = props => {
	const targetText: string = 'my 40th birthday!';
	const [now, setNow] = useState<Date>(new Date());
	const [target, setTarget] = useState<Date>(new Date());
	const [countdown, setCountdown] = useState<Countdown>(initCountdown);

	useEffect(() => {
		const targetDateTime: Date = new Date(2021, 11, 28);
		const currentDateTime: Date = new Date(Date.now());
		setTarget(targetDateTime);
		setNow(currentDateTime);
		setInterval(() => setNow(new Date()), toMilliseconds('seconds'));
	}, []);

	useEffect(() => {
		setCountdown(getCountdown(target, now));
		// eslint-disable-next-line
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

import React, { useEffect, useState } from 'react';
import css from './CountdownTimer.module.css';
import { Countdown } from './_types/types';
import { initCountdown } from './_data/constants';
import { getCountdown, toMilliseconds } from './_services/dateTime.service';
import CountdownTarget from './CountdownTarget';
import CountdownTime from './CountdownTime';
import CountdownTimerContext from './CountdownTimer.context';

type Props = {};

const CountdownTimer: React.FC<Props> = props => {
	const [targetName, setTargetName] = useState<string>('');
	const [now, setNow] = useState<Date>(new Date());
	const [target, setTarget] = useState<Date>(new Date());
	const [countdown, setCountdown] = useState<Countdown>(initCountdown);

	useEffect(() => {
		// * When used in an app, change to data from props
		const targetText: string = 'my 40th birthday!';
		const targetDateTime: Date = new Date(2021, 11, 28);
		const currentDateTime: Date = new Date(Date.now());
		setTargetName(targetText);
		setTarget(targetDateTime);
		setNow(currentDateTime);
		setInterval(() => setNow(new Date()), toMilliseconds('seconds'));
	}, []);

	useEffect(() => {
		setCountdown(getCountdown(target, now));
	}, [now, target]);

	const context = {
		targetText: targetName,
		targetDateTime: target,
		currentDateTime: now,
		countdown: countdown
	};

	return (
		<CountdownTimerContext.Provider value={context}>
			<aside data-test='' className={css.CountdownTimer}>
				<CountdownTarget />
				<CountdownTime />
				{props.children}
			</aside>
		</CountdownTimerContext.Provider>
	);
};

export default CountdownTimer;

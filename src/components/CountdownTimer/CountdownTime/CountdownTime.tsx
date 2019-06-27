import React, { useContext } from 'react';
import CountdownTimerContext from '../CountdownTimer.context';
import {
	DAYS,
	HOURS,
	MINUTES,
	SECONDS,
	YEARS,
	MONTHS
} from '../_data/constants';
import css from './CountdownTime.module.css';
import TimerUnit from './TimerUnit';

type Props = {};

const CountdownTime: React.FC<Props> = props => {
	const context = useContext(CountdownTimerContext);
	const unitArray: string[] = [YEARS, MONTHS, DAYS, HOURS, MINUTES, SECONDS];
	const countArray: number[] = Array.from(
		Object.keys(context.countdown),
		key => context.countdown[key]
	);
	const timerUnits: JSX.Element[] = unitArray.map((unit, i) => (
		<TimerUnit count={countArray[i]} unit={unit} />
	));
	return (
		<section data-test='' className={css.CountdownTime}>
			{timerUnits}
		</section>
	);
};

export default CountdownTime;

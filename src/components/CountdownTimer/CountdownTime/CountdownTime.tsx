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
	return (
		<section data-test='' className={css.CountdownTime}>
			<TimerUnit count={context.countdown.years} unit={YEARS} />
			<TimerUnit count={context.countdown.months} unit={MONTHS} />
			<TimerUnit count={context.countdown.days} unit={DAYS} />
			<TimerUnit count={context.countdown.hours} unit={HOURS} />
			<TimerUnit count={context.countdown.minutes} unit={MINUTES} />
			<TimerUnit count={context.countdown.seconds} unit={SECONDS} />
		</section>
	);
};

export default CountdownTime;

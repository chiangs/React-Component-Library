import React, { useContext } from 'react';
import { Countdown } from '../_types/types';
import css from './CountdownTime.module.css';
import TimerUnit from './TimerUnit';
import { DAYS, HOURS, MINUTES, SECONDS } from '../_data/constants';
import CountdownTimerContext from '../CountdownTimer.context';

type Props = {};

const CountdownTime: React.FC<Props> = props => {
	const context = useContext(CountdownTimerContext);
	console.log(context.countdown);

	return (
		<section data-test='' className={css.CountdownTime}>
			<TimerUnit count={context.countdown.days} unit={DAYS} />
			<TimerUnit count={context.countdown.hours} unit={HOURS} />
			<TimerUnit count={context.countdown.minutes} unit={MINUTES} />
			<TimerUnit count={context.countdown.seconds} unit={SECONDS} />
		</section>
	);
};

export default CountdownTime;

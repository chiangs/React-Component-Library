import * as React from 'react';
import css from './CountdownTime.module.css';
import TimerUnit from './TimerUnit';
import { TimeUnitObj } from '../_types/types';

type Props = {
	countdown: TimeUnitObj[];
};

const CountdownTime: React.FC<Props> = props => {
	const timerUnits = props.countdown.map((item, index) => (
		<TimerUnit count={item.count} unit={item.unit} />
	));
	return (
		<section data-test='' className={css.CountdownTime}>
			{timerUnits}
		</section>
	);
};

export default CountdownTime;

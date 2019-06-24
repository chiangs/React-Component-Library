import * as React from 'react';
import css from './TimerUnit.module.css';

type Props = {
	count: number;
	unit: string;
};

const TimerUnit: React.FC<Props> = props => {
	return (
		<section data-test='' className={css.TimerUnit}>
			<span className={css.TimerUnit__Number}>{props.count}</span>
			<span className={css.TimerUnit__Unit}>{props.unit}</span>
		</section>
	);
};

export default TimerUnit;

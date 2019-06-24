import * as React from 'react';
import css from './TimerUnit.module.css';

type Props = {};

const TimerUnit: React.FC<Props> = props => {
	return (
		<section data-test='' className={css.TimerUnit}>
			<span className={css.TimerUnit__Number}>{props.children}</span>
			<span className={css.TimerUnit__Unit}>{props.children}</span>
		</section>
	);
};

export default TimerUnit;

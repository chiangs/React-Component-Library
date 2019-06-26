import React, { useContext } from 'react';
import css from './CountdownTarget.module.css';
import CountdownTimerContext from '../CountdownTimer.context';

type Props = {
	targetText: string;
};

const CountdownTarget: React.FC<Props> = props => {
	const context = useContext(CountdownTimerContext);
	const timeTo: string = 'Time to';
	const dateTimeYYYYMMDD: string = context.targetDateTime.toDateString();
	return (
		<section data-test='' className={css.CountdownTarget}>
			<h1 className={css.CountdownTarget__Target}>
				{timeTo}&nbsp;
				<time dateTime={dateTimeYYYYMMDD}>{props.targetText}</time>
			</h1>
		</section>
	);
};

export default CountdownTarget;

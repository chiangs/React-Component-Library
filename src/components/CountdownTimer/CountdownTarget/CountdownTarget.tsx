import * as React from 'react';
import css from './CountdownTarget.module.css';

type Props = {
	targetText: string;
	targetDateTime: Date;
};

const CountdownTarget: React.FC<Props> = props => {
	const dateTimeYYYYMMDD: string = props.targetDateTime.toDateString();
	const dateTimeText: string = props.targetDateTime.toDateString();
	return (
		<section data-test='' className={css.CountdownTarget}>
			<h1 className={css.CountdownTarget__Target}>
				{props.targetText}
				<time dateTime={dateTimeYYYYMMDD}>{dateTimeText}</time>
			</h1>
		</section>
	);
};

export default CountdownTarget;

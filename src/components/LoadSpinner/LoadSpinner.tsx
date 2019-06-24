import * as React from 'react';
import css from './ScrollTo.module.css';

type Props = {
	progress: number;
	loadMsg: string;
};

const LoadSpinner: React.FC<Props> = props => {
	return (
		<section className={css.LoadSpinner}>
			{props.loadMsg}&nbsp;{props.progress}%
		</section>
	);
};

export default LoadSpinner;

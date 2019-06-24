import * as React from 'react';
import css from './ScrollTo.module.css';

type Props = {
	id?: string;
	attribute?: string;
	class?: string;
	text?: string;
};

const ScrollTo: React.FC<Props> = props => {
	const target: string = !!props.id
		? props.id
		: !!props.attribute
		? props.attribute
		: !!props.class
		? props.class
		: '';

	const clickHandler = (): void => {
		if (target.length === 0) return;
		const element = !!props.id
			? (document.getElementById(target) as HTMLElement)
			: (document.querySelector(target) as HTMLElement);
		if (element === undefined) return;
		element.scrollIntoView({
			behavior: 'smooth',
			block: 'end',
			inline: 'nearest'
		});
	};

	return (
		<button
			data-test='component-scroll-to'
			type='button'
			className={css.ScrollTo__Button}
			onClick={clickHandler}>
			<span className={css.ScrollTo__Content}>
				{props.text}
				{props.children}
			</span>
		</button>
	);
};

export default ScrollTo;

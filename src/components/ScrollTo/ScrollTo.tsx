import * as React from 'react';
import css from './ScrollTo.module.css';

type Props = {
	targetId: string;
	block?: Block;
	inline?: Inline;
};
type Block = 'start' | 'center' | 'end' | 'nearest';
type Inline = 'start' | 'center' | 'end' | 'nearest';

const ScrollTo: React.FC<Props> = props => {
	const defaultBehavior: ScrollBehavior = 'smooth';
	const defaultBlock: Block = 'start';
	const defaultInline: Inline = 'center';
	const element = document.getElementById(props.targetId) as HTMLElement;
	if (element === undefined) return;
	const useBlock: Block = props.block ? props.block : defaultBlock;
	const useInline: Inline = props.inline ? props.inline : defaultInline;

	const onScrollClick = () =>
		element.scrollIntoView({
			behavior: defaultBehavior,
			block: useBlock,
			inline: useInline
		});

	return (
		<button
			type='button'
			data-test=''
			className={css.ScrollTo}
			onClick={onScrollClick}>
			<section className={css.ScrollTo__Children}>
				{props.children}
			</section>
		</button>
	);
};

export default ScrollTo;

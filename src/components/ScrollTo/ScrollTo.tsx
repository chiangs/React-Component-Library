import * as React from 'react';
import css from './ScrollTo.module.css';

type Block = 'start' | 'center' | 'end' | 'nearest';
type Inline = 'start' | 'center' | 'end' | 'nearest';

type Props = {
	targetId: string;
	block?: Block;
	inline?: Inline;
};

const ScrollTo: React.FC<Props> = props => {
	const defaultBehavior: ScrollBehavior = 'smooth';
	const defaultBlock: Block = 'start';
	const defaultInline: Inline = 'center';
	const element = document.getElementById(props.targetId) as HTMLElement;
	const useBlock: Block = props.block ? props.block : defaultBlock;
	const useInline: Inline = props.inline ? props.inline : defaultInline;

	const onScrollClick = () => {
		if (element === undefined) return;
		element.scrollIntoView({
			behavior: defaultBehavior,
			block: useBlock,
			inline: useInline
		});
	};

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

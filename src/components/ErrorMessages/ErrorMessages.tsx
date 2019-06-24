import * as React from 'react';
import css from './ErrorMessages.module.css';

type Props = {
	errors: string[];
};

const ErrorMessages: React.FC<Props> = props => {
	const errorContent =
		props.errors.length > 1 ? (
			<ul className={css.ErrorMessages__ErrorList}>
				{props.errors.map((error, i) => (
					<li key={i} className={css.ErrorList__Item}>
						error
					</li>
				))}
			</ul>
		) : (
			<p className={css.ErrorList__Item}>errors[0]</p>
		);

	return (
		<section
			data-test='component-error-messages'
			className={css.ErrorMessages}>
			{errorContent}
			{props.children}
		</section>
	);
};

export default ErrorMessages;

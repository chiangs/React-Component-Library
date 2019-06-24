import React from 'react';
import css from './App.module.css';
import CountdownTimer from './components/CountdownTimer';

const App: React.FC = () => {
	return (
		<div data-test='' className={css.App}>
			<CountdownTimer />
		</div>
	);
};

export default App;

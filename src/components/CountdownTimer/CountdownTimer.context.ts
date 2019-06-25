import * as React from 'react';
import { Countdown } from './_types/types';

type Context = {
	targetDateTime: Date;
	currentDateTime: Date;
	countdown: Countdown;
};

const CountdownTimerContext = React.createContext<Context>({
	targetDateTime: new Date(Date.now()),
	currentDateTime: new Date(Date.now()),
	countdown: {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	}
});

export default CountdownTimerContext;

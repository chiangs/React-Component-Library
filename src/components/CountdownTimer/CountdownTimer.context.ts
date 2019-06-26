import * as React from 'react';
import { Countdown } from './_types/types';
import { initCountdown } from './_data/constants';

type Context = {
	targetDateTime: Date;
	currentDateTime: Date;
	countdown: Countdown;
};

const CountdownTimerContext = React.createContext<Context>({
	targetDateTime: new Date(Date.now()),
	currentDateTime: new Date(Date.now()),
	countdown: initCountdown
});

export default CountdownTimerContext;

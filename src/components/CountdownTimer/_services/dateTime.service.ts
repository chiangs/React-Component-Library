import { TimeUnit, Countdown } from '../_types/types';
import { SECONDS, MINUTES, HOURS, DAYS } from '../_data/constants';

export const toMilliseconds = (unit: TimeUnit): number => {
	const seconds = 1000;
	const minutes = seconds * 60;
	const hours = minutes * 60;
	const days = hours * 24;

	if (unit === SECONDS) return seconds;
	if (unit === MINUTES) return minutes;
	if (unit === HOURS) return hours;
	if (unit === DAYS) return days;
	return seconds;
};

export const getCountdown = (targetDate: Date, startDate: Date): Countdown => {
	const difference: number = targetDate.valueOf() - startDate.valueOf();
	const days: number = Math.floor(difference / toMilliseconds('days'));
	const hours: number = Math.floor(
		(difference % toMilliseconds('days')) / toMilliseconds('hours')
	);
	const minutes: number = Math.floor(
		(difference % toMilliseconds('hours')) / toMilliseconds('minutes')
	);
	const seconds: number = Math.floor(
		(difference % toMilliseconds('minutes')) / toMilliseconds('seconds')
	);

	return {
		days,
		hours,
		minutes,
		seconds
	};
};

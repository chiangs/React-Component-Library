import { TimeUnit, Countdown } from '../_types/types';
import { SECONDS, MINUTES, HOURS, DAYS } from '../_data/constants';

type YearDifference = { years: number; days: number; ms: number };
type MonthDifference = { months: number; days: number; ms: number };

export const toMilliseconds = (unit: TimeUnit): number => {
	const seconds: number = 1000;
	const minutes: number = seconds * 60;
	const hours: number = minutes * 60;
	const days: number = hours * 24;

	if (unit === SECONDS) return seconds;
	if (unit === MINUTES) return minutes;
	if (unit === HOURS) return hours;
	if (unit === DAYS) return days;
	return seconds;
};

const isLeapYear = (year: number): boolean => {
	const feb29: Date = new Date(year, 1, 29);
	return feb29.getDate() === 29;
};

const getDaysInYear = (year: number): number => (isLeapYear(year) ? 366 : 365);

const getDayDiff = (yearDiff: number, startDate: Date): number =>
	Array.from({ length: yearDiff })
		.map((value, index) => {
			const d: Date = new Date(startDate);
			d.setFullYear(d.getFullYear() + index);
			const year: number = d.getFullYear();
			const month: number = d.getMonth();
			const isAfterMarch: boolean = month > 1;
			return isAfterMarch ? getDaysInYear(year + 1) : getDaysInYear(year);
		})
		.reduce((sum, v) => sum + v, 0);

const getYearDiff = (targetDate: Date, startDate: Date): YearDifference => {
	let yearDiff: number = targetDate.getFullYear() - startDate.getFullYear();

	// * Check for full year difference
	const d: Date = new Date(targetDate);
	d.setFullYear(targetDate.getFullYear() - yearDiff);
	if (d < startDate) yearDiff = yearDiff - 1;
	const dayDiff = getDayDiff(yearDiff, startDate);

	return {
		years: yearDiff,
		days: dayDiff,
		ms: dayDiff * toMilliseconds('days')
	};
};

const getMonthDiff = (targetDate: Date, startDate: Date): MonthDifference => {
	const yearDiff = targetDate.getFullYear() - startDate.getFullYear();
	let monthDiff =
		targetDate.getMonth() + yearDiff * 12 - startDate.getMonth();

	// * Check for full month difference
	const d: Date = new Date(targetDate);
	d.setMonth(targetDate.getMonth() - monthDiff);
	if (d < startDate) monthDiff = monthDiff - 1;

	const dayDiff: number = Array.from({ length: monthDiff })
		.map((v, index) => {
			const d: Date = new Date(startDate);
			d.setMonth(startDate.getMonth() + index);
			return getDaysInMonth(d);
		})
		.reduce((sum, v) => sum + v, 0);

	return {
		months: monthDiff,
		days: dayDiff,
		ms: dayDiff * toMilliseconds('days')
	};
};

const getDaysInMonth = (date: Date): number => {
	const year: number = date.getFullYear();
	const month: number = date.getMonth();
	const lastDayOfMonth: Date = new Date(year, month + 1, 0);
	return lastDayOfMonth.getDate();
};

export const getCountdown = (targetDate: Date, startDate: Date): Countdown => {
	const yearDiff: YearDifference = getYearDiff(targetDate, startDate);
	const d = new Date(startDate);
	d.setFullYear(d.getFullYear() + yearDiff.years);
	const monthDiff: MonthDifference = getMonthDiff(targetDate, d);
	const difference: number =
		targetDate.valueOf() - startDate.valueOf() - yearDiff.ms - monthDiff.ms;

	const days = Math.floor(difference / toMilliseconds('days'));
	const hours = Math.floor(
		(difference % toMilliseconds('days')) / toMilliseconds('hours')
	);
	const minutes = Math.floor(
		(difference % toMilliseconds('hours')) / toMilliseconds('minutes')
	);
	const seconds = Math.floor(
		(difference % toMilliseconds('minutes')) / toMilliseconds('seconds')
	);

	return {
		years: yearDiff.years,
		months: monthDiff.months,
		days,
		minutes,
		hours,
		seconds
	};
};

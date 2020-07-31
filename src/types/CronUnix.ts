import { CronDayOfMonth } from "./CronDayOfMonth";
import { CronDayOfWeek } from "./CronDayOfWeek";
import { CronHours } from "./CronHours";
import { CronMinutes } from "./CronMinutes";
import { CronMonth } from "./CronMonth";

/**
 * Cron expression (UNIX).
 */
export type CronUnix = {
	/**
	 * Cron `CronMinutes` object.
	 */
	readonly minutes: CronMinutes;
	/**
	 * Cron `CronHours` object.
	 */
	readonly hours: CronHours;
	/**
	 * Cron `CronDayOfMonth` object.
	 */
	readonly dayOfMonth: CronDayOfMonth;
	/**
	 * Cron `CronMonth` object.
	 */
	readonly month: CronMonth;
	/**
	 * Cron `CronDayOfWeek` object.
	 */
	readonly dayOfWeek: CronDayOfWeek;
};

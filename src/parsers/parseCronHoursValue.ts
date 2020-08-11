import { CronHoursValue } from "../types/CronHoursValue";
import { CronValueParser } from "../types/CronValueParser";
import { isCronHoursValue } from "../validations/isCronHoursValue";

/**
 * Parses `CronHoursValue` into a string.
 * @param source `CronHoursValue` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
// eslint-disable-next-line max-len
export const parseCronHoursValue: CronValueParser<CronHoursValue> = source =>
	isCronHoursValue(source) ? `${source}` : undefined;
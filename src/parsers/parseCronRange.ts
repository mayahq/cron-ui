import { isUndefined } from "@vangware/utils";
import type { CronRange } from "../types/CronRange";
import type { CronValueParser } from "../types/CronValueParser";
import { isCronRange } from "../validations/isCronRange";

/**
 * Parses `CronRange` into a string.
 * @param parser `CronValueParser` for `CronRange`.
 * @returns Curried function with `parser` in context.
 */
export const parseCronRange =
	<Value>(parser: CronValueParser<Value>) =>
	/**
	 * @param source `CronRange` to be parsed.
	 * @returns A string or `undefined` if invalid.
	 */
	(source: CronRange<Value>) => {
		const valid = isCronRange(source);
		const from = valid ? parser(source.from) : undefined;
		const to = valid ? parser(source.to) : undefined;

		return valid && !isUndefined(from) && !isUndefined(to)
			? `${from}-${to}`
			: undefined;
	};

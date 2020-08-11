import { test } from "@vangware/test";
import { parseCronMonthValue } from "../../src/parsers/parseCronMonthValue";
import { CronMonthValue } from "../../src/types/CronMonthValue";

export default test([
	{
		given: "A valid minutes value",
		must: "return it",
		received: parseCronMonthValue(10),
		wanted: "10"
	},
	{
		given: "Other valid minutes value",
		must: "return it",
		received: parseCronMonthValue(12),
		wanted: "12"
	},
	{
		given: "Invalid minutes value",
		must: "return it",
		received: parseCronMonthValue(99 as CronMonthValue),
		wanted: undefined
	}
]);
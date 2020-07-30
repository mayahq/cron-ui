import { test } from "@vangware/test";
import { CRON_EVERY } from "../../src/constants";
import { parseCronList } from "../../src/parsers/parseCronList";
import { parseCronSecondsValue } from "../../src/parsers/parseCronSecondsValue";

const parseCronSecondsList = parseCronList(parseCronSecondsValue);

export default test([
	{
		given: "a valid list",
		must: "return CronList",
		received: parseCronSecondsList([13, 10]),
		wanted: "13,10"
	},
	{
		given: "a valid list including a range",
		must: "return CronList",
		received: parseCronSecondsList([{ from: 13, to: 10 }, 10]),
		wanted: "13-10,10"
	},
	{
		given: "a valid list including a steps value",
		must: "return CronList",
		received: parseCronSecondsList([{ every: 10, start: 13 }, 10]),
		wanted: "13/10,10"
	},
	{
		given: "a valid list including a steps value with a range",
		must: "return CronList",
		received: parseCronSecondsList([
			{ every: 10, start: { from: 13, to: 10 } },
			10
		]),
		wanted: "13-10/10,10"
	},
	{
		given: "a valid list including a steps value with an *",
		must: "return CronList",
		received: parseCronSecondsList([{ every: 10, start: CRON_EVERY }, 10]),
		wanted: "*/10,10"
	}
]);

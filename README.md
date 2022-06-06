## @mayahq/cron
Fork of [https://github.com/vangware/cron](https://github.com/vangware/cron) for targetting es5 bundles.

⏲️ Cron Quartz and Cron UNIX expression parser.

## Usage

### 📦 Node

```typescript
import { parseStringQuartz, parseCronQuartz } from "@vangware/cron";

const cron = parseStringQuartz("1-2/3 1-2,3,4 * 2W SEP,OCT 1L */10");
/*
{
	seconds: { every: 3, start: { from: 1, to: 2 } },
	minutes: [{ from: 1, to: 2 }, 3, 4],
	hours: "*",
	dayOfMonth: { nearest: 2 },
	month: ["SEP", "OCT"],
	dayOfWeek: { last: 1 },
	year: { every: 10, start: "*" }
}
*/

parseCronQuartz(cron); // "1-2/3 1-2,3,4 * 2W SEP,OCT 1L */10"
```

### 🦕 Deno

```typescript
import {
	parseStringQuartz,
	parseCronQuartz,
} from "https://cdn.skypack.dev/@vangware/cron?dts";

const cron = parseStringQuartz("1-2/3 1-2,3,4 * 2W SEP,OCT 1L */10");
/*
{
	seconds: { every: 3, start: { from: 1, to: 2 } },
	minutes: [{ from: 1, to: 2 }, 3, 4],
	hours: "*",
	dayOfMonth: { nearest: 2 },
	month: ["SEP", "OCT"],
	dayOfWeek: { last: 1 },
	year: { every: 10, start: "*" }
}
*/

parseCronQuartz(cron); // "1-2/3 1-2,3,4 * 2W SEP,OCT 1L */10"
```

## Documentation

Documentation can be found [HERE][documentation]. It is auto-generated with [typedoc][typedoc] based on the JSDocs and the types in the source. Shouldn't be necessary to read this, code editors like [VSCode][vscode] integrate the documentation in the UI.

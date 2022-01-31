import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	sourcemap: true,
	clean: true,
	// format: ["esm", "cjs"],
	// target: "es5",
	dts: true,
	noExternal: ["@vangware/utils"],
});

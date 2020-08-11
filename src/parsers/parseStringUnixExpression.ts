import { splitExpression } from "../utils/splitExpression";

/**
 * Parses given expression or undefined if invalid.
 * @param source string to be parsed.
 * @returns An array of 5 elements or `undefined` if invalid.
 */
export const parseStringUnixExpression = (source: string) => {
	const parsed = splitExpression(source);

	return parsed.length === 5 ? parsed : undefined;
};
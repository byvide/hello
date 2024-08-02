/**
 * The function returns Hello World!.
 * If a name is provided, it returns a personalized greeting message.
 * All whitespaces in the name are trimmed. An empty string or undefined name defaults to Hello, World!.
 *
 * @param {string} [name] - The name of the person to greet. Optional.
 * @returns {string} The greeting message.
 */
export function hello(name?: string): string {
	const trimmedName = name?.trim();
	return trimmedName ? `Hello ${trimmedName}!` : 'Hello World!';
}

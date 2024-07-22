/**
 * The function returns "Hello World!".
 * If a name is provided, it returns a personalized greeting message.
 * All whitespaces are trimmed. Empty string defaults to "Hello, World!".
 *
 * @param {string} [name='World'] - The name of the person to greet.
 * @returns {string} The greeting message.
 */
export function hello(name: string = 'World'): string {
	const trimmedName = name.trim();

	if (!trimmedName) {
		return 'Hello World!';
	}

	return `Hello ${trimmedName}!`;
}

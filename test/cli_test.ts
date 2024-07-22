import { assertEquals } from '$assert';

const APP_PATH = './mod.ts';

const textDecoder = new TextDecoder();
async function runCli(args: string[]) {
	const command = new Deno.Command(Deno.execPath(), {
		args: ['run', APP_PATH, ...args],
	});
	const { code, stdout, stderr } = await command.output();

	if (code) {
		throw textDecoder.decode(stderr);
	}

	return textDecoder.decode(stdout);
}

Deno.test('CLI with no arguments', async () => {
	const output = await runCli([]);
	assertEquals(output, 'Hello World!\n');
});

Deno.test('CLI with one argument', async () => {
	const output = await runCli(['Alice']);
	assertEquals(output, 'Hello Alice!\n');
});

Deno.test('CLI with multiple arguments', async () => {
	const output = await runCli(['Alice', 'Bob']);
	assertEquals(output, 'Hello Alice!\nHello Bob!\n');
});

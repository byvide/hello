import { assertEquals } from '$assert';
import { hello } from '../src/hello.ts';

Deno.test('hello without name', () => {
	const result = hello();
	assertEquals(result, 'Hello World!');
});

Deno.test('hello with name and no whitespace', () => {
	const result = hello('Alice');
	assertEquals(result, 'Hello Alice!');
});

Deno.test('hello with name and whitespace before', () => {
	const result = hello('  Bob');
	assertEquals(result, 'Hello Bob!');
});

Deno.test('hello with name and whitespace after', () => {
	const result = hello('Bob  ');
	assertEquals(result, 'Hello Bob!');
});

Deno.test('hello with empty string', () => {
	const result = hello('');
	assertEquals(result, 'Hello World!');
});

Deno.test('hello with whitespace string', () => {
	const result = hello('   ');
	assertEquals(result, 'Hello World!');
});

const hello_original = (name: string = 'World') => {
	const trimmedName = name.trim();
	if (!trimmedName) {
		return 'Hello World!';
	}
	return `Hello ${trimmedName}!`;
};
Deno.bench('original', { group: 'hello with arg' }, () => {
	hello_original(' Alice ');
});
Deno.bench('original', { group: 'hello without arg' }, () => {
	hello_original();
});

const hello_noDefaultParam = (name?: string) => {
	const trimmedName = name?.trim();
	if (!trimmedName) {
		return 'Hello World!';
	}
	return `Hello ${trimmedName}!`;
};
Deno.bench('no-default-param', { group: 'hello with arg' }, () => {
	hello_noDefaultParam(' Alice ');
});
Deno.bench('no-default-param', { group: 'hello without arg' }, () => {
	hello_noDefaultParam();
});

const hello_noNegation = (name: string = 'World') => {
	const trimmedName = name.trim();
	if (trimmedName) {
		return `Hello ${trimmedName}!`;
	}
	return 'Hello World!';
};
Deno.bench('no-negation', { group: 'hello with arg' }, () => {
	hello_noNegation(' Alice ');
});
Deno.bench('no-negation', { group: 'hello without arg' }, () => {
	hello_noNegation();
});

const hello_ternary = (name: string = 'World') => {
	const trimmedName = name.trim();
	return trimmedName ? `Hello ${trimmedName}!` : 'Hello World!';
};
Deno.bench('ternary', { group: 'hello with arg' }, () => {
	hello_ternary(' Alice ');
});
Deno.bench('ternary', { group: 'hello without arg' }, () => {
	hello_ternary();
});

const hello_noDefaultParam_noNegation_ternary = (name?: string) => {
	const trimmedName = name?.trim();
	return trimmedName ? `Hello ${trimmedName}!` : 'Hello World!';
};
Deno.bench('no-default-param + no-negation + ternary', { group: 'hello with arg' }, () => {
	hello_noDefaultParam_noNegation_ternary(' Alice ');
});
Deno.bench('no-default-param + no-negation + ternary', { group: 'hello without arg' }, () => {
	hello_noDefaultParam_noNegation_ternary();
});

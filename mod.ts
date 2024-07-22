// as library
export { hello } from './src/hello.ts';

// as cli/application
import { hello } from './src/hello.ts';

/*
	If a module contains top level code like below it will be executed when it's first imported.
	Use 'import.meta.main' to check if its being used as cli/application.
	This prevents running it if the package is used as library.
	'main' is not a standard property, only work in Deno!
*/
if (import.meta?.main) {
	if (Deno?.args?.length) {
		Deno.args.forEach((item) => console.log(hello(item)));
	} else {
		console.log(hello());
	}
}

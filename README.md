# hello

[![GitHub License](https://img.shields.io/github/license/byvide/hello)](./LICENSE)
[![JSR](https://jsr.io/badges/@despacito/hello)](https://jsr.io/@despacito/hello)
[![JSR Score](https://jsr.io/badges/@despacito/hello/score)](https://jsr.io/@despacito/hello)

A simple 'Hello World' project created to explore the Deno ecosystem and learn how to publish a
module.

## Usage

> [!NOTE]
> As library all runtime supported.

```ts
import { hello } from '@despacito/hello/';

console.log(hello()); //> Hello World!
console.log(hello('Alice')); //> Hello Alice!
```

> [!WARNING]
> As cli/application only works with Deno.

```bash
$ deno run jsr:@despacito/hello
Hello World!
$ deno run jsr:@despacito/hello Alice Bob
Hello Alice!
Hello Bob!
```

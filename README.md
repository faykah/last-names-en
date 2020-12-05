# @faykah/last-names-en

An English dataset of last names.

## Summary

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Examples](#examples)

## About

[Faykah](https://github.com/faykah/core) is a Node.js library that help create generators for various data.

This library contains a data set of English first names suited for mocking and testing emails.

## Features

- Provides a variable containing 24 last names
- Provides a browser version
- Provides its own Typescript type definition

## Installation

Using NPM:

```bash
npm install --save-dev @faykah/last-names-en
```

Using Yarn:

```bash
yarn add --dev @faykah/last-names-en
```

## Examples

- [1. Create an array generator](#1-create-an-array-generator)
- [2. Standalone usage](#2-standalone-usage)

### 1. Create an array generator

In this example, we will create a generator of last name.

ES6

```ts
import { createGenerator } from "@faykah/core";
import { lastNames } from "@faykah/last-names-en";

const generateLastName = createGenerator(lastNames);

generateLastName(); // "Walsh"
generateLastName(); // "Wilson"
generateLastName(); // "Evans"
```

CJS

```ts
const { createGenerator } = require("@faykah/core");
const { lastNames } = require("@faykah/last-names-en");

const generateLastName = createGenerator(lastNames);

generateLastName(); // "Walsh"
generateLastName(); // "Wilson"
generateLastName(); // "Evans"
```

Browser

```html
<body>
	<script type="text/javascript" src="https://unpkg.com/@faykah/core@0.1.0/lib/index.browser.min.js" defer></script>
	<script type="text/javascript" src="https://unpkg.com/@faykah/last-names-en@0.1.0/lib/index.browser.min.js" defer></script>

	<script type="text/javascript" defer>
		const { createGenerator } = Faykah;
		const { lastNames } = Faykah.lastNames;

		const generateLastName = createGenerator(lastNames);

		generateLastName(); // "Walsh"
		generateLastName(); // "Wilson"
		generateLastName(); // "Evans"
	</script>
</body>
```

### 2. Standalone usage

In this example, we will loop through last names.

ES6

```ts
import { lastNames } from "@faykah/last-names-en";

for (const lastName of lastNames) {
	console.log(lastName);
}
```

CJS

```ts
const { lastNames } = require("@faykah/last-names-en");

for (const lastName of lastNames) {
	console.log(lastName);
}
```

Browser

```html
<body>
	<script type="text/javascript" src="https://unpkg.com/@faykah/core@0.1.0/lib/index.browser.min.js" defer></script>
	<script type="text/javascript" src="https://unpkg.com/@faykah/last-names-en@0.1.0/lib/index.browser.min.js" defer></script>

	<script type="text/javascript" defer>
		const { lastNames } = Faykah.lastNames;

		for (const lastName of lastNames) {
			console.log(lastName);
		}
	</script>
</body>
```

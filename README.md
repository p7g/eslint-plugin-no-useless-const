# no-useless-const

Unless you live under a rock, you've heard that `const` is useless. Now you can
enforce the use of `let` instead.

## Rule Details

:thumbsdown: Examples of **incorrect** code for this rule:

```js
const abc = 123; // ERROR!
```

:thumbsup: Examples of **correct** code for this rule:

```js
let abc = 123;
```

## Usage

1. Add `"no-useless-const"` to the `"plugins"` key in your eslint config.
2. Add `"no-useless-const/no-useless-const": "error"` to the `"rules"` key in
   your eslint config.

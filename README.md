# eslint-config-lako-react

Personal additional rules to react app.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-config-lako-react`:

```
$ npm install eslint-config-lako-react --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-config-lako-react` globally.

## Usage

Add `lako-react` to the 'extends' section of your `.eslintrc` configuration file. You can omit the `eslint-config-` prefix:

```json
{
    "extends": ["lako-react"]
}
```

## Rules

* "react/prefer-stateless-function": 0
* "react/jsx-curly-brace-presence": [1, { "props": never, "children": always }]
* "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]

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

Add `lako-react` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-config-` prefix:

```json
{
    "plugins": [
        "lako-react"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "lako-react/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here

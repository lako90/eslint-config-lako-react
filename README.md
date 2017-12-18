# eslint-plugin-lako-react-rulez

Personal additional rules to react app.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-lako-react-rulez`:

```
$ npm install eslint-plugin-lako-react-rulez --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-lako-react-rulez` globally.

## Usage

Add `lako-react-rulez` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "lako-react-rulez"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "lako-react-rulez/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here

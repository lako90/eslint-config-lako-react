module.exports = {
  configs: {
    myConfig: {
      env: ["browser"],
      rules: {
        "react/prefer-stateless-function": 0,
        "react/jsx-curly-brace-presence": [1, { "props": never, "children": always }],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
      }
    }
  }
}

module.exports = {
    "extends": [
        "airbnb/hooks",
        "plugin:react/recommended"
    ],
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-filename-extension": ["off", { "extensions": [".jsx"] }],
        "react/jsx-indent": ["error", 4, {"checkAttributes": false, "indentLogicalExpressions": true}],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-props-no-spreading": 0,
        "react/destructuring-assignment": 0,
        "react/require-default-props": 0,
        "react/jsx-one-expression-per-line": [0, { "allow": "none" }],
    }
}


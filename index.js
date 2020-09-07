module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es6": true,
        "jest/globals": true
    },
    "extends": [
        "airbnb",
        "airbnb/hooks",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jest/recommended"
    ],
    "globals": {
    },
    "parser": "babel-eslint",

    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react", "import", "jest"
    ],
    "rules": {
        "react/jsx-filename-extension": [
            "off", { "extensions": [
                    ".jsx"
                ] }],
        "react/jsx-indent": ["error", 4, {
            "checkAttributes": false, "indentLogicalExpressions": true}],
        "react/jsx-indent-props": ["error", 4],
        "indent": ["error", 4],
        "linebreak-style": ["error", "windows"],
        "import/no-unresolved": [2, {"commonjs": true, "amd": true}],
        "import/no-extraneous-dependencies": ["error", { "packageDir": "./" }],
        "import/named": 2,
        "import/namespace": 2,
        "import/default": 2,
        "import/export": 2,
        "no-global-assign": ["error", {"exceptions": ["VERSION"]}],
        "react/jsx-props-no-spreading": 0,
        "react/jsx-one-expression-per-line": 0,
        "class-methods-use-this": 0,
        "arrow-parens": [2, "as-needed"],
        "comma-dangle": ["error", "only-multiline"],
        "camelcase": 0,
        "react/destructuring-assignment": 0,
        "react/require-default-props": 0,
        "eact/jsx-one-expression-per-line": [0, { "allow": "none" }],
        "max-len": ["error", { "code": 255 }],
        "no-script-url": 0,
        "object-curly-newline": ["error", { "minProperties": 8, "consistent": true}],
        "no-unused-expressions": ["error", { "allowShortCircuit": true }]
    }
}


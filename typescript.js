module.exports = {
    root: true,
    "extends": [
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    "parserOptions": { sourceType: false },
    "rules": {
        "@typescript-eslint/rule-name": "error",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error", { builtinGlobals: true }],
    }
}


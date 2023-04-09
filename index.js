module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "airbnb",
        "eslint:recommended"
    ],
    "globals": {
    },
    "parser": "@typescript-eslint/parser",

    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "ecmaVersion": 2020,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
	settings: {
        react: {
            version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
        },
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    },
    "rules": {
        "indent": ["error", 4],
        "linebreak-style": ["error", "windows"],
        "import/no-unresolved": [2, {"commonjs": true, "amd": true}],
        "import/no-extraneous-dependencies": ["error", { "packageDir": "./" }],
        "import/named": 2,
        "import/namespace": 2,
        "import/default": 2,
        "import/export": 2,
        "no-global-assign": ["error", {"exceptions": ["VERSION"]}],
        "class-methods-use-this": 0,
        "arrow-parens": [2, "as-needed"],
        "comma-dangle": ["error", "only-multiline"],
        "camelcase": 0,
        "max-len": ["error", { "code": 255 }],
        "no-script-url": 0,
        "object-curly-newline": ["error", { "minProperties": 8, "consistent": true}],
        "no-unused-expressions": ["error", { "allowShortCircuit": true }],
		"@typescript-eslint/no-var-requires": 0,
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"
            }
        ]
    }
}


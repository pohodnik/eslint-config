const react = require('eslint-plugin-react');
const jsxA11y = require('eslint-plugin-jsx-a11y');
const reactHooks = require('eslint-plugin-react-hooks');

module.exports = [
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  {
    settings: {
      react: {
        version: 'detect',
      }
    },
    rules: {
      "react/display-name": 0,
      "react/prop-types": 0,
      "react/jsx-key": [
        "error",
        {
          "checkFragmentShorthand": true
        }
      ],
      "react/jsx-curly-brace-presence": [
        "error",
        {
          "props": "never",
          "children": "never"
        }
      ]
    }
  },

  reactHooks.configs['recommended-latest'],
  {
    rules: {
      "react-hooks/rules-of-hooks": "error",
    }
  },

  jsxA11y.flatConfigs.recommended,
  {
    rules: {
      "jsx-a11y/no-autofocus": "warn"
    }
  }
];

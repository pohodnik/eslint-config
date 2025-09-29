const pluginJest = require('eslint-plugin-jest');

module.exports = [
  pluginJest.configs['flat/recommended'],
  {
    languageOptions: {
      globals: pluginJest.environments.globals.globals,
    },
  }
];

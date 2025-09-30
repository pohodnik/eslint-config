const js = require("@eslint/js");
const tsEslint = require("typescript-eslint");
const importPlugin = require("eslint-plugin-import");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");
const globals = require("globals");
const { defineConfig } = require("eslint/config");

module.exports = defineConfig([
  js.configs.recommended,
  ...tsEslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-shadow": "error",
      "@typescript-eslint/no-redeclare": 0,
      "@typescript-eslint/no-var-requires": 0,
      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/explicit-module-boundary-types": 0,
      "@typescript-eslint/no-non-null-assertion": 0,
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_|React",
          ignoreRestSiblings: true,
        },
      ],
    }
  },
  eslintPluginPrettierRecommended,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  {
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"]
      },
      "import/resolver": {
        "typescript": {
          "alwaysTryTypes": true,
        }
      }
    },
    rules: {
      "import/no-anonymous-default-export": 0,
      "import/order": [
        "error",
        {
          "groups": [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "type"
          ],
          "pathGroups": [
            {
              "pattern": "react",
              "group": "external",
              "position": "before"
            },
            {
              "pattern": "@pohodnik/**",
              "group": "external",
              "position": "after"
            },
            {
              "pattern": "{.,..}/*\.less",
              "group": "sibling",
              "position": "after"
            }
          ],
          "pathGroupsExcludedImportTypes": [
            "react"
          ],
          "newlines-between": "always",
          "alphabetize": {
            "order": "asc",
            "caseInsensitive": true
          }
        }
      ],
      "import/no-named-as-default": 0,
      "import/no-named-as-default-member": 0,
      "import/default": 0,
      "import/newline-after-import": ["error", { "count": 1 }]
    },
  },

  // common
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es6,
      }
    },
    rules: {
      "eol-last": [
        "error",
        "always"
      ],
    },
  }
]);

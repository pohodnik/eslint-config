const js = require("@eslint/js");
const tsEslint = require("typescript-eslint");
const importPlugin = require("eslint-plugin-import");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");
const globals = require("globals");
const { defineConfig } = require("eslint/config");

module.exports = defineConfig([
  {
    // Base configuration
    files: ["**/*.{js,jsx,ts,tsx}"],
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
  },
  js.configs.recommended,
  ...tsEslint.configs.recommended,
  {
    // TypeScript specific rules
    files: ["**/*.{ts,tsx}"],
    rules: {
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
      "@typescript-eslint/no-shadow": "error",
      "@typescript-eslint/no-redeclare": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-unused-expressions": "off",
    }
  },
  eslintPluginPrettierRecommended,
  {
    // Import plugin configuration
    plugins: {
      import: importPlugin,
    },
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
      "import/no-anonymous-default-export": "off",
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
              "pattern": "{.,..}/*.less",
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
      "import/no-named-as-default": "off",
      "import/no-named-as-default-member": "off",
      "import/default": "off",
      "import/newline-after-import": ["error", { "count": 1 }]
    },
  },
  {
    // Common rules
    rules: {
      "eol-last": ["error", "always"],
    },
  }
]);
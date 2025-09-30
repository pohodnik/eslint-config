const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  // Base recommended configs
  js.configs.recommended,
  
  // Global settings
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
  },

  // TypeScript configuration
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "@typescript-eslint": require("typescript-eslint"),
    },
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
    },
  },

  // Import configuration
  {
    plugins: {
      import: require("eslint-plugin-import"),
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

  // Prettier configuration
  {
    plugins: {
      prettier: require("eslint-plugin-prettier"),
    },
    rules: {
      ...require("eslint-plugin-prettier/recommended").rules,
    },
  },

  // Common rules
  {
    rules: {
      "eol-last": ["error", "always"],
    },
  }
];
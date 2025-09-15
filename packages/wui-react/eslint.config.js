import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";

export default tseslint.config(
  {
    ignores: ["dist", "node_modules", "storybook-static"],
  },
  // Base config for all TypeScript files
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      prettier, // Must be last to override other configs
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "jsx-a11y": jsxA11y,
      import: importPlugin,
    },
    settings: {
      react: {
        version: "18.2", // React version for eslint-plugin-react
      },
      "import/resolver": {
        node: true,
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
    rules: {
      // React Rules
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      "react/prop-types": "off", // Not needed with TypeScript
      "react/react-in-jsx-scope": "off", // Not needed with new JSX transform

      // React Hooks Rules
      ...reactHooks.configs.recommended.rules,

      // JSX A11y Rules
      ...jsxA11y.configs.recommended.rules,

      // Import Rules
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "import/no-unused-modules": "error",
      "import/no-duplicates": "error",

      // React Refresh Rules
      "react-refresh/only-export-components": [
        "warn",
        {
          allowConstantExport: true,
          allowExportNames: ["buttonVariants", "cn", "cva"],
        },
      ],

      // TypeScript Rules (without type-aware rules)
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",

      // General Rules
      "prefer-const": "error",
      "no-console": "warn",
      "no-debugger": "error",
      "no-duplicate-imports": "error",
    },
  },
  // Enhanced config for src files (with type-aware rules)
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // Type-aware TypeScript Rules
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
    },
  },
  {
    files: ["**/*.stories.{ts,tsx}", "src/dev.tsx", "**/*.config.{ts,js}"],
    rules: {
      "react-refresh/only-export-components": "off",
      "import/no-unused-modules": "off",
    },
  },
  {
    files: ["**/*.test.{ts,tsx}"],
    rules: {
      "no-console": "off",
    },
  }
);

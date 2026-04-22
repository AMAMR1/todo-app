import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "no-undef": "error", // Catch variables that aren't defined
      "no-unused-vars": "warn", // Tell you if you created a variable but didn't use it
    },
  },
];

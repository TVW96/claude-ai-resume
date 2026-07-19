import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import css from "@eslint/css";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,css}"], 
    plugins: { js, css }, 
    extends: ["js/recommended", "css/recommended"], 
    languageOptions: { globals: globals.browser }, 
    language: "css/css", 
    rules: {
      "css/no-duplicate-imports": "error",
      "css/no-empty-blocks": "warn",
      "css/no-duplicate-selectors": "error",
      "css/no-empty-rulesets": "warn",
    },
  },
  { 
    files: ["**/*.js"], 
    languageOptions: { sourceType: "script" } 
  },
]);

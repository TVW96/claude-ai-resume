import { defineConfig } from "eslint/config";
import css from "@eslint/css";

export default defineConfig([
  {
    files: ["css/**/*.css"],
    plugins: { css },
    extends: ["css/recommended"],
    language: "css/css",
  },
]);

import tsParser from "@typescript-eslint/parser";
import parser from "astro-eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:astro/recommended",
), {
    languageOptions: {
        globals: {
            astroHTML: true,
        },

        ecmaVersion: "latest",
        sourceType: "module",

        parserOptions: {
            project: "./tsconfig.json",
        },
    },
}, {
    files: ["**/*.ts"],

    languageOptions: {
        parser: tsParser,
    },
}, {
    files: ["**/*.astro"],

    languageOptions: {
        parser: parser,
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            parser: tsParser,
            extraFileExtensions: [".astro"],
        },
    },
}];
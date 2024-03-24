module.exports = {
    extends: [
        "stylelint-config-recommended-scss",
        "stylelint-config-recess-order",
        "stylelint-config-standard"
    ],
    plugins: ["stylelint-order"],
    ignoreFiles: [
        "node_modules/**/*.scss",
        "src/**/*.astro",
    ],
    rules: {
        "no-descending-specificity": null,
        "no-duplicate-selectors": null,
    },
};
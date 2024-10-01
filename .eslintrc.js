module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    // Possible Errors
    "no-console": "warn", // Warns on console.log
    "no-empty": "warn", // Warns on empty block statements

    // Best Practices
    "eqeqeq": ["error", "always"], // Require === and !==
    "curly": "error", // Require curly braces for all control statements
    "consistent-return": "error", // Require return statements to either always or never specify values

    // Variables
    "no-unused-vars": ["warn", { vars: "all", args: "after-used", ignoreRestSiblings: true }], // Warn on unused variables

    // Style
    "indent": ["error", 2], // Enforce consistent indentation (2 spaces)
    "quotes": ["error", "single"], // Enforce the use of single quotes
    "semi": ["error", "always"], // Require semicolons
    "linebreak-style": ["error", "unix"], // Enforce Unix linebreaks

    // Complexity
    "complexity": ["warn", { max: 10 }], // Warn on functions with a complexity greater than 10

    // Possible problems
    "no-duplicate-imports": "error", // Disallow duplicate imports
    "no-multiple-empty-lines": ["warn", { max: 1, maxEOF: 0 }], // Limit the number of empty lines

    // Additional suggestions
    "camelcase": ["warn", { properties: "always" }], // Enforce camelCase naming convention
    "no-magic-numbers": ["warn", { ignore: [0, 1] }], // Warn on magic numbers, allowing 0 and 1
  },
};


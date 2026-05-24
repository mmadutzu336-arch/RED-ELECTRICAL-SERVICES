module.exports = [
  {
    ignores: [".next/**", "node_modules/**"],
  },
  {
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: {
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        process: "readonly",
        module: "readonly",
        require: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
      },
    },
    rules: {
      // basic recommendations
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];

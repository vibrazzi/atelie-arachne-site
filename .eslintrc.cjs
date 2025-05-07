module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  parser: "@babel/eslint-parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended", // Adicionado para melhorar acessibilidade
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/react",
  ],
  ignorePatterns: ["dist", "node_modules", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "detect" } },
  plugins: ["react-refresh", "jsx-a11y", "import"],
  rules: {
    "jsx-a11y/anchor-is-valid": "warn", // Garante links acessíveis
    "jsx-a11y/no-autofocus": "warn", // Evita problemas de acessibilidade com autofocus
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always",
      },
    ], // Organiza imports de forma consistente
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "no-unused-vars": ["warn", { vars: "all", args: "none" }],
    "eqeqeq": "error",
    "semi": ["error", "always"],
  },
};

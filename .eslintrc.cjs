module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  parser: "@babel/eslint-parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended", // Melhora acessibilidade
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/react",
  ],
  ignorePatterns: ["dist", "node_modules", ".eslintrc.cjs"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect", // Detecta automaticamente a versão do React
    },
  },
  plugins: ["react-refresh", "jsx-a11y", "import"],
  rules: {
    // Acessibilidade
    "jsx-a11y/anchor-is-valid": "warn", // Garante links acessíveis
    "jsx-a11y/no-autofocus": "warn", // Evita problemas com autofocus

    // Organização de imports
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always",
      },
    ],

    // React
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/react-in-jsx-scope": "off", // Não necessário no React 17+
    "react/prop-types": "off", // Desabilitado para evitar validação redundante

    // Boas práticas
    "no-unused-vars": ["warn", { vars: "all", args: "none" }], // Evita variáveis não utilizadas
    "eqeqeq": "error", // Exige uso de === e !==
    "semi": ["error", "always"], // Exige ponto e vírgula
    "no-console": "warn", // Alerta para uso de console.log
    "no-debugger": "error", // Proíbe uso de debugger
  },
};

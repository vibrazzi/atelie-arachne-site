module.exports = {
  darkMode: "class", // Ativa o modo escuro com a classe "dark"
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Define os arquivos que o Tailwind deve escanear
  theme: {
    extend: {
      // Personalizações futuras podem ser adicionadas aqui
    },
  },
  plugins: [
    // Adicione plugins do TailwindCSS aqui, se necessário
  ],
};
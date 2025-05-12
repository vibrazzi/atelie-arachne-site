// tailwind.config.js
module.exports = {
  darkMode: "class", // Ativando modo Dark
  theme: {
    extend: {
      colors: {
        pretoProfundo: "#0B0B0B",
        roxoEscuro: "#3D0075",
        verdeVenenoso: "#1B5E20",
        vermelhoSangue: "#8B0000",
        cinzaMetalico: "#4B4B4B",
        azulEspectral: "#1A237E",
        fundoClaro: "#1C1C1C", // Fundo claro para o modo Light
        fundoEscuro: "#0A0A0A", // Fundo escuro para o modo Dark
      },
      textColor: {
        light: "#000000", // Texto preto no modo Light
        dark: "#FFFFFF",  // Texto branco no modo Dark
      },
    },
  },
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Garantir que Tailwind analise os arquivos relevantes
  plugins: [],
};

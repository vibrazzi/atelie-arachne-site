module.exports = {
  theme: {
    extend: {
      colors: {
        pretoProfundo: "#0B0B0B",
        roxoEscuro: "#3D0075",
        verdeVenenoso: "#1B5E20",
        vermelhoSangue: "#8B0000",
        cinzaMetalico: "#4B4B4B",
        azulEspectral: "#1A237E",
        fundoClaro: "#1C1C1C",
      },
      textColor: {
        light: "#E0E0E0",
      },
      backgroundImage: {
        'navbar-bg': "url('/assets/capa-spider.avif')",
      },
    },
  },
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
};

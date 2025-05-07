import { useState, useEffect } from "react";

const DarkMode = () => {
  // Tema fixo em "dark" para manter o conceito minimalista
  const [theme, setTheme] = useState("dark");

  // Aplica automaticamente o tema escuro ao carregar a página
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div
      className="relative flex items-center gap-3 p-4 rounded-full shadow-lg bg-black text-white transition-all duration-300 hover:shadow-2xl"
      aria-live="polite"
    >
      <span className="text-base font-semibold">Modo Escuro Ativado</span>
    </div>
  );
};

export default DarkMode;

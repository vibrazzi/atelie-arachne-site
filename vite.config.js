import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuração do Vite
export default defineConfig({
  plugins: [
    react(), // Plugin para suporte ao React
  ],
  // Adicione configurações adicionais aqui, se necessário
});
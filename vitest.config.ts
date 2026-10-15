import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Solo buscamos tests dentro de src/ (la carpeta demo-en-vivo/ es material de apoyo)
    include: ["src/**/*.test.ts"],
    // "verbose" muestra cada test con su nombre: ideal para la demo en vivo
    reporters: ["verbose"],
  },
});

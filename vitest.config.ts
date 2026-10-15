import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // "verbose" muestra cada test con su nombre: ideal para la demo en vivo
    reporters: ["verbose"],
  },
});

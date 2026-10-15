import { describe, it, expect } from "vitest";
import { esEmailValido } from "./validarEmail";

describe("Validador de email", () => {
  it("acepta un email válido simple", () => {
    expect(esEmailValido("ana@gmail.com")).toBe(true);
  });
});

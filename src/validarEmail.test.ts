import { describe, it, expect } from "vitest";
import { esEmailValido } from "./validarEmail";

describe("Validador de email", () => {
  it("acepta un email válido simple", () => {
    expect(esEmailValido("ana@gmail.com")).toBe(true);
  });

  it("rechaza un email sin arroba", () => {
    expect(esEmailValido("anagmail.com")).toBe(false);
  });

  it("rechaza un email con más de un arroba", () => {
    expect(esEmailValido("ana@@gmail.com")).toBe(false);
    expect(esEmailValido("ana@juan@gmail.com")).toBe(false);
  });
});

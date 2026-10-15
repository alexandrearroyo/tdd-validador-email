import { describe, it, expect } from "vitest";
import { esEmailValido } from "./validarEmail";

describe("Validador de email", () => {
  it("acepta un email válido simple", () => {
    expect(esEmailValido("ana@gmail.com")).toBe(true);
  });

  it("acepta una extensión de 2 letras", () => {
    expect(esEmailValido("ana@sapo.pt")).toBe(true);
  });

  it("rechaza un email sin arroba", () => {
    expect(esEmailValido("anagmail.com")).toBe(false);
  });

  it("rechaza un email con más de un arroba", () => {
    expect(esEmailValido("ana@@gmail.com")).toBe(false);
    expect(esEmailValido("ana@juan@gmail.com")).toBe(false);
  });

  it("rechaza un email sin usuario antes del arroba", () => {
    expect(esEmailValido("@gmail.com")).toBe(false);
  });

  it("rechaza un email sin dominio después del arroba", () => {
    expect(esEmailValido("ana@")).toBe(false);
  });

  it("rechaza un dominio sin punto", () => {
    expect(esEmailValido("ana@gmail")).toBe(false);
  });

  it("rechaza una extensión de menos de 2 letras", () => {
    expect(esEmailValido("ana@gmail.c")).toBe(false);
  });

  it("rechaza un email con espacios", () => {
    expect(esEmailValido("ana perez@gmail.com")).toBe(false);
    expect(esEmailValido("ana@gmail .com")).toBe(false);
  });

  it("rechaza un dominio que empieza o termina con punto", () => {
    expect(esEmailValido("ana@.com")).toBe(false);
    expect(esEmailValido("ana@gmail.com.")).toBe(false);
  });
});

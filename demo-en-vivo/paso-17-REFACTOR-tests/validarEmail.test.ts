import { describe, it, expect } from "vitest";
import { esEmailValido } from "./validarEmail";

describe("Validador de email", () => {
  describe("emails válidos", () => {
    it.each([
      "ana@gmail.com",
      "ana@sapo.pt",
    ])("acepta %s", (email) => {
      expect(esEmailValido(email)).toBe(true);
    });
  });

  describe("emails inválidos", () => {
    it.each([
      { email: "anagmail.com",        motivo: "no tiene arroba" },
      { email: "ana@@gmail.com",      motivo: "tiene dos arrobas seguidos" },
      { email: "ana@juan@gmail.com",  motivo: "tiene más de un arroba" },
      { email: "@gmail.com",          motivo: "no tiene usuario" },
      { email: "ana@",                motivo: "no tiene dominio" },
      { email: "ana@gmail",           motivo: "el dominio no tiene punto" },
      { email: "ana@gmail.c",         motivo: "la extensión tiene menos de 2 letras" },
      { email: "ana perez@gmail.com", motivo: "tiene un espacio en el usuario" },
      { email: "ana@gmail .com",      motivo: "tiene un espacio en el dominio" },
      { email: "ana@.com",            motivo: "el dominio empieza con punto" },
      { email: "ana@gmail.com.",      motivo: "el dominio termina con punto" },
    ])('rechaza "$email" porque $motivo', ({ email }) => {
      expect(esEmailValido(email)).toBe(false);
    });
  });
});

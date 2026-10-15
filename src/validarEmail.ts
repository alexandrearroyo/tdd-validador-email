// Cada regla es una función chiquita que responde una sola pregunta.
// Si TODAS las reglas dicen "sí", el email es válido.
type Regla = (email: string) => boolean;

const usuarioDe = (email: string): string => email.split("@")[0] ?? "";
const dominioDe = (email: string): string => email.split("@")[1] ?? "";
const extensionDe = (dominio: string): string => dominio.split(".").pop() ?? "";

const noTieneEspacios: Regla = (email) => !email.includes(" ");

const tieneUnSoloArroba: Regla = (email) => email.split("@").length === 2;

const tieneUsuario: Regla = (email) => usuarioDe(email) !== "";

const tieneDominio: Regla = (email) => dominioDe(email) !== "";

const dominioTienePunto: Regla = (email) => dominioDe(email).includes(".");

const dominioNoEmpiezaNiTerminaConPunto: Regla = (email) => {
  const dominio = dominioDe(email);
  return !dominio.startsWith(".") && !dominio.endsWith(".");
};

const extensionTieneAlMenosDosLetras: Regla = (email) =>
  extensionDe(dominioDe(email)).length >= 2;

const REGLAS: Regla[] = [
  noTieneEspacios,
  tieneUnSoloArroba,
  tieneUsuario,
  tieneDominio,
  dominioTienePunto,
  dominioNoEmpiezaNiTerminaConPunto,
  extensionTieneAlMenosDosLetras,
];

export function esEmailValido(email: string): boolean {
  return REGLAS.every((regla) => regla(email));
}

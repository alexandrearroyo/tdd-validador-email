export function esEmailValido(email: string): boolean {
  const partes = email.split("@");
  return partes.length === 2;
}

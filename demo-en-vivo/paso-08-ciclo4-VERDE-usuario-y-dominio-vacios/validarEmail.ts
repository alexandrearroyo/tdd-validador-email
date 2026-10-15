export function esEmailValido(email: string): boolean {
  const partes = email.split("@");
  if (partes.length !== 2) {
    return false;
  }
  const usuario = partes[0];
  const dominio = partes[1];
  if (usuario === "") {
    return false;
  }
  if (dominio === "") {
    return false;
  }
  return true;
}

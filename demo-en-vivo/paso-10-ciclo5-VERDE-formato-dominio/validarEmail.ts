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
  if (!dominio.includes(".")) {
    return false;
  }
  const extension = dominio.split(".").pop();
  if (extension === undefined || extension.length < 2) {
    return false;
  }
  return true;
}

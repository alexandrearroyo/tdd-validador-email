// Mini programa para mostrar el validador "en uso real".
// Uso:  npm run demo -- ana@gmail.com juan@ hola@sapo.pt
import { esEmailValido } from "./validarEmail";

const emails = process.argv.slice(2);

if (emails.length === 0) {
  console.log("Pasame uno o más emails. Ejemplo: npm run demo -- ana@gmail.com juan@");
  process.exit(0);
}

for (const email of emails) {
  const resultado = esEmailValido(email) ? "✅ válido  " : "❌ inválido";
  console.log(`${resultado}  ${email}`);
}

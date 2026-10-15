# Guía para la demo en vivo de TDD (Windows)

Esta guía tiene tres partes:

1. **Preparar tu compu** (una sola vez, ~20 minutos).
2. **Subir el proyecto a tu GitHub** (una sola vez, ~5 minutos).
3. **Guion de la demo en vivo** (lo que hacés el día de la presentación, ~12 minutos).

Al final hay una sección de **preguntas que te pueden hacer** y cómo responderlas.

---

## Parte 1 — Preparar tu compu (una sola vez)

Necesitás tres programas: **Node.js** (ejecuta TypeScript y los tests), **Git** (guarda el historial y sube a GitHub) y **Visual Studio Code** (el editor).

### 1.1 Instalar todo con un solo comando

1. Apretá la tecla **Windows**, escribí `PowerShell`, y abrilo.
2. Pegá estas tres líneas (una por vez, Enter después de cada una):

   ```powershell
   winget install --id OpenJS.NodeJS.LTS -e
   winget install --id Git.Git -e
   winget install --id Microsoft.VisualStudioCode -e
   ```

   Si alguno ya lo tenés instalado, te va a avisar y sigue. Aceptá lo que te pregunte.

3. Pegá también esta línea (permite que PowerShell ejecute `npm`; sin esto, en Windows suele aparecer el error *"la ejecución de scripts está deshabilitada"*):

   ```powershell
   Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
   ```

   Respondé `S` (o `Y`) si te pregunta.

4. **Cerrá PowerShell y volvé a abrirlo** (para que reconozca los programas nuevos) y verificá:

   ```powershell
   node -v
   npm -v
   git --version
   ```

   Si los tres muestran un número de versión, está todo listo.

### 1.2 Configurar tu nombre en Git (una sola vez)

```powershell
git config --global user.name "Alex"
git config --global user.email "TU_EMAIL_DE_GITHUB"
```

### 1.3 Abrir el proyecto

1. Copiá la carpeta `tdd-validador-email` a `Documentos` (si no está ya ahí).
2. Abrí **Visual Studio Code** → menú **Archivo → Abrir carpeta…** → elegí `tdd-validador-email`.
   - Si VS Code pregunta *"¿Confía en los autores de los archivos?"*, decí que **sí**.
3. Abrí la terminal integrada: menú **Terminal → Nueva terminal** (o `Ctrl + ñ`).
4. Instalá las dependencias del proyecto (solo la primera vez):

   ```powershell
   npm install
   ```

5. Probá que todo anda:

   ```powershell
   npm run test:una-vez
   ```

   Tenés que ver **13 tests en verde** (`Tests 13 passed`). Si lo ves, la compu está lista.

### 1.4 Extensión recomendada (opcional pero queda muy bien en la demo)

En VS Code, a la izquierda, ícono de **Extensiones** (los cuadraditos) → buscá **"Vitest"** (la oficial, de *vitest.dev*) → **Instalar**. Te agrega un ícono de "matraz" con todos los tests, y tildes verdes/cruces rojas al lado de cada test dentro del código.

---

## Parte 2 — Subir el proyecto a tu GitHub (una sola vez)

1. Entrá a <https://github.com/new> con tu usuario **alexandrearroyo**.
2. **Repository name:** `tdd-validador-email`
3. Dejalo **Public**, y **NO** tildes "Add a README", ni ".gitignore", ni "license" (el proyecto ya los trae).
4. Botón **Create repository**.
5. En la terminal de VS Code (dentro de la carpeta del proyecto) pegá:

   ```powershell
   git remote add origin https://github.com/alexandrearroyo/tdd-validador-email.git
   git push -u origin main
   git push origin demo-inicio
   ```

   La primera vez se abre una ventana del navegador para iniciar sesión en GitHub: aceptá.

6. Entrá a <https://github.com/alexandrearroyo/tdd-validador-email>. Vas a ver:
   - **Commits** (arriba a la derecha, el reloj con un número): el historial completo 🔴 → 🟢 → 🔵 del ejercicio. Es la prueba de que se hizo con TDD de verdad.
   - **Actions** (pestaña de arriba): GitHub corre los tests solo, cada vez que subís un cambio. Tiene que aparecer un tilde verde ✅.

---

## Parte 3 — Guion de la demo en vivo (~12 minutos)

### Antes de empezar (5 minutos antes)

- Abrí VS Code con el proyecto y la terminal abajo.
- Agrandá la letra para que se lea al compartir pantalla: `Ctrl + +` (dos o tres veces).
- Cerrá Slack/WhatsApp/notificaciones.
- En la terminal, cambiá a la rama "vacía" de la demo:

  ```powershell
  git checkout demo-inicio
  ```

  Ahora la carpeta `src` no existe: arrancás de cero, como en la vida real.
- La carpeta **`demo-en-vivo`** tiene el contenido exacto de cada paso. Así no tenés que tipear todo: abrís el archivo del paso, `Ctrl + A`, `Ctrl + C`, y lo pegás en el archivo de `src`.

> 💡 **Truco para la pantalla:** poné el test a la izquierda y el código a la derecha (clic derecho sobre la pestaña → **Dividir a la derecha**), y la terminal abajo. Así la clase ve las tres cosas a la vez.

### Paso 0 — Contexto (30 segundos)

> *"El Product Owner nos pide un formulario de registro. Una de las reglas de negocio es: no aceptar emails mal escritos. Vamos a construir ese validador con TDD: primero el test, después el código."*

### Ciclo 1 — 🔴 Rojo: el primer test (2 minutos)

1. Creá la carpeta `src` y adentro el archivo `validarEmail.test.ts`.
2. Pegá el contenido de `demo-en-vivo/paso-01-ciclo1-ROJO-email-valido/validarEmail.test.ts` (o mejor, tipealo: es cortito).
3. En la terminal, arrancá los tests en **modo vigilancia** (se re-ejecutan solos cada vez que guardás):

   ```powershell
   npm test
   ```

4. Se pone **rojo**: *"Cannot find module './validarEmail'"*.

> 🗣️ *"Rojo. Y es lo que queremos: el test describe lo que el sistema TIENE que hacer, y todavía no existe. Este test es la especificación ejecutable del requisito."*

### Ciclo 1 — 🟢 Verde: el código mínimo (1 minuto)

1. Creá `src/validarEmail.ts` y pegá `paso-02-ciclo1-VERDE-return-true/validarEmail.ts`:
   ```ts
   export function esEmailValido(email: string): boolean {
     return true;
   }
   ```
2. Guardá (`Ctrl + S`). La terminal se pone **verde** sola.

> 🗣️ *"¿Hice trampa? Sí, a propósito. En TDD escribimos el código MÍNIMO para pasar el test. Si el código está mal, va a aparecer un test que lo demuestre... justamente el siguiente."*

### Ciclo 2 — 🔴 → 🟢 sin arroba (2 minutos)

1. Pegá en el test `paso-03-ciclo2-ROJO-sin-arroba/validarEmail.test.ts` → guardá → **rojo** (*expected true to be false*).

> 🗣️ *"Ahí está: el test me demuestra que `return true` no alcanza."*

2. Pegá en el código `paso-04-ciclo2-VERDE-sin-arroba/validarEmail.ts` (`return email.includes("@")`) → guardá → **verde**.

### Ciclo 3 — 🔴 → 🟢 más de un arroba (2 minutos)

1. Test: `paso-05-...` → **rojo** (`ana@@gmail.com` se colaba).
2. Código: `paso-06-...` → **verde**.

> 🗣️ *"¿Ven el ritmo? Rojo, verde, rojo, verde. Pasos chiquitos, cada uno de un par de minutos. Esto es lo que le da previsibilidad al equipo."*

### Cerrar la parte en vivo y saltar al resultado final (1 minuto)

Por tiempo, los ciclos 4 a 7 ya están hechos. Frená los tests con `Ctrl + C` y escribí:

```powershell
git add -A
git commit -m "Demo en vivo"
git checkout main
```

> 🗣️ *"Los demás ciclos los hice antes con la misma mecánica: usuario vacío, dominio sin punto, espacios, y uno muy interesante: `ana@.com` pasaba como válido. Un bug que encontré solo por pensar en el test."*

Mostrá `src/validarEmail.test.ts` y el historial en GitHub (pestaña **Commits**): cada commit dice 🔴 RED, 🟢 GREEN o 🔵 REFACTOR.

### 🔵 Refactor con red de seguridad (2 minutos)

1. Mostrá `src/validarEmail.ts`: ahora es una lista de reglas con nombre, y la función principal es una sola línea.
2. Corré `npm test` → todo verde.

> 🗣️ *"Antes era una pila de `if`. Lo reescribí completo y los tests me garantizan que hace exactamente lo mismo. Sin tests, nadie se anima a tocar código que funciona: así nace la deuda técnica."*

### 🧪 El experimento: romper el código a propósito (1 minuto)

1. En `src/validarEmail.ts`, en la regla `extensionTieneAlMenosDosLetras`, cambiá `>= 2` por `>= 3` y guardá.
2. Se pone **rojo** el test *"acepta ana@sapo.pt"*.
3. Volvé a `>= 2` → **verde**.

> 🗣️ *"Me equivoqué y en un segundo lo supe, antes de que llegue a producción. Dato real: cuando hice esto la primera vez, NO se puso rojo, porque no tenía ningún test con una extensión de 2 letras. Lección: los tests solo te protegen de lo que prueban. Así que agregué ese caso."*

### 🚀 El validador funcionando "de verdad" (30 segundos)

```powershell
npm run demo -- ana@gmail.com juan@ "pedro perez@mail.com" hola@sapo.pt ana@.com
```

### Cierre: ¿qué hace el Scrum Master con todo esto? (1 minuto)

> 🗣️ *"Nosotros no escribimos el código, pero sí podemos: incluir 'tiene tests automatizados' en la Definition of Done, proteger tiempo para refactorizar en lugar de verlo como 'tiempo perdido', mirar si el pipeline de integración continua está en verde, y preguntar en la Retro qué bugs se escaparon y qué test los hubiera atrapado."*

---

## Si algo sale mal durante la demo

| Problema | Solución rápida |
|---|---|
| `npm : No se puede cargar el archivo ... la ejecución de scripts está deshabilitada` | Correr `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned` y abrir una terminal nueva. |
| `'npm' no se reconoce como un comando` | Node no quedó instalado o falta reiniciar VS Code. Cerrá y abrí VS Code. |
| El modo vigilancia (`npm test`) no reacciona | Asegurate de **guardar** el archivo (`Ctrl + S`). Si sigue igual, `Ctrl + C` y `npm test` de nuevo. |
| `git checkout main` dice que hay cambios sin guardar | Hacé primero `git add -A` y `git commit -m "Demo en vivo"`. |
| Te trabás o se corta algo | Plan B: `git checkout main` y mostrás todo terminado + las capturas del PowerPoint. |

---

## Preguntas que te pueden hacer (y cómo responderlas en criollo)

**¿TDD no hace que el equipo vaya más lento?**
Al principio sí, un poco: escribir el test lleva tiempo. Pero ese tiempo se recupera con creces porque se debuggea mucho menos, los bugs aparecen en segundos y no en producción, y se puede cambiar el código sin miedo. Es "ir lento para ir rápido".

**¿Cuál es la diferencia con "hacer tests"?**
El orden. En TDD el test se escribe ANTES del código. Eso cambia todo: el test funciona como especificación (qué tiene que hacer) y el diseño sale más simple porque solo escribís lo necesario para pasarlo.

**¿Por qué escribiste `return true` si estaba mal?**
Porque TDD pide el código mínimo para pasar el test actual. Evita el sobre-diseño ("por las dudas") y obliga a que cada comportamiento quede respaldado por un test. El test siguiente demostró que no alcanzaba.

**¿Qué es refactorizar?**
Mejorar cómo está escrito el código sin cambiar lo que hace. Los tests son la red de seguridad: si después de refactorizar siguen verdes, no rompiste nada.

**¿TDD garantiza que no haya bugs?**
No. Garantiza que el código hace lo que dicen los tests. Si falta un caso, el bug puede pasar (lo vimos con la extensión de 2 letras). Por eso los casos se piensan junto con el negocio, por ejemplo usando los criterios de aceptación de la historia de usuario.

**¿Qué tiene que ver un Scrum Master con esto?**
El Scrum Master es responsable de la efectividad del equipo. Las prácticas técnicas (TDD, integración continua, refactor) son las que permiten entregar un Incremento "Hecho" cada Sprint sin acumular deuda técnica. El SM las promueve, las incluye en la Definition of Done y protege el tiempo para hacerlas.

**¿Por qué TypeScript y Vitest?**
TypeScript es JavaScript con tipos: se usa muchísimo en web y detecta errores antes de ejecutar. Vitest es un framework de tests moderno, rápido y con un "modo vigilancia" que vuelve a correr los tests cada vez que guardás, ideal para el ciclo de TDD.

**¿Qué hace GitHub Actions acá?**
Es integración continua: cada vez que alguien sube código, GitHub corre automáticamente todos los tests. Si alguno falla, el equipo se entera enseguida. TDD protege al desarrollador en su compu; la integración continua protege a todo el equipo.

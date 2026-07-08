const exercises = [
  {
    id: "GT-LAB-01-TERMINAL",
    title: "Terminal básica",
    level: "Inicio",
    goal: "Construir un pequeño flujo de trabajo de terminal: preparar carpeta, crear archivos, listar, guardar salida, buscar e interpretar.",
    scenario: "Estás empezando a trabajar en terminal y necesitas demostrar que sabes organizar una práctica sencilla sin mezclar archivos con el resto del sistema.",
    expected: ["preparar", "crear", "listar", "salida", "buscar", "conclusion"],
    starter: [
      "Crear carpeta laboratorio-terminal",
      "Entrar en la carpeta laboratorio-terminal",
      "Crear archivos uno.txt dos.txt tres.txt",
      "Listar contenido y guardar salida en listado.txt",
      "Buscar la palabra uno dentro de listado.txt",
      "Escribir una conclusion explicando que evidencia demuestra que funciono"
    ]
  },
  {
    id: "GT-LAB-02-LINUX",
    title: "Linux administración",
    level: "Administración",
    goal: "Construir un flujo de revisión de un equipo Linux con evidencias e interpretación.",
    scenario: "Un equipo Linux debe revisarse antes de entregarlo. No basta con ejecutar comandos: hay que ordenar la revisión y explicar qué significa cada resultado.",
    expected: ["sistema", "disco", "procesos", "servicios", "logs", "red", "conclusion"],
    starter: [
      "Identificar nombre del equipo y usuario actual",
      "Comprobar espacio de disco",
      "Revisar procesos activos",
      "Comprobar servicios importantes",
      "Consultar logs recientes",
      "Revisar configuracion de red",
      "Escribir diagnostico final"
    ]
  },
  {
    id: "GT-LAB-03-WINDOWS",
    title: "Windows PowerShell",
    level: "Administración",
    goal: "Construir un informe básico de Windows usando PowerShell como herramienta principal.",
    scenario: "Debes revisar un equipo Windows y convertir las comprobaciones en un informe entendible para otra persona.",
    expected: ["sistema", "disco", "procesos", "servicios", "logs", "red", "conclusion"],
    starter: [
      "Obtener informacion del equipo",
      "Revisar unidades y espacio disponible",
      "Listar procesos relevantes",
      "Comprobar servicios en ejecucion",
      "Consultar eventos recientes",
      "Revisar configuracion IP",
      "Redactar conclusion"
    ]
  },
  {
    id: "GT-LAB-04-REDES",
    title: "Diagnóstico de redes",
    level: "Redes",
    goal: "Construir un diagnóstico por capas: IP, gateway, DNS, puerto, servicio y conclusión.",
    scenario: "Un equipo parece no tener conexión. Debes evitar probar cosas al azar y construir una secuencia lógica de diagnóstico.",
    expected: ["ip", "gateway", "dns", "puerto", "servicios", "conclusion"],
    starter: [
      "Comprobar IP local",
      "Comprobar gateway o ruta por defecto",
      "Probar resolucion DNS",
      "Comprobar puerto 80 o 443",
      "Identificar si el servicio responde",
      "Escribir conclusion indicando donde parece estar el fallo"
    ]
  },
  {
    id: "GT-LAB-05-BACKUPS",
    title: "Backups y restauración",
    level: "Continuidad",
    goal: "Construir un flujo de copia con origen, destino, proceso, verificación y posible restauración.",
    scenario: "Hay una carpeta importante que debe protegerse. La copia no es válida si no queda claro qué se copia, dónde y cómo se comprueba.",
    expected: ["objetivo", "entrada", "proceso", "salida", "verificacion", "conclusion"],
    starter: [
      "Definir objetivo del backup",
      "Indicar carpeta origen",
      "Indicar carpeta destino",
      "Copiar archivos al destino",
      "Verificar que la copia existe",
      "Explicar como restauraria los datos"
    ]
  },
  {
    id: "GT-LAB-06-SCRIPTING",
    title: "Scripting aplicado",
    level: "Automatización",
    goal: "Diseñar un script antes de programarlo: objetivo, entradas, variables, proceso, condiciones, salida y verificación.",
    scenario: "Vas a automatizar una tarea repetitiva. Antes de escribir código, debes construir su lógica en bloques visuales.",
    expected: ["objetivo", "entrada", "variable", "condicion", "proceso", "salida", "verificacion"],
    starter: [
      "Definir objetivo del script",
      "Pedir ruta de carpeta como entrada",
      "Guardar ruta en una variable",
      "Comprobar si la carpeta existe",
      "Si existe listar archivos",
      "Guardar resultado en informe.txt",
      "Verificar que informe.txt se ha creado"
    ]
  },
  {
    id: "GT-LAB-07-PROYECTO",
    title: "Proyecto final de mantenimiento",
    level: "Proyecto",
    goal: "Construir un informe técnico completo con revisión, evidencias, interpretación, riesgos y recomendaciones.",
    scenario: "Debes entregar una revisión profesional de un equipo o entorno. El resultado debe poder leerse como informe, no como lista suelta de comandos.",
    expected: ["sistema", "disco", "red", "servicios", "logs", "riesgo", "conclusion"],
    starter: [
      "Definir alcance del mantenimiento",
      "Identificar sistema revisado",
      "Comprobar disco y recursos",
      "Revisar red",
      "Revisar servicios criticos",
      "Resumir logs o incidencias",
      "Indicar riesgos y recomendaciones finales"
    ]
  }
];

const blockTypes = [
  { id: "objetivo", label: "Objetivo", help: "Define qué se quiere conseguir.", words: ["objetivo", "finalidad", "proposito", "quiero", "necesito", "resolver"] },
  { id: "preparar", label: "Preparar entorno", help: "Crea carpeta, entra en directorio o prepara el espacio de trabajo.", words: ["preparar", "mkdir", "carpeta", "directorio", "entrar", "cd ", "set-location"] },
  { id: "entrada", label: "Entrada", help: "Dato que recibe el script o la práctica: ruta, nombre, parámetro, origen o destino.", words: ["entrada", "parametro", "argumento", "origen", "destino", "ruta", "pedir"] },
  { id: "variable", label: "Variable", help: "Guarda un dato para usarlo después.", words: ["variable", "$", "guardar en", "asignar", "valor", "nombre="] },
  { id: "crear", label: "Crear", help: "Crea archivos, carpetas o recursos de trabajo.", words: ["crear", "touch", "new-item", "archivo", "fichero"] },
  { id: "leer", label: "Leer", help: "Consulta contenido o información existente.", words: ["leer", "cat", "type", "get-content", "mostrar contenido", "abrir"] },
  { id: "listar", label: "Listar", help: "Muestra elementos: archivos, procesos, servicios o resultados.", words: ["listar", "ls", "dir", "get-childitem", "ver lista", "mostrar lista"] },
  { id: "buscar", label: "Buscar", help: "Localiza texto, nombres, patrones o resultados concretos.", words: ["buscar", "grep", "findstr", "select-string", "filtrar", "encontrar"] },
  { id: "condicion", label: "Condición", help: "Decide qué hacer según una comprobación.", words: ["si ", "if", "else", "cuando", "existe", "no existe", "comprobar si"] },
  { id: "bucle", label: "Bucle", help: "Repite una acción por cada elemento.", words: ["bucle", "for", "foreach", "while", "por cada", "repetir"] },
  { id: "proceso", label: "Proceso", help: "Acción principal que transforma o comprueba algo.", words: ["proceso", "copiar", "ejecutar", "calcular", "revisar", "analizar", "comprobar"] },
  { id: "salida", label: "Salida", help: "Resultado que se muestra o se guarda.", words: ["salida", ">", "out-file", "export", "guardar", "informe", "resultado"] },
  { id: "verificacion", label: "Verificación", help: "Comprueba que el resultado es válido.", words: ["verificar", "validar", "comprobar", "test", "prueba", "confirmar"] },
  { id: "error", label: "Gestión de errores", help: "Indica qué hacer si algo falla.", words: ["error", "fallo", "try", "catch", "except", "si falla", "problema"] },
  { id: "sistema", label: "Sistema", help: "Obtiene información general del equipo.", words: ["sistema", "equipo", "hostname", "whoami", "systeminfo", "get-computerinfo"] },
  { id: "disco", label: "Disco", help: "Revisa espacio, unidades o almacenamiento.", words: ["disco", "espacio", "df", "du", "get-volume", "get-psdrive", "almacenamiento"] },
  { id: "procesos", label: "Procesos", help: "Revisa procesos activos o consumo.", words: ["proceso", "procesos", "ps", "top", "tasklist", "get-process"] },
  { id: "servicios", label: "Servicios", help: "Comprueba servicios o demonios.", words: ["servicio", "servicios", "systemctl", "get-service", "sc query"] },
  { id: "logs", label: "Logs", help: "Consulta eventos, errores o registros.", words: ["logs", "eventos", "journalctl", "get-winevent", "eventlog", "errores"] },
  { id: "red", label: "Red", help: "Revisa conectividad general.", words: ["red", "conectividad", "ping", "netstat", "ss", "ipconfig"] },
  { id: "ip", label: "IP", help: "Comprueba dirección IP local.", words: ["ip local", "direccion ip", "ip a", "ipconfig", "get-netipaddress"] },
  { id: "gateway", label: "Gateway", help: "Comprueba puerta de enlace o ruta por defecto.", words: ["gateway", "puerta de enlace", "ruta", "ip route", "route print", "get-netroute"] },
  { id: "dns", label: "DNS", help: "Comprueba resolución de nombres.", words: ["dns", "nslookup", "resolve-dnsname", "dominio", "resolucion"] },
  { id: "puerto", label: "Puerto", help: "Comprueba si un puerto o servicio responde.", words: ["puerto", "443", "80", "test-netconnection", "curl", "servicio web"] },
  { id: "riesgo", label: "Riesgo", help: "Describe un problema potencial o impacto.", words: ["riesgo", "impacto", "critico", "grave", "vulnerable", "recomendacion"] },
  { id: "conclusion", label: "Conclusión", help: "Interpreta el resultado y propone mejora.", words: ["conclusion", "diagnostico", "resultado final", "recomendacion", "aprendido"] }
];

const exerciseSelect = document.getElementById("exerciseSelect");
const exerciseInfo = document.getElementById("exerciseInfo");
const paletteOutput = document.getElementById("paletteOutput");
const solutionInput = document.getElementById("solutionInput");
const analyzeBtn = document.getElementById("analyzeBtn");
const exampleBtn = document.getElementById("exampleBtn");
const clearBtn = document.getElementById("clearBtn");
const blocksOutput = document.getElementById("blocksOutput");
const feedbackOutput = document.getElementById("feedbackOutput");
const exportOutput = document.getElementById("exportOutput");

function init() {
  exercises.forEach((exercise, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${exercise.id} - ${exercise.title}`;
    exerciseSelect.appendChild(option);
  });

  const requested = getExerciseFromUrl();
  if (requested) {
    const index = exercises.findIndex(exercise => exercise.id === requested);
    if (index >= 0) exerciseSelect.value = String(index);
  }

  renderExercise();
  renderPalette();
  analyze();
}

function getExerciseFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const value = params.get("exercise") || params.get("id");
  if (!value) return null;
  const normalized = value.trim().toUpperCase();
  return /^GT-LAB-\d{2}-[A-Z0-9-]+$/.test(normalized) ? normalized : null;
}

function selectedExercise() {
  return exercises[Number(exerciseSelect.value || 0)];
}

function renderExercise() {
  const exercise = selectedExercise();
  const url = new URL(window.location.href);
  url.searchParams.set("exercise", exercise.id);
  window.history.replaceState({}, "", url.toString());

  exerciseInfo.innerHTML = `
    <h3>${escapeHtml(exercise.title)}</h3>
    <p><strong>Nivel:</strong> ${escapeHtml(exercise.level)}</p>
    <p><strong>Escenario:</strong> ${escapeHtml(exercise.scenario)}</p>
    <p><strong>Objetivo:</strong> ${escapeHtml(exercise.goal)}</p>
    <p><strong>Bloques esperados:</strong></p>
    <div>${exercise.expected.map(type => `<span class="tag">${escapeHtml(labelFor(type))}</span>`).join("")}</div>
  `;
}

function renderPalette() {
  paletteOutput.innerHTML = blockTypes.map(type => `
    <div class="palette-item" title="${escapeHtml(type.help)}">
      <strong>${escapeHtml(type.label)}</strong>
      <span>${escapeHtml(type.help)}</span>
    </div>
  `).join("");
}

function analyze() {
  const lines = solutionInput.value.split("\n").map(line => line.trim()).filter(Boolean);
  const blocks = lines.map((line, index) => buildBlock(line, index));
  renderBlocks(blocks);
  renderFeedback(blocks);
  renderExport(blocks);
}

function buildBlock(line, index) {
  const matches = detectTypes(line);
  const main = matches[0] || blockTypes.find(type => type.id === "proceso");
  const warnings = [];

  if (line.length < 6) warnings.push("La acción es demasiado corta; añade contexto.");
  if (matches.length === 0) warnings.push("No se reconoce un bloque claro; quizá falta un verbo técnico o una intención.");
  if (/rm -rf|format|delete|del /i.test(line)) warnings.push("Acción potencialmente destructiva: exige entorno de laboratorio y explicación.");
  if (!/[a-záéíóúñ]/i.test(line)) warnings.push("La línea no parece una explicación o comando válido.");

  return {
    number: index + 1,
    text: line,
    type: main.id,
    label: main.label,
    help: main.help,
    matches: matches.map(item => item.id),
    warnings
  };
}

function detectTypes(line) {
  const normalized = normalize(line);
  return blockTypes.filter(type => type.words.some(word => normalized.includes(normalize(word))));
}

function renderBlocks(blocks) {
  if (!blocks.length) {
    blocksOutput.innerHTML = `<div class="empty-state">Escribe una o varias líneas y pulsa <strong>Convertir en bloques</strong>. También puedes cargar un ejemplo.</div>`;
    return;
  }

  blocksOutput.innerHTML = blocks.map(block => `
    <article class="visual-block block-${escapeHtml(block.type)}">
      <div class="block-number">${block.number}</div>
      <div class="block-body">
        <div class="block-head">
          <strong>${escapeHtml(block.label)}</strong>
          <span>${escapeHtml(block.type)}</span>
        </div>
        <p class="block-text">${escapeHtml(block.text)}</p>
        <p class="block-help">${escapeHtml(block.help)}</p>
        ${block.matches.length > 1 ? `<p class="block-extra">También se parece a: ${block.matches.slice(1).map(labelFor).map(escapeHtml).join(", ")}</p>` : ""}
        ${block.warnings.length ? `<ul class="block-warnings">${block.warnings.map(warning => `<li>${escapeHtml(warning)}</li>`).join("")}</ul>` : ""}
      </div>
    </article>
  `).join("<div class='connector'>↓</div>");
}

function renderFeedback(blocks) {
  const exercise = selectedExercise();
  const found = new Set(blocks.flatMap(block => block.matches.length ? block.matches : [block.type]));
  const missing = exercise.expected.filter(type => !found.has(type));
  const covered = exercise.expected.filter(type => found.has(type));
  const warnings = blocks.flatMap(block => block.warnings);

  feedbackOutput.innerHTML = `
    <p class="ok"><strong>Cobertura:</strong> ${covered.length}/${exercise.expected.length}</p>
    ${covered.length ? `<p><strong>Bloques cubiertos:</strong> ${covered.map(labelFor).map(escapeHtml).join(", ")}</p>` : ""}
    ${missing.length ? `<p class="missing"><strong>Faltan:</strong> ${missing.map(labelFor).map(escapeHtml).join(", ")}</p>` : `<p class="ok">La construcción cubre los bloques mínimos del ejercicio.</p>`}
    ${warnings.length ? `<p class="missing"><strong>Avisos:</strong> revisa ${warnings.length} línea(s).</p>` : ""}
    <h3>Siguiente mejora</h3>
    <p>${missing.length ? "Añade una línea para cada bloque pendiente y vuelve a convertir." : "Ahora revisa si cada bloque tiene evidencia, explicación y conclusión."}</p>
  `;
}

function renderExport(blocks) {
  const exercise = selectedExercise();
  const lines = blocks.map(block => `${block.number}. [${block.label}] ${block.text}`).join("\n") || "Pendiente de construir";
  exportOutput.textContent = `# Construcción visual - ${exercise.id}

## Ejercicio
${exercise.title}

## Escenario
${exercise.scenario}

## Objetivo
${exercise.goal}

## Bloques esperados
${exercise.expected.map(type => `- ${labelFor(type)}`).join("\n")}

## Flujo construido
${lines}

## Próximo paso
Revisar los bloques pendientes, añadir evidencias y convertir esta construcción en comandos reales o pseudocódigo más detallado.
`;
}

function labelFor(id) {
  const found = blockTypes.find(type => type.id === id);
  return found ? found.label : id;
}

function normalize(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

analyzeBtn.addEventListener("click", analyze);

solutionInput.addEventListener("input", () => {
  analyze();
});

exampleBtn.addEventListener("click", () => {
  solutionInput.value = selectedExercise().starter.join("\n");
  analyze();
});

clearBtn.addEventListener("click", () => {
  solutionInput.value = "";
  analyze();
});

exerciseSelect.addEventListener("change", () => {
  renderExercise();
  solutionInput.value = "";
  analyze();
});

init();

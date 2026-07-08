const exercises = [
  {
    id: "GT-LAB-01-TERMINAL",
    title: "Terminal básica",
    level: "Inicio",
    branchPrefix: "lab/gt-lab-01-terminal/",
    scenario: "Necesitas preparar una carpeta de práctica, crear archivos de prueba, obtener un listado y comprobar que sabes buscar información dentro de una salida.",
    objective: "Aprender a moverte por la terminal y transformar acciones simples en una entrega explicada.",
    required: ["carpeta", "archivo", "listar", "buscar", "salida"],
    steps: [
      "Explica con tus palabras qué carpeta vas a crear y por qué conviene trabajar en una carpeta separada.",
      "Crea la carpeta de laboratorio y entra en ella.",
      "Crea tres archivos de texto con nombres sencillos.",
      "Lista el contenido de la carpeta y guarda esa salida en un archivo.",
      "Busca un nombre concreto dentro del listado generado.",
      "Escribe una conclusión: qué comando te resultó más útil y qué evidencia demuestra que funcionó."
    ],
    hints: {
      carpeta: "Empieza por una carpeta propia para no mezclar la práctica con otros archivos.",
      archivo: "Necesitas crear o mencionar al menos tres archivos de prueba.",
      listar: "Incluye una orden para ver el contenido de la carpeta.",
      buscar: "Incluye una búsqueda dentro de un archivo o salida.",
      salida: "Guarda algún resultado en un archivo para poder entregarlo como evidencia."
    },
    guidedExample: "Primero preparo una carpeta de trabajo. Después creo varios archivos de prueba. A continuación genero un listado y lo guardo como evidencia. Por último busco el nombre de un archivo dentro del listado y explico el resultado.",
    evidence: ["Nombre de la carpeta creada", "Listado guardado", "Búsqueda realizada", "Explicación breve de cada comando"]
  },
  {
    id: "GT-LAB-02-LINUX",
    title: "Linux administración",
    level: "Administración",
    branchPrefix: "lab/gt-lab-02-linux/",
    scenario: "Un equipo Linux necesita una revisión básica antes de documentar su estado.",
    objective: "Practicar una revisión ordenada de sistema, disco, procesos, servicios, logs y red.",
    required: ["sistema", "disco", "proceso", "servicio", "logs", "red"],
    steps: [
      "Identifica el equipo, usuario actual y versión general del sistema.",
      "Revisa el espacio disponible y anota si hay algún punto crítico.",
      "Comprueba procesos activos y explica qué dato observarías primero.",
      "Revisa servicios importantes y diferencia activo, parado y con error.",
      "Consulta mensajes recientes de logs o eventos del sistema.",
      "Comprueba configuración de red básica y redacta un diagnóstico final."
    ],
    hints: {
      sistema: "Incluye una comprobación de sistema, equipo o usuario.",
      disco: "Añade una revisión de disco o almacenamiento.",
      proceso: "Añade una revisión de procesos y explica qué mirarías.",
      servicio: "Añade una revisión de servicios.",
      logs: "Añade una revisión de logs o errores recientes.",
      red: "Incluye IP, rutas, conectividad o puertos."
    },
    guidedExample: "Divido la revisión en bloques: sistema, disco, procesos, servicios, logs y red. En cada bloque ejecuto una comprobación, guardo una evidencia y escribo una frase de interpretación.",
    evidence: ["Datos del sistema", "Estado de disco", "Procesos o servicios relevantes", "Extracto o resumen de logs", "Conclusión de red"]
  },
  {
    id: "GT-LAB-03-WINDOWS",
    title: "Windows PowerShell",
    level: "Administración",
    branchPrefix: "lab/gt-lab-03-windows/",
    scenario: "Debes revisar un equipo Windows usando PowerShell y preparar un informe entendible.",
    objective: "Usar PowerShell para obtener información del sistema y convertirla en evidencias.",
    required: ["sistema", "disco", "proceso", "servicio", "logs", "red"],
    steps: [
      "Obtén información básica del equipo y usuario.",
      "Revisa unidades o volúmenes disponibles.",
      "Lista procesos relevantes y explica cómo detectarías consumo anómalo.",
      "Comprueba servicios y distingue los que están en ejecución de los detenidos.",
      "Consulta eventos recientes de sistema o aplicación.",
      "Revisa configuración de red y termina con una conclusión."
    ],
    hints: {
      sistema: "Incluye una comprobación del equipo o sistema.",
      disco: "Incluye una revisión de unidades o espacio.",
      proceso: "Incluye una revisión de procesos.",
      servicio: "Incluye una revisión de servicios.",
      logs: "Incluye eventos o errores recientes.",
      red: "Incluye IP, rutas o conectividad del equipo."
    },
    guidedExample: "Planteo la solución como un informe: primero identifico el equipo, luego reviso recursos, después servicios y eventos, y finalmente redacto si el equipo parece correcto o necesita intervención.",
    evidence: ["Datos de equipo", "Estado de unidades", "Procesos o servicios", "Eventos recientes", "Conclusión"]
  },
  {
    id: "GT-LAB-04-REDES",
    title: "Diagnóstico de redes",
    level: "Redes",
    branchPrefix: "lab/gt-lab-04-redes/",
    scenario: "Un equipo tiene problemas de conectividad y debes localizar en qué capa puede estar el fallo.",
    objective: "Seguir un diagnóstico de red ordenado: IP, gateway, DNS, puerto y conclusión.",
    required: ["ip", "gateway", "dns", "puerto", "conclusion"],
    steps: [
      "Anota cuál es la IP local y comprueba si parece válida.",
      "Comprueba si existe ruta o gateway por defecto.",
      "Prueba resolución DNS con un nombre de dominio conocido.",
      "Comprueba si un puerto o servicio responde.",
      "Escribe una conclusión indicando dónde parece estar el problema."
    ],
    hints: {
      ip: "Empieza identificando la IP local.",
      gateway: "Incluye una revisión de ruta o gateway.",
      dns: "Incluye una prueba de resolución DNS.",
      puerto: "Incluye una prueba de puerto o servicio.",
      conclusion: "Añade una conclusión final del diagnóstico."
    },
    guidedExample: "No empiezo por el navegador. Primero miro IP local, luego puerta de enlace, después DNS y finalmente el puerto del servicio. Así puedo justificar en qué punto falla la comunicación.",
    evidence: ["IP local", "Ruta o gateway", "Prueba DNS", "Prueba de puerto", "Conclusión razonada"]
  },
  {
    id: "GT-LAB-05-BACKUPS",
    title: "Backups y restauración",
    level: "Continuidad",
    branchPrefix: "lab/gt-lab-05-backups/",
    scenario: "Tienes que proteger una carpeta importante y demostrar que la copia puede revisarse o restaurarse.",
    objective: "Diseñar una copia sencilla con origen, destino, proceso y verificación.",
    required: ["objetivo", "entrada", "proceso", "salida", "verificacion"],
    steps: [
      "Define qué quieres proteger y por qué.",
      "Indica origen y destino de la copia.",
      "Describe el método de copia.",
      "Explica dónde queda el resultado.",
      "Añade una comprobación de existencia, integridad o restauración de prueba."
    ],
    hints: {
      objetivo: "Indica qué datos se van a proteger.",
      entrada: "Indica carpeta origen y destino.",
      proceso: "Describe el método de copia.",
      salida: "Explica dónde queda la copia.",
      verificacion: "Añade una comprobación de copia y restauración."
    },
    guidedExample: "Primero digo qué carpeta protejo. Después explico origen y destino. Ejecuto la copia, reviso que existe el resultado y hago una comprobación mínima para demostrar que no es una copia a ciegas.",
    evidence: ["Origen", "Destino", "Método", "Resultado", "Verificación"]
  },
  {
    id: "GT-LAB-06-SCRIPTING",
    title: "Scripting aplicado",
    level: "Automatización",
    branchPrefix: "lab/gt-lab-06-scripting/",
    scenario: "Vas a transformar una tarea manual repetitiva en una automatización documentada.",
    objective: "Pensar antes de programar: objetivo, entrada, proceso, salida y verificación.",
    required: ["objetivo", "entrada", "proceso", "salida", "verificacion"],
    steps: [
      "Describe el problema que quieres automatizar.",
      "Define qué datos necesita el script para funcionar.",
      "Enumera los pasos del proceso antes de escribir comandos.",
      "Explica qué salida debe producir.",
      "Añade cómo comprobarías que el script funciona correctamente."
    ],
    hints: {
      objetivo: "Define qué problema resuelve la automatización.",
      entrada: "Indica qué datos o parámetros necesita.",
      proceso: "Describe los pasos que realizará.",
      salida: "Explica qué resultado produce.",
      verificacion: "Añade cómo comprobar que funciona."
    },
    guidedExample: "Antes de escribir el script, redacto su contrato: qué recibe, qué hace, qué genera y cómo sé que está bien. Después ya puedo traducir esa lógica a Bash, PowerShell o Python.",
    evidence: ["Objetivo", "Entradas", "Pasos", "Salida", "Prueba de funcionamiento"]
  },
  {
    id: "GT-LAB-07-PROYECTO",
    title: "Proyecto final de mantenimiento",
    level: "Proyecto",
    branchPrefix: "lab/gt-lab-07-proyecto/",
    scenario: "Debes entregar un informe completo de estado de un equipo o entorno de laboratorio.",
    objective: "Integrar sistema, disco, red, servicios, logs y recomendaciones en un informe profesional.",
    required: ["sistema", "disco", "red", "servicio", "logs", "conclusion"],
    steps: [
      "Identifica el sistema revisado y el alcance del informe.",
      "Comprueba recursos básicos como disco y uso general.",
      "Revisa conectividad y configuración de red.",
      "Comprueba servicios críticos.",
      "Resume logs o incidencias relevantes.",
      "Redacta conclusión, riesgos y recomendaciones."
    ],
    hints: {
      sistema: "Incluye datos generales del sistema.",
      disco: "Incluye revisión de recursos o almacenamiento.",
      red: "Incluye diagnóstico de red.",
      servicio: "Incluye revisión de servicios.",
      logs: "Incluye revisión de logs o eventos.",
      conclusion: "Añade diagnóstico y recomendaciones finales."
    },
    guidedExample: "Organizo el proyecto como un informe técnico: alcance, evidencias por área, interpretación de resultados y recomendaciones. No basta con pegar comandos: hay que explicar qué significan.",
    evidence: ["Alcance", "Evidencias por bloque", "Interpretación", "Riesgos", "Recomendaciones"]
  }
];

const patterns = [
  { type: "carpeta", label: "Carpeta", words: ["mkdir", "carpeta", "directorio", "cd ", "entrar"] },
  { type: "archivo", label: "Archivo", words: ["touch", "archivo", "fichero", "new-item", "get-content", "cat "] },
  { type: "listar", label: "Listar", words: ["ls", "dir", "get-childitem", "listar"] },
  { type: "buscar", label: "Buscar", words: ["grep", "findstr", "select-string", "buscar"] },
  { type: "salida", label: "Salida", words: [">", "out-file", "export", "guardar", "mostrar", "copia", "evidencia"] },
  { type: "sistema", label: "Sistema", words: ["hostname", "whoami", "systeminfo", "get-computerinfo", "hostnamectl", "equipo", "sistema"] },
  { type: "disco", label: "Disco", words: ["df", "du", "get-psdrive", "get-volume", "disco", "almacenamiento", "espacio"] },
  { type: "proceso", label: "Procesos", words: ["ps ", "top", "get-process", "tasklist", "proceso", "procesos"] },
  { type: "servicio", label: "Servicios", words: ["systemctl", "get-service", "sc query", "servicio", "servicios"] },
  { type: "logs", label: "Logs", words: ["journalctl", "eventlog", "get-winevent", "logs", "eventos", "errores"] },
  { type: "red", label: "Red", words: ["ip ", "netip", "ss ", "netstat", "red", "conectividad", "gateway", "dns"] },
  { type: "ip", label: "IP local", words: ["ip a", "ipconfig", "get-netipaddress", "ip local", "direccion ip"] },
  { type: "gateway", label: "Gateway", words: ["ip route", "route print", "get-netroute", "gateway", "puerta de enlace", "ruta"] },
  { type: "dns", label: "DNS", words: ["nslookup", "resolve-dnsname", "dns", "dominio", "resolucion"] },
  { type: "puerto", label: "Puerto", words: ["test-netconnection", "curl", "puerto", "443", "80", "servicio web"] },
  { type: "conclusion", label: "Conclusión", words: ["conclusion", "diagnostico", "resultado final", "recomendacion", "riesgo"] },
  { type: "objetivo", label: "Objetivo", words: ["objetivo", "problema", "finalidad", "proteger"] },
  { type: "entrada", label: "Entrada", words: ["entrada", "parametro", "argumento", "dato", "origen", "destino"] },
  { type: "proceso", label: "Proceso", words: ["paso", "proceso", "flujo", "ejecutar", "metodo"] },
  { type: "verificacion", label: "Verificación", words: ["verificar", "comprobar", "validar", "test", "restaurar", "restauracion", "prueba"] }
];

const exerciseSelect = document.getElementById("exerciseSelect");
const exerciseInfo = document.getElementById("exerciseInfo");
const guideOutput = document.getElementById("guideOutput");
const hintsOutput = document.getElementById("hintsOutput");
const solutionInput = document.getElementById("solutionInput");
const analyzeBtn = document.getElementById("analyzeBtn");
const exampleBtn = document.getElementById("exampleBtn");
const clearBtn = document.getElementById("clearBtn");
const blocksOutput = document.getElementById("blocksOutput");
const feedbackOutput = document.getElementById("feedbackOutput");
const exportOutput = document.getElementById("exportOutput");

function sanitizeExerciseId(value) {
  if (!value) return null;
  const normalized = value.trim().toUpperCase();
  const isSafe = /^GT-LAB-\d{2}-[A-Z0-9-]+$/.test(normalized);
  return isSafe ? normalized : null;
}

function getExerciseIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return sanitizeExerciseId(params.get("exercise") || params.get("exercise_id") || params.get("id"));
}

function findExerciseIndexById(id) {
  return exercises.findIndex(exercise => exercise.id === id);
}

function setUrlExercise(exerciseId) {
  const url = new URL(window.location.href);
  url.searchParams.set("exercise", exerciseId);
  window.history.replaceState({}, "", url.toString());
}

function selectedExercise() {
  return exercises[Number(exerciseSelect.value || 0)];
}

function init() {
  exercises.forEach((exercise, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${exercise.id} - ${exercise.title}`;
    exerciseSelect.appendChild(option);
  });

  const requestedId = getExerciseIdFromUrl();
  if (requestedId) {
    const requestedIndex = findExerciseIndexById(requestedId);
    if (requestedIndex >= 0) {
      exerciseSelect.value = String(requestedIndex);
    } else {
      showSafeLoadWarning(requestedId);
    }
  }

  renderExercise();
  setUrlExercise(selectedExercise().id);
}

function showSafeLoadWarning(requestedId) {
  feedbackOutput.innerHTML = `
    <p class="missing">No se ha cargado el ejercicio solicitado.</p>
    <p>El identificador <strong>${escapeHtml(requestedId)}</strong> no está en la lista blanca de ejercicios.</p>
    <p>Se carga el primer ejercicio disponible.</p>
  `;
}

function renderExercise() {
  const exercise = selectedExercise();
  exerciseInfo.innerHTML = `
    <h3>${escapeHtml(exercise.title)}</h3>
    <p><strong>Nivel:</strong> ${escapeHtml(exercise.level)}</p>
    <p><strong>ID:</strong> ${escapeHtml(exercise.id)}</p>
    <p><strong>Escenario:</strong> ${escapeHtml(exercise.scenario)}</p>
    <p><strong>Objetivo:</strong> ${escapeHtml(exercise.objective)}</p>
    <p><strong>Rama sugerida:</strong> ${escapeHtml(exercise.branchPrefix)}tu-nombre</p>
    <p><strong>Enlace directo seguro:</strong></p>
    <code>${escapeHtml(buildSafeLink(exercise.id))}</code>
    <p><strong>Criterios mínimos:</strong></p>
    <div>${exercise.required.map(item => `<span class="tag">${escapeHtml(item)}</span>`).join("")}</div>
  `;

  guideOutput.innerHTML = `
    <ol class="steps">
      ${exercise.steps.map((step, index) => `<li><strong>Paso ${index + 1}.</strong> ${escapeHtml(step)}</li>`).join("")}
    </ol>
    <div class="mini-card">
      <strong>Antes de revisar:</strong> intenta escribir una solución que incluya intención, comandos o acciones, evidencia y conclusión.
    </div>
  `;

  hintsOutput.innerHTML = exercise.required.map(item => `
    <details>
      <summary>${escapeHtml(labelForType(item))}</summary>
      <p>${escapeHtml(exercise.hints[item] || "Añade esta parte al ejercicio.")}</p>
    </details>
  `).join("") + `
    <details>
      <summary>¿Qué tengo que entregar?</summary>
      <ul>${exercise.evidence.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </details>
  `;
}

function buildSafeLink(exerciseId) {
  const url = new URL(window.location.href);
  url.searchParams.set("exercise", exerciseId);
  return url.toString();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function labelForType(type) {
  const pattern = patterns.find(item => item.type === type);
  return pattern ? pattern.label : type;
}

function detectBlocks(text) {
  const normalized = text.toLowerCase();
  const found = [];
  patterns.forEach(pattern => {
    if (pattern.words.some(word => normalized.includes(word))) {
      found.push(pattern);
    }
  });
  return Array.from(new Map(found.map(item => [item.type, item])).values());
}

function renderBlocks(blocks) {
  if (!blocks.length) {
    blocksOutput.innerHTML = "<p>No se han detectado bloques todavía. Empieza describiendo el objetivo y el primer paso.</p>";
    return;
  }
  blocksOutput.innerHTML = blocks.map(block => `
    <div class="block">
      <strong>${escapeHtml(block.label)}</strong>
      <span>Tipo detectado: ${escapeHtml(block.type)}</span>
    </div>
  `).join("");
}

function renderFeedback(blocks) {
  const exercise = selectedExercise();
  const text = solutionInput.value.trim();
  const detectedTypes = blocks.map(block => block.type);
  const completed = exercise.required.filter(item => detectedTypes.includes(item));
  const missing = exercise.required.filter(item => !detectedTypes.includes(item));
  const hasConclusion = /conclusi[oó]n|diagn[oó]stico|recomendaci[oó]n|resultado final/i.test(text);
  const hasExplanation = text.split(/\s+/).filter(Boolean).length >= 25;

  let level = "Inicial";
  if (completed.length >= Math.ceil(exercise.required.length / 2)) level = "En progreso";
  if (!missing.length && hasExplanation) level = "Preparado para entregar";

  feedbackOutput.innerHTML = `
    <p><strong>Estado:</strong> ${escapeHtml(level)}</p>
    <p class="ok">Criterios cubiertos: ${completed.length}/${exercise.required.length}</p>
    ${completed.length ? `<p><strong>Detectado:</strong> ${completed.map(labelForType).map(escapeHtml).join(", ")}</p>` : ""}
    ${missing.length ? `<p class="missing">Pendiente: ${missing.map(labelForType).map(escapeHtml).join(", ")}</p>` : '<p class="ok">Todos los criterios mínimos están cubiertos.</p>'}
    <h3>Próximos pasos</h3>
    <ul>
      ${missing.map(item => `<li>${escapeHtml(exercise.hints[item] || "Añade esta parte al ejercicio.")}</li>`).join("")}
      ${hasExplanation ? "" : "<li>Amplía la explicación: no pongas solo comandos, explica qué compruebas y por qué.</li>"}
      ${hasConclusion ? "" : "<li>Añade una conclusión final con interpretación del resultado.</li>"}
    </ul>
    <h3>Autoevaluación</h3>
    <ul>
      <li>¿Se entiende qué problema resuelve la práctica?</li>
      <li>¿Hay evidencias del resultado?</li>
      <li>¿Otra persona podría repetir tus pasos?</li>
    </ul>
  `;

  exportOutput.textContent = buildExport(exercise, completed, missing, level);
}

function buildExport(exercise, completed, missing, level) {
  return `# Entrega ${exercise.id}

## Ejercicio
${exercise.title}

## Nivel de revisión
${level}

## Escenario
${exercise.scenario}

## Objetivo
${exercise.objective}

## Enlace directo seguro
${buildSafeLink(exercise.id)}

## Rama sugerida
${exercise.branchPrefix}tu-nombre

## Pasos realizados
${exercise.steps.map((step, index) => `${index + 1}. ${step}`).join("\n")}

## Criterios cubiertos
${completed.map(item => `- ${labelForType(item)}`).join("\n") || "- Pendiente"}

## Criterios pendientes
${missing.map(item => `- ${labelForType(item)}`).join("\n") || "- Ninguno"}

## Solución propuesta
${solutionInput.value.trim() || "Pendiente de completar"}

## Evidencias que debo adjuntar
${exercise.evidence.map(item => `- ${item}`).join("\n")}

## Conclusión
Explica qué has aprendido, qué problema apareció y cómo lo resolverías la próxima vez.
`;
}

analyzeBtn.addEventListener("click", () => {
  const blocks = detectBlocks(solutionInput.value);
  renderBlocks(blocks);
  renderFeedback(blocks);
});

exampleBtn.addEventListener("click", () => {
  const exercise = selectedExercise();
  solutionInput.value = exercise.guidedExample;
  const blocks = detectBlocks(solutionInput.value);
  renderBlocks(blocks);
  renderFeedback(blocks);
});

clearBtn.addEventListener("click", () => {
  solutionInput.value = "";
  blocksOutput.innerHTML = "";
  feedbackOutput.innerHTML = "";
  exportOutput.textContent = "";
});

exerciseSelect.addEventListener("change", () => {
  setUrlExercise(selectedExercise().id);
  renderExercise();
  solutionInput.value = "";
  blocksOutput.innerHTML = "";
  feedbackOutput.innerHTML = "";
  exportOutput.textContent = "";
});

init();

const exercises = [
  {
    id: "GT-LAB-01-TERMINAL",
    title: "Terminal básica",
    branchPrefix: "lab/gt-lab-01-terminal/",
    required: ["carpeta", "archivo", "listar", "buscar", "salida"],
    hints: {
      carpeta: "Incluye una acción para crear o entrar en una carpeta.",
      archivo: "Incluye una acción para crear o revisar archivos.",
      listar: "Incluye una acción para listar contenido.",
      buscar: "Incluye una acción para buscar texto.",
      salida: "Incluye una acción para guardar o mostrar una salida."
    }
  },
  {
    id: "GT-LAB-02-LINUX",
    title: "Linux administración",
    branchPrefix: "lab/gt-lab-02-linux/",
    required: ["sistema", "disco", "proceso", "servicio", "logs", "red"],
    hints: {
      sistema: "Añade una comprobación de sistema o equipo.",
      disco: "Añade una revisión de disco o almacenamiento.",
      proceso: "Añade una revisión de procesos.",
      servicio: "Añade una revisión de servicios.",
      logs: "Añade una revisión de logs o errores recientes.",
      red: "Añade una revisión de IP, rutas o puertos."
    }
  },
  {
    id: "GT-LAB-03-WINDOWS",
    title: "Windows PowerShell",
    branchPrefix: "lab/gt-lab-03-windows/",
    required: ["sistema", "disco", "proceso", "servicio", "logs", "red"],
    hints: {
      sistema: "Añade una comprobación del equipo o sistema.",
      disco: "Incluye una revisión de unidades o espacio.",
      proceso: "Incluye una revisión de procesos.",
      servicio: "Incluye una revisión de servicios.",
      logs: "Incluye eventos o errores recientes.",
      red: "Incluye IP o rutas del equipo."
    }
  },
  {
    id: "GT-LAB-04-REDES",
    title: "Diagnóstico de redes",
    branchPrefix: "lab/gt-lab-04-redes/",
    required: ["ip", "gateway", "dns", "puerto", "conclusion"],
    hints: {
      ip: "Empieza identificando la IP local.",
      gateway: "Incluye una revisión de ruta o gateway.",
      dns: "Incluye una prueba de resolución DNS.",
      puerto: "Incluye una prueba de puerto o servicio.",
      conclusion: "Añade una conclusión final del diagnóstico."
    }
  },
  {
    id: "GT-LAB-05-BACKUPS",
    title: "Backups y restauración",
    branchPrefix: "lab/gt-lab-05-backups/",
    required: ["objetivo", "entrada", "proceso", "salida", "verificacion"],
    hints: {
      objetivo: "Indica qué datos se van a proteger.",
      entrada: "Indica carpeta origen y destino.",
      proceso: "Describe el método de copia.",
      salida: "Explica dónde queda la copia.",
      verificacion: "Añade una comprobación de copia y restauración."
    }
  },
  {
    id: "GT-LAB-06-SCRIPTING",
    title: "Scripting aplicado",
    branchPrefix: "lab/gt-lab-06-scripting/",
    required: ["objetivo", "entrada", "proceso", "salida", "verificacion"],
    hints: {
      objetivo: "Define qué problema resuelve la automatización.",
      entrada: "Indica qué datos o parámetros necesita.",
      proceso: "Describe los pasos que realizará.",
      salida: "Explica qué resultado produce.",
      verificacion: "Añade cómo comprobar que funciona."
    }
  },
  {
    id: "GT-LAB-07-PROYECTO",
    title: "Proyecto final de mantenimiento",
    branchPrefix: "lab/gt-lab-07-proyecto/",
    required: ["sistema", "disco", "red", "servicio", "logs", "conclusion"],
    hints: {
      sistema: "Incluye datos generales del sistema.",
      disco: "Incluye revisión de recursos o almacenamiento.",
      red: "Incluye diagnóstico de red.",
      servicio: "Incluye revisión de servicios.",
      logs: "Incluye revisión de logs o eventos.",
      conclusion: "Añade diagnóstico y recomendaciones finales."
    }
  }
];

const patterns = [
  { type: "carpeta", label: "Carpeta", words: ["mkdir", "carpeta", "directorio", "cd ", "entrar"] },
  { type: "archivo", label: "Archivo", words: ["touch", "archivo", "fichero", "new-item", "get-content", "cat "] },
  { type: "listar", label: "Listar", words: ["ls", "dir", "get-childitem", "listar"] },
  { type: "buscar", label: "Buscar", words: ["grep", "findstr", "select-string", "buscar"] },
  { type: "salida", label: "Salida", words: [">", "out-file", "export", "guardar", "mostrar", "copia"] },
  { type: "sistema", label: "Sistema", words: ["hostname", "whoami", "systeminfo", "get-computerinfo", "hostnamectl", "equipo", "sistema"] },
  { type: "disco", label: "Disco", words: ["df", "du", "get-psdrive", "get-volume", "disco", "almacenamiento"] },
  { type: "proceso", label: "Procesos", words: ["ps ", "top", "get-process", "tasklist", "proceso"] },
  { type: "servicio", label: "Servicios", words: ["systemctl", "get-service", "sc query", "servicio"] },
  { type: "logs", label: "Logs", words: ["journalctl", "eventlog", "get-winevent", "logs", "eventos", "errores"] },
  { type: "red", label: "Red", words: ["ip ", "netip", "ss ", "netstat", "red", "conectividad"] },
  { type: "ip", label: "IP local", words: ["ip a", "ipconfig", "get-netipaddress", "ip local"] },
  { type: "gateway", label: "Gateway", words: ["ip route", "route print", "get-netroute", "gateway", "ruta"] },
  { type: "dns", label: "DNS", words: ["nslookup", "resolve-dnsname", "dns", "dominio"] },
  { type: "puerto", label: "Puerto", words: ["test-netconnection", "curl", "puerto", "443", "80"] },
  { type: "conclusion", label: "Conclusión", words: ["conclusion", "diagnostico", "resultado final", "recomendacion"] },
  { type: "objetivo", label: "Objetivo", words: ["objetivo", "problema", "finalidad", "proteger"] },
  { type: "entrada", label: "Entrada", words: ["entrada", "parametro", "argumento", "dato", "origen", "destino"] },
  { type: "proceso", label: "Proceso", words: ["paso", "proceso", "flujo", "ejecutar", "metodo"] },
  { type: "verificacion", label: "Verificación", words: ["verificar", "comprobar", "validar", "test", "restaurar", "restauracion"] }
];

const exerciseSelect = document.getElementById("exerciseSelect");
const exerciseInfo = document.getElementById("exerciseInfo");
const solutionInput = document.getElementById("solutionInput");
const analyzeBtn = document.getElementById("analyzeBtn");
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

function selectedExercise() {
  return exercises[Number(exerciseSelect.value || 0)];
}

function renderExercise() {
  const exercise = selectedExercise();
  exerciseInfo.innerHTML = `
    <h3>${escapeHtml(exercise.title)}</h3>
    <p><strong>ID:</strong> ${escapeHtml(exercise.id)}</p>
    <p><strong>Rama sugerida:</strong> ${escapeHtml(exercise.branchPrefix)}tu-nombre</p>
    <p><strong>Enlace directo seguro:</strong></p>
    <code>${escapeHtml(buildSafeLink(exercise.id))}</code>
    <p><strong>Criterios:</strong></p>
    <div>${exercise.required.map(item => `<span class="tag">${escapeHtml(item)}</span>`).join("")}</div>
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
    blocksOutput.innerHTML = "<p>No se han detectado bloques todavía.</p>";
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
  const detectedTypes = blocks.map(block => block.type);
  const completed = exercise.required.filter(item => detectedTypes.includes(item));
  const missing = exercise.required.filter(item => !detectedTypes.includes(item));

  feedbackOutput.innerHTML = `
    <p class="ok">Criterios cubiertos: ${completed.length}/${exercise.required.length}</p>
    ${completed.length ? `<p><strong>Detectado:</strong> ${completed.map(escapeHtml).join(", ")}</p>` : ""}
    ${missing.length ? `<p class="missing">Pendiente: ${missing.map(escapeHtml).join(", ")}</p>` : '<p class="ok">Todos los criterios mínimos están cubiertos.</p>'}
    <ul>
      ${missing.map(item => `<li>${escapeHtml(exercise.hints[item] || "Añade esta parte al ejercicio.")}</li>`).join("")}
    </ul>
  `;

  exportOutput.textContent = buildExport(exercise, completed, missing);
}

function buildExport(exercise, completed, missing) {
  return `# Entrega ${exercise.id}

## Ejercicio
${exercise.title}

## Enlace directo seguro
${buildSafeLink(exercise.id)}

## Rama sugerida
${exercise.branchPrefix}tu-nombre

## Criterios cubiertos
${completed.map(item => `- ${item}`).join("\n") || "- Pendiente"}

## Criterios pendientes
${missing.map(item => `- ${item}`).join("\n") || "- Ninguno"}

## Solución propuesta
${solutionInput.value.trim() || "Pendiente de completar"}

## Próxima mejora
Explica qué cambiarías para mejorar la solución.
`;
}

analyzeBtn.addEventListener("click", () => {
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
  blocksOutput.innerHTML = "";
  feedbackOutput.innerHTML = "";
  exportOutput.textContent = "";
});

init();

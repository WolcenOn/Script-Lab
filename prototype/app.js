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
  }
];

const patterns = [
  { type: "carpeta", label: "Carpeta", words: ["mkdir", "carpeta", "directorio", "cd ", "entrar"] },
  { type: "archivo", label: "Archivo", words: ["touch", "archivo", "fichero", "new-item", "get-content", "cat "] },
  { type: "listar", label: "Listar", words: ["ls", "dir", "get-childitem", "listar"] },
  { type: "buscar", label: "Buscar", words: ["grep", "findstr", "select-string", "buscar"] },
  { type: "salida", label: "Salida", words: [">", "out-file", "export", "guardar", "mostrar"] },
  { type: "sistema", label: "Sistema", words: ["hostname", "whoami", "systeminfo", "get-computerinfo", "hostnamectl", "equipo"] },
  { type: "disco", label: "Disco", words: ["df", "du", "get-psdrive", "get-volume", "disco"] },
  { type: "proceso", label: "Procesos", words: ["ps ", "top", "get-process", "tasklist", "proceso"] },
  { type: "servicio", label: "Servicios", words: ["systemctl", "get-service", "sc query", "servicio"] },
  { type: "logs", label: "Logs", words: ["journalctl", "eventlog", "get-winevent", "logs", "eventos"] },
  { type: "red", label: "Red", words: ["ip ", "netip", "ss ", "netstat", "red"] },
  { type: "ip", label: "IP local", words: ["ip a", "ipconfig", "get-netipaddress", "ip local"] },
  { type: "gateway", label: "Gateway", words: ["ip route", "route print", "get-netroute", "gateway", "ruta"] },
  { type: "dns", label: "DNS", words: ["nslookup", "resolve-dnsname", "dns", "dominio"] },
  { type: "puerto", label: "Puerto", words: ["test-netconnection", "curl", "puerto", "443", "80"] },
  { type: "conclusion", label: "Conclusión", words: ["conclusion", "diagnostico", "resultado final", "recomendacion"] },
  { type: "objetivo", label: "Objetivo", words: ["objetivo", "problema", "finalidad"] },
  { type: "entrada", label: "Entrada", words: ["entrada", "parametro", "argumento", "dato"] },
  { type: "proceso", label: "Proceso", words: ["paso", "proceso", "flujo", "ejecutar"] },
  { type: "verificacion", label: "Verificación", words: ["verificar", "comprobar", "validar", "test"] }
];

const exerciseSelect = document.getElementById("exerciseSelect");
const exerciseInfo = document.getElementById("exerciseInfo");
const solutionInput = document.getElementById("solutionInput");
const analyzeBtn = document.getElementById("analyzeBtn");
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
  renderExercise();
}

function selectedExercise() {
  return exercises[Number(exerciseSelect.value || 0)];
}

function renderExercise() {
  const exercise = selectedExercise();
  exerciseInfo.innerHTML = `
    <h3>${exercise.title}</h3>
    <p><strong>ID:</strong> ${exercise.id}</p>
    <p><strong>Rama sugerida:</strong> ${exercise.branchPrefix}tu-nombre</p>
    <p><strong>Criterios:</strong></p>
    <div>${exercise.required.map(item => `<span class="tag">${item}</span>`).join("")}</div>
  `;
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
      <strong>${block.label}</strong>
      <span>Tipo detectado: ${block.type}</span>
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
    ${completed.length ? `<p><strong>Detectado:</strong> ${completed.join(", ")}</p>` : ""}
    ${missing.length ? `<p class="missing">Pendiente: ${missing.join(", ")}</p>` : "<p class="ok">Todos los criterios mínimos están cubiertos.</p>"}
    <ul>
      ${missing.map(item => `<li>${exercise.hints[item] || "Añade esta parte al ejercicio."}</li>`).join("")}
    </ul>
  `;

  exportOutput.textContent = buildExport(exercise, completed, missing);
}

function buildExport(exercise, completed, missing) {
  return `# Entrega ${exercise.id}

## Ejercicio
${exercise.title}

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
  renderExercise();
  blocksOutput.innerHTML = "";
  feedbackOutput.innerHTML = "";
  exportOutput.textContent = "";
});

init();

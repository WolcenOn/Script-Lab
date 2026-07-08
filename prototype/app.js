const exercises = [
  {
    id: "GT-LAB-01-TERMINAL",
    title: "Terminal básica",
    level: "Inicio",
    language: "Bash",
    scenario: "Necesitas crear un pequeño espacio de trabajo, generar archivos de prueba, guardar una salida y comprobar el resultado.",
    goal: "Aprender el flujo mínimo de un script: preparar entorno, crear datos, producir salida, verificar y concluir.",
    steps: [
      {
        type: "preparar",
        title: "Preparar carpeta de trabajo",
        task: "Crear una carpeta para la práctica y entrar en ella.",
        hint: "Piensa en dos acciones: crear directorio y cambiar a ese directorio. En Bash suelen ser dos comandos separados.",
        code: "mkdir -p laboratorio-terminal\ncd laboratorio-terminal"
      },
      {
        type: "crear",
        title: "Crear archivos de prueba",
        task: "Crear tres archivos vacíos para practicar con listados y búsquedas.",
        hint: "No necesitas editar el contenido todavía. Basta con crear los archivos para que aparezcan en el listado.",
        code: "touch uno.txt dos.txt tres.txt"
      },
      {
        type: "salida",
        title: "Guardar listado como evidencia",
        task: "Listar el contenido y guardar la salida en un archivo de evidencia.",
        hint: "La redirección permite guardar lo que normalmente verías en pantalla dentro de un archivo.",
        code: "ls -lah > listado.txt"
      },
      {
        type: "buscar",
        title: "Buscar dentro de la evidencia",
        task: "Comprobar que el archivo esperado aparece en el listado.",
        hint: "Busca una palabra concreta dentro del archivo generado en el paso anterior.",
        code: "grep \"uno\" listado.txt"
      },
      {
        type: "conclusion",
        title: "Documentar conclusión",
        task: "Añadir una frase de conclusión al informe.",
        hint: "La conclusión no debe repetir comandos; debe explicar qué demuestra la evidencia.",
        code: "echo \"Conclusion: el listado contiene los archivos creados y la busqueda confirma uno.txt.\" > informe.md"
      }
    ]
  },
  {
    id: "GT-LAB-04-REDES",
    title: "Diagnóstico de redes",
    level: "Redes",
    language: "Bash",
    scenario: "Un equipo parece tener problemas de conexión. Debes diagnosticarlo por capas, no probando comandos al azar.",
    goal: "Construir un script de diagnóstico con IP, gateway, DNS, puerto y conclusión.",
    steps: [
      {
        type: "ip",
        title: "Comprobar IP local",
        task: "Mostrar la configuración IP del equipo.",
        hint: "Antes de probar Internet, confirma si el equipo tiene dirección IP local.",
        code: "ip address show"
      },
      {
        type: "gateway",
        title: "Comprobar gateway",
        task: "Mostrar la ruta por defecto o puerta de enlace.",
        hint: "Si no hay ruta por defecto, el equipo puede comunicarse localmente pero no salir a otras redes.",
        code: "ip route show default"
      },
      {
        type: "dns",
        title: "Comprobar DNS",
        task: "Probar resolución de nombres.",
        hint: "Si la IP responde pero los nombres no, sospecha de DNS.",
        code: "nslookup example.com"
      },
      {
        type: "puerto",
        title: "Comprobar puerto web",
        task: "Probar si un servicio web responde.",
        hint: "Un puerto abierto indica que el servicio remoto responde en esa capa.",
        code: "curl -I https://example.com"
      },
      {
        type: "conclusion",
        title: "Redactar diagnóstico",
        task: "Guardar una conclusión técnica sencilla.",
        hint: "Indica si el problema parece estar en IP, gateway, DNS, puerto o servicio.",
        code: "echo \"Conclusion: revisar resultados de IP, gateway, DNS y puerto para localizar la capa del fallo.\" > diagnostico-red.md"
      }
    ]
  },
  {
    id: "GT-LAB-06-SCRIPTING",
    title: "Scripting aplicado",
    level: "Automatización",
    language: "Bash",
    scenario: "Vas a crear un script que recibe una carpeta, comprueba si existe y genera un informe de su contenido.",
    goal: "Entender la estructura real de un script: cabecera, entrada, variable, condición, proceso, salida y verificación.",
    steps: [
      {
        type: "objetivo",
        title: "Cabecera y objetivo",
        task: "Iniciar el script y explicar su finalidad.",
        hint: "La primera línea indica con qué intérprete se ejecutará el script. Los comentarios ayudan a documentarlo.",
        code: "#!/usr/bin/env bash\n# Objetivo: generar un informe de una carpeta"
      },
      {
        type: "entrada",
        title: "Recibir entrada",
        task: "Leer la carpeta desde el primer argumento del script.",
        hint: "En Bash, el primer argumento recibido por un script se consulta con $1.",
        code: "CARPETA=\"$1\"\nINFORME=\"informe-carpeta.txt\""
      },
      {
        type: "condicion",
        title: "Validar entrada",
        task: "Comprobar si la carpeta existe antes de trabajar con ella.",
        hint: "Una condición evita que el script continúe con datos incorrectos.",
        code: "if [ ! -d \"$CARPETA\" ]; then\n  echo \"Error: la carpeta no existe\"\n  exit 1\nfi"
      },
      {
        type: "proceso",
        title: "Procesar información",
        task: "Listar el contenido de la carpeta.",
        hint: "Aquí va la acción principal del script: obtener información útil.",
        code: "ls -lah \"$CARPETA\" > \"$INFORME\""
      },
      {
        type: "verificacion",
        title: "Verificar salida",
        task: "Confirmar que el informe se ha creado.",
        hint: "No des por hecho que la salida existe: compruébalo al final.",
        code: "if [ -f \"$INFORME\" ]; then\n  echo \"Informe generado: $INFORME\"\nfi"
      }
    ]
  },
  {
    id: "GT-LAB-03-WINDOWS",
    title: "Windows PowerShell",
    level: "Administración",
    language: "PowerShell",
    scenario: "Debes generar un informe simple de un equipo Windows usando PowerShell.",
    goal: "Construir un script con comprobaciones de sistema, disco, procesos, servicios y salida a informe.",
    steps: [
      {
        type: "sistema",
        title: "Identificar equipo",
        task: "Obtener información básica del equipo.",
        hint: "Empieza por saber qué equipo estás revisando y con qué usuario.",
        code: "$equipo = $env:COMPUTERNAME\n$usuario = $env:USERNAME"
      },
      {
        type: "disco",
        title: "Revisar disco",
        task: "Consultar unidades disponibles.",
        hint: "El disco es una de las causas habituales de incidencias.",
        code: "$discos = Get-PSDrive -PSProvider FileSystem"
      },
      {
        type: "procesos",
        title: "Revisar procesos",
        task: "Obtener los procesos con más consumo de CPU.",
        hint: "Ordenar ayuda a encontrar antes lo más relevante.",
        code: "$procesos = Get-Process | Sort-Object CPU -Descending | Select-Object -First 5"
      },
      {
        type: "servicios",
        title: "Revisar servicios",
        task: "Consultar servicios en ejecución.",
        hint: "Distingue servicios en ejecución y detenidos.",
        code: "$servicios = Get-Service | Where-Object Status -eq 'Running' | Select-Object -First 10"
      },
      {
        type: "salida",
        title: "Crear informe",
        task: "Guardar los resultados en un archivo.",
        hint: "La salida debe quedar en un archivo para poder entregarla o revisarla después.",
        code: "$equipo, $usuario, $discos, $procesos, $servicios | Out-File informe-windows.txt"
      }
    ]
  }
];

const blockInfo = {
  objetivo: { label: "Objetivo", help: "Define la finalidad del script." },
  preparar: { label: "Preparar", help: "Prepara carpetas o entorno de trabajo." },
  entrada: { label: "Entrada", help: "Recoge datos, argumentos o parámetros." },
  crear: { label: "Crear", help: "Crea archivos, carpetas o recursos." },
  variable: { label: "Variable", help: "Guarda datos reutilizables." },
  condicion: { label: "Condición", help: "Toma decisiones según una comprobación." },
  proceso: { label: "Proceso", help: "Ejecuta la acción principal." },
  salida: { label: "Salida", help: "Muestra o guarda resultados." },
  buscar: { label: "Buscar", help: "Localiza texto o información concreta." },
  verificacion: { label: "Verificación", help: "Comprueba que el resultado existe o es válido." },
  sistema: { label: "Sistema", help: "Obtiene información del equipo." },
  disco: { label: "Disco", help: "Revisa unidades y espacio." },
  procesos: { label: "Procesos", help: "Consulta procesos activos." },
  servicios: { label: "Servicios", help: "Consulta servicios del sistema." },
  logs: { label: "Logs", help: "Revisa registros o eventos." },
  red: { label: "Red", help: "Comprueba conectividad general." },
  ip: { label: "IP", help: "Comprueba dirección IP local." },
  gateway: { label: "Gateway", help: "Comprueba puerta de enlace." },
  dns: { label: "DNS", help: "Comprueba resolución de nombres." },
  puerto: { label: "Puerto", help: "Comprueba puertos o servicios remotos." },
  conclusion: { label: "Conclusión", help: "Interpreta el resultado." }
};

const patterns = [
  { type: "objetivo", words: ["#!/", "objetivo", "finalidad"] },
  { type: "preparar", words: ["mkdir", "cd ", "set-location"] },
  { type: "entrada", words: ["$1", "param", "read ", "argumento", "entrada"] },
  { type: "crear", words: ["touch", "new-item", "crear"] },
  { type: "variable", words: ["=", "$equipo", "$usuario", "carpeta=", "informe="] },
  { type: "condicion", words: ["if ", "then", "else", "where-object", "si "] },
  { type: "proceso", words: ["ls ", "get-process", "sort-object", "copiar", "copy-item"] },
  { type: "salida", words: [">", "out-file", "echo", "informe"] },
  { type: "buscar", words: ["grep", "select-string", "findstr"] },
  { type: "verificacion", words: ["-f", "test-path", "verificar", "comprobar"] },
  { type: "sistema", words: ["computername", "username", "hostname", "whoami"] },
  { type: "disco", words: ["get-psdrive", "df", "disco"] },
  { type: "procesos", words: ["get-process", "ps ", "top"] },
  { type: "servicios", words: ["get-service", "systemctl", "servicio"] },
  { type: "ip", words: ["ip address", "ipconfig", "get-netipaddress"] },
  { type: "gateway", words: ["ip route", "route print", "gateway"] },
  { type: "dns", words: ["nslookup", "resolve-dnsname", "dns"] },
  { type: "puerto", words: ["curl", "test-netconnection", "443", "80"] },
  { type: "conclusion", words: ["conclusion", "diagnostico", "recomendacion"] }
];

const exerciseSelect = document.getElementById("exerciseSelect");
const exerciseInfo = document.getElementById("exerciseInfo");
const stepsOutput = document.getElementById("stepsOutput");
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
    <p><strong>Lenguaje:</strong> ${escapeHtml(exercise.language)}</p>
    <p><strong>Escenario:</strong> ${escapeHtml(exercise.scenario)}</p>
    <p><strong>Objetivo:</strong> ${escapeHtml(exercise.goal)}</p>
  `;

  stepsOutput.innerHTML = exercise.steps.map((step, index) => `
    <article class="step-card block-${escapeHtml(step.type)}">
      <div class="step-number">${index + 1}</div>
      <div class="step-content">
        <div class="step-header">
          <span class="block-pill">${escapeHtml(labelFor(step.type))}</span>
          <h3>${escapeHtml(step.title)}</h3>
        </div>
        <p><strong>Qué tienes que hacer:</strong> ${escapeHtml(step.task)}</p>
        <details>
          <summary>Pista si me bloqueo</summary>
          <p>${escapeHtml(step.hint)}</p>
        </details>
        <details class="advanced-help">
          <summary>Ver código real si sigo bloqueado</summary>
          <p>Consulta este código solo después de intentar construir el bloque por tu cuenta.</p>
          <pre class="code-preview"><code>${escapeHtml(step.code)}</code></pre>
        </details>
        <button class="add-block" data-step="${index}">Añadir bloque al script</button>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".add-block").forEach(button => {
    button.addEventListener("click", () => addStepToWorkspace(Number(button.dataset.step)));
  });
}

function addStepToWorkspace(index) {
  const exercise = selectedExercise();
  const step = exercise.steps[index];
  const chunk = `\n\n# BLOQUE ${index + 1}: ${step.title}\n${step.code}`;
  solutionInput.value = `${solutionInput.value}${chunk}`.trimStart();
  analyze();
}

function loadGuidedSolution() {
  const exercise = selectedExercise();
  solutionInput.value = exercise.steps
    .map((step, index) => `# BLOQUE ${index + 1}: ${step.title}\n${step.code}`)
    .join("\n\n");
  analyze();
}

function analyze() {
  const chunks = splitIntoBlocks(solutionInput.value);
  const blocks = chunks.map((chunk, index) => buildVisualBlock(chunk, index));
  renderBlocks(blocks);
  renderFeedback(blocks);
  renderExport(blocks);
}

function splitIntoBlocks(text) {
  const lines = text.split("\n");
  const chunks = [];
  let current = [];

  lines.forEach(line => {
    if (/^#\s*BLOQUE/i.test(line) && current.length) {
      chunks.push(current.join("\n").trim());
      current = [line];
    } else if (line.trim() || current.length) {
      current.push(line);
    }
  });

  if (current.join("\n").trim()) chunks.push(current.join("\n").trim());
  return chunks;
}

function buildVisualBlock(chunk, index) {
  const type = detectType(chunk);
  const info = blockInfo[type] || blockInfo.proceso;
  return {
    number: index + 1,
    type,
    label: info.label,
    help: info.help,
    code: chunk,
    warnings: buildWarnings(chunk)
  };
}

function detectType(text) {
  const normalized = normalize(text);
  const found = patterns.find(pattern => pattern.words.some(word => normalized.includes(normalize(word))));
  return found ? found.type : "proceso";
}

function buildWarnings(chunk) {
  const warnings = [];
  if (chunk.length < 12) warnings.push("Bloque demasiado corto; añade código o comentario.");
  if (/rm -rf|format|delete|del /i.test(chunk)) warnings.push("Acción destructiva: úsala solo en laboratorio y con validación previa.");
  if (!/#|echo|write-output|out-file|>/.test(chunk)) warnings.push("Añade comentario, salida o evidencia para que el bloque sea más comprensible.");
  return warnings;
}

function renderBlocks(blocks) {
  if (!blocks.length) {
    blocksOutput.innerHTML = `<div class="empty-state">Añade bloques desde los pasos o escribe código en el editor.</div>`;
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
        <p class="block-help">${escapeHtml(block.help)}</p>
        <pre class="block-code"><code>${escapeHtml(block.code)}</code></pre>
        ${block.warnings.length ? `<ul class="block-warnings">${block.warnings.map(warning => `<li>${escapeHtml(warning)}</li>`).join("")}</ul>` : ""}
      </div>
    </article>
  `).join("<div class='connector'>↓</div>");
}

function renderFeedback(blocks) {
  const exercise = selectedExercise();
  const expected = exercise.steps.map(step => step.type);
  const found = new Set(blocks.map(block => block.type));
  const missing = expected.filter(type => !found.has(type));
  const warnings = blocks.flatMap(block => block.warnings);

  feedbackOutput.innerHTML = `
    <p class="ok"><strong>Bloques creados:</strong> ${blocks.length}/${exercise.steps.length}</p>
    ${missing.length ? `<p class="missing"><strong>Faltan tipos de bloque:</strong> ${missing.map(labelFor).map(escapeHtml).join(", ")}</p>` : `<p class="ok">La estructura mínima del ejercicio está completa.</p>`}
    ${warnings.length ? `<p class="missing"><strong>Avisos:</strong> ${warnings.length} mejora(s) pendiente(s).</p>` : ""}
    <h3>Consejo</h3>
    <p>${missing.length ? "Usa el botón 'Añadir bloque al script' en los pasos que todavía faltan." : "Ahora prueba el script en un entorno de laboratorio y añade tus evidencias al informe."}</p>
  `;
}

function renderExport(blocks) {
  const exercise = selectedExercise();
  const content = blocks.map(block => `## Bloque ${block.number} - ${block.label}\n\n\`\`\`${exercise.language.toLowerCase()}\n${block.code}\n\`\`\``).join("\n\n");

  exportOutput.textContent = `# Entrega Script-Lab - ${exercise.id}\n\n## Ejercicio\n${exercise.title}\n\n## Escenario\n${exercise.scenario}\n\n## Objetivo\n${exercise.goal}\n\n${content || "Pendiente de construir"}\n\n## Evidencias\n- Pega aquí la salida de la ejecución.\n- Explica errores encontrados.\n- Escribe una conclusión técnica.\n`;
}

function labelFor(type) {
  return blockInfo[type] ? blockInfo[type].label : type;
}

function normalize(value) {
  return String(value).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
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
solutionInput.addEventListener("input", analyze);
exampleBtn.addEventListener("click", loadGuidedSolution);
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

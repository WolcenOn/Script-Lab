# Script-Lab

Laboratorio práctico complementario de la guía **Guía Terminal Linux & Windows**.

Este repositorio sirve para organizar prácticas guiadas de terminal, administración de sistemas y automatización.

Guía principal:

https://wolcenon.github.io/Guia-Terminal-Linux-Windows/

---

## Objetivo

Script-Lab es la zona de práctica de la guía.

Aquí se pueden preparar:

- Laboratorios paso a paso.
- Retos por nivel.
- Plantillas de entrega.
- Informes de prácticas.
- Proyectos finales.
- Dinámicas de feedback con ramas y Pull Requests.
- Prototipos de texto a bloques.

La idea no es que el alumnado solo escriba comandos. La idea es que aprenda a pensar como una persona técnica:

1. Entender el problema.
2. Dividirlo en pasos.
3. Elegir comandos o acciones.
4. Guardar evidencias.
5. Interpretar resultados.
6. Mejorar la solución.

---

## Prototipo de interfaz

Hay un primer prototipo pedagógico en:

[prototype/index.html](prototype/index.html)

También puede abrirse publicado así:

```text
https://wolcenon.github.io/Script-Lab/prototype/?exercise=GT-LAB-04-REDES
```

Permite:

- Seleccionar un ejercicio.
- Leer `?exercise=ID` desde la URL.
- Validar el ID contra una lista blanca.
- Ver escenario, objetivo y criterios mínimos.
- Seguir una guía paso a paso.
- Abrir pistas progresivas.
- Escribir comandos, pseudocódigo o una explicación.
- Detectar bloques didácticos.
- Mostrar criterios cubiertos y pendientes.
- Recibir feedback pedagógico.
- Preparar una entrega básica en Markdown.

Documentación relacionada:

- [Modelo pedagógico de ejercicios](docs/modelo-pedagogico-ejercicios.md)
- [Integración guía y Script-Lab](docs/integracion-guia-script-lab.md)
- [Ramificación y feedback](docs/ramificacion-y-feedback.md)
- [Interfaz texto a bloques](docs/interfaz-texto-bloques.md)
- [Carga segura de ejercicios](docs/carga-segura-ejercicios.md)

---

## Ruta de laboratorios

| Nivel | Laboratorio | Objetivo |
|---|---|---|
| 1 | [Terminal básica](labs/01-terminal-basica/README.md) | Rutas, archivos, redirecciones y búsqueda |
| 2 | [Linux administración](labs/02-linux-administracion/README.md) | Sistema, disco, procesos, servicios y logs |
| 3 | [Windows PowerShell](labs/03-windows-powershell/README.md) | Inventario, procesos, servicios y eventos |
| 4 | [Redes](labs/04-redes/README.md) | IP, gateway, DNS, puertos y diagnóstico |
| 5 | [Backups](labs/05-backups/README.md) | Copias, restauración y verificación |
| 6 | [Scripting](labs/06-scripting/README.md) | Automatización con Bash, PowerShell y Python |
| 7 | [Proyecto final](labs/07-proyecto-final/README.md) | Informe completo de mantenimiento |

---

## Cómo trabajar cada laboratorio

1. Leer el escenario.
2. Entender el objetivo de aprendizaje.
3. Revisar los criterios mínimos.
4. Seguir los pasos guiados.
5. Intentar una primera solución sin mirar la solución final.
6. Usar pistas progresivas si aparece un bloqueo.
7. Generar feedback.
8. Completar evidencias.
9. Redactar una conclusión.
10. Crear una rama de trabajo.
11. Abrir Pull Request para feedback.
12. Aplicar mejoras.

---

## Estructura de entregas

```text
entregas/
└── alumno/
    ├── lab-01-terminal/
    │   └── informe.md
    └── lab-07-proyecto-final/
        └── informe-final.md
```

---

## Relación con la guía

La guía explica los conceptos. Script-Lab organiza la práctica, el feedback y la evolución hacia ejercicios interactivos.

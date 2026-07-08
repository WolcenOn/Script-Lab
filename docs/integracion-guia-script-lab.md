# Integración profunda entre la guía y Script-Lab

## Objetivo

Conectar cada ejercicio de la guía con una práctica realizable en Script-Lab.

La guía explica y orienta. Script-Lab ejecuta la dinámica de práctica:

```text
Tema de la guía -> Ejercicio propuesto -> Lab en Script-Lab -> Rama de trabajo -> Entrega -> Feedback -> Mejora
```

---

## Modelo de integración

Cada ejercicio debe tener un identificador único.

Ejemplo:

```text
GT-LAB-01-TERMINAL
GT-LAB-02-LINUX
GT-LAB-03-WINDOWS
GT-LAB-04-REDES
GT-LAB-05-BACKUPS
GT-LAB-06-SCRIPTING
GT-LAB-07-PROYECTO
```

Ese identificador debe aparecer en:

- La página de la guía.
- El laboratorio de Script-Lab.
- El nombre de la rama de trabajo.
- El informe entregado.
- La rúbrica de feedback.

---

## Flujo del alumnado

1. Entra en la guía.
2. Abre un ejercicio propuesto.
3. Pulsa el enlace a Script-Lab.
4. Crea una rama con el identificador del ejercicio.
5. Realiza la práctica.
6. Guarda informe y evidencias.
7. Abre una Pull Request.
8. Recibe feedback.
9. Corrige y mejora.
10. Cierra el ejercicio.

---

## Nombres de ramas

Formato recomendado:

```text
lab/<id-ejercicio>/<nombre-alumno>
```

Ejemplos:

```text
lab/gt-lab-01-terminal/ana
lab/gt-lab-04-redes/carlos
lab/gt-lab-07-proyecto/maria
```

---

## Estructura de entrega

```text
entregas/
└── nombre-alumno/
    └── gt-lab-01-terminal/
        ├── informe.md
        ├── evidencias.md
        └── mejoras.md
```

---

## Tipos de feedback

| Tipo | Qué revisa |
|---|---|
| Conceptual | Comprensión del problema |
| Técnico | Uso correcto de comandos o bloques |
| Procedimental | Orden de diagnóstico |
| Documental | Claridad del informe |
| Mejora | Propuesta de automatización o ampliación |

---

## Estados del ejercicio

| Estado | Significado |
|---|---|
| Propuesto | El ejercicio está disponible |
| En progreso | El alumnado está trabajando en una rama |
| En revisión | Hay una Pull Request abierta |
| Con feedback | Se han indicado mejoras |
| Completado | La práctica cumple los criterios mínimos |
| Ampliado | El alumnado ha añadido una mejora propia |

---

## Requisitos para considerar un ejercicio completado

- Informe entregado.
- Evidencias suficientes.
- Respuestas razonadas.
- Checklist completado.
- Correcciones aplicadas si hubo feedback.
- Conclusión final.

---

## Relación con la interfaz

La interfaz de Script-Lab debe permitir:

- Seleccionar ejercicio.
- Ver enunciado.
- Escribir comandos o pseudocódigo.
- Generar bloques visuales.
- Comparar con criterios del ejercicio.
- Mostrar feedback inmediato.
- Exportar informe.
- Preparar entrega para GitHub.

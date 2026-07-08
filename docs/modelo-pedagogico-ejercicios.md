# Modelo pedagógico para ejercicios de Script-Lab

Script-Lab no debe funcionar solo como una herramienta de construcción. Debe actuar como un acompañante de práctica: explica el contexto, propone pasos, ofrece ayuda graduada y guía la entrega.

---

## Problema detectado

Un ejercicio poco claro suele tener esta forma:

1. Dice qué hay que hacer.
2. Muestra una lista de tareas.
3. Da una solución orientativa.
4. Pide una entrega.

Eso sirve para alumnado con autonomía, pero no ayuda lo suficiente cuando alguien está aprendiendo.

---

## Estructura recomendada

Cada ejercicio debería tener estos bloques:

| Bloque | Función pedagógica |
|---|---|
| Escenario | Explica la situación real o simulada. |
| Objetivo | Dice qué se aprende, no solo qué se entrega. |
| Pasos guiados | Divide la práctica en acciones pequeñas. |
| Pistas progresivas | Ayuda sin dar la solución completa al principio. |
| Criterios mínimos | Indica qué elementos debe contener la respuesta. |
| Evidencias | Define qué capturas, salidas o explicaciones se entregan. |
| Feedback | Señala qué falta y qué mejorar. |
| Conclusión | Obliga a interpretar, no solo a ejecutar comandos. |

---

## Plantilla de ejercicio guiado

```md
# Lab XX - Nombre del laboratorio

## Escenario

Describe una situación concreta: un equipo que falla, una carpeta que hay que proteger, una red que no responde o una tarea repetitiva que debe automatizarse.

## Objetivo de aprendizaje

Al terminar este laboratorio deberías saber:

- Concepto 1.
- Concepto 2.
- Acción práctica 1.
- Acción práctica 2.

## Antes de empezar

Responde brevemente:

1. ¿Qué crees que hay que comprobar primero?
2. ¿Qué evidencia demostraría que la práctica funciona?
3. ¿Qué riesgo hay si se ejecutan comandos sin entenderlos?

## Pasos guiados

### Paso 1 - Comprender el problema

Explica con tus palabras qué vas a resolver.

### Paso 2 - Preparar el entorno

Crea o identifica el entorno de pruebas.

### Paso 3 - Ejecutar la comprobación principal

Realiza la acción técnica principal.

### Paso 4 - Guardar evidencias

Guarda la salida, captura o resumen que demuestre el resultado.

### Paso 5 - Interpretar

Explica qué significa el resultado obtenido.

## Pistas progresivas

### Pista 1

Piensa en el objetivo antes de buscar el comando.

### Pista 2

Divide la tarea en entrada, proceso, salida y verificación.

### Pista 3

Consulta la guía principal si no recuerdas el comando exacto.

## Criterios mínimos

- [ ] Se entiende el objetivo.
- [ ] Hay pasos ordenados.
- [ ] Hay comandos o acciones concretas.
- [ ] Hay evidencias.
- [ ] Hay conclusión.

## Entrega

Completa un informe con:

- Objetivo.
- Pasos realizados.
- Comandos o acciones usadas.
- Evidencias.
- Problemas encontrados.
- Conclusión.
```

---

## Niveles de ayuda

Script-Lab debería evitar dar la solución completa desde el primer momento.

### Nivel 1 - Orientación

Pregunta o pista conceptual.

Ejemplo: "¿Has identificado primero la IP local?"

### Nivel 2 - Recordatorio

Señala qué bloque falta.

Ejemplo: "Tu solución habla de DNS, pero todavía no incluye gateway."

### Nivel 3 - Estructura

Propone una secuencia.

Ejemplo: "Orden recomendado: IP local, gateway, DNS, puerto y conclusión."

### Nivel 4 - Ejemplo parcial

Muestra un ejemplo incompleto que el alumnado debe adaptar.

### Nivel 5 - Solución orientativa

Solo debería usarse al final, después del intento propio.

---

## Criterio de calidad

Un ejercicio está bien diseñado cuando una persona puede responder:

1. Qué problema simula.
2. Qué aprende.
3. Qué pasos debe seguir.
4. Qué puede consultar si se atasca.
5. Qué debe entregar.
6. Cómo sabe si su solución es suficiente.

---

## Aplicación en el prototipo

El prototipo de `prototype/` ya incorpora esta idea:

- Escenario del laboratorio.
- Objetivo de aprendizaje.
- Pasos guiados.
- Pistas desplegables.
- Criterios mínimos detectables.
- Feedback de elementos cubiertos y pendientes.
- Entrega sugerida en Markdown.

El siguiente paso natural es separar los datos de los ejercicios en archivos propios para que el profesorado pueda editar laboratorios sin tocar la lógica de la interfaz.

# Interfaz texto a bloques

## Objetivo

Diseñar una interfaz en la que el alumnado pueda escribir comandos, pseudocódigo o una explicación breve, y Script-Lab genere bloques visuales equivalentes.

---

## Idea principal

```text
Texto escrito -> Parser didáctico -> Bloques visuales -> Feedback -> Exportación
```

La interfaz no debe limitarse a generar código. Debe ayudar a entender la estructura de una solución.

---

## Zonas de la interfaz

| Zona | Función |
|---|---|
| Selector de ejercicio | Carga el enunciado, criterios y checklist |
| Enunciado | Muestra qué hay que resolver |
| Editor de texto | Permite escribir comandos, pseudocódigo o explicación |
| Vista de bloques | Representa cada acción como bloque visual |
| Panel de feedback | Indica qué falta, qué sobra y qué mejorar |
| Exportación | Genera informe, pseudocódigo o código base |

---

## Tipos de entrada

### 1. Lenguaje natural

```text
Crear una carpeta, entrar en ella, crear tres archivos y listar el contenido.
```

### 2. Pseudocódigo

```text
crear carpeta laboratorio
entrar en laboratorio
crear archivo uno.txt
listar archivos
```

### 3. Comandos

```bash
mkdir laboratorio
cd laboratorio
touch uno.txt
ls -lah
```

---

## Tipos de bloques

| Bloque | Ejemplos detectables |
|---|---|
| Archivo | crear archivo, listar, copiar, mover |
| Carpeta | crear carpeta, entrar, cambiar ruta |
| Red | comprobar IP, probar conectividad, DNS, puerto |
| Sistema | ver equipo, usuario, fecha, versión |
| Proceso | listar procesos, ordenar, filtrar |
| Servicio | ver estado, listar servicios |
| Backup | crear copia, verificar, restaurar |
| Salida | mostrar, guardar, exportar |
| Control | si falla, repetir, comprobar |

---

## Feedback inmediato

La interfaz debe comparar la solución con los criterios del ejercicio.

Ejemplo:

```text
Ejercicio: Diagnóstico de red
Criterios: IP, gateway, DNS, puerto, conclusión
```

Si el alumno escribe solo:

```text
ping 8.8.8.8
```

Feedback:

```text
Bien: compruebas conectividad externa.
Falta: revisar IP local, ruta/gateway, DNS, puerto y conclusión.
```

---

## Niveles de feedback

| Nivel | Feedback |
|---|---|
| Básico | Indica si falta una parte |
| Medio | Sugiere el siguiente paso |
| Avanzado | Explica por qué ese paso importa |
| Evaluación | Relaciona la solución con la rúbrica |

---

## Exportaciones deseables

- Informe Markdown.
- Pseudocódigo.
- Código base.
- Checklist completado.
- Resumen para Pull Request.
- Nombre de rama sugerido.

---

## Primera versión viable

La primera versión puede hacer algo sencillo:

1. Cargar ejercicios desde `data/exercises.json`.
2. Leer texto del usuario.
3. Detectar palabras clave.
4. Generar bloques visuales simples.
5. Mostrar criterios cumplidos y pendientes.
6. Preparar un informe básico.

---

## Evolución futura

- Integración completa con Blockly.
- Guardado de progreso.
- Modo docente.
- Modo alumnado.
- Feedback por Pull Request.
- Generación de bloques desde código.
- Generación de código desde bloques.

# Lab 05 - Backups

## Objetivo

Practicar el ciclo completo de una copia de seguridad en un entorno de pruebas:

1. Preparar datos.
2. Crear copia.
3. Verificar copia.
4. Restaurar copia.
5. Documentar resultados.

---

## Relación con la guía

Consulta antes:

- Backups y almacenamiento.
- Búsqueda rápida de comandos.
- Proyecto final de mantenimiento.

---

## Escenario

Tienes una carpeta de trabajo con varios archivos de prueba. Debes preparar una copia, comprobar que se ha generado correctamente y restaurarla en otra ubicación de laboratorio.

---

## Tareas

### Tarea 1: preparar carpeta origen

Crea una carpeta llamada `origen` con varios archivos de texto de prueba.

### Tarea 2: preparar carpeta destino

Crea una carpeta llamada `backups` para guardar la copia.

### Tarea 3: generar copia

Realiza una copia comprimida o una copia completa de la carpeta `origen`.

### Tarea 4: verificar

Comprueba:

- Que la copia existe.
- Que tiene tamaño coherente.
- Que contiene los archivos esperados.

### Tarea 5: restaurar

Restaura la copia en una carpeta llamada `restaurado`.

### Tarea 6: informe

Crea `informe-backup.md` con:

- Fecha.
- Carpeta origen.
- Carpeta destino.
- Método usado.
- Verificación realizada.
- Resultado de la restauración.
- Problemas encontrados.

---

## Preguntas

1. ¿Qué diferencia hay entre crear copia y verificar copia?
2. ¿Por qué una copia sin restauración de prueba no es suficiente?
3. ¿Qué datos incluirías en un informe profesional de backup?
4. ¿Qué harías si el destino no tiene espacio suficiente?
5. ¿Qué política de retención aplicarías en un entorno real?

---

## Checklist

- [ ] He creado datos de prueba.
- [ ] He creado una copia.
- [ ] He comprobado que la copia existe.
- [ ] He revisado el contenido de la copia.
- [ ] He restaurado en otra carpeta.
- [ ] He documentado el procedimiento.

---

## Ampliación

Convierte este laboratorio en un procedimiento reutilizable:

- Añade fecha al nombre de la copia.
- Añade verificación posterior.
- Añade informe final.
- Añade una propuesta de retención.

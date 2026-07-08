# Lab 01 - Terminal básica

## Objetivo

Practicar navegación, creación de archivos, listado, búsqueda de texto y redirección de salida.

---

## Relación con la guía

Consulta antes:

- Terminal y comandos.
- Búsqueda rápida de comandos.
- Actividades interactivas.

---

## Tareas

### Tarea 1: preparar carpeta de trabajo

Crea una carpeta llamada `laboratorio-terminal` y entra en ella.

### Tarea 2: crear archivos

Crea tres archivos de texto:

- `uno.txt`
- `dos.txt`
- `tres.txt`

### Tarea 3: listar contenido

Muestra el contenido de la carpeta y guarda el resultado en `listado.txt`.

### Tarea 4: buscar texto

Busca la palabra `uno` dentro de `listado.txt`.

### Tarea 5: documentar

Crea un archivo `informe.md` con:

- Objetivo.
- Comandos usados.
- Resultado obtenido.
- Problemas encontrados.

---

## Solución orientativa Linux

```bash
mkdir laboratorio-terminal
cd laboratorio-terminal
touch uno.txt dos.txt tres.txt
ls -lah > listado.txt
grep "uno" listado.txt
```

---

## Solución orientativa PowerShell

```powershell
New-Item laboratorio-terminal -ItemType Directory
Set-Location laboratorio-terminal
New-Item uno.txt, dos.txt, tres.txt -ItemType File
Get-ChildItem > listado.txt
Select-String "uno" listado.txt
```

---

## Preguntas

1. ¿Qué diferencia hay entre ruta absoluta y relativa?
2. ¿Qué hace la redirección `>`?
3. ¿Qué comando usarías para consultar ayuda?
4. ¿Qué cambiarías si quisieras guardar el listado sin borrar el contenido anterior?

---

## Checklist

- [ ] He creado la carpeta.
- [ ] He creado los archivos.
- [ ] He generado `listado.txt`.
- [ ] He buscado texto dentro del archivo.
- [ ] He creado `informe.md`.
- [ ] Entiendo cada comando usado.

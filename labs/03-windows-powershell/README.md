# Lab 03 - Windows PowerShell

## Objetivo

Crear un inventario básico de un equipo Windows y revisar procesos, servicios, disco, red y eventos.

---

## Relación con la guía

Consulta antes:

- Windows CMD y PowerShell.
- Búsqueda rápida de comandos.
- Casos prácticos guiados.

---

## Tareas

### Tarea 1: información general

Obtén:

- Nombre del equipo.
- Usuario actual.
- Sistema operativo.
- Fecha y hora.

### Tarea 2: procesos y servicios

Revisa:

- Procesos con mayor consumo.
- Servicios que no estén en ejecución.

### Tarea 3: disco y red

Revisa:

- Unidades disponibles.
- IP local.
- Rutas.

### Tarea 4: eventos

Consulta errores recientes del registro de sistema.

### Tarea 5: informe

Genera `informe-windows.txt` o `informe-windows.md`.

---

## Comandos orientativos

```powershell
Get-ComputerInfo
Get-Date
whoami
Get-Process | Sort-Object CPU -Descending | Select-Object -First 10
Get-Service | Where-Object {$_.Status -ne "Running"}
Get-PSDrive
Get-NetIPAddress
Get-NetRoute
Get-EventLog -LogName System -EntryType Error -Newest 20
```

---

## Bloque orientativo de informe

```powershell
$salida = "informe-windows.txt"
"# Informe Windows" | Out-File $salida
"Equipo: $env:COMPUTERNAME" | Out-File $salida -Append
"Usuario: $env:USERNAME" | Out-File $salida -Append
Get-Date | Out-File $salida -Append
Get-PSDrive | Out-File $salida -Append
Get-Service | Where-Object {$_.Status -ne "Running"} | Out-File $salida -Append
```

---

## Preguntas

1. ¿Qué procesos consumen más CPU?
2. ¿Qué servicios aparecen detenidos?
3. ¿Hay errores recientes importantes?
4. ¿Qué información incluirías en un inventario profesional?

---

## Checklist

- [ ] He obtenido información general.
- [ ] He revisado procesos.
- [ ] He revisado servicios.
- [ ] He revisado disco.
- [ ] He revisado red.
- [ ] He revisado eventos.
- [ ] He generado informe.

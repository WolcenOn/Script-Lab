# Lab 02 - Linux administración

## Objetivo

Realizar una revisión inicial de un sistema Linux: sistema, memoria, disco, procesos, servicios, red y logs.

---

## Relación con la guía

Consulta antes:

- Linux administración.
- Procesos, servicios y logs.
- Monitorización.
- Búsqueda rápida de comandos.

---

## Tareas

### Tarea 1: información general

Obtén:

- Nombre del equipo.
- Usuario actual.
- Versión del sistema.
- Tiempo encendido.

### Tarea 2: recursos

Revisa:

- Memoria.
- Disco.
- Procesos con mayor consumo.

### Tarea 3: servicios y logs

Comprueba:

- Servicios fallidos.
- Errores recientes.

### Tarea 4: red

Comprueba:

- IP local.
- Ruta por defecto.
- Puertos en escucha.

### Tarea 5: informe

Genera `informe-linux.md` con los resultados.

---

## Comandos orientativos

```bash
hostnamectl
whoami
uptime
free -h
df -h
ps aux --sort=-%cpu | head
systemctl --failed
journalctl -p err -n 30 --no-pager
ip a
ip route
ss -tulnp
```

---

## Plantilla de informe

```md
# Informe Linux

## Sistema

## Recursos

## Servicios

## Logs

## Red

## Conclusiones
```

---

## Preguntas

1. ¿Qué recurso parece más cargado?
2. ¿Hay servicios fallidos?
3. ¿Hay errores recientes relevantes?
4. ¿Qué puerto o servicio aparece escuchando?
5. ¿Qué recomendarías revisar después?

---

## Checklist

- [ ] He identificado el sistema.
- [ ] He revisado memoria y disco.
- [ ] He revisado procesos.
- [ ] He revisado servicios.
- [ ] He revisado logs.
- [ ] He revisado red.
- [ ] He escrito conclusiones.

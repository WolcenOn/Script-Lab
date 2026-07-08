# Lab 04 - Redes

## Objetivo

Diagnosticar conectividad siguiendo un método por capas: IP local, gateway, DNS, puerto y servicio.

---

## Relación con la guía

Consulta antes:

- Redes y servicios.
- Búsqueda rápida de comandos.
- Casos prácticos guiados.

---

## Tareas

### Tarea 1: configuración IP

Obtén la IP local, máscara y gateway.

### Tarea 2: conectividad externa

Comprueba conectividad contra una IP externa.

### Tarea 3: DNS

Comprueba resolución de nombres.

### Tarea 4: puerto

Comprueba si un puerto web responde.

### Tarea 5: diagnóstico

Escribe una conclusión indicando dónde estaría el problema si cada paso falla.

---

## Comandos orientativos Linux

```bash
ip a
ip route
ping -c 4 8.8.8.8
nslookup example.com
curl -I https://example.com
ss -tulnp
```

---

## Comandos orientativos PowerShell

```powershell
Get-NetIPAddress
Get-NetRoute
Test-Connection 8.8.8.8
Resolve-DnsName example.com
Test-NetConnection example.com -Port 443
Get-NetTCPConnection
```

---

## Tabla de diagnóstico

| Resultado | Posible causa |
|---|---|
| No hay IP válida | Configuración de red o DHCP |
| Hay IP pero no gateway | Configuración de ruta |
| Responde IP externa pero no dominio | DNS |
| DNS funciona pero puerto no responde | Servicio, firewall o destino |
| Todo responde | Conectividad básica correcta |

---

## Preguntas

1. ¿Cuál es tu IP local?
2. ¿Cuál es tu gateway?
3. ¿Funciona la resolución DNS?
4. ¿Responde el puerto 443?
5. ¿Qué capa fallaría si solo falla el nombre de dominio?

---

## Checklist

- [ ] He identificado IP local.
- [ ] He identificado gateway.
- [ ] He probado conectividad externa.
- [ ] He probado DNS.
- [ ] He probado puerto.
- [ ] He escrito diagnóstico.

# Carga segura de ejercicios por URL

## Objetivo

Permitir que la guía abra Script-Lab directamente en un ejercicio concreto sin aceptar rutas arbitrarias ni contenido externo no controlado.

---

## Formato de llamada

Script-Lab acepta estos parámetros equivalentes:

```text
?exercise=GT-LAB-04-REDES
?exercise_id=GT-LAB-04-REDES
?id=GT-LAB-04-REDES
```

Formato recomendado:

```text
https://wolcenon.github.io/Script-Lab/?exercise=GT-LAB-04-REDES
```

---

## Validación

La carga debe cumplir dos condiciones:

1. El identificador debe tener formato válido.
2. El identificador debe existir en la lista blanca de ejercicios.

Formato permitido:

```text
GT-LAB-00-NOMBRE
```

Ejemplos válidos:

```text
GT-LAB-01-TERMINAL
GT-LAB-04-REDES
GT-LAB-07-PROYECTO
```

Ejemplos rechazados:

```text
../../otro-archivo
https://sitio-externo/ejercicio.json
<script>alert(1)</script>
LAB-REDES
```

---

## Lista blanca

El prototipo solo carga ejercicios definidos dentro de la aplicación.

En la evolución posterior, la lista blanca debe cargarse desde:

```text
data/exercises.json
```

pero manteniendo estas reglas:

- No aceptar rutas recibidas por URL.
- No cargar archivos remotos indicados por el usuario.
- No insertar HTML recibido por parámetro.
- Escapar siempre valores mostrados en pantalla.
- Si el ID no existe, cargar un ejercicio por defecto y mostrar aviso.

---

## Comportamiento esperado

| Caso | Resultado |
|---|---|
| ID válido y existente | Carga el ejercicio solicitado |
| ID con formato inválido | Se ignora y carga ejercicio por defecto |
| ID válido pero no existente | Muestra aviso y carga ejercicio por defecto |
| Sin parámetro | Carga primer ejercicio disponible |

---

## Enlace desde la guía

Cada ejercicio de la guía debe enlazar a Script-Lab así:

```md
[Realizar en Script-Lab](https://wolcenon.github.io/Script-Lab/?exercise=GT-LAB-04-REDES)
```

---

## Siguiente mejora

- Cargar `data/exercises.json` desde la propia aplicación.
- Mantener validación por ID.
- Añadir vista de enunciado completo.
- Añadir progreso del ejercicio.
- Añadir exportación de entrega.

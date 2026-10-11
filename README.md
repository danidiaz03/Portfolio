# Portfolio — Daniel Díaz

Portfolio personal de **Daniel Díaz**, desarrollador Full Stack (Madrid).

Sitio estático de una sola página, con estética limpia estilo Apple, sin build.
Bilingüe ES/EN. El diseño viene de Claude Design y se renderiza con su runtime
(`dc-runtime` + React), todo servido en local.

## Características

- Hero con nombre animado, frase rotatoria y piezas 3D de tecnologías que se
  pueden arrastrar y girar.
- Bento con terminal interactiva (`whoami`, `experiencia`, `stack`…), reloj de
  Madrid, stack diario y formación.
- Capacidades por capa con panel fijo, sección "Más allá del código" con lectura
  palabra a palabra, experiencia filtrable por tecnología y habilidades enlazadas.
- Proyectos en carril horizontal fijado al scroll (GSAP + ScrollTrigger) con modal.
- Cambio de idioma **ES / EN** guardado en `localStorage` (`ddq-lang`).
- Respeta `prefers-reduced-motion`; sin JavaScript se muestra un resumen básico.

## Estructura

```
.
├── index.html               # head (SEO, GA4) + plantilla y lógica del diseño
├── assets/
│   ├── vendor/              # dc-runtime, React, ReactDOM, GSAP, ScrollTrigger, Matter.js
│   ├── icons/               # iconos de tecnologías (devicon) en SVG
│   ├── css/consent.css      # banner de cookies
│   ├── js/consent.js        # lógica del banner (Consent Mode v2)
│   └── og-image.png
├── README.md
└── LICENSE
```

Los textos (ES/EN) están en la constante `T`, la experiencia en `EXP`, los
proyectos en `PROJ` y las habilidades en `SKILLS`, dentro del `<script type="text/x-dc">`
de [index.html](index.html). `window.__resources` (en el `<head>`) mapea cada
librería e icono a su fichero local.

## Proyectos

| Proyecto | Stack | Estado |
|----------|-------|--------|
| Clínica Veterinaria | C# · ASP.NET · SQLite | [repo](https://github.com/danidiaz03/Clinica-veterinaria) · [sitio](https://clinicaveterinaria.danieldiaz.es) |
| Dapokedex | Angular · Firebase · PokéAPI | [repo](https://github.com/danidiaz03/Dapokedex) · [sitio](https://dapokedex.danieldiaz.es) |
| ScanPass | Angular · Symfony · API REST | Próximamente |
| FinanceFlow | Angular · Symfony · MySQL | Próximamente |
| Análisis de precios | Java · SQL | Interno |
| Automatización de tareas | Python | Interno |

## Analítica

Usa **Google Analytics 4** (`G-1F10QYZC49`) con Consent Mode v2 y un banner de
cookies (RGPD): el seguimiento queda denegado hasta que el usuario acepta.
El Measurement ID se configura en el `<head>` de [index.html](index.html).

## Estado de los proyectos

Cada entrada de `PROJ` admite:

- **Publicado**: `repo` y/o `site` → badge "Repo público" y botones en el modal.
- **Próximamente**: `soon: true` → badge "Próximamente", sin enlaces.
- **Interno**: `internal: true` → badge "Interno" y nota de herramienta interna.

Para publicar un proyecto, quita `soon: true` y añade `repo`/`site`.

## Desarrollo local

No necesita instalación. Sirve la carpeta con cualquier servidor estático:

```bash
python3 -m http.server 8080
# abre http://localhost:8080
```

> Se usa un servidor (en lugar de abrir el archivo directamente) para que las
> librerías e iconos de `assets/` se carguen correctamente.

## Contacto

- Email: danieldiazq2003@gmail.com
- LinkedIn: [danieldiazq](https://www.linkedin.com/in/danieldiazq/)
- GitHub: [danidiaz03](https://github.com/danidiaz03)

## Licencia

Todos los derechos reservados. Código publicado solo para consulta; no se permite
su reutilización sin permiso. Ver [LICENSE](LICENSE).

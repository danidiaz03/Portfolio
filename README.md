# Portfolio — Daniel Díaz

Portfolio personal de **Daniel Díaz**, desarrollador Full Stack (Madrid).

Sitio estático de una sola página, con estética editorial, construido con
**HTML, CSS y JavaScript** puro (sin frameworks ni build). Bilingüe ES/EN.

## Características

- Diseño editorial responsive (crema / azul / tinta, tipografías Syne + Space Grotesk).
- Cambio de idioma **ES / EN** con preferencia guardada en `localStorage`.
- Animaciones con GSAP + ScrollTrigger como mejora progresiva: reveals al hacer
  scroll, hero reactivo al cursor, frase que se teclea sola, scroll horizontal
  fijado en proyectos, contadores, tilt de tarjetas, botones magnéticos y cursor propio.
- Accesible: respeta `prefers-reduced-motion` y el contenido es legible sin JavaScript.

## Estructura

```
.
├── index.html              # marcado de todas las secciones
├── assets/
│   ├── css/
│   │   ├── base.css         # design tokens, reset y tipografía
│   │   ├── layout.css       # nav, hero, secciones y footer
│   │   └── components.css   # botones, tarjetas, modal, marquee, mosaicos…
│   └── js/
│       ├── config.js        # diccionario de traducción ES/EN
│       ├── ui.js            # reloj, menú móvil, volver arriba, typewriter
│       ├── i18n.js          # cambio de idioma
│       ├── projects.js      # modal de proyecto
│       ├── animations.js    # animaciones con GSAP
│       └── main.js          # punto de entrada
├── README.md
└── LICENSE
```

## Proyectos

| Proyecto | Stack | Enlaces |
|----------|-------|---------|
| Clínica Veterinaria | .NET · C# · SQLite | [repo](https://github.com/danidiaz03/Clinica-veterinaria) · [sitio](https://clinicaveterinaria.danieldiaz.es) |
| ScanPass | Angular · Symfony · API REST | [repo](https://github.com/danidiaz03/Scanpass) |
| FinanceFlow | Angular · Symfony · MySQL | [repo](https://github.com/danidiaz03/financeflow) |
| Dapokedex | Angular · Firebase · PokéAPI | [repo](https://github.com/danidiaz03/Dapokedex) |

## Analítica

Usa **Google Analytics 4** (`G-1F10QYZC49`) con Consent Mode v2 y un banner de
cookies (RGPD): el seguimiento queda denegado hasta que el usuario acepta.
El Measurement ID se configura en el `<head>` de [index.html](index.html).

## Estado de los proyectos

Cada tarjeta de la sección Proyectos ([index.html](index.html)) tiene un estado:

- **Publicado**: sin badge. Enlaces vía atributos `data-site`, `data-repo`
  y/o `data-post` (enlace al post/caso detallado del proyecto).
- **Próximamente**: atributo `data-soon` (badge "Próximamente").
- **Próximamente con fecha**: además `data-countdown="YYYY-MM-DDTHH:MM:SS+02:00"`
  muestra una **cuenta atrás** en la tarjeta, y `data-date="…"` la fecha legible
  en el modal.

Para publicar un proyecto (p. ej. Dapokedex): quita `data-soon`, `data-countdown`
y `data-date` de su `<a class="card">` y rellena `data-post` con el enlace al
post del proyecto (y `data-site`/`data-repo` si aplica). El modal mostrará los
botones automáticamente.

## Desarrollo local

No necesita instalación. Sirve la carpeta con cualquier servidor estático:

```bash
python3 -m http.server 8080
# abre http://localhost:8080
```

> Se usa un servidor (en lugar de abrir el archivo directamente) porque el JS
> se carga como módulos ES.

## Contacto

- Email: danieldiazq2003@gmail.com
- LinkedIn: [danieldiazq](https://www.linkedin.com/in/danieldiazq/)
- GitHub: [danidiaz03](https://github.com/danidiaz03)

## Licencia

Todos los derechos reservados. Código publicado solo para consulta; no se permite
su reutilización sin permiso. Ver [LICENSE](LICENSE).

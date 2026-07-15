// Diccionario de traducción ES → EN. La clave es el texto tal cual aparece
// en el HTML (en español); el valor, su equivalente en inglés.

export const TRANSLATIONS = {
  // Nav / menú
  'Manifiesto': 'Manifesto',
  'Trayectoria': 'Career',
  'Proyectos': 'Projects',
  'Hablamos →': 'Let’s talk →',

  // Hero
  'Desarrollador Full Stack': 'Full Stack Developer',
  'Construyo. Migro. Aseguro. Automatizo.': 'I build. I migrate. I secure. I automate.',
  'Disponible para proyectos': 'Available for projects',
  'Lo que hago': 'What I do',
  'Rol': 'Role',
  'Modalidad': 'Work mode',
  'Remoto / híbrido': 'Remote / hybrid',
  'Formación': 'Education',
  'Grado Superior DAW': 'Higher Diploma in Web Dev',
  'Idiomas': 'Languages',
  'Ver proyectos ↓': 'See projects ↓',
  'Contactar': 'Get in touch',

  // Marquee (fila secundaria)
  'Desarrollo full stack': 'Full stack development',
  'Infraestructura & seguridad': 'Infrastructure & security',
  'Automatización': 'Automation',

  // Manifiesto
  '01 / Manifiesto': '01 / Manifesto',
  'El código bonito que no aguanta producción': 'Beautiful code that can’t survive production',
  'no es bonito.': 'isn’t beautiful.',
  'Trabajo con tiendas que facturan cada día, así que mi código no vive en un laboratorio: aguanta picos, migraciones y ataques. Migro PrestaShop entre servidores sin que el cliente lo note, escribo módulos PHP a medida, levanto APIs con Symfony y dejo a Cloudflare frenando DDoS. Antes, en McDonald\'s, lideraba turnos de 20 personas mientras me construía las herramientas internas que nadie pidió pero todos acabaron usando.': 'I work with stores that bill every single day, so my code doesn\'t live in a lab: it survives spikes, migrations and attacks. I migrate PrestaShop between servers without the client noticing, write custom PHP modules, build APIs with Symfony and let Cloudflare block DDoS. Earlier, at McDonald\'s, I led shifts of 20 people while building myself the internal tools nobody asked for but everyone ended up using.',
  'uptime en migraciones': 'uptime on migrations',
  '/semana automatizadas': '/week automated',
  'personas usando mis tools': 'people using my tools',

  // Trayectoria
  '02 / Trayectoria': '02 / Career',
  '2025 → hoy': '2025 → now',
  'Desarrollador Web': 'Web Developer',
  'Desarrollo e-commerce y webs corporativas de principio a fin: módulos y temas a medida para PrestaShop (PHP + Smarty), sitios WordPress con Elementor, servidores Linux y seguridad con Cloudflare. También el lado de crecimiento: SEO on-page, feeds de Google Merchant, campañas de Ads y medición con GA4. Ágil con Jira y Confluence.': 'I build end-to-end e-commerce and corporate websites: custom PrestaShop modules and themes (PHP + Smarty), WordPress sites with Elementor, Linux servers and security with Cloudflare. Also the growth side: on-page SEO, Google Merchant feeds, Ads campaigns and measurement with GA4. Agile with Jira and Confluence.',
  'Encargado de turno + dev de soluciones internas': 'Shift manager + internal-tools developer',
  'Liderar a 20 personas en hora punta enseña más de gestión de incidencias que cualquier curso. Mientras: app Java de análisis de precios y automatización Python que eliminó +10 horas semanales de trabajo manual llegando a 500+ empleados.': 'Leading 20 people at rush hour teaches more about incident handling than any course. Meanwhile: a Java price-analysis app and Python automation that cut +10 hours of manual work per week, reaching 500+ employees.',
  'Desarrollo de Aplicaciones Web. La teoría, para tenerla; la práctica ya la traía de trabajar en real.': 'Web Application Development. Theory just to have it; the hands-on I already brought from working for real.',

  // Proyectos
  '03 / Proyectos': '03 / Projects',
  'Cosas que existen': 'Things that exist',
  'Pulsa una tarjeta para ver los detalles.': 'Tap a card to see the details.',
  'Ver detalles ↗': 'View details ↗',
  'Próximamente': 'Coming soon',
  'Aplicación de gestión para una clínica veterinaria: pacientes, citas e historial clínico.': 'Management app for a veterinary clinic: patients, appointments and medical history.',
  'Aplicación de escaneo con frontend en Angular y API en Symfony.': 'Scanning app with an Angular frontend and a Symfony API.',
  'Gestión de finanzas personales: ingresos, gastos y balances en tiempo real.': 'Personal finance management: income, expenses and balances in real time.',
  'Pokédex interactiva construida con Angular y Firebase que consume la PokéAPI.': 'Interactive Pokédex built with Angular and Firebase, consuming the PokéAPI.',

  // Modal
  'Proyecto': 'Project',
  'Ver repositorio ↗': 'View repository ↗',
  'Ver sitio ↗': 'View site ↗',
  'Ver el caso ↗': 'Read the case study ↗',

  // Stack
  '04 / Stack': '04 / Stack',
  'Con qué': 'What I',
  'construyo': 'build with',
  'Cada mosaico, una herramienta que uso en producción. Pasa el ratón.': 'Each tile, a tool I use in production. Hover over one.',
  'Lenguajes': 'Languages',
  'Backend & Datos': 'Backend & Data',
  'Infra & Herramientas': 'Infra & Tools',

  // Contacto
  '05 / Hablamos': '05 / Let’s talk',
  '¿Tienes un': 'Got a',
  'proyecto': 'project',

  // Footer
  'Volver arriba': 'Back to top',

  // Consentimiento de cookies
  'Uso cookies de analítica (Google Analytics) para entender cómo se navega el sitio. ¿Las aceptas?': 'I use analytics cookies (Google Analytics) to understand how the site is used. Do you accept?',
  'Rechazar': 'Decline',
  'Aceptar': 'Accept'
};

// La frase del hero se teclea sola, así que se guarda su HTML por idioma.
export const HERO_PHRASE = {
  es: 'Construyo tiendas que <span class="text-ink">no se caen</span>, migro servidores sin drama y automatizo lo aburrido.',
  en: 'I build online stores that <span class="text-ink">don’t go down</span>, migrate servers without drama and automate the boring stuff.'
};

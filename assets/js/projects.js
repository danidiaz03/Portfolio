// Modal de proyecto: al pulsar una tarjeta se abre con sus detalles y
// los enlaces a repositorio y sitio en vivo (leídos de los data-*).

export function initProjects(root) {
  const modal = root.querySelector('[data-proj-modal]');
  if (!modal) return;

  const panel = modal.querySelector('[data-proj-panel]');
  const titleEl = modal.querySelector('[data-proj-title]');
  const descEl = modal.querySelector('[data-proj-desc]');
  const repoEl = modal.querySelector('[data-proj-repo]');
  const siteEl = modal.querySelector('[data-proj-site]');

  const open = (card) => {
    const h3 = card.querySelector('h3');
    const p = card.querySelector('p');
    if (titleEl) titleEl.textContent = h3 ? h3.textContent : '';
    if (descEl) descEl.textContent = p ? p.textContent : '';

    const repo = card.getAttribute('data-repo') || '';
    const site = card.getAttribute('data-site') || '';
    if (repoEl) {
      repoEl.href = repo;
      repoEl.style.display = repo ? 'inline-flex' : 'none';
    }
    if (siteEl) {
      siteEl.href = site;
      siteEl.style.display = site ? 'inline-flex' : 'none';
    }

    modal.setAttribute('data-open', 'true');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    modal.setAttribute('data-open', 'false');
    document.body.style.overflow = '';
  };

  root.querySelectorAll('[data-proj]').forEach(card => {
    card.addEventListener('click', (e) => { e.preventDefault(); open(card); });
  });

  const closeBtn = modal.querySelector('[data-proj-close]');
  const backdrop = modal.querySelector('[data-proj-backdrop]');
  if (closeBtn) closeBtn.addEventListener('click', close);
  if (backdrop) backdrop.addEventListener('click', close);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.getAttribute('data-open') === 'true') close();
  });
}

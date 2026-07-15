// Modal de proyecto: al pulsar una tarjeta se abre con sus detalles y
// los enlaces a repositorio y sitio en vivo (leídos de los data-*).

export function initProjects(root) {
  const modal = root.querySelector('[data-proj-modal]');
  if (!modal) return;

  const titleEl = modal.querySelector('[data-proj-title]');
  const descEl = modal.querySelector('[data-proj-desc]');
  const soonEl = modal.querySelector('[data-proj-soon]');
  const links = {
    post: modal.querySelector('[data-proj-post]'),
    site: modal.querySelector('[data-proj-site]'),
    repo: modal.querySelector('[data-proj-repo]')
  };

  const setLink = (el, url, show) => {
    if (!el) return;
    if (show && url) { el.href = url; el.style.display = 'inline-flex'; }
    else el.style.display = 'none';
  };

  const open = (card) => {
    const h3 = card.querySelector('h3');
    const p = card.querySelector('p');
    if (titleEl) titleEl.textContent = h3 ? h3.textContent : '';
    if (descEl) descEl.textContent = p ? p.textContent : '';

    const soon = card.hasAttribute('data-soon');
    setLink(links.post, card.getAttribute('data-post'), !soon);
    setLink(links.site, card.getAttribute('data-site'), !soon);
    setLink(links.repo, card.getAttribute('data-repo'), !soon);

    if (soonEl) {
      if (soon) {
        const date = card.getAttribute('data-date') || '';
        soonEl.textContent = date ? 'Próximamente · ' + date : 'Próximamente';
        soonEl.style.display = 'block';
      } else {
        soonEl.style.display = 'none';
      }
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

// Banner de consentimiento de cookies. Actualiza el Consent Mode de Google
// Analytics según la elección y la recuerda en localStorage.

const KEY = 'ddq-consent';

export function initConsent(root) {
  const banner = root.querySelector('[data-consent]');
  if (!banner) return;

  const accept = banner.querySelector('[data-consent-accept]');
  const reject = banner.querySelector('[data-consent-reject]');

  const update = (granted) => {
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: granted ? 'granted' : 'denied'
      });
    }
  };

  let stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) {}

  // Ya decidió antes: aplicar y no mostrar el banner
  if (stored === 'granted') { update(true); return; }
  if (stored === 'denied') { update(false); return; }

  banner.setAttribute('data-open', 'true');

  const decide = (granted) => {
    update(granted);
    try { localStorage.setItem(KEY, granted ? 'granted' : 'denied'); } catch (e) {}
    banner.setAttribute('data-open', 'false');
  };

  if (accept) accept.addEventListener('click', () => decide(true));
  if (reject) reject.addEventListener('click', () => decide(false));
}

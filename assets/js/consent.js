// Banner de consentimiento de cookies. Actualiza el Consent Mode de Google
// Analytics según la elección y la recuerda en localStorage.
(function () {
  var KEY = 'ddq-consent';
  var TEXT = {
    es: { text: 'Uso cookies de analítica (Google Analytics) para entender cómo se navega el sitio. ¿Las aceptas?', accept: 'Aceptar', reject: 'Rechazar' },
    en: { text: 'I use analytics cookies (Google Analytics) to understand how the site is browsed. Do you accept them?', accept: 'Accept', reject: 'Reject' }
  };

  function update(granted) {
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', { analytics_storage: granted ? 'granted' : 'denied' });
    }
  }

  function init() {
    var banner = document.querySelector('[data-consent]');
    if (!banner) return;
    var accept = banner.querySelector('[data-consent-accept]');
    var reject = banner.querySelector('[data-consent-reject]');
    var text = banner.querySelector('[data-consent-text]');

    var setLang = function (lang) {
      var t = TEXT[lang] || TEXT.es;
      text.textContent = t.text; accept.textContent = t.accept; reject.textContent = t.reject;
    };
    var lang = 'es';
    try { lang = localStorage.getItem('ddq-lang') || lang; } catch (e) {}
    setLang(lang);
    window.addEventListener('ddq-lang', function (e) { setLang(e.detail); });

    var stored = null;
    try { stored = localStorage.getItem(KEY); } catch (e) {}

    // Ya decidió antes: aplicar y no mostrar el banner
    if (stored === 'granted') { update(true); return; }
    if (stored === 'denied') { update(false); return; }

    banner.setAttribute('data-open', 'true');

    var decide = function (granted) {
      update(granted);
      try { localStorage.setItem(KEY, granted ? 'granted' : 'denied'); } catch (e) {}
      banner.setAttribute('data-open', 'false');
    };
    accept.addEventListener('click', function () { decide(true); });
    reject.addEventListener('click', function () { decide(false); });
  }

  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();

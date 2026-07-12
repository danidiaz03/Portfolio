// Cambio de idioma ES/EN. Traduce recorriendo los nodos de texto con el
// diccionario y conmuta la frase del hero (que se vuelve a teclear).

import { TRANSLATIONS, HERO_PHRASE } from './config.js';
import { typePhrase } from './ui.js';

const STORAGE_KEY = 'ddq-lang';

export function initI18n(root, reduce) {
  const es2en = TRANSLATIONS;
  const en2es = {};
  Object.keys(es2en).forEach(k => { en2es[es2en[k]] = k; });

  const phrase = root.querySelector('[data-typewriter]');
  const esBtn = root.querySelector('[data-lang-es]');
  const enBtn = root.querySelector('[data-lang-en]');
  const langBtn = root.querySelector('[data-lang]');

  const translateNodes = (lang) => {
    const map = lang === 'en' ? es2en : en2es;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => {
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        let el = n.parentElement;
        while (el && el !== root) {
          if (el.matches('[data-typewriter],[data-lang],[data-clock]')) return NodeFilter.FILTER_REJECT;
          el = el.parentElement;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    let n;
    while ((n = walker.nextNode())) nodes.push(n);
    nodes.forEach(node => {
      const key = node.nodeValue.trim();
      if (map[key] != null) node.nodeValue = node.nodeValue.replace(key, map[key]);
    });
  };

  let current = 'es';

  const applyLang = (lang, retype) => {
    translateNodes(lang);
    if (phrase) {
      phrase.innerHTML = HERO_PHRASE[lang] || phrase.innerHTML;
      phrase.style.minHeight = '4.6em';
      if (retype) typePhrase(root, reduce);
    }
    if (esBtn) esBtn.style.opacity = lang === 'es' ? '1' : '.4';
    if (enBtn) enBtn.style.opacity = lang === 'en' ? '1' : '.4';
    try { document.documentElement.lang = lang; } catch (e) {}
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    current = lang;
  };

  let stored = 'es';
  try { stored = localStorage.getItem(STORAGE_KEY) || 'es'; } catch (e) {}
  applyLang(stored, true);

  if (langBtn) {
    langBtn.addEventListener('click', () => applyLang(current === 'es' ? 'en' : 'es', true));
  }
}

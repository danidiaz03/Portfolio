// Animaciones con GSAP + ScrollTrigger (mejora progresiva).
// Si GSAP no está disponible o el usuario prefiere menos movimiento,
// el contenido se muestra igualmente.

export function initAnimations(root, reduce) {
  const revealAll = () => root
    .querySelectorAll('[data-reveal],[data-hero-line],[data-hero-item]')
    .forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });

  if (reduce || !window.gsap || !window.ScrollTrigger) {
    revealAll();
    return;
  }

  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  gsap.registerPlugin(ScrollTrigger);

  const isTouch = !window.matchMedia('(pointer: fine)').matches;
  const wide = window.matchMedia('(min-width: 900px)').matches;
  const q = (sel) => Array.from(root.querySelectorAll(sel));

  heroIntro(gsap, q, root);
  revealOnScroll(gsap, ScrollTrigger, q);
  navAutoHide(gsap, root);
  scrollCue(gsap, root);
  marqueeSkew(gsap, ScrollTrigger, root, q);
  counters(gsap, ScrollTrigger, q);
  stackTiles(gsap, q);
  if (wide) horizontalProjects(gsap, ScrollTrigger, root);
  else hideHint(root);

  if (isTouch) return; // los hovers de ratón no aplican en táctil

  reactiveName(gsap, root);
  expRowHover(gsap, q);
  cardTilt(gsap, q);
  magnetic(gsap, q);
  cursor(gsap, root);
}

function heroIntro(gsap, q, root) {
  const lines = q('[data-hero-line]');
  const items = q('[data-hero-item]');
  gsap.timeline({ defaults: { ease: 'power3.out' } })
    .fromTo(lines, { yPercent: 105 }, {
      yPercent: 0, duration: 1, stagger: 0.12,
      onComplete: () => root.querySelectorAll('[data-line-mask]').forEach(m => { m.style.overflow = 'visible'; })
    }, 0.1)
    .fromTo(items, { y: 26, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1 }, 0.5);
}

function revealOnScroll(gsap, ScrollTrigger, q) {
  const reveals = q('[data-reveal]');
  gsap.set(reveals, { y: 34, opacity: 0 });
  ScrollTrigger.batch(reveals, {
    start: 'top 90%',
    onEnter: els => gsap.to(els, { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: 'power3.out', overwrite: true })
  });
}

function navAutoHide(gsap, root) {
  const nav = root.querySelector('[data-nav]');
  if (!nav) return;
  let lastY = window.scrollY, hidden = false, ticking = false;
  const update = () => {
    const y = window.scrollY;
    const dy = y - lastY;
    if (y > 160 && dy > 6 && !hidden) { hidden = true; gsap.to(nav, { yPercent: -110, duration: 0.4, ease: 'power2.out' }); }
    else if ((dy < -6 || y <= 160) && hidden) { hidden = false; gsap.to(nav, { yPercent: 0, duration: 0.4, ease: 'power2.out' }); }
    if (Math.abs(dy) > 6) lastY = y;
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
}

function scrollCue(gsap, root) {
  const cue = root.querySelector('[data-scrollcue]');
  if (!cue) return;
  gsap.set(cue, { transformOrigin: 'top' });
  gsap.to(cue, { scaleY: 0.4, transformOrigin: 'bottom', duration: 0.9, ease: 'power1.inOut', repeat: -1, yoyo: true });
}

function marqueeSkew(gsap, ScrollTrigger, root, q) {
  const tracks = q('[data-marquee-track]');
  if (!tracks.length) return;
  const skewTo = gsap.quickTo(tracks, 'skewX', { duration: 0.4, ease: 'power2.out' });
  ScrollTrigger.create({
    trigger: root, start: 'top top', end: 'max',
    onUpdate: self => skewTo(gsap.utils.clamp(-6, 6, self.getVelocity() / -400))
  });
}

function counters(gsap, ScrollTrigger, q) {
  q('[data-count]').forEach(el => {
    const to = parseFloat(el.dataset.to) || 0;
    const dec = parseInt(el.dataset.dec || '0', 10);
    el.textContent = (0).toFixed(dec);
    const obj = { v: 0 };
    ScrollTrigger.create({
      trigger: el, start: 'top 92%', once: true,
      onEnter: () => gsap.to(obj, { v: to, duration: 1.3, ease: 'power2.out', onUpdate: () => { el.textContent = obj.v.toFixed(dec); } })
    });
  });
}

function stackTiles(gsap, q) {
  q('[data-cat]').forEach(cat => {
    const tiles = cat.querySelectorAll('[data-logo]');
    if (!tiles.length) return;
    gsap.from(tiles, {
      y: 20, opacity: 0, scale: 0.94, duration: 0.55, stagger: 0.05, ease: 'power3.out',
      scrollTrigger: { trigger: cat, start: 'top 85%', once: true }
    });
  });
}

function horizontalProjects(gsap, ScrollTrigger, root) {
  const wrap = root.querySelector('[data-hwrap]');
  const track = root.querySelector('[data-htrack]');
  const hint = root.querySelector('[data-hhint]');
  if (!wrap || !track) return;

  track.style.flexWrap = 'nowrap';
  track.style.width = 'max-content';
  const dist = () => Math.max(0, track.scrollWidth - window.innerWidth + 48);

  if (dist() > 60) {
    gsap.to(track, {
      x: () => -dist(),
      ease: 'none',
      scrollTrigger: { trigger: wrap, start: 'top top', end: () => '+=' + dist(), pin: true, scrub: 1, invalidateOnRefresh: true }
    });
  } else {
    track.style.flexWrap = 'wrap';
    track.style.width = '';
    if (hint) hint.style.display = 'none';
  }
}

function hideHint(root) {
  const hint = root.querySelector('[data-hhint]');
  if (hint) hint.style.display = 'none';
}

function reactiveName(gsap, root) {
  const left = root.querySelector('[data-hero-left]');
  const lines = Array.from(root.querySelectorAll('#top [data-hero-line]'));
  if (!left || !lines.length) return;

  const letters = [];
  lines.forEach(line => {
    const frag = document.createDocumentFragment();
    Array.from(line.childNodes).forEach(node => {
      const color = node.nodeType === Node.TEXT_NODE ? null : (node.style && node.style.color) || null;
      for (const ch of node.textContent) {
        const s = document.createElement('span');
        s.textContent = ch;
        s.style.display = 'inline-block';
        s.style.willChange = 'transform';
        if (color) s.style.color = color;
        frag.appendChild(s);
        letters.push(s);
      }
    });
    line.textContent = '';
    line.appendChild(frag);
  });

  let raf = null, mx = 0, my = 0;
  const apply = () => {
    raf = null;
    letters.forEach(l => {
      const r = l.getBoundingClientRect();
      const d = Math.hypot(mx - (r.left + r.width / 2), my - (r.top + r.height / 2));
      const f = Math.max(0, 1 - d / 200);
      gsap.to(l, { y: -30 * f, duration: 0.4, ease: 'power3.out', overwrite: 'auto' });
    });
  };
  left.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; if (!raf) raf = requestAnimationFrame(apply); }, { passive: true });
  left.addEventListener('mouseleave', () => gsap.to(letters, { y: 0, duration: 0.5, ease: 'power3.out' }));
}

function expRowHover(gsap, q) {
  q('[data-exp-row]').forEach(row => {
    row.addEventListener('mouseenter', () => gsap.to(row, { x: 14, duration: 0.4, ease: 'power3.out' }));
    row.addEventListener('mouseleave', () => gsap.to(row, { x: 0, duration: 0.4, ease: 'power3.out' }));
  });
}

function cardTilt(gsap, q) {
  q('[data-card]').forEach(card => {
    const arrow = card.querySelector('[data-arrow]');
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const dx = (e.clientX - r.left) / r.width - 0.5;
      const dy = (e.clientY - r.top) / r.height - 0.5;
      gsap.to(card, { rotationY: dx * 7, rotationX: -dy * 7, y: -8, transformPerspective: 900, duration: 0.5, ease: 'power2.out' });
    });
    card.addEventListener('mouseenter', () => { if (arrow) gsap.to(arrow, { x: 5, y: -5, duration: 0.4, ease: 'power3.out' }); });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { rotationY: 0, rotationX: 0, y: 0, duration: 0.6, ease: 'power3.out' });
      if (arrow) gsap.to(arrow, { x: 0, y: 0, duration: 0.4, ease: 'power3.out' });
    });
  });
}

function magnetic(gsap, q) {
  q('[data-magnet]').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect();
      gsap.to(btn, { x: (e.clientX - r.left - r.width / 2) * 0.35, y: (e.clientY - r.top - r.height / 2) * 0.35, duration: 0.4, ease: 'power3.out' });
    });
    btn.addEventListener('mouseleave', () => gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1,0.45)' }));
  });
}

function cursor(gsap, root) {
  const dot = root.querySelector('[data-cursor]');
  if (!dot) return;
  gsap.set(dot, { xPercent: -50, yPercent: -50, opacity: 1 });
  const x = gsap.quickTo(dot, 'x', { duration: 0.25, ease: 'power3' });
  const y = gsap.quickTo(dot, 'y', { duration: 0.25, ease: 'power3' });
  window.addEventListener('mousemove', (e) => { x(e.clientX); y(e.clientY); });
  root.querySelectorAll('a, button, [data-logo], [data-card]').forEach(el => {
    el.addEventListener('mouseenter', () => gsap.to(dot, { scale: 2.6, duration: 0.3 }));
    el.addEventListener('mouseleave', () => gsap.to(dot, { scale: 1, duration: 0.3 }));
  });
}

import { initUI } from './ui.js';
import { initProjects } from './projects.js';
import { initAnimations } from './animations.js';

const root = document.querySelector('.page');
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function start() {
  if (!root) return;
  initUI(root, reduce);
  initProjects(root);
  initAnimations(root, reduce);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', start);
} else {
  start();
}

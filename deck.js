/* Navegação nativa, sem dependências nem coleta de dados. */
(() => {
  'use strict';
  const slides = [...document.querySelectorAll('.slide')];
  const previous = document.getElementById('previous');
  const next = document.getElementById('next');
  const counter = document.getElementById('counter');
  const name = document.getElementById('section-name');
  const overview = document.getElementById('overview');
  const links = document.getElementById('overview-links');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0;
  let replayTimer;
  function update(index) {
    current = index;
    previous.disabled = index === 0;
    next.disabled = index === slides.length - 1;
    counter.textContent = `${String(index + 1).padStart(2, '0')} / ${slides.length}`;
    name.textContent = slides[index].dataset.title;
    links.querySelectorAll('a').forEach((a, i) => a.setAttribute('aria-current', String(i === index)));
  }
  function go(index) {
    const target = Math.max(0, Math.min(slides.length - 1, index));
    // A navegação salta direto à tela; a animação revela o conteúdo no destino.
    slides[target].scrollIntoView({ behavior: 'instant', block: 'start' });
    history.replaceState(null, '', `#${slides[target].id}`);
    update(target);
  }
  slides.forEach((slide, index) => {
    const link = document.createElement('a');
    link.href = `#${slide.id}`;
    const number = document.createElement('span');
    number.textContent = String(index + 1).padStart(2, '0');
    link.append(number, document.createTextNode(slide.dataset.title));
    link.addEventListener('click', event => { event.preventDefault(); overview.close(); go(index); });
    links.append(link);
  });
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-seen'); update(slides.indexOf(entry.target)); } });
  }, { rootMargin: '-25% 0px -50% 0px', threshold: 0 });
  slides.forEach(slide => observer.observe(slide));
  previous.addEventListener('click', () => go(current - 1));
  next.addEventListener('click', () => go(current + 1));
  document.getElementById('print').addEventListener('click', () => window.print());
  document.getElementById('overview-open').addEventListener('click', () => overview.showModal());
  document.getElementById('overview-close').addEventListener('click', () => overview.close());
  document.addEventListener('keydown', event => {
    if (overview.open || event.altKey || event.ctrlKey || event.metaKey || /INPUT|TEXTAREA|SELECT/.test(event.target.tagName)) return;
    const handlers = { ArrowRight: () => go(current + 1), ArrowLeft: () => go(current - 1), PageDown: () => go(current + 1), PageUp: () => go(current - 1), Home: () => go(0), End: () => go(slides.length - 1) };
    if (handlers[event.key]) { event.preventDefault(); handlers[event.key](); }
  });
  document.getElementById('replay').addEventListener('click', () => {
    const diagram = document.getElementById('follow-diagram');
    clearTimeout(replayTimer);
    diagram.classList.remove('replaying');
    diagram.classList.add('replay-reset');
    void diagram.offsetWidth;
    diagram.classList.remove('replay-reset');
    diagram.classList.add('replaying');
    replayTimer = setTimeout(() => diagram.classList.remove('replaying'), 2000);
  });
  update(Math.max(0, slides.findIndex(slide => `#${slide.id}` === location.hash)));
})();

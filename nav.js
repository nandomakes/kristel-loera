(() => {
  const header = document.querySelector('.nav');
  const btn = document.querySelector('.nav__toggle');
  if (!header || !btn) return;
  const close = () => { header.classList.remove('nav--open'); btn.setAttribute('aria-expanded', 'false'); };
  btn.addEventListener('click', () => {
    const open = header.classList.toggle('nav--open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  header.querySelectorAll('.nav__links a').forEach(a => a.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();

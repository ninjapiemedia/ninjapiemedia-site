document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('[data-view]');
  const site = document.querySelector('.site');
  const hamburger = document.querySelector('.hamb');
  const menu = document.querySelector('.menu');

  function setView(v){
    document.body.classList.remove('force-desktop','force-mobile');
    site?.classList.remove('mobile');
    if(v === 'desktop') document.body.classList.add('force-desktop');
    if(v === 'mobile') document.body.classList.add('force-mobile');
    buttons.forEach(b => b.classList.toggle('active', b.dataset.view === v));
    try { localStorage.setItem('npm-view', v); } catch(e) {}
  }

  let saved = 'auto';
  try { saved = localStorage.getItem('npm-view') || 'auto'; } catch(e) {}
  setView(saved);
  buttons.forEach(b => b.addEventListener('click', () => setView(b.dataset.view)));

  function closeMenu(){
    if(!menu || !hamburger) return;
    menu.classList.remove('open');
    hamburger.setAttribute('aria-expanded','false');
    hamburger.textContent = '☰';
  }

  function toggleMenu(e){
    if(e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if(!menu || !hamburger) return;
    const open = menu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    hamburger.textContent = open ? '×' : '☰';
  }

  if(hamburger && menu){
    hamburger.addEventListener('click', toggleMenu, { passive: false });
    hamburger.addEventListener('touchend', toggleMenu, { passive: false });
    hamburger.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' ') toggleMenu(e);
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('click', (e) => {
      if(menu.classList.contains('open') && !menu.contains(e.target) && e.target !== hamburger) closeMenu();
    });
  }
});

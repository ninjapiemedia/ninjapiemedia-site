const shell = document.getElementById('site-shell');
const buttons = document.querySelectorAll('[data-view]');
function setView(view){
  shell.classList.remove('auto-view','desktop-view','mobile-view');
  shell.classList.add(`${view}-view`);
  buttons.forEach(btn => btn.classList.toggle('active', btn.dataset.view === view));
  localStorage.setItem('npm-view', view);
}
buttons.forEach(btn => btn.addEventListener('click', () => setView(btn.dataset.view)));
setView(localStorage.getItem('npm-view') || 'auto');

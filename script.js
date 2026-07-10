const buttons=document.querySelectorAll('[data-view]');
function setView(v){
  document.body.classList.remove('force-desktop','force-mobile');
  document.querySelector('.site')?.classList.remove('mobile');
  if(v==='desktop')document.body.classList.add('force-desktop');
  if(v==='mobile')document.body.classList.add('force-mobile');
  buttons.forEach(b=>b.classList.toggle('active',b.dataset.view===v));
  localStorage.setItem('npm-view',v);
}
const saved=localStorage.getItem('npm-view')||'auto';
setView(saved);
buttons.forEach(b=>b.addEventListener('click',()=>setView(b.dataset.view)));

const hamburger=document.querySelector('.hamb');
const menu=document.querySelector('.menu');
if(hamburger&&menu){
  hamburger.setAttribute('role','button');
  hamburger.setAttribute('tabindex','0');
  hamburger.setAttribute('aria-label','Open navigation menu');
  hamburger.setAttribute('aria-expanded','false');
  const toggleMenu=()=>{
    const open=menu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded',open?'true':'false');
    hamburger.textContent=open?'×':'☰';
  };
  hamburger.addEventListener('click',toggleMenu);
  hamburger.addEventListener('keydown',(e)=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggleMenu();}});
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');hamburger.setAttribute('aria-expanded','false');hamburger.textContent='☰';}));
}

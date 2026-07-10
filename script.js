const buttons=[...document.querySelectorAll('[data-view]')];
function setView(mode){document.body.classList.remove('force-desktop','force-mobile');if(mode==='desktop')document.body.classList.add('force-desktop');if(mode==='mobile')document.body.classList.add('force-mobile');buttons.forEach(b=>b.classList.toggle('active',b.dataset.view===mode));localStorage.setItem('npm-view',mode)}
buttons.forEach(b=>b.addEventListener('click',()=>setView(b.dataset.view)));
setView(localStorage.getItem('npm-view')||'auto');
const form=document.querySelector('#collabForm');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(form);const body=[`Name/stage name: ${data.get('name')||''}`,`Email: ${data.get('email')||''}`,`Social handle: ${data.get('handle')||''}`,`Collaboration type: ${data.get('type')||''}`,`Experience level: ${data.get('experience')||''}`,'',`Message:\n${data.get('message')||''}`].join('\n');window.location.href=`mailto:collab@ninjapiemedia.com?subject=${encodeURIComponent('Collaboration Inquiry')}&body=${encodeURIComponent(body)}`;});}


const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
if(localStorage.lpTheme==='dark')document.body.classList.add('dark');
$('#theme')?.addEventListener('click',()=>{document.body.classList.toggle('dark');localStorage.lpTheme=document.body.classList.contains('dark')?'dark':'light'});
const modal=$('#searchModal');$('#openSearch')?.addEventListener('click',()=>{modal.classList.add('open');$('#siteQ').focus()});$('#closeSearch')?.addEventListener('click',()=>modal.classList.remove('open'));modal?.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('open')});
const SEARCH=[
{t:'Coach dashboard',u:'index.html',k:'first time new coach roadmap season'},
{t:'Baseball divisions',u:'baseball/index.html',k:'tee ball minors b minors a majors intermediate junior senior rules'},
{t:'Softball divisions',u:'softball/index.html',k:'tee ball minors b minors a majors junior senior rules pitching'},
{t:'Practice builder',u:'practice/index.html',k:'60 75 90 minute stations plan'},
{t:'Drill library',u:'drills/index.html',k:'hitting throwing catching fielding base running team defense'},
{t:'Team Parent Center',u:'parents/index.html',k:'family coordinator snacks volunteer communication dugout'},
{t:'Safety and game day',u:'safety/index.html',k:'injury heat weather equipment checklist mandatory play pitch count'},
{t:'Official resources',u:'resources/index.html',k:'little league rulebook app coach pitch training'}];
function base(){return document.body.dataset.depth==='1'?'../':''}
function runSearch(){const q=$('#siteQ').value.trim().toLowerCase(),o=$('#siteResults');if(q.length<2){o.innerHTML='<p>Enter at least two characters.</p>';return}const all=[...SEARCH,...window.DRILLS.map(d=>({t:d.title,u:'drills/index.html?q='+encodeURIComponent(d.title),k:Object.values(d).join(' ')}))];const hits=all.filter(x=>(x.t+' '+x.k).toLowerCase().includes(q));o.innerHTML=hits.length?hits.map(x=>`<a class="result" href="${base()+x.u}"><strong>${x.t}</strong><br><small>${x.k.slice(0,130)}</small></a>`).join(''):'<p class="empty">No results. Try “throwing,” “Minors A,” or “team parent.”</p>'}
$('#runSearch')?.addEventListener('click',runSearch);$('#siteQ')?.addEventListener('keydown',e=>{if(e.key==='Enter')runSearch()});

'use strict';
const $=s=>document.querySelector(s), grid=$('#photos'), dialog=$('#viewer');
const categories=[['all','All memories'],['bride','Bride'],['groom','Groom'],['family','Family'],['friends','Friends'],['moments','Wedding moments']];
let photos=[],filtered=[],category='all',savedOnly=false,limit=24,current=0,opener=null,saved=new Set();
try{saved=new Set(JSON.parse(localStorage.getItem('nr-favourites')||'[]'));}catch{}
function persist(){try{localStorage.setItem('nr-favourites',JSON.stringify([...saved]));}catch{}$('#saved-count').textContent=saved.size;}
function toggle(id){saved.has(id)?saved.delete(id):saved.add(id);persist();render();if(dialog.open)updateViewer();}
function downloadLink(photo){const a=document.createElement('a');a.href=photo.download||photo.src;a.download=photo.id+'.jpg';a.textContent='↓';a.setAttribute('aria-label','Download '+photo.alt);return a;}
function render(){filtered=photos.filter(p=>(category==='all'||p.categories.includes(category))&&(!savedOnly||saved.has(p.id)));grid.replaceChildren();for(const p of filtered.slice(0,limit)){const card=document.createElement('article');card.className='photo-card';const open=document.createElement('button');open.className='photo-open';open.setAttribute('aria-label','Open '+p.alt);const img=document.createElement('img');img.src=p.src;img.alt=p.alt;img.loading='lazy';img.decoding='async';open.append(img);open.onclick=()=>openViewer(p.id,open);const heart=document.createElement('button');heart.className='heart';heart.textContent=saved.has(p.id)?'♥':'♡';heart.setAttribute('aria-label','Favourite '+p.alt);heart.setAttribute('aria-pressed',saved.has(p.id));heart.onclick=()=>toggle(p.id);const info=document.createElement('div');info.className='photo-info';const label=document.createElement('span');label.textContent=p.categories.includes('groom')?'THE GROOM':p.categories.includes('bride')?'THE BRIDE':'OUR WEDDING DAY';info.append(label,downloadLink(p));card.append(open,heart,info);grid.append(card);}$('#results').textContent=`${filtered.length} ${filtered.length===1?'photograph':'photographs'}${savedOnly?' · Favourites':''}`;$('#empty').hidden=filtered.length>0;$('#empty-text').textContent=savedOnly?'Tap the heart on a photo to keep your favourites on this device.':'Photographs in this collection will appear here soon.';$('#more').hidden=filtered.length<=limit;document.querySelectorAll('.filters button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.category===category));$('.saved').setAttribute('aria-pressed',savedOnly);}
for(const [id,label] of categories){const b=document.createElement('button');b.textContent=label;b.dataset.category=id;b.setAttribute('aria-pressed',id==='all');b.onclick=()=>{category=id;limit=24;render();};$('.filters').append(b);}
$('.saved').onclick=()=>{savedOnly=!savedOnly;limit=24;render();};$('#reset').onclick=()=>{category='all';savedOnly=false;render();};$('#more').onclick=()=>{limit+=24;render();};
let viewerPhotos=[];
function openViewer(id,button){opener=button;viewerPhotos=[...filtered];current=viewerPhotos.findIndex(p=>p.id===id);updateViewer();dialog.showModal();document.body.style.overflow='hidden';$('#close').focus();}
function updateViewer(){const p=viewerPhotos[current];if(!p)return;$('#full').src=p.src;$('#full').alt=p.alt;$('#caption').textContent=p.alt;$('#counter').textContent=`${current+1} / ${viewerPhotos.length}`;$('#download').href=p.download||p.src;$('#download').download=`nizar-rinsha-${p.id}.jpg`;$('#favourite').textContent=saved.has(p.id)?'♥ Favourited':'♡ Favourite';$('#favourite').setAttribute('aria-pressed',saved.has(p.id));}
function step(delta){current=(current+delta+viewerPhotos.length)%viewerPhotos.length;updateViewer();}
function close(){dialog.close();}
$('#close').onclick=close;dialog.addEventListener('close',()=>{document.body.style.overflow='';if(document.fullscreenElement)document.exitFullscreen().catch(()=>{});if(opener?.isConnected)opener.focus();else $('.saved').focus();});
$('#prev').onclick=()=>step(-1);$('#next').onclick=()=>step(1);$('#favourite').onclick=()=>toggle(viewerPhotos[current].id);
dialog.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();step(1);}if(e.key==='ArrowLeft'){e.preventDefault();step(-1);}});
let touchX=0,touchY=0;$('#full').addEventListener('touchstart',e=>{touchX=e.changedTouches[0].clientX;touchY=e.changedTouches[0].clientY;},{passive:true});$('#full').addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-touchX,dy=e.changedTouches[0].clientY-touchY;if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy))step(dx<0?1:-1);},{passive:true});
$('#fullscreen').hidden=!dialog.requestFullscreen;$('#fullscreen').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await dialog.requestFullscreen();}catch{}};
const fallbackPhotos=[
  {id:'photo-07',src:'images/photo-07.jpg',download:'images/photo-07.jpg',alt:'Nizar and Rinsha Febin on their wedding day',categories:['moments']},
  {id:'photo-10',src:'images/photo-10.jpg',download:'images/photo-10.jpg',alt:'Nizar and Rinsha Febin on their wedding day',categories:['moments']},
  {id:'photo-11',src:'images/photo-11.jpg',download:'images/photo-11.jpg',alt:'Rinsha Febin beneath the flowering garden',categories:['moments','bride']},
  {id:'photo-12',src:'images/photo-12.jpg',download:'images/photo-12.jpg',alt:'Nizar and Rinsha Febin on their wedding day',categories:['moments']},
  {id:'photo-04',src:'images/photo-04.jpg',download:'images/photo-04.jpg',alt:'Nizar and Rinsha Febin on their wedding day',categories:['moments']},
  {id:'photo-09',src:'images/photo-09.jpg',download:'images/photo-09.jpg',alt:'Nizar and Rinsha Febin on their wedding day',categories:['moments']},
  {id:'photo-01',src:'images/photo-01.jpg',download:'images/photo-01.jpg',alt:'Nizar in his royal blue wedding outfit',categories:['groom']},
  {id:'photo-06',src:'images/photo-06.jpg',download:'images/photo-06.jpg',alt:'Nizar and Rinsha Febin on their wedding day',categories:['moments','bride']},
  {id:'photo-08',src:'images/photo-08.jpg',download:'images/photo-08.jpg',alt:'Nizar and Rinsha Febin on their wedding day',categories:['moments']},
  {id:'photo-02',src:'images/photo-02.jpg',download:'images/photo-02.jpg',alt:'Nizar in his royal blue wedding outfit',categories:['groom']},
  {id:'photo-05',src:'images/photo-05.jpg',download:'images/photo-05.jpg',alt:'Nizar and Rinsha Febin on their wedding day',categories:['moments']},
  {id:'photo-03',src:'images/photo-03.jpg',download:'images/photo-03.jpg',alt:'Nizar in his royal blue wedding outfit',categories:['groom']}
];
persist();
if (window.location.protocol === 'file:') {
  photos = fallbackPhotos;
  render();
} else {
  fetch('data/photos.json')
    .then(r => { if (!r.ok) throw Error(); return r.json(); })
    .then(data => { photos = data; render(); })
    .catch(() => {
      photos = fallbackPhotos;
      render();
    });
}



// Cultural opening animation
document.addEventListener('DOMContentLoaded',()=>{
  const intro=document.querySelector('#cultureIntro');
  if(!intro)return;
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const delay=reduced?180:3200;
  window.setTimeout(()=>{
    intro.classList.add('is-done');
    window.setTimeout(()=>intro.remove(),reduced?300:950);
  },delay);
});
const placeholder='assets/placeholder.svg';
const dishNames=[
'Thiéboudieune','Yassa','Mafé','Domoda',
'Sadj Fo O Dekh','Sadj Fo O Basse','Sadj Fo O Talali','Sadj Fo Niao',
'Thiakri','Toogn'
];
const dishDescriptions=[
'Un grand classique sénégalais à base de riz, de poisson et de légumes, préparé dans la tradition locale.',
'Riz accompagné de poulet ou de poisson mariné, servi avec une généreuse préparation aux oignons.',
'Un plat onctueux à base de pâte d’arachide, accompagné de riz et de viande ou de poisson.',
'Un savoureux ragoût mijoté dans une sauce riche, traditionnellement servi avec du riz.',
'Préparation traditionnelle à base de couscous de mil, proposée selon les savoir-faire culinaires locaux.',
'Une spécialité à base de couscous de mil, préparée dans le respect des traditions culinaires Sérères.',
'Une autre façon de découvrir le couscous de mil et les saveurs authentiques de la cuisine locale.',
'Spécialité traditionnelle à base de couscous de mil, à découvrir à la table de Mbind Sereer.',
'Dessert traditionnel à base de mil et de lait caillé, frais et délicatement parfumé.',
'Préparation sucrée traditionnelle Sérère à base de mil, connue ici sous le nom de Toogn.'
];
const dishImages=[
...Array.from({length:8},(_,i)=>`assets/dishes/dish-${String(i+1).padStart(2,'0')}.webp`),
'assets/dishes/dish-09.webp','assets/dishes/dish-10.webp'
];
const dishes=Array.from({length:10},(_,i)=>({
image:dishImages[i],
name:dishNames[i],
description:dishDescriptions[i]
}));

// Boissons traditionnelles — ajoutez les photos dans assets/juices/
const juices=[
{image:'assets/juices/juice-01.webp',name:'Bissap',description:'Boisson traditionnelle à base de fleurs d’hibiscus, fraîche et délicatement parfumée.'},
{image:'assets/juices/juice-02.webp',name:'Baack (Bouye)',description:'Boisson traditionnelle préparée à base de fruit du baobab, douce, onctueuse et naturellement parfumée.'},
{image:'assets/juices/juice-03.webp',name:'Soob (Dakhar)',description:'Boisson traditionnelle à base de tamarin, fraîche et délicatement acidulée.'},
{image:'assets/juices/juice-04.webp',name:'Togodj (Ditakh)',description:'Boisson traditionnelle à base de ditakh, fraîche et délicatement acidulée.'}
];

const activities=[
{images:['assets/activities/activity-01-01.webp','assets/activities/activity-01-02.webp','assets/activities/activity-01-03.webp'],name:'Visite en charrette autour du village et des lieux historiques',description:'Partez à la découverte de Ndiaganiao en charrette et explorez le village, ses lieux historiques et les paysages qui racontent son histoire.'},
{images:['assets/activities/activity-02-01.webp','assets/activities/activity-02-02.webp','assets/activities/activity-02-03.webp'],name:'Séances de danse',description:'Partagez un moment convivial autour de la danse et découvrez quelques pas et rythmes dans une ambiance chaleureuse et festive.'},
{images:['assets/activities/activity-03-01.webp','assets/activities/activity-03-02.webp','assets/activities/activity-03-03.webp'],name:'Séances de contes africains',description:'Installez-vous, écoutez et laissez-vous emporter par des récits africains qui transmettent la mémoire, les valeurs et l’imaginaire d’une culture vivante.'},
{images:['assets/activities/activity-04-01.webp','assets/activities/activity-04-02.webp','assets/activities/activity-04-03.webp'],name:'Animez vos événements avec Dj Ganzo',description:'Donnez du rythme à vos moments forts avec Dj Ganzo : une animation musicale pensée pour créer une ambiance conviviale, festive et inoubliable à Mbind Sereer.'},
{images:['assets/activities/activity-05-01.webp','assets/activities/activity-05-02.webp','assets/activities/activity-05-03.webp','assets/activities/activity-05-04.webp'],name:'Mbind Sereer met à votre disposition son espace ouvert pour toutes vos activités familiales ou professionnelles',description:'Profitez d’un espace ouvert, convivial et authentique pour organiser vos activités familiales ou professionnelles à Mbind Sereer, dans un cadre naturel propice aux rencontres, aux échanges et aux moments partagés.'}
];
const festival=Array.from({length:16},(_,i)=>`assets/festival/festival-${String(i+1).padStart(2,'0')}.webp`);
const gallery=Array.from({length:20},(_,i)=>`assets/gallery/gallery-${String(i+1).padStart(2,'0')}.webp`);
const room=[{image:'assets/rooms/Ext1.jpeg',title:'Extérieur du gîte — vue 1'},{image:'assets/rooms/Ext2.jpeg',title:'Extérieur du gîte — vue 2'},{image:'assets/rooms/Int1.jpeg',title:'Intérieur du gîte — vue 1'},{image:'assets/rooms/Int2.jpeg',title:'Intérieur du gîte — vue 2'}];
const sets={room,dishes:[...dishes,...juices].map(x=>({image:x.image,title:x.name})),activities:activities.flatMap(x=>x.images.map(image=>({image,title:x.name}))),festival:festival.map((x,i)=>({image:x,title:`Festival Mbind Sereer — ${i+1}`})),gallery:gallery.map((x,i)=>({image:x,title:`Galerie Mbind Sereer — ${i+1}`}))};
function render(){document.querySelector('#dishes').innerHTML=dishes.map((x,i)=>`${i===0?'<div class="dishRowTitle"><span>01</span><div><small>Première rangée</small><h3>Plats à base de riz</h3></div></div>':''}${i===4?'<div class="dishRowTitle"><span>02</span><div><small>Deuxième rangée</small><h3>Couscous de mil</h3></div></div>':''}${i===8?'<div class="dishRowTitle"><span>03</span><div><small>Troisième rangée</small><h3>Douceurs traditionnelles</h3></div></div>':''}<article class="card"><button class="pic trigger" data-gallery="dishes" data-index="${i}"><img src="${x.image}" alt="${x.name}" loading="lazy" decoding="async"><span class="num">${String(i+1).padStart(2,'0')}</span></button><div class="copy"><h3>${x.name}</h3><p>${x.description}</p></div></article>`).join('');document.querySelector('#dishes').innerHTML+=`<div class="dishRowTitle"><span>04</span><div><small>Quatrième rangée</small><h3>Boissons traditionnelles</h3></div></div>`+juices.map((x,i)=>`<article class="card"><button class="pic trigger" data-gallery="dishes" data-index="${dishes.length+i}"><img src="${x.image}" alt="${x.name}" loading="lazy" decoding="async"><span class="num">${String(i+1).padStart(2,'0')}</span></button><div class="copy"><h3>${x.name}</h3><p>${x.description}</p></div></article>`).join('')+`<div class="showroomNotice"><strong>À découvrir sur place</strong><span>Les plats et boissons présentés ici constituent une sélection de notre vitrine culinaire. D’autres délices peuvent être disponibles sur commande, selon les produits et les possibilités du moment.</span></div>`;let activityGalleryOffset=0;document.querySelector('#activities').innerHTML=activities.map((x,i)=>{let base=activityGalleryOffset;activityGalleryOffset+=x.images.length;return `<article class="activityCard" data-activity-index="${i}" data-slide="0"><div class="activityMedia"><button type="button" class="pic trigger activityMainPhoto" data-gallery="activities" data-index="${base}"><img src="${x.images[0]}" alt="${x.name}" loading="lazy" decoding="async"></button>${x.images.length>1?`<button type="button" class="activityArrow activityPrev" aria-label="Photo précédente">←</button><button type="button" class="activityArrow activityNext" aria-label="Photo suivante">→</button><div class="activityDots">${x.images.map((_,j)=>`<button type="button" class="activityDot ${j===0?'active':''}" data-slide="${j}" aria-label="Photo ${j+1}"></button>`).join('')}</div>`:''}</div><div class="activityCopy"><span class="num">${String(i+1).padStart(2,'0')}</span><h3>${x.name}</h3><p>${x.description}</p></div></article>`}).join('');document.querySelector('#festivalGrid').innerHTML=festival.map((x,i)=>`<button class="fest trigger" data-gallery="festival" data-index="${i}"><img src="${x}" alt="Festival Mbind Sereer ${i+1}" loading="lazy" decoding="async"></button>`).join('');document.querySelector('#gallery').innerHTML=gallery.map((x,i)=>`<button class="galleryItem trigger" data-gallery="gallery" data-index="${i}"><img src="${x}" alt="Galerie Mbind Sereer ${i+1}" loading="lazy" decoding="async"><span class="num">${String(i+1).padStart(2,'0')}</span></button>`).join('');document.querySelectorAll('img').forEach(im=>im.addEventListener('error',()=>{if(!im.dataset.fallback){im.dataset.fallback=1;im.src=placeholder}}))}
render();
// Rotate the room's exterior and interior photos independently every four seconds.
const roomSlides = [
  { selector: '.room .photo:not(.second) img', images: ['assets/rooms/Ext1.jpeg', 'assets/rooms/Ext2.jpeg'], alts: ['Extérieur du gîte — vue 1', 'Extérieur du gîte — vue 2'] },
  { selector: '.room .photo.second img', images: ['assets/rooms/Int1.jpeg', 'assets/rooms/Int2.jpeg'], alts: ['Intérieur du gîte — vue 1', 'Intérieur du gîte — vue 2'] }
];
roomSlides.forEach(({selector, images, alts}) => {
  const img = document.querySelector(selector);
  if (!img || images.length < 2) return;
  let slide = 0;
  window.setInterval(() => {
    slide = (slide + 1) % images.length;
    img.src = images[slide];
    img.alt = alts[slide];
    img.dataset.slide = String(slide);
  }, 4000);
});
// Defer the 4-minute festival video until the visitor approaches the Festival section.
const festivalSection=document.querySelector('#festival');
const festivalVideo=document.querySelector('#festivalVideo');
if(festivalSection && festivalVideo){
  const source=festivalVideo.querySelector('source[data-src]');
  const loadFestivalVideo=()=>{
    if(!source || source.src) return;
    source.src=source.dataset.src;
    festivalVideo.load();
  };
  if('IntersectionObserver' in window){
    const videoObserver=new IntersectionObserver(entries=>{
      if(entries.some(entry=>entry.isIntersecting)){
        loadFestivalVideo();
        videoObserver.disconnect();
      }
    },{rootMargin:'700px 0px'});
    videoObserver.observe(festivalSection);
  }else{
    loadFestivalVideo();
  }
}
document.querySelectorAll('.activityCard').forEach(card=>{
  const activity=activities[Number(card.dataset.activityIndex)], img=card.querySelector('.activityMainPhoto img');
  if(!activity || activity.images.length<2) return;
  const dots=[...card.querySelectorAll('.activityDot')];
  let slide=0, timer;
  const show=(n)=>{slide=(n+activity.images.length)%activity.images.length;img.src=activity.images[slide];img.loading='lazy';img.decoding='async';card.dataset.slide=slide;dots.forEach((d,i)=>d.classList.toggle('active',i===slide));};
  card.querySelector('.activityPrev').onclick=e=>{e.stopPropagation();show(slide-1);reset()};
  card.querySelector('.activityNext').onclick=e=>{e.stopPropagation();show(slide+1);reset()};
  dots.forEach(d=>d.onclick=e=>{e.stopPropagation();show(Number(d.dataset.slide));reset()});
  const reset=()=>{clearInterval(timer);timer=setInterval(()=>show(slide+1),5000)};
  reset();
});
const lb=document.querySelector('#lightbox'),lbImg=document.querySelector('#lbImg'),lbTitle=document.querySelector('#lbTitle'),lbCounter=document.querySelector('#lbCounter');let current='room',idx=0;
function update(){let a=sets[current],x=a[idx];lbImg.src=x.image;lbTitle.textContent=x.title;lbCounter.textContent=`${idx+1} / ${a.length}`}
function open(g,i){current=g;idx=i;update();lb.classList.add('open');document.body.style.overflow='hidden'}function close(){lb.classList.remove('open');document.body.style.overflow=''}function next(){idx=(idx+1)%sets[current].length;update()}function prev(){idx=(idx-1+sets[current].length)%sets[current].length;update()}
document.addEventListener('click',e=>{let t=e.target.closest('.trigger,[data-gallery]');if(t&&t.dataset.gallery)open(t.dataset.gallery,Number(t.dataset.index))});document.querySelector('.close').onclick=close;document.querySelector('.next').onclick=next;document.querySelector('.prev').onclick=prev;lb.onclick=e=>{if(e.target===lb)close()};document.addEventListener('keydown',e=>{if(!lb.classList.contains('open'))return;if(e.key==='Escape')close();if(e.key==='ArrowRight')next();if(e.key==='ArrowLeft')prev()});let tx=0;lb.addEventListener('touchstart',e=>tx=e.changedTouches[0].screenX,{passive:true});lb.addEventListener('touchend',e=>{let d=e.changedTouches[0].screenX-tx;if(Math.abs(d)>45)d<0?next():prev()},{passive:true});
const header=document.querySelector('#header'),menu=document.querySelector('.menu'),nav=document.querySelector('.header nav');window.addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>30),{passive:true});menu.onclick=()=>nav.classList.toggle('open');document.querySelectorAll('.header nav a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
const cin=document.querySelector('#in'),cout=document.querySelector('#out'),type=document.querySelector('#type'),nights=document.querySelector('#nights'),total=document.querySelector('#total'),guestsWrap=document.querySelector('#guestsWrap'),stayFields=document.querySelector('#stayFields'),eventFields=document.querySelector('#eventFields'),eventType=document.querySelector('#eventType'),eventDate=document.querySelector('#eventDate'),eventDuration=document.querySelector('#eventDuration'),durationLabel=document.querySelector('#durationLabel');
function calc(){if(type.value && type.selectedOptions[0]?.dataset.kind==='event'){durationLabel.textContent='Durée souhaitée';nights.textContent=eventDuration.value||'—';total.textContent='Tarif à confirmer';return}if(!cin.value||!cout.value){nights.textContent='— nuit';total.textContent='Tarif à confirmer';return}const n=new Date(cout.value)-new Date(cin.value);let days=Math.round(n/86400000);if(days<=0){nights.textContent='Dates à vérifier';total.textContent='—';return}nights.textContent=`${days} nuit${days>1?'s':''}`;let p=Number(type.selectedOptions[0]?.dataset.price||0);total.textContent=p?`${(p*days).toLocaleString('fr-FR')} FCFA`:'Tarif à confirmer'}
function updateBookingType(){const isEvent=type.selectedOptions[0]?.dataset.kind==='event';stayFields.style.display=isEvent?'none':'block';eventFields.style.display=isEvent?'block':'none';guestsWrap.style.display=isEvent?'none':'block';cin.required=!isEvent;cout.required=!isEvent;eventType.required=isEvent;eventDate.required=isEvent;eventDuration.required=isEvent;durationLabel.textContent=isEvent?'Durée souhaitée':'Durée';calc()}
type.onchange=updateBookingType;cin.onchange=()=>{cout.min=cin.value;calc()};cout.onchange=calc;eventType.onchange=calc;eventDate.onchange=calc;eventDuration.onchange=calc;
const bookingForm=document.querySelector('#bookingForm');bookingForm.onsubmit=e=>{const isEvent=type.selectedOptions[0]?.dataset.kind==='event';if(isEvent){if(!eventDate.value||!eventType.value||!eventDuration.value){e.preventDefault();toast('Veuillez compléter les informations de votre événement.');return}}else{if(!cin.value||!cout.value)return;if(new Date(cout.value)<=new Date(cin.value)){e.preventDefault();toast('Veuillez choisir une date de départ après la date d’arrivée.');return}}document.querySelector('#nightsField').value=nights.textContent;document.querySelector('#totalField').value=total.textContent;toast('Votre demande est en cours d’envoi à Mbind Sereer…');setTimeout(()=>toast('Demande envoyée ! Mbind Sereer vous répondra par e-mail.'),1200)};function toast(t){let x=document.querySelector('#toast');x.textContent=t;x.classList.add('show');clearTimeout(window.tt);window.tt=setTimeout(()=>x.classList.remove('show'),4200)}document.querySelector('#year').textContent=new Date().getFullYear();

// Hero news box: rotate its accent palette every four seconds until real announcements are added.
const newsBox=document.querySelector('.newsBox');
if(newsBox){const palettes=[['#f0c987','#3b2417'],['#b7d8bd','#183c2a'],['#d7c5f2','#34204f'],['#f3b5a7','#4b211b'],['#b9dbe8','#173847']];let paletteIndex=0;const applyNewsPalette=()=>{const [accent,ink]=palettes[paletteIndex];newsBox.style.setProperty('--news-accent',accent);newsBox.style.setProperty('--news-ink',ink);newsBox.classList.remove('newsPulse');void newsBox.offsetWidth;newsBox.classList.add('newsPulse');paletteIndex=(paletteIndex+1)%palettes.length;};applyNewsPalette();setInterval(applyNewsPalette,4000);}

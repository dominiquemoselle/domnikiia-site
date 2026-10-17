// All portfolio videos live here. Drop the matching .mp4 into assets/work/
// and every card that references it starts playing automatically.
const WORK = {
  "dermazen-david-goliath":   { title: "David & Goliath: F*ck Big Pharma", client: "Dermazen", tag: "Storytelling" },
  "dermazen-most-people":     { title: "Most People Get This Wrong", client: "Dermazen", tag: "Myth-busting" },
  "dermazen-men-with-beard":  { title: "Men With Beard", client: "Dermazen", tag: "Persona" },
  "dermazen-makeup-flakes":   { title: "Makeup Flakes", client: "Dermazen", tag: "Problem / solution" },
  "bedthreads-sheets-harmful":{ title: "Sheets Are Harmful", client: "Bed Threads", tag: "Myth-busting" },
  "bedthreads-if-welcome":    { title: "If… You're Welcome", client: "Bed Threads", tag: "If-statement hook" },
  "bedthreads-pick-sheets":   { title: "How to Pick Sheets Safe for Skin", client: "Bed Threads", tag: "Education" },
  "bedthreads-david-goliath": { title: "David & Goliath", client: "Bed Threads", tag: "Storytelling" },
  "bedthreads-objection":     { title: "Price Objection Handling", client: "Bed Threads", tag: "Objection handling" },
  "ijw-you-will-not-smell":   { title: "You Will Not Smell", client: "IJW", tag: "Problem / solution" },
  "ijw-smell-better-naked":   { title: "Smell Better Naked", client: "IJW", tag: "Bold claim" },
  "ijw-ugc-whisper":          { title: "UGC Whispering Ad", client: "IJW", tag: "UGC" },
  "ijw-interview":            { title: "Fish Odor Syndrome Interview", client: "IJW", tag: "Interview" },
  "hears-before-after":       { title: "Before vs After", client: "Hears", tag: "Transformation" },
  "hears-david-goliath":      { title: "David & Goliath Storytelling", client: "Hears", tag: "Storytelling" },
  "hears-stitch":             { title: "Stitch Ad", client: "Hears", tag: "Native / stitch" },
  "hears-if-statement":       { title: "If-Statement", client: "Hears", tag: "If-statement hook" },
};

function renderWork(grid) {
  grid.dataset.ids.split(',').map(s => s.trim()).filter(Boolean).forEach(id => {
    const w = WORK[id];
    if (!w) return;
    const src = `/assets/work/${id}.mp4`;
    const card = document.createElement('button');
    card.className = 'work';
    card.type = 'button';
    card.innerHTML = `
      <div class="work-media">
        <video muted loop playsinline autoplay preload="metadata"></video>
        <span class="play">▶ Play with sound</span>
      </div>
      <div class="work-meta">
        <div><h3></h3><p class="muted"></p></div>
        <span class="tag"></span>
      </div>`;
    card.querySelector('h3').textContent = w.title;
    card.querySelector('.work-meta p').textContent = w.client;
    card.querySelector('.tag').textContent = w.tag;
    const v = card.querySelector('video');
    v.addEventListener('error', () => {
      card.classList.add('empty');
      v.remove();
      const soon = document.createElement('div');
      soon.className = 'soon';
      soon.textContent = 'Video coming soon';
      card.querySelector('.work-media').prepend(soon);
    }, { once: true });
    v.src = src;
    card.addEventListener('click', () => { if (!card.classList.contains('empty')) openModal(src); });
    grid.appendChild(card);
  });
}

const modal = document.createElement('div');
modal.className = 'modal';
modal.setAttribute('role', 'dialog');
modal.setAttribute('aria-modal', 'true');
modal.setAttribute('aria-label', 'Video player');
modal.innerHTML = '<button class="close" aria-label="Close">✕</button><video controls playsinline></video>';
document.body.appendChild(modal);
const mv = modal.querySelector('video');
function openModal(src) { mv.src = src; modal.classList.add('open'); mv.play().catch(() => {}); }
function closeModal() { modal.classList.remove('open'); mv.pause(); mv.removeAttribute('src'); mv.load(); }
modal.addEventListener('click', e => { if (e.target !== mv) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('open')) closeModal(); });

document.querySelectorAll('.work-grid[data-ids]').forEach(renderWork);

const track = document.getElementById('marquee');
if (track) {
  const words = ["Creative Strategy", "Meta Ads", "Hook & Angle Libraries", "UGC", "Creative Ops", "Full-Funnel", "TikTok Ads", "Testing Loops"];
  [...words, ...words].forEach(t => {
    const a = document.createElement('span'); a.textContent = t; track.appendChild(a);
    const s = document.createElement('span'); s.textContent = '✦'; track.appendChild(s);
  });
}

document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

const io = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.08 }) : null;
document.querySelectorAll('.reveal').forEach(el => io ? io.observe(el) : el.classList.add('in'));

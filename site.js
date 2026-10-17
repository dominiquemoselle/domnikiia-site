// Portfolio data. No brand names here: this file is public.
// Formats are listed in display order. Within a format, lower `rank` = better performance.
const FORMATS = [
  { id: "storytelling",  title: "Storytelling",                desc: "David vs Goliath narratives and brand stories that turn a category enemy into the reason to buy." },
  { id: "talking-head",  title: "Talking-head “yapper” ads",   desc: "A creator speaking straight to camera: myth-busting, education and pattern-interrupt hooks." },
  { id: "problem",       title: "Problem → solution & demo",   desc: "Agitate a specific pain, then show the product solving it on camera." },
  { id: "ugc",           title: "UGC & native formats",        desc: "Ads that look like organic content: stitches, whispers and creator-style edits." },
  { id: "investigation", title: "Interviews & investigation",  desc: "Street-style interviews and amateur-investigation formats that build curiosity and trust." },
  { id: "proof",         title: "Proof & objection handling",  desc: "Before/after transformations and answers to the objections that stop people buying." },
  { id: "ai",            title: "AI-generated ads",            desc: "Concepts produced with AI video and voice tools to test angles fast and cheaply." },
];

// tier: "9-figure brand" | "8-figure brand" | "7-figure brand" (optional)
// result: short headline number shown on the card, e.g. "$120k spend · 2.4 ROAS" (optional)
const WORK = {
  "storytelling-01":  { format: "storytelling",  rank: 1, title: "The Big-Pharma Underdog",        category: "Skincare" },
  "storytelling-02":  { format: "storytelling",  rank: 2, title: "Small Brand vs The Giants",      category: "Bedding",          tier: "7-figure brand" },
  "storytelling-03":  { format: "storytelling",  rank: 3, title: "David & Goliath Story",          category: "Hearing health" },
  "talking-head-01":  { format: "talking-head",  rank: 1, title: "Sheets Are Harmful",             category: "Bedding",          tier: "7-figure brand" },
  "talking-head-02":  { format: "talking-head",  rank: 2, title: "Most People Get This Wrong",     category: "Skincare" },
  "talking-head-03":  { format: "talking-head",  rank: 3, title: "How to Pick Skin-Safe Sheets",   category: "Bedding",          tier: "7-figure brand" },
  "talking-head-04":  { format: "talking-head",  rank: 4, title: "If… You're Welcome",             category: "Bedding",          tier: "7-figure brand" },
  "talking-head-05":  { format: "talking-head",  rank: 5, title: "If-Statement Hook",              category: "Hearing health" },
  "problem-01":       { format: "problem",       rank: 1, title: "You Will Not Smell",             category: "Personal care" },
  "problem-02":       { format: "problem",       rank: 2, title: "Makeup Flakes",                  category: "Skincare" },
  "problem-03":       { format: "problem",       rank: 3, title: "Men With Beards",                category: "Skincare" },
  "ugc-01":           { format: "ugc",           rank: 1, title: "Smell Better Naked",             category: "Personal care" },
  "ugc-02":           { format: "ugc",           rank: 2, title: "The Whisper Ad",                 category: "Personal care" },
  "ugc-03":           { format: "ugc",           rank: 3, title: "Stitch Reaction",                category: "Hearing health" },
  "investigation-01": { format: "investigation", rank: 1, title: "The Odor Interview",             category: "Personal care" },
  "proof-01":         { format: "proof",         rank: 1, title: "Before vs After",                category: "Hearing health" },
  "proof-02":         { format: "proof",         rank: 2, title: "Price Objection",                category: "Bedding",          tier: "7-figure brand" },
};

function workCard(id) {
  const w = WORK[id];
  if (!w) return null;
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
  card.querySelector('.work-meta p').textContent = [w.category, w.tier].filter(Boolean).join(' · ');
  const tag = card.querySelector('.tag');
  if (w.result) tag.textContent = w.result; else tag.remove();
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
  return card;
}

function renderWork(grid) {
  grid.dataset.ids.split(',').map(s => s.trim()).forEach(id => {
    const card = workCard(id);
    if (card) grid.appendChild(card);
  });
}

// Portfolio page: one section per format that has videos, best performers first.
function renderFormats(root) {
  FORMATS.forEach(f => {
    const ids = Object.keys(WORK).filter(id => WORK[id].format === f.id)
      .sort((a, b) => (WORK[a].rank ?? 99) - (WORK[b].rank ?? 99));
    if (!ids.length) return;
    const sec = document.createElement('div');
    sec.className = 'brand reveal';
    sec.id = f.id;
    sec.innerHTML = `<div class="brand-head"><div><h3></h3><p class="muted format-desc"></p></div></div><div class="work-grid"></div>`;
    sec.querySelector('h3').textContent = f.title;
    sec.querySelector('.format-desc').textContent = f.desc;
    const grid = sec.querySelector('.work-grid');
    ids.forEach(id => grid.appendChild(workCard(id)));
    root.appendChild(sec);
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
const formatsRoot = document.getElementById('formats');
if (formatsRoot) renderFormats(formatsRoot);

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

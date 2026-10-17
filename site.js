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
// result: optional short highlight shown above the title, e.g. "Top spender"
// stats: Motion-style numbers shown under the video (any subset):
//   { roas: "2.4x", spend: "$120K", hook: "38%", hold: "12%" }
const WORK = {
  "storytelling-01": { format: "storytelling",  rank: 1, title: "David & Goliath Story",          category: "Skincare",       stats: { roas: "1.46x", spend: "$160K", hook: "30%" } },
  "storytelling-02": { format: "storytelling",  rank: 2, title: "Dealerships Lie To You",          category: "Car diagnostics", tier: "8-figure brand" },
  "storytelling-03": { format: "storytelling",  rank: 3, title: "Brand Inspiration Reel",          category: "Bedding",        tier: "7-figure brand", stats: { roas: "6.4x", spend: "$63K" } },
  "storytelling-04": { format: "storytelling",  rank: 4, title: "Sheets Are Harmful",              category: "Bedding",        tier: "7-figure brand" },
  "storytelling-05": { format: "storytelling",  rank: 5, title: "Sheets Are Harmful — Iteration",  category: "Bedding",        tier: "7-figure brand" },
  "storytelling-06": { format: "storytelling",  rank: 6, title: "Brand Story",                     category: "Haircare",       tier: "8-figure brand" },

  "talking-head-01": { format: "talking-head",  rank: 1, title: "Yapper — Myth-Busting",           category: "Bedding",        tier: "7-figure brand" },
  "talking-head-02": { format: "talking-head",  rank: 2, title: "Dad Advice",                      category: "Car diagnostics", tier: "8-figure brand" },
  "talking-head-03": { format: "talking-head",  rank: 3, title: "Expert Authority",                category: "Skincare" },
  "talking-head-04": { format: "talking-head",  rank: 4, title: "Yapper — Pattern Interrupt",      category: "Personal care" },
  "talking-head-05": { format: "talking-head",  rank: 5, title: "Expert Authority",                category: "Personal care" },
  "talking-head-06": { format: "talking-head",  rank: 6, title: "If… You're Welcome",              category: "Personal care" },

  "problem-01": { format: "problem", rank: 1, title: "You Will Not Smell",   category: "Personal care", stats: { spend: "$83K", hook: "55%" } },
  "problem-02": { format: "problem", rank: 2, title: "Color Combinations",   category: "Bedding",  tier: "7-figure brand" },
  "problem-03": { format: "problem", rank: 3, title: "How To Style Sheets", category: "Bedding",  tier: "7-figure brand" },
  "problem-04": { format: "problem", rank: 4, title: "Cotton 101",          category: "Bedding",  tier: "7-figure brand" },
  "problem-05": { format: "problem", rank: 5, title: "Fabric Education",    category: "Bedding",  tier: "7-figure brand" },
  "problem-06": { format: "problem", rank: 6, title: "Cost Per Sleep",      category: "Bedding",  tier: "7-figure brand" },
  "problem-07": { format: "problem", rank: 7, title: "Scalp Problem Reveal", category: "Skincare" },
  "problem-08": { format: "problem", rank: 8, title: "Crash Moment",        category: "Smart helmets" },

  "ugc-01": { format: "ugc", rank: 1, title: "TV Show Stitch",   category: "Personal care" },
  "ugc-02": { format: "ugc", rank: 2, title: "ASMR Unboxing",    category: "Pet food", tier: "9-figure brand" },
  "ugc-03": { format: "ugc", rank: 3, title: "ASMR Feeding",     category: "Pet food", tier: "9-figure brand" },
  "ugc-04": { format: "ugc", rank: 4, title: "Rider POV",        category: "Smart helmets" },

  "investigation-01": { format: "investigation", rank: 1, title: "Amateur Investigation",               category: "Car diagnostics", tier: "8-figure brand", stats: { spend: "$500K+", hook: "71%" } },
  "investigation-02": { format: "investigation", rank: 2, title: "Amateur Investigation — Iteration",    category: "Car diagnostics", tier: "8-figure brand" },
  "investigation-03": { format: "investigation", rank: 3, title: "Amateur Investigation — Iteration 2",  category: "Car diagnostics", tier: "8-figure brand" },
  "investigation-04": { format: "investigation", rank: 4, title: "Amateur Investigation — AU",           category: "Car diagnostics", tier: "8-figure brand" },
  "investigation-05": { format: "investigation", rank: 5, title: "Is It A Scam?",                        category: "Car diagnostics", tier: "8-figure brand" },

  "proof-01": { format: "proof", rank: 1, title: "Before vs After",  category: "Haircare", tier: "8-figure brand", stats: { spend: "$103K", hook: "44%" } },
  "proof-02": { format: "proof", rank: 2, title: "Comment Reply",    category: "Haircare", tier: "8-figure brand" },
  "proof-03": { format: "proof", rank: 3, title: "We're Not Cheap",  category: "Bedding",  tier: "7-figure brand" },
  "proof-04": { format: "proof", rank: 4, title: "Price Objection",  category: "Bedding",  tier: "7-figure brand" },
  "proof-05": { format: "proof", rank: 5, title: "Comment Reply",    category: "Bedding",  tier: "7-figure brand" },

  "ai-01": { format: "ai", rank: 1, title: "Cartoon AI Concept",        category: "Haircare",   tier: "8-figure brand" },
  "ai-02": { format: "ai", rank: 2, title: "AI Crash Simulation",       category: "Smart helmets" },
  "ai-03": { format: "ai", rank: 3, title: "AI Stitch — Stage Talk",    category: "Personal care" },
  "ai-04": { format: "ai", rank: 4, title: "Cartoon Mechanism Explainer", category: "Supplements" },
};

// Top 10 by spend for the homepage "Selected work" row. Spend shown only where verified
// from ad-account data; ids without a confirmed figure still appear (diversity of brand/format)
// but without a spend badge — see note in repo root.
const SELECTED_WORK = [
  "investigation-01", "talking-head-01", "ugc-02", "proof-01", "storytelling-01",
  "ai-02", "talking-head-03", "investigation-05", "storytelling-03", "problem-01",
];

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
  if (w.stats) {
    const labels = { roas: 'ROAS', spend: 'Spend', hook: 'Hook rate', hold: 'Hold rate' };
    const row = document.createElement('dl');
    row.className = 'metrics';
    Object.keys(labels).filter(k => w.stats[k]).forEach(k => {
      const d = document.createElement('div');
      d.innerHTML = '<dt></dt><dd></dd>';
      d.querySelector('dt').textContent = labels[k];
      d.querySelector('dd').textContent = w.stats[k];
      row.appendChild(d);
    });
    card.querySelector('.work-meta').after(row);
  }
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

// Homepage "Selected work": horizontal numbered row, top 10 by spend.
function renderSelectedWork(track) {
  SELECTED_WORK.forEach((id, i) => {
    const w = WORK[id];
    if (!w) return;
    const card = workCard(id);
    if (!card) return;
    card.classList.add('ranked');
    const n = document.createElement('span');
    n.className = 'rank-n';
    n.textContent = String(i + 1).padStart(2, '0');
    card.prepend(n);
    if (w.stats && w.stats.spend) {
      const badge = document.createElement('span');
      badge.className = 'spend-badge';
      badge.textContent = w.stats.spend + ' spend';
      card.querySelector('.work-media').appendChild(badge);
    }
    track.appendChild(card);
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
const selectedTrack = document.getElementById('selected-work-track');
if (selectedTrack) renderSelectedWork(selectedTrack);
const formatsRoot = document.getElementById('formats');
if (formatsRoot) renderFormats(formatsRoot);

// Generic horizontal scroll-snap carousel: arrow buttons + drag/swipe (native on touch).
function initCarousel(root) {
  const track = root.querySelector('.carousel-track');
  const prev = root.querySelector('.carousel-arrow.prev');
  const next = root.querySelector('.carousel-arrow.next');
  if (!track) return;
  const step = () => track.querySelector(':scope > *')?.getBoundingClientRect().width + 20 || 320;
  prev?.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  next?.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
}
document.querySelectorAll('.carousel-wrap').forEach(initCarousel);

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

// Portfolio data. No brand names here: this file is public.
// Formats are listed in display order. Within a format, lower `rank` = better performance.
const FORMATS = [
  { id: "ai",            title: "AI-generated ads",            desc: "Concepts produced with AI video and voice tools — street-style investigations, AI creators and cartoon explainers — blended here by performance, best results first." },
  { id: "storytelling",  title: "Storytelling",                desc: "David vs Goliath narratives and brand stories that turn a category enemy into the reason to buy." },
  { id: "talking-head",  title: "Talking-head “yapper” ads",   desc: "A creator speaking straight to camera: myth-busting, education and pattern-interrupt hooks." },
  { id: "problem",       title: "Problem → solution & demo",   desc: "Agitate a specific pain, then show the product solving it on camera." },
  { id: "ugc",           title: "UGC & native formats",        desc: "Ads that look like organic content: stitches, whispers and creator-style edits." },
  { id: "proof",         title: "Proof & objection handling",  desc: "Before/after transformations and answers to the objections that stop people buying." },
];

// tier: "9-figure brand" | "8-figure brand" | "7-figure brand" (optional)
// result: optional short highlight shown above the title, e.g. "Top spender"
// stats: Motion-style numbers shown under the video (any subset):
//   { roas: "2.4x", spend: "$120K", hook: "38%", hold: "12%" }
const WORK = {
  "storytelling-01": { format: "storytelling",  rank: 1, title: "David & Goliath Story",          category: "Skincare",       stats: { roas: "1.18x", spend: "$337K" } },
  "storytelling-02": { format: "storytelling",  rank: 2, title: "Dealerships Lie To You",          category: "Car diagnostics", tier: "8-figure brand" },
  "storytelling-04": { format: "storytelling",  rank: 4, title: "Sheets Are Harmful",              category: "Bedding",        tier: "7-figure brand", stats: { roas: "6x+", spend: "$30K+" } },
  "storytelling-07": { format: "storytelling",  rank: 7, title: "AI Crash Simulation",              category: "Smart helmets",  stats: { roas: "1.89x", spend: "$18K" } },
  "storytelling-08": { format: "storytelling",  rank: 8, title: "AI Rider POV",                     category: "Smart helmets",  stats: { roas: "1.89x", spend: "$13K" } },

  "talking-head-01": { format: "talking-head",  rank: 1, title: "Yapper — Myth-Busting",           category: "Bedding",        tier: "7-figure brand", stats: { roas: "6x+", spend: "$30K+" } },
  "talking-head-02": { format: "talking-head",  rank: 2, title: "Dad Advice",                      category: "Car diagnostics", tier: "8-figure brand", stats: { spend: "$86K", hold: "15%" } },
  "talking-head-03": { format: "talking-head",  rank: 3, title: "Expert Authority",                category: "Skincare" },
  "talking-head-04": { format: "talking-head",  rank: 4, title: "Yapper — Pattern Interrupt",      category: "Personal care" },
  "talking-head-05": { format: "talking-head",  rank: 5, title: "Expert Authority",                category: "Personal care" },
  "talking-head-06": { format: "talking-head",  rank: 6, title: "If… You're Welcome",              category: "Personal care" },

  "problem-01": { format: "problem", rank: 1, title: "You Will Not Smell",   category: "Personal care", stats: { spend: "$35K", roas: "1.13x" } },
  "problem-02": { format: "problem", rank: 2, title: "Color Combinations",   category: "Bedding",  tier: "7-figure brand", stats: { roas: "6x+", spend: "$30K+" } },
  "problem-04": { format: "problem", rank: 4, title: "Cotton 101",          category: "Bedding",  tier: "7-figure brand", stats: { roas: "6x+", spend: "$30K+" } },
  "problem-05": { format: "problem", rank: 5, title: "Fabric Education",    category: "Bedding",  tier: "7-figure brand", stats: { roas: "6x+", spend: "$30K+" } },
  "problem-06": { format: "problem", rank: 6, title: "Cost Per Sleep",      category: "Bedding",  tier: "7-figure brand", stats: { roas: "6x+", spend: "$30K+" } },
  "problem-07": { format: "problem", rank: 7, title: "Scalp Problem Reveal", category: "Skincare", stats: { roas: "1.26x", spend: "$66K" } },
  "problem-08": { format: "problem", rank: 8, title: "Crash Moment",        category: "Smart helmets", stats: { roas: "0.75x", spend: "$15K" } },

  "ugc-01": { format: "ugc", rank: 1, title: "TV Show Stitch",   category: "Personal care", stats: { spend: "$85K", roas: "1.03x" } },
  "ugc-02": { format: "ugc", rank: 2, title: "ASMR Unboxing",    category: "Pet food", tier: "9-figure brand", stats: { roas: "0.38x", spend: "$25K" } },
  "ugc-03": { format: "ugc", rank: 3, title: "ASMR Feeding",     category: "Pet food", tier: "9-figure brand", stats: { roas: "0.21x", spend: "$112K" } },
  "ugc-05": { format: "ugc", rank: 5, title: "Brand Inspiration Reel", category: "Bedding", tier: "7-figure brand", stats: { roas: "6.4x", spend: "$63K" } },
  "ugc-06": { format: "ugc", rank: 6, title: "How To Style Sheets",    category: "Bedding", tier: "7-figure brand", stats: { roas: "6x+", spend: "$30K+" } },
  "ugc-07": { format: "ugc", rank: 7, title: "How To Style — Iteration", category: "Bedding", tier: "7-figure brand", stats: { roas: "6x+", spend: "$30K+" } },
  "ugc-08": { format: "ugc", rank: 0, title: "Objection Handling", category: "Haircare", tier: "8-figure brand" },

  "proof-01": { format: "proof", rank: 1, title: "Before vs After",  category: "Haircare", tier: "8-figure brand", stats: { spend: "$260K", roas: "1.27x" } },
  "proof-02": { format: "proof", rank: 2, title: "Comment Reply",    category: "Haircare", tier: "8-figure brand", stats: { roas: "1.46x", spend: "$36K" } },
  "proof-03": { format: "proof", rank: 3, title: "We're Not Cheap",  category: "Bedding",  tier: "7-figure brand", stats: { roas: "6x+", spend: "$30K+" } },
  "proof-04": { format: "proof", rank: 4, title: "Price Objection",  category: "Bedding",  tier: "7-figure brand", stats: { roas: "6x+", spend: "$30K+" } },
  "proof-05": { format: "proof", rank: 5, title: "Comment Reply",    category: "Bedding",  tier: "7-figure brand", stats: { roas: "6x+", spend: "$30K+" } },

  "ai-02": { format: "ai", rank: 1, title: "Amateur Investigation",              category: "Car diagnostics", tier: "8-figure brand", stats: { spend: "$302K", hold: "17%" } },
  "ai-05": { format: "ai", rank: 2, title: "Amateur Investigation — Iteration",   category: "Car diagnostics", tier: "8-figure brand", stats: { spend: "$218K", hold: "30%" } },
  "ai-06": { format: "ai", rank: 3, title: "Amateur Investigation — Iteration 2", category: "Car diagnostics", tier: "8-figure brand", stats: { spend: "$92K",  hold: "31%" } },
  "ai-07": { format: "ai", rank: 4, title: "Amateur Investigation — AU",          category: "Car diagnostics", tier: "8-figure brand", stats: { spend: "$60K",  hold: "30%" } },
  "ai-01": { format: "ai", rank: 5, title: "Cartoon AI Concept",        category: "Haircare",   tier: "8-figure brand", stats: { roas: "1.37x", spend: "$43K" } },
  "ai-03": { format: "ai", rank: 6, title: "AI Stitch — Stage Talk",    category: "Personal care", stats: { roas: "1.05x", spend: "$38K" } },
  "ai-08": { format: "ai", rank: 7, title: "Is It A Scam?",            category: "Car diagnostics", tier: "8-figure brand" },
  "ai-04": { format: "ai", rank: 8, title: "Cartoon Mechanism Explainer", category: "Supplements" },
};

// Top 10 by spend for the homepage "Selected work" row. Spend shown only where verified
// from ad-account data; ids without a confirmed figure still appear (diversity of brand/format)
// but without a spend badge — see note in repo root.
const SELECTED_WORK = [
  "ai-02", "storytelling-01", "proof-01", "talking-head-01", "ugc-03",
  "ai-01", "talking-head-02", "problem-07", "ugc-05", "problem-01",
];

// Homepage-only stat overrides: the Selected Work row shows the TOTAL spend across all
// iterations of a concept (not the single iteration's own number shown on the portfolio page).
const SELECTED_WORK_STATS_OVERRIDE = {
  "ai-02": { spend: "$673K", hold: "31%" },
};

// Shared observer: sets a video's src (triggering load + autoplay) only once its
// card scrolls near the viewport, instead of every card fetching on page load.
const lazyVideoObserver = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const v = entry.target;
          v.src = v.dataset.src;
          lazyVideoObserver.unobserve(v);
        }
      });
    }, { rootMargin: '400px 0px' })
  : null;

function lazyLoadVideo(v, src) {
  if (!lazyVideoObserver) { v.src = src; return; }
  v.dataset.src = src;
  lazyVideoObserver.observe(v);
}

function workCard(id, statsOverride) {
  const w = WORK[id];
  if (!w) return null;
  const stats = statsOverride || w.stats;
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
  if (stats) {
    const labels = { roas: 'ROAS', spend: 'Spend', hook: 'Hook rate', hold: 'Hold rate' };
    const row = document.createElement('dl');
    row.className = 'metrics';
    Object.keys(labels).filter(k => stats[k]).forEach(k => {
      const d = document.createElement('div');
      d.innerHTML = '<dt></dt><dd></dd>';
      d.querySelector('dt').textContent = labels[k];
      d.querySelector('dd').textContent = stats[k];
      row.appendChild(d);
    });
    card.querySelector('.work-meta').after(row);
  }
  const v = card.querySelector('video');
  let retried = false;
  v.addEventListener('error', () => {
    // Transient network/CDN hiccups (common right after a fresh deploy) shouldn't
    // permanently mark a working video as missing — retry once before giving up.
    if (!retried) {
      retried = true;
      setTimeout(() => { v.src = src; v.load(); }, 1500);
      return;
    }
    card.classList.add('empty');
    v.remove();
    const soon = document.createElement('div');
    soon.className = 'soon';
    soon.textContent = 'Video coming soon';
    card.querySelector('.work-media').prepend(soon);
  });
  // Lazy-load: only fetch/play the video once its card is near the viewport, so a
  // page with dozens of cards doesn't try to autoplay them all at once on load.
  lazyLoadVideo(v, src);
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
    const override = SELECTED_WORK_STATS_OVERRIDE[id];
    const card = workCard(id, override);
    if (!card) return;
    card.classList.add('ranked');
    const stats = override || w.stats;
    if (stats && stats.spend) {
      const badge = document.createElement('span');
      badge.className = 'spend-badge';
      badge.textContent = stats.spend;
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
    sec.innerHTML = `<div class="brand-head"><div><h3></h3><p class="muted format-desc"></p></div></div>
      <div class="carousel-wrap">
        <button class="carousel-arrow prev" aria-label="Previous">‹</button>
        <div class="carousel"><div class="carousel-track format-row"></div></div>
        <button class="carousel-arrow next" aria-label="Next">›</button>
      </div>`;
    sec.querySelector('h3').textContent = f.title;
    sec.querySelector('.format-desc').textContent = f.desc;
    const grid = sec.querySelector('.format-row');
    ids.forEach(id => grid.appendChild(workCard(id)));
    root.appendChild(sec);
    initCarousel(sec.querySelector('.carousel-wrap'));
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

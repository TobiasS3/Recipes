/* Rezepte vom Besten — alles, was die Seiten können.
   Jede Seite setzt <body data-page="index"> oder data-page="<kapitel-id>". */
(() => {
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const store = {
  get(k, d) { try { const v = localStorage.getItem('rvb:' + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem('rvb:' + k, JSON.stringify(v)); } catch {} }
};
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

const CH = {}; CHAPTERS.forEach((c, i) => { c.n = i + 1; CH[c.id] = c; });
const REC = {}; RECIPES.forEach(r => { r.key = r.ch + '/' + r.id; r.href = CH[r.ch].file + '#' + r.id; REC[r.key] = r; });
const byChapter = id => CH[id].recipes.map(k => REC[id + '/' + k]);
const page = document.body.dataset.page;
const here = CH[page];
if (here) document.documentElement.style.setProperty('--ch', here.color);

const I = {
  list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6h11M9 12h11M9 18h11"/><path d="m3.5 6 1 1 2-2M3.5 12l1 1 2-2M3.5 18l1 1 2-2"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2M10 2h4"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  pot: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10h16v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"/><path d="M2 10h20M9 6c0-1 1-1 1-2M14 6c0-1 1-1 1-2"/></svg>',
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h2l2.4 11h10.2L20 8H6.2"/><circle cx="9" cy="19.5" r="1.4"/><circle cx="17" cy="19.5" r="1.4"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>',
  tick: '<svg viewBox="0 0 28 26"><path d="M4 14.5 10.5 21 25 4"/></svg>',
  stepTick: '<svg viewBox="0 0 58 52"><path d="M8 28c6 5 10 10 14 16C30 28 40 15 52 6"/></svg>',
  orn: '<svg viewBox="0 0 120 20" fill="none" stroke="currentColor" stroke-width="1"><path d="M0 10h44M76 10h44"/><path d="M60 3c4 4 4 10 0 14-4-4-4-10 0-14z"/><circle cx="50" cy="10" r="1.6" fill="currentColor"/><circle cx="70" cy="10" r="1.6" fill="currentColor"/></svg>'
};

/* ───────── Mengen & Portionen ───────── */
const FR = { '½': .5, '¼': .25, '¾': .75, '⅓': 1 / 3, '⅔': 2 / 3 };
const NUM = /(\d+(?:[.,]\d+)?)?\s*([½¼¾⅓⅔])?/;
function baseOf(r) {
  const p = r.portions.replace(/^ca\.\s*/, '');
  const m = p.match(/^(\d+)(?:\s*[-–]\s*(\d+))?\s*(.*)$/);
  if (!m || /×|∅|cm\b|skalierbar/.test(r.portions)) return { n: 1, factor: true };
  let unit = m[3].replace(/\(.*?\)/g, '').replace(/\s+à\s+.*$/, '').trim();
  return { n: +m[1], unit, factor: false };
}
const unitFor = (b, n) => b.factor ? 'fache Menge' : (n === 1 ? b.unit.replace(/^Personen$/, 'Person').replace(/^Gläser$/, 'Glas').replace(/^Pizzen$/, 'Pizza').replace(/^Brote$/, 'Brot') : b.unit.replace(/^Person$/, 'Personen'));
function fmtNum(v, metric, fine) {
  if (metric && v >= 100) return String(Math.round(v / 10) * 10);
  if (metric && v >= 20) return String(Math.round(v / 5) * 5);
  const step = metric || fine ? 4 : 2;
  const q = Math.max(1 / step, Math.round(v * step) / step), w = Math.floor(q), f = q - w;
  if (q === 0) return (Math.round(v * 10) / 10).toString().replace('.', ',');
  const fc = { 0: '', .25: '¼', .5: '½', .75: '¾' }[f];
  return (w ? w : '') + fc || '0';
}
function scaleAmt(a, f) {
  if (f === 1 || /^—/.test(a) || /Pers\./.test(a)) return a;
  const metric = /[\d\s](g|kg|ml|l)\b/i.test(a), fine = /\b(EL|TL)\b/.test(a);
  return a.replace(/\d+(?:[.,]\d+)?\s*[½¼¾⅓⅔]?|[½¼¾⅓⅔]/g, tok => {
    const m = tok.match(NUM);
    const v = (m[1] ? parseFloat(m[1].replace(',', '.')) : 0) + (m[2] ? FR[m[2]] : 0);
    return fmtNum(v * f, metric, fine) + (/\s$/.test(tok) ? ' ' : '');
  });
}
const servingsOf = r => { const b = baseOf(r); return store.get('srv:' + r.key, b.n); };
const factorOf = r => servingsOf(r) / baseOf(r).n;
const servLabel = r => { const b = baseOf(r), n = servingsOf(r); return b.factor ? (n === 1 ? '' : String(n).replace('.', ',') + '-fache Menge') : 'für ' + n + ' ' + unitFor(b, n); };

/* ───────── Kleine Bausteine ───────── */
const minutesLabel = r => r.time;
const stamp = r => r.rating == null ? '<span class="stamp new">Neu</span>' : `<span class="stamp" aria-label="Bewertung ${String(r.rating).replace('.', ',')} von 10"><b>${String(r.rating).replace('.', ',')}</b><small>von 10</small></span>`;
const photo = (r, full) => (full ? r.img : r.thumb) ? `<img src="${encodeURI(full ? r.img : r.thumb)}" alt="${esc(r.name)}" loading="lazy">` : `<span class="noimg">Foto folgt</span>`;
const notesHtml = s => esc(s).replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, t, u) => `<a href="${u}"${/^https?:/.test(u) ? ' target="_blank" rel="noopener"' : ''} style="text-decoration:underline;text-underline-offset:3px">${t}</a>`).replace(/-&gt;/g, '→');
const TRE = /(\d+(?:[,.]\d+)?)(?:\s*(?:[-–]|bis)\s*(\d+(?:[,.]\d+)?))?\s*(Sekunden|Sek\.?|Minuten|Min\.?|Stunden|Std\.?|h)(?![a-zäöüß])/gi;
function withTimers(text, label) {
  return esc(text).replace(TRE, (m, a, b, u) => {
    const mul = /^s/i.test(u) ? 1 : /^(st|h)/i.test(u) ? 3600 : 60;
    const sec = Math.round(parseFloat(a.replace(',', '.')) * mul);
    return `<button type="button" class="timer-chip" data-sec="${sec}" data-label="${esc(label)}" aria-label="Timer ${m} starten">${I.clock}${m}</button>`;
  });
}
function card(r, i = 0) {
  const c = CH[r.ch];
  return `<a class="rc" href="${here && r.ch === page ? '#' + r.id : r.href}" style="--i:${i};--ch:${c.color}">
    <div class="plate"><div class="ph">${photo(r)}</div>${stamp(r)}</div>
    ${r.label ? `<span class="rc-label">${esc(r.label.replace(/\s*·\s*$/, ''))}</span>` : '<span class="rc-label">&nbsp;</span>'}
    <h3><span>${esc(r.name)}</span></h3><span class="script">${esc(r.script)}</span>
    ${r.desc ? `<p>${esc(r.desc)}</p>` : ''}
    <dl class="facts"><div><dt>Zeit</dt><dd>${esc(r.min != null && r.min < 600 ? (r.min >= 60 ? (Math.floor(r.min / 60) + ' Std' + (r.min % 60 ? ' ' + r.min % 60 + ' Min' : '')) : r.min + ' Min') : r.time)}</dd></div>
    <div><dt>Schwierigkeit</dt><dd>${r.diff ?? '–'} von 10</dd></div><div><dt>Ergibt</dt><dd>${esc(r.portions)}</dd></div></dl></a>`;
}

const norm = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const hay = r => r._h || (r._h = norm([r.name, r.script, r.label, CH[r.ch].title, ...r.ings.map(i => i[1])].join(' ')));

/* ───────── Erscheinen beim Scrollen ───────── */
const io = 'IntersectionObserver' in window && !reduced ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' }) : null;
function reveal(root) {
  $$('[data-rv], .rc', root).forEach((el, i) => {
    if (!io) { el.classList.add('in'); return; }
    el.classList.add('rv'); el.style.setProperty('--d', (i % 3) * 90 + 'ms'); io.observe(el);
  });
}

/* ───────── Leiste ───────── */
function bar() {
  const el = document.createElement('header');
  el.className = 'bar linen' + (page === 'index' ? ' over' : '');
  el.innerHTML = `<div class="wrap">
    ${page === 'index' ? '' : `<a class="back" href="index.html#inhalt" aria-label="Zurück zur Startseite"><span class="back-i">←</span><span class="back-t">Startseite</span></a>`}
    ${page === 'index' ? '<a class="brand" href="index.html"><b>Rezepte</b> vom Besten</a>' : ''}
    <nav class="tabs" aria-label="Kapitel">${CHAPTERS.map(c => `<a href="${c.file}" style="--c:${c.color}"${c.id === page ? ' aria-current="page"' : ''}><i></i>${esc(c.short || c.title)}</a>`).join('')}</nav>
    <button class="list-btn" type="button" data-open-list aria-label="Einkaufsliste">${I.list}<span class="lt">Einkaufsliste</span><span class="count"></span></button></div>`;
  if (page === 'index') {
    const on = () => el.classList.toggle('over', scrollY < innerHeight * .6);
    addEventListener('scroll', on, { passive: true }); on();
  }
  return el;
}

/* ───────── Kapitelseite ───────── */
function chapterPage() {
  const c = here, rs = byChapter(c.id);
  const best = rs.filter(r => r.thumb).sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0)).slice(0, 3);
  const prev = CHAPTERS[c.n - 2], next = CHAPTERS[c.n];
  const main = document.createElement('main');
  main.innerHTML = `
  <section class="opener linen dark">
    <div class="ribbon" aria-hidden="true"></div>
    <div class="wrap">
      <div>
        <div class="kap">Kapitel ${c.n}</div>
        <h1>${esc(c.title)}</h1>
        <p class="epigraph">${esc(c.epigraph)}</p>
        <p class="intro">${esc(c.intro)}</p>
        <nav class="minitoc" aria-label="Rezepte in diesem Kapitel">${rs.map((r, j) => `<a href="#${r.id}" style="--j:${j}"><span>${esc(r.name)}</span><span class="lead"></span><span class="r">${r.rating == null ? 'neu' : String(r.rating).replace('.', ',') + '/10'}</span></a>`).join('')}</nav>
      </div>
      <div class="tipped" aria-hidden="true">${best.map(r => `<figure><img src="${encodeURI(r.thumb)}" alt=""><figcaption>${esc(r.name)}</figcaption></figure>`).join('')}</div>
    </div>
  </section>
  <section class="pages grain">
    <div class="wrap">
      <div class="toolbar"><h2 id="cnt">${rs.length} Rezepte</h2>
        <label class="find small"><span class="sr">In ${esc(c.title)} suchen</span><input id="q" type="search" placeholder="Rezept oder Zutat suchen" autocomplete="off">${I.search}</label>
        <div class="sort" role="group" aria-label="Sortieren"><span>Sortieren:</span>
          <button type="button" data-s="book">Wie im Buch</button><button type="button" data-s="rating">Beste zuerst</button>
          <button type="button" data-s="time">Schnellste zuerst</button><button type="button" data-s="diff">Einfachste zuerst</button></div></div>
      <div class="grid" id="grid"></div>
      <div class="elsewhere" id="elsewhere" hidden></div>
    </div>
  </section>
  <footer class="colophon linen dark"><div class="wrap">
    <span>${prev ? `<a href="${prev.file}">← Kapitel ${prev.n}: ${esc(prev.title)}</a>` : '<a href="index.html">← Zum Inhalt</a>'}</span>
    <em>Handgemacht in meiner Küche</em>
    <span>${next ? `<a href="${next.file}">Kapitel ${next.n}: ${esc(next.title)} →</a>` : '<a href="index.html">Zum Inhalt →</a>'}</span>
  </div></footer>`;
  document.body.append(main);

  const grid = $('#grid', main);
  const sorters = { book: () => 0, rating: (a, b) => (b.rating ?? 8.9) - (a.rating ?? 8.9), time: (a, b) => (a.min ?? 999) - (b.min ?? 999), diff: (a, b) => (a.diff ?? 9) - (b.diff ?? 9) };
  let mode = store.get('sort', 'book');
  const qIn = $('#q', main), other = $('#elsewhere', main);
  function draw(anim) {
    $$('.sort button', main).forEach(b => b.setAttribute('aria-pressed', b.dataset.s === mode));
    const q = norm(qIn.value.trim());
    const list = [...rs].filter(r => !q || hay(r).includes(q)).sort(sorters[mode] || sorters.book);
    grid.innerHTML = list.length ? list.map(card).join('') : `<p class="reg-empty">In ${esc(c.title)} gibt es nichts mit „${esc(qIn.value.trim())}“.</p>`;
    $('#cnt', main).textContent = q ? `${list.length} von ${rs.length} Rezepten` : `${rs.length} Rezepte`;
    const more = q ? RECIPES.filter(r => r.ch !== c.id && hay(r).includes(q)) : [];
    other.hidden = !more.length;
    other.innerHTML = more.length ? `<h3>Auch in anderen Kapiteln</h3><div class="reg">${more.map(r => `<a href="${r.href}" style="--c:${CH[r.ch].color}"><span class="nm">${esc(r.name)}</span><span class="lead"></span><small>${esc(CH[r.ch].short || CH[r.ch].title)}</small></a>`).join('')}</div>` : '';
    grid.classList.toggle('sorted', !!anim);
    reveal(grid);
  }
  qIn.addEventListener('input', () => draw(true));
  $('.sort', main).addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; mode = b.dataset.s; store.set('sort', mode); draw(true); });
  draw(false);

  const tp = $('.tipped', main);
  if (tp && !reduced && matchMedia('(hover:hover)').matches) {
    $('.opener', main).addEventListener('mousemove', e => {
      const x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
      [1, 2, 3].forEach(i => { tp.style.setProperty('--mx' + i, x * i * 10 + 'px'); tp.style.setProperty('--my' + i, y * i * 8 + 'px'); });
    });
  }
}

/* ───────── Rezept aufschlagen ───────── */
let sheetWrap, cur = null;
function ensureSheet() {
  if (sheetWrap) return;
  sheetWrap = document.createElement('div');
  sheetWrap.className = 'sheet-wrap';
  sheetWrap.setAttribute('role', 'dialog'); sheetWrap.setAttribute('aria-modal', 'true');
  sheetWrap.addEventListener('click', e => { if (e.target === sheetWrap) closeSheet(); });
  document.body.append(sheetWrap);
}
function ingRows(r, cls = '') {
  const done = new Set(store.get('ck:' + r.key, [])), f = factorOf(r);
  return r.ings.map(([a, n], i) => /^—/.test(a)
    ? `<li class="ing-group">${esc(a.replace(/—/g, '').trim())}</li>`
    : `<li class="ing ${cls}${done.has(i) ? ' done' : ''}" data-i="${i}" role="checkbox" aria-checked="${done.has(i)}" tabindex="0"><span class="box">${I.tick}</span><span class="ing-t"><span class="ing-a${f !== 1 && /\d|[½¼¾]/.test(a) ? ' scaled' : ''}">${esc(scaleAmt(a, f))}</span>${esc(n)}</span></li>`).join('');
}
const countable = r => r.ings.filter(i => !/^—/.test(i[0])).length;
function renderSheet(r) {
  const c = CH[r.ch], b = baseOf(r), n = servingsOf(r), sDone = new Set(store.get('st:' + r.key, []));
  const rs = byChapter(r.ch), idx = rs.indexOf(r), pv = rs[idx - 1], nx = rs[idx + 1];
  sheetWrap.style.setProperty('--ch', c.color);
  sheetWrap.setAttribute('aria-label', r.name);
  sheetWrap.innerHTML = `<article class="sheet">
    <div class="shade"></div>
    <button class="sheet-close" type="button" aria-label="Rezept schließen" data-close>✕</button>
    <header class="s-head">
      <div class="s-kap">Kapitel ${c.n} · ${esc(c.title)}</div>
      <h2>${esc(r.name)}</h2><div class="script">${esc(r.script)}</div>
      <div class="s-row">
        <dl class="s-facts"><div><dt>Zeit</dt><dd>${esc(r.time)}</dd></div><div><dt>Schwierigkeit</dt><dd>${r.diff ?? '–'} von 10${r.diffLabel ? ', ' + esc(r.diffLabel.toLowerCase()) : ''}</dd></div><div><dt>Bewertung</dt><dd>${r.rating == null ? 'neu, noch offen' : String(r.rating).replace('.', ',') + ' von 10'}</dd></div></dl>
        <div class="s-actions"><button class="btn solid" type="button" data-add>${I.cart}Auf die Einkaufsliste</button></div>
      </div>
    </header>
    ${r.img ? `<figure class="s-photo"><img src="${encodeURI(r.img)}" alt="${esc(r.name)}"></figure>` : ''}
    <div class="s-body">
      <aside class="ings">
        <h3>Zutaten</h3>
        <div class="servings"><span>${b.factor ? 'Menge' : 'Für'}</span>
          <span class="stepper"><button type="button" data-srv="-1" aria-label="Weniger">−</button><output aria-live="polite">${b.factor ? String(n).replace('.', ',') + '×' : n}</output><button type="button" data-srv="1" aria-label="Mehr">+</button></span>
          <span class="unit">${esc(b.factor ? '' : unitFor(b, n))}</span>
          <button type="button" class="reset-s" data-srv="0"${n === b.n ? ' hidden' : ''}>Original</button></div>
        <ul class="ing-list">${ingRows(r)}</ul>
        <div class="progress"><span class="pg-t"></span><span>Tippen zum Abhaken</span></div><div class="track"><i></i></div>
        <div class="ing-actions"><button class="btn" type="button" data-add>${I.cart}Auf die Einkaufsliste</button><button class="linkish" type="button" data-reset>Alles zurücksetzen</button></div>
      </aside>
      <section>
        <h3>Zubereitung</h3>
        <ol class="steps">${r.steps.map(([t, p], i) => `<li class="step${sDone.has(i) ? ' done' : ''}" data-i="${i}"><div class="step-n">${i + 1}${I.stepTick}</div><div><h4>${esc(t)}</h4><p>${withTimers(p, t)}</p></div></li>`).join('')}</ol>
        <p class="hint">Tipp auf einen Schritt, um ihn abzuhaken. Zeitangaben starten einen Timer.</p>
      </section>
    </div>
    ${r.notes.length ? `<section class="notes"><h3>Notizen am Rand</h3><div class="slips">${r.notes.map(t => `<div class="slip">${notesHtml(t)}</div>`).join('')}</div></section>` : ''}
    <nav class="colophon" style="border-top:1px solid var(--rule);padding:28px 72px 40px;display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;font-family:var(--sans);font-size:.95rem;color:var(--ink-2)">
      <span>${pv ? `<a href="${here ? '#' + pv.id : pv.href}">← ${esc(pv.name)}</a>` : ''}</span><span>${nx ? `<a href="${here ? '#' + nx.id : nx.href}">${esc(nx.name)} →</a>` : ''}</span></nav>
  </article>`;
  updateProgress(r);
}
function updateProgress(r) {
  const done = store.get('ck:' + r.key, []).length, all = countable(r);
  const t = $('.pg-t', sheetWrap); if (!t) return;
  t.textContent = `${done} von ${all} bereit`;
  $('.track i', sheetWrap).style.width = (all ? done / all * 100 : 0) + '%';
}
function openSheet(r) {
  ensureSheet();
  const again = cur === r && sheetWrap.classList.contains('open');
  cur = r; renderSheet(r);
  if (!again) { sheetWrap.scrollTop = 0; sheetWrap.classList.remove('open'); void sheetWrap.offsetWidth; }
  else sheetWrap.scrollTop = 0;
  sheetWrap.classList.add('open');
  document.documentElement.style.overflow = 'hidden';
  document.title = r.name + ' · Rezepte vom Besten';
  if (matchMedia('(hover:hover)').matches) setTimeout(() => $('.sheet-close', sheetWrap)?.focus({ preventScroll: true }), 60);
}
function closeSheet() {
  if (!sheetWrap || !sheetWrap.classList.contains('open')) return;
  sheetWrap.classList.remove('open');
  document.documentElement.style.overflow = '';
  document.title = here ? here.title + ' · Rezepte vom Besten' : 'Rezepte vom Besten';
  const id = cur && cur.id; cur = null;
  if (location.hash) history.pushState('', '', location.pathname + location.search);
  if (id) $(`.rc[href="#${id}"]`)?.focus({ preventScroll: true });
}
function fromHash() {
  const id = decodeURIComponent(location.hash.slice(1));
  const r = here && REC[page + '/' + id];
  if (r) openSheet(r); else closeSheet();
}

function toggleIng(r, li) {
  const i = +li.dataset.i, s = new Set(store.get('ck:' + r.key, []));
  s.has(i) ? s.delete(i) : s.add(i);
  store.set('ck:' + r.key, [...s]);
  $$(`.ing[data-i="${i}"]`).forEach(el => { if (el.closest('.drawer')) return; el.classList.toggle('done', s.has(i)); el.setAttribute('aria-checked', s.has(i)); });
  updateProgress(r);
}
function setServings(r, d) {
  const b = baseOf(r);
  let n = servingsOf(r);
  if (d === 0) n = b.n;
  else if (b.factor) { const steps = [.5, 1, 1.5, 2, 3, 4]; const k = steps.indexOf(n); n = steps[Math.max(0, Math.min(steps.length - 1, (k < 0 ? 1 : k) + d))]; }
  else n = Math.max(1, Math.min(60, n + d));
  store.set('srv:' + r.key, n);
  const y = sheetWrap.scrollTop; renderSheet(r); sheetWrap.scrollTop = y;
}

/* ───────── Timer ───────── */
let timers = store.get('timers', []), actx = null, ringing = null;
const saveT = () => store.set('timers', timers);
function beep() {
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    if (actx.state === 'suspended') actx.resume();
    const t = actx.currentTime;
    [0, .22, .44].forEach(o => { const g = actx.createGain(), osc = actx.createOscillator(); osc.type = 'sine'; osc.frequency.value = 880; g.gain.setValueAtTime(0, t + o); g.gain.linearRampToValueAtTime(.35, t + o + .02); g.gain.exponentialRampToValueAtTime(.001, t + o + .18); osc.connect(g).connect(actx.destination); osc.start(t + o); osc.stop(t + o + .2); });
  } catch {}
  navigator.vibrate?.([200, 100, 200]);
}
function startTimer(sec, label, rname) {
  try { actx = actx || new (window.AudioContext || window.webkitAudioContext)(); actx.resume(); } catch {}
  timers.push({ id: Date.now() + '' + Math.random().toString(36).slice(2, 6), label, rname, total: sec * 1000, end: Date.now() + sec * 1000, left: null, done: false });
  saveT(); drawTimers();
  toast(`Timer läuft: ${fmtClock(sec * 1000)} für „${label}“`);
}
const fmtClock = ms => { const s = Math.max(0, Math.ceil(ms / 1000)), h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), x = s % 60; return (h ? h + ':' + String(m).padStart(2, '0') : m) + ':' + String(x).padStart(2, '0'); };
let tBox;
function drawTimers() {
  if (!tBox) { tBox = document.createElement('div'); tBox.className = 'timers'; tBox.setAttribute('aria-live', 'polite'); document.body.append(tBox); tBox.addEventListener('click', onTimerClick); }
  const have = new Set($$('.tm', tBox).map(e => e.dataset.id));
  timers.forEach(t => {
    if (have.has(t.id)) { have.delete(t.id); return; }
    const el = document.createElement('div'); el.className = 'tm linen'; el.dataset.id = t.id;
    el.innerHTML = `<span class="clock"></span><span class="lbl">${esc(t.label)}</span><span class="ctl"><button type="button" data-t="pause" aria-label="Pause"></button><button type="button" data-t="stop" aria-label="Timer beenden">${I.x}</button></span>`;
    tBox.append(el);
  });
  have.forEach(id => $(`.tm[data-id="${id}"]`, tBox)?.remove());
  tickTimers();
}
function tickTimers() {
  const now = Date.now(); let ring = false;
  timers.forEach(t => {
    const el = tBox && $(`.tm[data-id="${t.id}"]`, tBox); if (!el) return;
    const left = t.left != null ? t.left : t.end - now;
    if (left <= 0 && !t.done) { t.done = true; saveT(); }
    if (t.done) ring = true;
    el.classList.toggle('ring', t.done); el.classList.toggle('paused', t.left != null);
    $('.clock', el).textContent = t.done ? 'Fertig!' : fmtClock(left);
    const pb = $('[data-t="pause"]', el);
    pb.innerHTML = t.done ? '' : (t.left != null ? I.play : I.pause); pb.hidden = t.done;
    pb.setAttribute('aria-label', t.left != null ? 'Weiter' : 'Pause');
  });
  if (ring && !ringing) { beep(); ringing = setInterval(beep, 1600); }
  if (!ring && ringing) { clearInterval(ringing); ringing = null; }
  const run = timers.find(t => !t.done && t.left == null);
  if (ring) document.title = '⏰ Fertig! · ' + (cur ? cur.name : 'Rezepte vom Besten');
  else if (run && document.hidden) document.title = fmtClock(run.end - now) + ' · ' + run.label;
}
function onTimerClick(e) {
  const b = e.target.closest('button'); if (!b) return;
  const id = b.closest('.tm').dataset.id, t = timers.find(x => x.id === id); if (!t) return;
  if (b.dataset.t === 'stop') { timers = timers.filter(x => x !== t); if (!timers.some(x => x.done)) document.title = cur ? cur.name + ' · Rezepte vom Besten' : document.title.replace(/^⏰ Fertig! · /, ''); }
  else if (t.left != null) { t.end = Date.now() + t.left; t.left = null; }
  else { t.left = t.end - Date.now(); }
  saveT(); drawTimers();
}
setInterval(() => { if (timers.length) tickTimers(); }, 250);
addEventListener('storage', e => { if (e.key === 'rvb:timers') { timers = store.get('timers', []); drawTimers(); } if (e.key === 'rvb:list') drawList(); });

/* ───────── Einkaufsliste ───────── */
let drawer, dBg;
const getList = () => store.get('list', []);
let picker;
function pickForList(r) {
  if (!picker) {
    picker = document.createElement('div'); picker.className = 'picker-wrap';
    picker.innerHTML = `<div class="picker grain" role="dialog" aria-modal="true" aria-labelledby="pk-h"><div class="drawer-h"><div><h2 id="pk-h">Was hast du schon zuhause?</h2><p class="pk-sub"></p></div><button class="x" type="button" aria-label="Abbrechen" data-pk="x">✕</button></div>
      <div class="pk-tools"><button class="linkish" type="button" data-pk="all">Alles brauche ich</button><button class="linkish" type="button" data-pk="none">Alles schon da</button></div>
      <ul class="ing-list pk-list"></ul><div class="drawer-f"><button class="btn solid" type="button" data-pk="ok"></button><button class="linkish" type="button" data-pk="x">Abbrechen</button></div></div>`;
    document.body.append(picker);
    picker.addEventListener('click', e => {
      if (e.target === picker) return closePicker();
      const li = e.target.closest('.ing');
      if (li) { li.classList.toggle('done'); li.setAttribute('aria-checked', li.classList.contains('done')); return pkCount(); }
      const b = e.target.closest('[data-pk]'); if (!b) return;
      const k = b.dataset.pk;
      if (k === 'x') return closePicker();
      if (k === 'all' || k === 'none') { $$('.pk-list .ing', picker).forEach(li => { li.classList.toggle('done', k === 'none'); li.setAttribute('aria-checked', k === 'none'); }); return pkCount(); }
      if (k === 'ok') { const have = new Set($$('.pk-list .ing.done', picker).map(li => +li.dataset.i)); closePicker(); addToList(picker._r, have); }
    });
    picker.addEventListener('keydown', e => { if ((e.key === ' ' || e.key === 'Enter') && e.target.classList.contains('ing')) { e.preventDefault(); e.target.click(); } });
  }
  picker._r = r;
  const f = factorOf(r), had = new Set(store.get('ck:' + r.key, []));
  $('.pk-sub', picker).textContent = `${r.name}${servLabel(r) ? ', ' + servLabel(r) : ''}. Tippe an, was du schon hast. Der Rest kommt auf die Liste.`;
  $('.pk-list', picker).innerHTML = r.ings.map(([a, n], i) => /^—/.test(a)
    ? `<li class="ing-group">${esc(a.replace(/—/g, '').trim())}</li>`
    : `<li class="ing${had.has(i) ? ' done' : ''}" data-i="${i}" role="checkbox" aria-checked="${had.has(i)}" tabindex="0"><span class="box">${I.tick}</span><span class="ing-t"><span class="ing-a">${esc(scaleAmt(a, f))}</span>${esc(n)}</span><span class="have">habe ich</span></li>`).join('');
  pkCount();
  picker.classList.add('open');
  $('.pk-list', picker).scrollTop = 0;
}
function pkCount() {
  const n = $$('.pk-list .ing:not(.done)', picker).length;
  const b = $('[data-pk="ok"]', picker);
  b.textContent = n ? `${n} ${n === 1 ? 'Zutat' : 'Zutaten'} auf die Liste` : 'Nichts zu kaufen';
  b.disabled = !n;
}
function closePicker() { picker?.classList.remove('open'); }
function addToList(r, have) {
  const f = factorOf(r);
  const items = r.ings.map(([a, n], i) => ({ a: scaleAmt(a, f), n, i })).filter(x => !/^—/.test(x.a) && !have.has(x.i)).map(x => ({ a: x.a, n: x.n, done: false }));
  if (!items.length) return;
  const list = getList().filter(g => g.key !== r.key);
  list.push({ key: r.key, href: r.href, name: r.name, serv: servLabel(r), items });
  store.set('list', list); drawList();
  const btn = $('.list-btn'); if (btn) { btn.classList.remove('bump'); void btn.offsetWidth; btn.classList.add('bump'); }
  toast(`${items.length} ${items.length === 1 ? 'Zutat' : 'Zutaten'} auf der Einkaufsliste`, 'Ansehen', openList);
}
function buildDrawer() {
  dBg = document.createElement('div'); dBg.className = 'drawer-bg'; dBg.addEventListener('click', closeList);
  drawer = document.createElement('aside'); drawer.className = 'drawer grain'; drawer.setAttribute('aria-label', 'Einkaufsliste');
  drawer.innerHTML = `<div class="drawer-h"><h2>Einkaufsliste</h2><button class="x" type="button" aria-label="Einkaufsliste schließen" data-close-list>✕</button></div><div class="drawer-b"></div>
    <div class="drawer-f"><button class="btn solid" type="button" data-l="share">Liste teilen</button><button class="btn" type="button" data-l="clean">Erledigte entfernen</button><button class="linkish" type="button" data-l="clear">Alles löschen</button></div>`;
  document.body.append(dBg, drawer);
  drawer.addEventListener('click', e => {
    const li = e.target.closest('.ing');
    if (li) { const list = getList(), g = list[+li.dataset.g], it = g.items[+li.dataset.i]; it.done = !it.done; store.set('list', list); li.classList.toggle('done', it.done); li.setAttribute('aria-checked', it.done); return; }
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.closeList != null) return closeList();
    if (b.dataset.rm != null) { const list = getList(); list.splice(+b.dataset.rm, 1); store.set('list', list); drawList(); return; }
    if (b.dataset.l === 'clean') { store.set('list', getList().map(g => ({ ...g, items: g.items.filter(i => !i.done) })).filter(g => g.items.length)); drawList(); }
    if (b.dataset.l === 'clear') { if (confirm('Die ganze Einkaufsliste löschen?')) { store.set('list', []); drawList(); } }
    if (b.dataset.l === 'share') shareList();
  });
  drawer.addEventListener('keydown', e => { if ((e.key === ' ' || e.key === 'Enter') && e.target.classList.contains('ing')) { e.preventDefault(); e.target.click(); } });
}
function drawList() {
  const list = getList(), n = list.reduce((s, g) => s + g.items.filter(i => !i.done).length, 0);
  $$('.list-btn .count').forEach(c => c.textContent = n || '');
  if (!drawer) return;
  $('.drawer-b', drawer).innerHTML = list.length ? list.map((g, gi) => `<div class="lg"><div class="lg-h"><div><a href="${g.href}">${esc(g.name)}</a><small>${esc(g.serv || 'Originalmenge')}</small></div><button type="button" data-rm="${gi}">Entfernen</button></div>
      <ul class="ing-list">${g.items.map((it, ii) => `<li class="ing${it.done ? ' done' : ''}" data-g="${gi}" data-i="${ii}" role="checkbox" aria-checked="${it.done}" tabindex="0"><span class="box">${I.tick}</span><span class="ing-t"><span class="ing-a">${esc(it.a)}</span>${esc(it.n)}</span></li>`).join('')}</ul></div>`).join('')
    : `<p class="empty">Die Liste ist noch leer. Öffne ein Rezept und tippe auf „Auf die Einkaufsliste“.<em>Dort wählst du aus, was du schon zuhause hast.</em></p>`;
  $('.drawer-f', drawer).hidden = !list.length;
}
async function shareList() {
  const text = 'Einkaufsliste\n' + getList().map(g => `\n${g.name}${g.serv ? ' (' + g.serv + ')' : ''}\n` + g.items.filter(i => !i.done).map(i => `– ${i.a} ${i.n}`.replace(/\s+/g, ' ').trim()).join('\n')).join('\n');
  try { if (navigator.share) { await navigator.share({ title: 'Einkaufsliste', text }); return; } } catch (e) { if (e.name === 'AbortError') return; }
  try { await navigator.clipboard.writeText(text); toast('Liste kopiert. Du kannst sie jetzt einfügen.'); }
  catch { prompt('Liste zum Kopieren:', text); }
}
function openList() { if (!drawer) buildDrawer(); drawList(); dBg.classList.add('open'); drawer.classList.add('open'); setTimeout(() => $('[data-close-list]', drawer).focus(), 50); }
function closeList() { drawer?.classList.remove('open'); dBg?.classList.remove('open'); }

/* ───────── Hinweis unten ───────── */
let toastEl, toastT;
function toast(msg, action, fn) {
  if (!toastEl) { toastEl = document.createElement('div'); toastEl.className = 'toast linen'; toastEl.setAttribute('role', 'status'); document.body.append(toastEl); }
  toastEl.innerHTML = `<span>${esc(msg)}</span>${action ? `<button type="button">${esc(action)}</button>` : ''}`;
  if (fn) $('button', toastEl).onclick = () => { toastEl.classList.remove('show'); fn(); };
  toastEl.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove('show'), 3600);
}

document.addEventListener('visibilitychange', () => { if (!document.hidden) tickTimers(); });

/* ───────── Klicks & Tasten (für alle Seiten) ───────── */
document.addEventListener('click', e => {
  const t = e.target;
  const chip = t.closest('.timer-chip');
  if (chip) { e.stopPropagation(); startTimer(+chip.dataset.sec, chip.dataset.label, cur?.name); chip.classList.add('running'); setTimeout(() => chip.classList.remove('running'), 1200); return; }
  if (t.closest('[data-open-list]')) return openList();
  if (!sheetWrap || !sheetWrap.contains(t) || !cur) return;
  if (t.closest('[data-close]')) return closeSheet();
  if (t.closest('[data-add]')) return pickForList(cur);
  if (t.closest('[data-reset]')) { store.set('ck:' + cur.key, []); store.set('st:' + cur.key, []); const y = sheetWrap.scrollTop; renderSheet(cur); sheetWrap.scrollTop = y; return; }
  const sv = t.closest('[data-srv]'); if (sv) return setServings(cur, +sv.dataset.srv);
  const li = t.closest('.ing'); if (li) return toggleIng(cur, li);
  const step = t.closest('.step');
  if (step && !t.closest('a')) { const i = +step.dataset.i, s = new Set(store.get('st:' + cur.key, [])); s.has(i) ? s.delete(i) : s.add(i); store.set('st:' + cur.key, [...s]); step.classList.toggle('done', s.has(i)); }
});
document.addEventListener('keydown', e => {
  if ((e.key === ' ' || e.key === 'Enter') && e.target.classList?.contains('ing') && !e.target.closest('.drawer')) { e.preventDefault(); e.target.click(); return; }
  if (e.key === 'Escape') { if (picker?.classList.contains('open')) closePicker(); else if (drawer?.classList.contains('open')) closeList(); else closeSheet(); }
});

/* ───────── Startseite ───────── */
function indexPage() {
  const total = RECIPES.length;
  const best = RECIPES.filter(r => r.rating >= 10 && r.thumb);
  const fan = [...best].slice(0, 5);
  const hero = document.createElement('section');
  hero.className = 'cover linen'; hero.id = 'cover';
  hero.innerHTML = `<div class="frame"><i class="ft"></i><i class="fr"></i><i class="fb"></i><i class="fl"></i></div>
    <div class="cover-t">
      <div class="over">Ein Kochbuch aus meiner Küche</div>
      <h1 class="foil" aria-label="Rezepte vom Besten"><span class="w1">Rezepte</span><i>vom Besten</i></h1>
      <div class="orn">${I.orn}</div>
      <p class="sub">${total} Rezepte in ${CHAPTERS.length} Kapiteln, alle selbst gekocht und ehrlich bewertet</p>
      <a class="open-btn" href="#inhalt">Buch aufschlagen <span aria-hidden="true">↓</span></a>
    </div>
    <div class="fan" aria-label="Lieblingsgerichte">${fan.map((r, i) => `<a href="${r.href}" style="--k:${i - (fan.length - 1) / 2};--a:${Math.abs(i - (fan.length - 1) / 2)}" aria-label="${esc(r.name)}"><img src="${encodeURI(r.thumb)}" alt=""><span>${esc(r.name)}</span></a>`).join('')}</div>`;
  const main = document.createElement('main');
  main.innerHTML = `
  <section class="toc-page grain" id="inhalt"><div class="wrap">
    <div><div class="toc-h" data-rv><h2 class="page-h">Inhalt</h2><p class="dedi">Für alle, die bei mir am Tisch sitzen, und für alle, die es nachkochen wollen.</p></div>
      <ol class="toc">${CHAPTERS.map(c => `<li data-rv><a href="${c.file}" data-c="${c.id}" style="--c:${c.color}"><span class="n">${c.n}</span><span class="tt"><b>${esc(c.title)}</b><span class="lead"></span><span class="cnt">${c.recipes.length} ${c.recipes.length === 1 ? 'Rezept' : 'Rezepte'}</span></span><span class="ep">${esc(c.epigraph)}</span></a></li>`).join('')}</ol></div>
    <figure class="preview" aria-hidden="true"><div class="plate"><div class="ph"><img alt="" id="pv-img"></div></div><figcaption id="pv-cap"></figcaption></figure>
  </div></section>
  <section class="register grain"><div class="wrap">
    <div class="reg-top" data-rv><h2 class="page-h">Register</h2>
      <label class="find"><span class="sr">Rezept oder Zutat suchen</span><input id="find" type="search" placeholder="Rezept oder Zutat suchen" autocomplete="off">${I.search}</label></div>
    <div class="reg" id="reg"></div>
  </div></section>
  <section class="best linen dark"><div class="wrap">
    <div class="best-h" data-rv><h2>Volle Punktzahl</h2><p>${best.length} Gerichte mit 10 von 10</p></div>
    <div class="shelf">${best.map(r => `<a class="rc" href="${r.href}" style="--ch:${CH[r.ch].color}"><div class="plate"><div class="ph">${photo(r)}</div>${stamp(r)}</div><h3>${esc(r.name)}</h3><span class="rc-label">${esc(CH[r.ch].title)}</span></a>`).join('')}</div>
  </div></section>
  <footer class="colophon linen dark"><div class="wrap"><em>Handgemacht in meiner Küche</em><span>Rezepte vom Besten</span></div></footer>`;
  document.body.prepend(bar(), hero);
  document.body.append(main);
  reveal(main);

  /* Goldprägung folgt der Maus, Fotos weichen leicht aus */
  const hover = matchMedia('(hover:hover)').matches;
  if (hover && !reduced) hero.addEventListener('mousemove', e => {
    hero.style.setProperty('--fx', (e.clientX / innerWidth * 100).toFixed(1) + '%');
    hero.style.setProperty('--tx', ((e.clientX / innerWidth - .5) * 14).toFixed(1) + 'px');
  });

  /* Vorschau im Inhalt */
  const pv = $('#pv-img'), cap = $('#pv-cap');
  const pick = id => byChapter(id).filter(r => r.thumb);
  const pos = {};
  function show(id) {
    const list = pick(id); if (!list.length) return;
    pos[id] = ((pos[id] ?? -1) + 1) % list.length;
    const r = list[pos[id]];
    $$('.toc a').forEach(a => a.classList.toggle('on', a.dataset.c === id));
    pv.classList.add('swap');
    setTimeout(() => { pv.src = encodeURI(r.thumb); pv.onload = () => pv.classList.remove('swap'); cap.textContent = r.name; }, 180);
  }
  if ($('.preview').offsetParent) {
    $$('.toc a').forEach(a => { a.addEventListener('mouseenter', () => show(a.dataset.c)); a.addEventListener('focus', () => show(a.dataset.c)); });
    show(CHAPTERS[2].id);
  }

  /* Register mit Suche */
  const sorted = [...RECIPES].sort((a, b) => a.name.localeCompare(b.name, 'de'));
  const mark = (s, q) => { if (!q) return esc(s); const i = norm(s).indexOf(q); return i < 0 ? esc(s) : esc(s.slice(0, i)) + '<mark>' + esc(s.slice(i, i + q.length)) + '</mark>' + esc(s.slice(i + q.length)); };
  function drawReg() {
    const q = norm($('#find').value.trim());
    const hits = sorted.filter(r => !q || hay(r).includes(q));
    const groups = {};
    hits.forEach(r => { const L = norm(r.name)[0].toUpperCase(); (groups[L] = groups[L] || []).push(r); });
    $('#reg').innerHTML = hits.length ? Object.entries(groups).map(([L, rs]) => `<section><h3>${L}</h3>${rs.map(r => `<a href="${r.href}" style="--c:${CH[r.ch].color}"><span class="nm">${mark(r.name, q)}</span><span class="lead"></span><small>${esc(CH[r.ch].short || CH[r.ch].title)}</small></a>`).join('')}</section>`).join('')
      : `<p class="reg-empty">Kein Rezept mit „${esc($('#find').value.trim())}“. Versuch es mit einer Zutat, etwa Lachs, Kürbis oder Mascarpone.</p>`;
    $('#reg').style.columns = hits.length < 8 ? '1' : '';
  }
  $('#find').addEventListener('input', drawReg); drawReg();
}

/* ───────── Seitenwechsel wie Umblättern ───────── */
const turn = document.createElement('div');
turn.className = 'turn linen'; turn.setAttribute('aria-hidden', 'true');
turn.innerHTML = '<div class="turn-in"><span class="turn-k"></span><span class="turn-t foil"></span></div><i class="turn-rb"></i>';
document.body.append(turn);
function label(file) {
  const c = CHAPTERS.find(x => x.file === file);
  return c ? { k: 'Kapitel ' + c.n, t: c.title, c: c.color } : { k: 'Ein Kochbuch', t: 'Rezepte vom Besten', c: 'var(--foil)' };
}
function paint(l) { $('.turn-k', turn).textContent = l.k; $('.turn-t', turn).textContent = l.t; turn.style.setProperty('--c', l.c); }
let incoming = null;
try { incoming = JSON.parse(sessionStorage.getItem('rvb:turn')); sessionStorage.removeItem('rvb:turn'); } catch {}
if (incoming && !reduced) {
  paint(incoming); turn.classList.add('cover-now');
  requestAnimationFrame(() => requestAnimationFrame(() => { turn.classList.remove('cover-now'); turn.classList.add('leave'); document.body.classList.add('arrive'); }));
  setTimeout(() => { turn.classList.remove('leave'); }, 900);
} else document.body.classList.add('arrive');
document.addEventListener('click', e => {
  const a = e.target.closest('a[href]');
  if (!a || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.target === '_blank') return;
  const url = new URL(a.href, location.href);
  if (url.origin !== location.origin || !/\.html$/.test(url.pathname) || url.pathname === location.pathname) return;
  if (reduced) return;
  e.preventDefault();
  const file = decodeURIComponent(url.pathname.split('/').pop());
  const l = label(file);
  try { sessionStorage.setItem('rvb:turn', JSON.stringify(l)); } catch {}
  paint(l); turn.classList.remove('leave'); turn.classList.add('enter');
  setTimeout(() => { location.href = url.href; }, 520);
});
addEventListener('pageshow', e => { if (e.persisted) { turn.classList.remove('enter', 'leave', 'cover-now'); } });

/* ───────── Start ───────── */
if (page === 'index') indexPage();
else if (here) {
  document.body.prepend(bar());
  chapterPage();
  reveal($('.opener'));
  addEventListener('hashchange', fromHash);
  addEventListener('popstate', fromHash);
  fromHash();
}
document.body.classList.add('ready');
{ const tb = $('.tabs'), act = $('.tabs a[aria-current]'); if (tb && act) tb.scrollLeft = act.offsetLeft - tb.clientWidth / 2 + act.offsetWidth / 2; }
drawList(); drawTimers();
})();

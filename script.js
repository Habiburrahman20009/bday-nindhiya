/* =====================================================================
   ✏️  EDIT EVERYTHING HERE — just change the text inside CONFIG
   ===================================================================== */
const CONFIG = {
  name: "Nindhiya",
  from: "Habib",
  pin: "201108",                       // passcode ("" = no passcode screen)
  lockHint: "Hint: your special day 💕",
  wrongText: "Wrong code, try again 💔",
  giftHint: "Tap the gift box to open it 🎁",

  hero: {
    eyebrow: "You're the star of today",
    date: "20 November · the most special day",
    quote: "Wishing you happiness, good health, and all your dreams come true 💗"
  },

  cake: {
    title: "Happy Birthday!",
    text: "Close your eyes, make a wish, then tap the button.",
    button: "Make a wish 🕯️",
    after: "Your wish is on its way ✨"
  },

  letter: {
    eyebrow: "A letter for you",
    title: "My dearest Nindhiya,",
    paragraphs: [
      "Happy birthday, Nindhiya. I hope today brings you all the happiness you deserve, and then a little more",
      "You are kind, bright, and wonderfully yourself, and being around you always makes things a little better. Thank you for all the little moments, conversations, and memories that bring a smile to my face.",
      "I wish you good health, happiness, and success in everything you do. May this new chapter bring you new experiences, beautiful memories, and plenty of reasons to smile. Keep being yourself, and never stop chasing the things you dream of.",
      "I hope you enjoy your special day and that the year ahead brings you many wonderful things. Happy birthday!"
    ],
    signature: "Habib"
  },

  photos: {                          // put pictures in the /images folder
    eyebrow: "Our photo memories",
    title: "Every picture tells a story",
    items: [
      { src: "images/foto1.jpg", caption: "First place, of course 🏆",          pos: "50% 22%" },
      { src: "images/foto4.jpg", caption: "Bookworm mode: fully on 📖",      pos: "50% 60%" },
      { src: "images/foto5.jpg", caption: "The cutest witch ever 🔮", pos: "40% 50%" },
      { src: "images/foto2.jpg", caption: "Height problem? The chair handles it 🪑😆",     pos: "50% 40%" }
    ]
  },

  timeline: {                        // add real dates here, e.g. tag: "12 March 2026"
    eyebrow: "Our story",
    title: "Little Chapters About Us",
    items: [
      { icon: "✨", tag: "Chapter one", title: "When We First Met in 11th Grade", text: "That's where our story began." },
      { icon: "💬", tag: "Chapter two", title: "We Talk About Everything",        text: "From the smallest things to the biggest dreams." },
      { icon: "🎭", tag: "Chapter three", title: "School Events & Everything Between", text: "Little by little, our friendship grew more mature." },
      { icon: "🌧️", tag: "Chapter four",  title: "A Misunderstanding",                text: "A small storm that taught us to understand each other better." },
      { icon: "🎂", tag: "20 November",   title: "Your 18th Birthday",                text: "A new chapter begins today, and however the pages turn, I will always be grateful that you are in my story." }
    ]
  },

  playlist: {                        // put mp3 files in the /music folder
    eyebrow: "Songs for you",
    title: "Special Playlist",
    songs: [
      { title: "Shape of My Heart",          artist: "Backstreet Boys", src: "music/song1.mp3", note: "First song, because your heart is as big as your bright smile." },
      { title: "Risk It All",                artist: "Bruno Mars",      src: "music/song2.mp3", note: "A little reminder: chasing your dreams is so cool." },
      { title: "Can't Help Falling in Love", artist: "Elvis Presley",   src: "music/song3.mp3", note: "Because your cheerful smile is impossible not to adore." }
    ]
  },

  jar: {
    eyebrow: "From my heart to yours",
    title: "Reasons I'm Grateful for You",
    button: "🫙 Shake the jar",
    idle: "Shake the jar and pick a note",
    reasons: [
      "Your laugh is contagious, the whole room lights up.",
      "Small in size, biggest energy in any room.",
      "You climbed on stage and became the cutest witch ever.",
      "Your eyes catch beautiful things, hello first place in photography.",
      "Standing on a chair just to reach the whiteboard? Never giving up.",
      "Your positive energy lifts everyone around you.",
      "You can read a book so seriously, then burst out laughing five minutes later.",
      "With you, an ordinary day becomes a fun one."
    ]
  },

  birthday: { month: 11, day: 20, year: 2008 },   // for the countdown
  greetings: {                                    // changes with the hour she opens it
    morning:   ["Good morning",   "A brand new day, and it's all about you."],
    afternoon: ["Good afternoon", "Hope your day is as bright as your smile."],
    evening:   ["Good evening",   "The sky is getting ready to shine for you."],
    night:     ["Hello, night owl", "The stars came out just for you."]
  },

  style: { calm: true, stars: true, sparkles: true, tilt: true },   // set calm:false for the full-effects version

  garden: {                          // tap a flower → a special message
    eyebrow: "A garden for you",
    title: "Pick a flower",
    flowers: [
      { c: ["#ffc928", "#ffe27a"], t: "Yellow Gerbera", h: "A Little Bloom of Sunshine",
        x: "Yellow gerberas stand for friendship and warmth. Being around you feels like that: everything gets a little brighter, and a little easier to smile at." },
      { c: ["#ff8a2b", "#ffb067"], t: "Orange Gerbera", h: "A Wish for the Year Ahead",
        x: "Orange gerberas stand for enthusiasm and success. Mine is a simple wish: may this year bring every dream you're chasing a little closer." },
      { c: ["#ff5fa0", "#ff9cc4"], t: "Pink Gerbera", h: "A Thank You, in Pink",
        x: "Pink gerberas stand for admiration and gratitude, and both are true for you. I admire how kind you are, and I'm thankful you are in my life." },
      { c: ["#e8283c", "#ff6670"], t: "Red Gerbera", h: "A Promise, in Full Bloom",
        x: "Red gerberas speak of deep feeling and love. Here is mine, as a promise: I'll be on your side, in the easy days and the hard ones." },
      { c: ["#e6e9f5", "#ffffff"], t: "White Gerbera", h: "A Fresh Page Ahead",
        x: "White gerberas stand for purity and new beginnings. Like the first morning of a new year, may every day ahead feel clear, fresh, and full of promise." },
      { c: ["#ff9d80", "#ffc9b3"], t: "Peach Gerbera", h: "The Simplest Kind of Happy",
        x: "Gerberas of every color carry the same gift: cheerfulness and simple joy. The peach one is the softest of them, and it reminds me of you: gentle, bright, and happy to be near." }
    ],
    secret: {
      title: "You found them all! 💐",
      text: "Your real gift is waiting for me to hand over. Come find me, I have something printed just for you 📸🎁"
    }
  },

  final: {
    eyebrow: "Happy birthday",
    title: "May your life always be",
    titleEm: "filled with flowers",
    text: "Keep shining in your own way.",
    emoji: "Nindhiya"
  }
};

/* =====================================================================
   ⚙️  ENGINE
   ===================================================================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const wait = ms => new Promise(r => setTimeout(r, ms));
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const rand = (a, b) => a + Math.random() * (b - a);
const fmt = t => isFinite(t) ? Math.floor(t / 60) + ":" + String(Math.floor(t % 60)).padStart(2, "0") : "0:00";
function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("show"), 2600); }

/* ---------- soft synthesized sounds (no files needed) ---------- */
let actx;
const chime = (notes, gap = .09, vol = .05, type = "sine") => { try {
  actx = actx || new (window.AudioContext || window.webkitAudioContext)(); const t0 = actx.currentTime;
  notes.forEach((f, i) => { const o = actx.createOscillator(), g = actx.createGain(), t = t0 + i * gap; o.type = type; o.frequency.value = f; o.connect(g); g.connect(actx.destination);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + .02); g.gain.exponentialRampToValueAtTime(.0001, t + 1.1); o.start(t); o.stop(t + 1.2); }); } catch (e) { } };
const SND = { tick: () => chime([660], 0, .025), bad: () => chime([220, 185], .12, .05, "triangle"), ok: () => chime([784, 988, 1175], .1),
  gift: () => chime([523, 659, 784, 988, 1175, 1319], .11, .05), flower: () => chime([1047, 1319], .09, .04), fw: () => chime([1568, 2093], .06, .016), blow: () => chime([392, 330], .1, .03, "triangle") };

/* ---------- petals / stars background ---------- */
const pc = $("#petals"), px = pc.getContext("2d");
let petals = [], petalsOn = false;
const COARSE = matchMedia("(pointer: coarse)").matches, reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const DPR = Math.min(devicePixelRatio, COARSE ? 1.5 : 2);   // cap: tiny glowing dots gain nothing from a 3x canvas
// Mobile browsers resize innerHeight while the URL bar slides in/out during scrolling. Size the canvases to the tallest
// height seen (reset on width change) so those resizes never reallocate/clear the canvas or squash the stars.
let SW = innerWidth, SH = innerHeight;
function sizeCanvas() {
  if (innerWidth !== SW) { SW = innerWidth; SH = innerHeight; } else SH = Math.max(SH, innerHeight);
  const w = SW * DPR, h = SH * DPR;
  for (const c of [pc, cc]) { if (c.width !== w || c.height !== h) { c.width = w; c.height = h; } c.style.height = SH + "px"; }
}
const cc = $("#confetti"), cx = cc.getContext("2d"); cc.hidden = true;   // not composited while idle
let rz; addEventListener("resize", () => { clearTimeout(rz); rz = setTimeout(sizeCanvas, 150); }); sizeCanvas();   // debounced: mobile URL-bar resizes fire while scrolling
function makePetal(top) {
  const p = { x: rand(0, innerWidth), y: top ? -20 : rand(0, SH), s: rand(8, 18), v: rand(.4, 1.1), w: rand(.5, 1.5),
    a: rand(0, 6.28), r: rand(-.02, .02), ch: ["✿", "❀", "★", "✦", "❁"][Math.random() * 5 | 0], c: ["#a9c7f5", "#7fa8ee", "#ffd88a", "#c9dcff"][Math.random() * 4 | 0], o: rand(.35, .85) };
  if (CONFIG.style.calm) { p.ch = "✦"; p.c = ["#e4c58f", "#a9c7f5"][Math.random() * 2 | 0]; p.s = rand(6, 11); p.o = rand(.2, .5); p.v *= .6; }
  return p;
}
const stars = Array.from({ length: 105 }, () => ({ x: Math.random(), y: Math.random(), r: rand(.4, 1.4), p: rand(0, 6.28), s: rand(.01, .03), z: rand(.2, 1) }));
let shoot = null, nextShoot = Date.now() + 4000;
function drawSky(k) {
  if (!CONFIG.style.stars) return;
  px.save(); px.scale(DPR, DPR); px.fillStyle = "#dbe8ff";
  stars.forEach(s => { s.p += s.s * k; px.globalAlpha = .2 + .6 * Math.abs(Math.sin(s.p)); px.beginPath(); px.arc(s.x * innerWidth, ((s.y * SH - (COARSE ? 0 : scrollY) * s.z * .3) % SH + SH) % SH, s.r, 0, 6.28); px.fill(); });
  if (!reduced && !shoot && Date.now() > nextShoot) { shoot = { x: rand(.4, 1) * innerWidth, y: rand(0, .35) * innerHeight, l: 0 }; nextShoot = Date.now() + rand(6000, 11000); }
  if (shoot) { shoot.x -= 9; shoot.y += 5; shoot.l++;
    const g = px.createLinearGradient(shoot.x, shoot.y, shoot.x + 70, shoot.y - 39); g.addColorStop(0, "rgba(255,255,255,.9)"); g.addColorStop(1, "rgba(255,255,255,0)");
    px.globalAlpha = 1; px.strokeStyle = g; px.lineWidth = 1.6; px.beginPath(); px.moveTo(shoot.x, shoot.y); px.lineTo(shoot.x + 70, shoot.y - 39); px.stroke();
    if (shoot.l > 60) shoot = null; }
  px.restore();
}
let lastT = 0;
function drawPetals(t = performance.now()) {
  requestAnimationFrame(drawPetals);
  if ((COARSE || reduced) && t - lastT < (reduced ? 1000 : 30)) return;   // ~30fps on phones (motion scaled to match); once a second if motion is reduced
  lastT = t; const k = reduced ? 0 : COARSE ? 2 : 1;
  px.clearRect(0, 0, pc.width, pc.height); drawSky(k);
  if (petalsOn && !reduced) {
    if (petals.length < (CONFIG.style.calm ? 12 : 34) && Math.random() < .05) petals.push(makePetal(true));
    petals.forEach(p => {
      p.y += p.v * k; p.x += Math.sin(p.y / 40) * p.w * k; p.a += p.r * k;
      px.save(); px.scale(DPR, DPR); px.translate(p.x, p.y); px.rotate(p.a);
      px.globalAlpha = p.o; px.fillStyle = p.c; px.font = p.s + "px serif"; px.fillText(p.ch, 0, 0); px.restore();
    });
    petals = petals.filter(p => p.y < SH + 30);
  }
}
drawPetals();

/* ---------- golden bokeh (ambient depth) ---------- */
(function () { const b = $("#bokeh"); if (!b) return;
  for (let i = 0; i < 14; i++) { const e = document.createElement("i"), z = rand(10, 46);
    e.style.cssText = `left:${rand(0, 100)}%;width:${z}px;height:${z}px;--o:${rand(.25, .6).toFixed(2)};--sw:${rand(-40, 40) | 0}px;animation-duration:${rand(16, 34).toFixed(1)}s;animation-delay:${-rand(0, 30).toFixed(1)}s`;
    b.appendChild(e); } })();

/* ---------- confetti + fireworks ---------- */
let conf = [], confRun = false;
function confetti(x = innerWidth / 2, y = innerHeight / 2, n = 120) {
  const calm = CONFIG.style.calm; if (calm) n = Math.round(n * .35);
  const cols = calm ? ["#e4c58f", "#f6e7c8", "#a9c7f5", "#ffffff"] : ["#4f86e8", "#ffd88a", "#7fa8ee", "#fff", "#a9c7f5", "#7be0ff"];
  for (let i = 0; i < n; i++) {
    const a = rand(0, 6.28), s = rand(4, 13);
    conf.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 5, g: .25, w: rand(5, 10), h: rand(3, 6), r: rand(0, 6), vr: rand(-.3, .3), c: cols[Math.random() * cols.length | 0], life: rand(90, 160) });
  }
  startConf();
}
const PAL = [["#ffd88a", "#fff2cf", "#e4c58f"], ["#a9c7f5", "#e6f0ff", "#7fa8ee"], ["#ffffff", "#dbe8ff", "#ffd88a"], ["#ffc9d6", "#fff0f4", "#e4c58f"]];
function explode(x, y, shape) {
  const pal = PAL[Math.random() * PAL.length | 0], heart = shape === "heart", n = heart ? 48 : (rand(55, 78) | 0);
  for (let i = 0; i < n; i++) {
    let vx, vy;
    if (heart) { const t = i / n * 6.2832; vx = 16 * Math.pow(Math.sin(t), 3) * .33; vy = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * .33; }
    else { const a = rand(0, 6.2832), sp = Math.sqrt(rand(.2, 1)) * rand(4, 6.4); vx = Math.cos(a) * sp; vy = Math.sin(a) * sp; }
    conf.push({ spark: 1, x, y, vx, vy, g: heart ? .018 : .045, f: heart ? .955 : .962, c: pal[Math.random() * 3 | 0], life: rand(70, 105), w: rand(1.2, 2.3) });
  }
  SND.fw(); startConf();
}
function launch(x = innerWidth / 2, y = innerHeight * .3, shape = "") {
  if (reduced) return explode(x, y, shape);
  const sx = x + rand(-60, 60), g = .2, vy = -Math.sqrt(2 * g * Math.max(140, innerHeight - y));
  conf.push({ rocket: 1, x: sx, y: innerHeight + 8, vx: (x - sx) / (-vy / g), vy, g, ty: y, shape, life: 400 });
  startConf();
}
const barrage = (n = 6) => { for (let i = 0; i < n; i++) setTimeout(() => launch(rand(.15, .85) * innerWidth, rand(.12, .45) * innerHeight, i === 2 ? "heart" : ""), i * 650); };
const startConf = () => { if (!confRun) { confRun = true; cc.hidden = false; loopConf(); } };
function loopConf() {
  cx.setTransform(1, 0, 0, 1, 0, 0); cx.clearRect(0, 0, cc.width, cc.height); cx.setTransform(DPR, 0, 0, DPR, 0, 0);
  conf.forEach(p => {
    if (p.rocket) {
      p.vy += p.g; p.x += p.vx; p.y += p.vy; p.life--;
      cx.globalAlpha = 1; cx.strokeStyle = "rgba(255,233,176,.55)"; cx.lineWidth = 1.6; cx.lineCap = "round"; cx.beginPath(); cx.moveTo(p.x, p.y); cx.lineTo(p.x - p.vx * 4, p.y - p.vy * 4); cx.stroke();
      cx.fillStyle = "#fff3cf"; cx.beginPath(); cx.arc(p.x, p.y, 2.1, 0, 6.28); cx.fill();
      if (p.vy >= -.4 || p.y <= p.ty) { p.life = 0; explode(p.x, p.y, p.shape); }
      return;
    }
    if (p.spark) {
      p.vx *= p.f; p.vy = p.vy * p.f + p.g; p.x += p.vx; p.y += p.vy; p.life--;
      cx.globalAlpha = Math.min(1, p.life / 40); cx.strokeStyle = p.c; cx.lineWidth = p.w; cx.lineCap = "round";
      cx.beginPath(); cx.moveTo(p.x - p.vx * 1.7, p.y - p.vy * 1.7); cx.lineTo(p.x, p.y); cx.stroke();
      return;
    }
    p.vy += p.g; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.r += p.vr; p.life--;
    cx.save(); cx.translate(p.x, p.y); cx.rotate(p.r);
    cx.globalAlpha = Math.min(1, p.life / 40); cx.fillStyle = p.c; cx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); cx.restore();
  });
  conf = conf.filter(p => p.life > 0);
  if (conf.length) requestAnimationFrame(loopConf); else { confRun = false; cx.setTransform(1, 0, 0, 1, 0, 0); cx.clearRect(0, 0, cc.width, cc.height); cc.hidden = true; }
}

/* ---------- build the main page from CONFIG ---------- */
/* gerbera daisy: two rings of petals around a dark centre, drawn once per flower from [outer, inner] colours */
const gerbera = ([o, i]) => {
  const ring = (n, cy, rx, ry, fill) => Array.from({ length: n }, (_, k) => `<ellipse cx="50" cy="${cy}" rx="${rx}" ry="${ry}" transform="rotate(${(k * 360 / n).toFixed(1)} 50 50)" fill="${fill}"/>`).join("");
  return `<svg viewBox="0 0 100 100" aria-hidden="true"><g stroke="rgba(0,0,0,.14)" stroke-width=".4">${ring(21, 22, 4.8, 19, o)}${ring(15, 31, 4.2, 12, i)}</g><circle cx="50" cy="50" r="10.5" fill="#6b4a1b"/><circle cx="50" cy="50" r="6.5" fill="#3a2410"/><circle cx="47.5" cy="47.5" r="1.8" fill="rgba(255,255,255,.35)"/></svg>`;
};

const dims = {};   // natural sizes, filled by the loader, so photos reserve their space (no layout shift)
const img = p => `<img src="${esc(p.src)}" alt="${esc(p.caption)}"${dims[p.src] ? ` width="${dims[p.src][0]}" height="${dims[p.src][1]}"` : ""} style="object-position:${esc(p.pos || "50% 50%")}" onerror="this.remove()">`;
function cakeSVG() {
  const xs = [70, 95, 120, 145, 170];
  let drip = ""; { let x = 214; const y = 100; drip = `M58 ${y - 6} H182 V${y}`; for (let i = 0; i < 7; i++) { const w = 124 / 7, d = [10, 18, 8, 22, 12, 17, 9][i]; drip += ` Q${(182 - w * i - w / 2).toFixed(1)} ${y + d * 1.6} ${(182 - w * (i + 1)).toFixed(1)} ${y}`; } drip += " Z"; }
  let drip2 = "M26 148 H214 V152"; for (let i = 0; i < 9; i++) { const w = 188 / 9, d = [9, 15, 8, 18, 10, 16, 8, 14, 11][i]; drip2 += ` Q${(214 - w * i - w / 2).toFixed(1)} ${152 + d * 1.6} ${(214 - w * (i + 1)).toFixed(1)} 152`; } drip2 += " Z";
  const candles = xs.map((x, i) => { const o = (i % 2) * 5, top = 70 + o;
    return `<g class="cdl" style="--i:${i}"><rect x="${x - 3.5}" y="${top}" width="7" height="${100 - top}" rx="2" fill="url(#stripe)"/>
      <line x1="${x}" y1="${top}" x2="${x}" y2="${top - 4}" stroke="#4a3510" stroke-width="1.3" stroke-linecap="round"/>
      <path class="smoke" style="--i:${i}" d="M${x} ${top - 8} c -6 -9 6 -15 0 -26"/>
      <g transform="translate(${x} ${top - 4})"><ellipse class="halo" style="--i:${i}" cx="0" cy="-9" rx="15" ry="17" fill="url(#halo)"/>
      <path class="flame" style="--i:${i}" d="M0 -23 C 6.5 -15 6.5 -6 0 -1.5 C -6.5 -6 -6.5 -15 0 -23Z" fill="url(#flame)"/></g></g>`; }).join("");
  const dots = [[48,172],[78,190],[104,168],[136,192],[166,170],[194,188],[62,162],[180,160]].map((d, i) => `<circle cx="${d[0]}" cy="${d[1]}" r="1.8" fill="#e4c58f" opacity=".75"/>`).join("");
  const spk = [[24,60],[216,70],[34,120],[208,128],[120,22]].map((d, i) => `<path class="spk" style="--i:${i}" d="M${d[0]} ${d[1] - 6} L${d[0] + 1.6} ${d[1] - 1.6} L${d[0] + 6} ${d[1]} L${d[0] + 1.6} ${d[1] + 1.6} L${d[0]} ${d[1] + 6} L${d[0] - 1.6} ${d[1] + 1.6} L${d[0] - 6} ${d[1]} L${d[0] - 1.6} ${d[1] - 1.6}Z"/>`).join("");
  return `<svg viewBox="0 0 240 232" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Birthday cake with candles"><defs>
    <linearGradient id="t1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a5cb5"/><stop offset="1" stop-color="#123069"/></linearGradient>
    <linearGradient id="t2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4a82dc"/><stop offset="1" stop-color="#1f4a9e"/></linearGradient>
    <linearGradient id="flame" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#ffb347"/><stop offset=".55" stop-color="#ffe08a"/><stop offset="1" stop-color="#fffbe8"/></linearGradient>
    <radialGradient id="halo"><stop offset="0" stop-color="#ffd88a" stop-opacity=".55"/><stop offset="1" stop-color="#ffd88a" stop-opacity="0"/></radialGradient>
    <pattern id="stripe" width="7" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><rect width="7" height="8" fill="#f6ecd9"/><rect width="7" height="4" fill="#e4c58f"/></pattern></defs>
    <ellipse cx="120" cy="218" rx="112" ry="11" fill="#0a1a3d" stroke="#e4c58f" stroke-opacity=".5"/>
    <path d="M26 156 q0 -8 8 -8 h172 q8 0 8 8 v50 q0 12 -12 12 h-164 q-12 0 -12 -12z" fill="url(#t1)"/>
    <path d="${drip2}" fill="#f6ecd9"/>
    <rect x="26" y="196" width="188" height="5" fill="#e4c58f" opacity=".85"/>
    <path d="M58 106 q0 -8 8 -8 h108 q8 0 8 8 v44 h-124z" fill="url(#t2)"/>
    <path d="${drip}" fill="#f6ecd9"/>
    <rect x="58" y="136" width="124" height="4" fill="#e4c58f" opacity=".85"/>
    ${dots}<text x="120" y="130" text-anchor="middle" font-size="16" fill="#e4c58f" opacity=".9">♥</text>
    ${candles}${spk}</svg>`;
}
function bdayInfo() {
  const B = CONFIG.birthday, now = new Date(), t0 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let age = t0.getFullYear() - B.year, d = Math.round((new Date(t0.getFullYear(), B.month - 1, B.day) - t0) / 864e5);
  if (d < -7) { age++; d = Math.round((new Date(t0.getFullYear() + 1, B.month - 1, B.day) - t0) / 864e5); }
  return { age, d };
}
function badgeHTML() {
  const base = CONFIG.name.toUpperCase() + " ✦ HAPPY BIRTHDAY ✦ ", txt = base.repeat(Math.max(1, Math.round(54 / base.length)));
  return `<div class="badge rv" id="badge" role="button" aria-label="Celebrate"><svg class="ring" viewBox="0 0 200 200" aria-hidden="true"><defs><path id="circ" d="M100,100 m-82,0 a82,82 0 1,1 164,0 a82,82 0 1,1 -164,0"/></defs>
    <circle cx="100" cy="100" r="96" stroke-opacity=".28" stroke-width=".8"/><circle cx="100" cy="100" r="68" stroke-opacity=".2" stroke-width=".6" stroke-dasharray="1 5"/>
    <text><textPath href="#circ" textLength="512" lengthAdjust="spacing">${esc(txt)}</textPath></text></svg>
    <div class="core"><span class="num" id="ageNum">0</span></div></div>`;
}
function countUp(el, to, ms = 1500) { const t0 = performance.now(); const f = t => { const k = Math.min(1, (t - t0) / ms); el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(f); }; requestAnimationFrame(f); }
function splitWords(el) {
  el.setAttribute("aria-label", el.textContent); let i = 0;
  const go = n => [...n.childNodes].forEach(c => {
    if (c.nodeType === 3) { const f = document.createDocumentFragment();
      c.textContent.split(/(\s+)/).forEach(w => { if (!w) return; if (/^\s+$/.test(w)) f.appendChild(document.createTextNode(" ")); else { const sp = document.createElement("span"); sp.className = "w"; sp.setAttribute("aria-hidden", "true"); sp.style.setProperty("--i", i++); sp.textContent = w; f.appendChild(sp); } });
      c.replaceWith(f); } else if (c.nodeType === 1) go(c); });
  go(el);
}
function buildMain() {
  const C = CONFIG;
  const photos = C.photos.items.map((p, i) => `<div class="pol rv d${i % 3 + 1}" data-i="${i}"><div class="ph">${img(p)}</div><div class="cap">${esc(p.caption)}</div></div>`).join("");
  const tl = C.timeline.items.map((e, i) => `<div class="ev rv d${i % 3 + 1}"><small>${esc(e.icon)} ${esc(e.tag)}</small><b>${esc(e.title)}</b><span>${esc(e.text)}</span></div>`).join("");
  $("#app").innerHTML = `
  <section id="hero">
    ${badgeHTML()}
    <div class="cd rv">${esc(countdownText())}</div>
    <p class="eyebrow rv d1">✦ ${esc(C.hero.eyebrow)} ✦</p>
    <h1 class="rv d1">Happy <em>Birthday</em>${esc(C.name.toUpperCase())}</h1>
    <div class="rule rv d2"></div>
    <p class="eyebrow rv d2">${esc(C.hero.date)}</p>
    <p class="qt rv d3">“${esc(C.hero.quote)}”</p>
    <div class="scroll rv d3">SCROLL ↓</div>
  </section>

  <section id="cakeSec">
    <div class="cake rv" id="cake">🎂</div>
    <h2 class="rv d1">${esc(C.cake.title)}</h2>
    <p class="sub rv d2">${esc(C.cake.text)}</p>
    <button class="btn rv d3" id="wishBtn">${esc(C.cake.button)}</button>
    <div class="wishmsg" id="wishMsg"></div>
  </section>

  <section id="letterSec">
    <p class="eyebrow rv">${esc(C.letter.eyebrow)}</p>
    <h2 class="rv d1">A Letter For You</h2>
    <div class="letter rv d2" id="letter"><button class="seal" id="seal" aria-label="Open the letter"><span>${esc(C.name[0])}</span><small>Tap to open</small></button><h3>${esc(C.letter.title)}</h3><div id="lbody"></div><div class="sig" id="sig">${esc(C.letter.signature)}</div></div>
  </section>

  <section id="photoSec">
    <p class="eyebrow rv">${esc(C.photos.eyebrow)}</p>
    <h2 class="rv d1">${esc(C.photos.title)}</h2>
    <div class="pols">${photos}</div>
  </section>

  <section id="tlSec">
    <p class="eyebrow rv">${esc(C.timeline.eyebrow)}</p>
    <h2 class="rv d1">${esc(C.timeline.title)}</h2>
    <div class="tl">${tl}</div>
  </section>

  <section id="plSec">
    <p class="eyebrow rv">${esc(C.playlist.eyebrow)}</p>
    <h2 class="rv d1">${esc(C.playlist.title)}</h2>
    <div class="player rv d2">
      <div class="disc" id="disc"></div>
      <div class="ptitle" id="pTitle"></div><div class="sub" id="pArtist"></div><div class="pnote" id="pNote"></div>
      <div class="viz" id="viz">${"<i></i>".repeat(30)}</div>
      <div class="bar" id="bar"><i id="barFill"></i></div>
      <div class="times"><span id="tNow">0:00</span><span id="tAll">0:00</span></div>
      <div class="ctrl"><button id="prev">⏮</button><button class="pp" id="pp">▶</button><button id="next">⏭</button></div>
    </div>
    <div class="tracks rv d3" id="tracks"></div>
  </section>

  <section id="gardenSec">
    <p class="eyebrow rv">${esc(C.garden.eyebrow)}</p>
    <h2 class="rv d1">${esc(C.garden.title)}</h2>
    <div class="count" id="gcount"></div>
    <div class="secret" id="gsecret"></div>
  </section>

  <section id="jarSec">
    <p class="eyebrow rv">${esc(C.jar.eyebrow)}</p>
    <h2 class="rv d1">${esc(C.jar.title)}</h2>
    <div class="jar rv d2" id="jar">🫙</div>
    <div class="note" id="note"></div>
    <button class="btn" id="shake">${esc(C.jar.button)}</button>
    <div class="count" id="count"></div>
  </section>

  <section id="starSec">
    <p class="eyebrow rv">Written in the stars</p>
    <h2 class="rv d1">Some stories were always meant to be</h2>
  </section>

    <section id="final">
    <p class="eyebrow rv">${esc(C.final.eyebrow)}</p>
    <h2 class="rv d1">${esc(C.final.title)}<em>${esc(C.final.titleEm)}</em></h2>
    <p class="final-text rv d2">${esc(C.final.text)}</p>
    <div class="heart rv d3">${esc(C.final.emoji)}</div>
    <button class="btn rv d3" id="replay">Fireworks ✦</button>
    <p class="made rv d3">with love, ${esc(C.from)}</p>
  </section>`;
  splitLetters($("#hero h1")); $$("section h2").forEach(splitWords); scatterFlowers(); initReveal(); initCake(); initLetter(); initPhotos(); initPlayer(); initGarden(); initJar(); initHero(); initScrollFX();
}

/* ---------- scroll reveal ---------- */
function initReveal() {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .15 });
  $$(".rv").forEach(el => io.observe(el));
}

/* ---------- cake ---------- */
function initCake() {
  const cake = $("#cake"); cake.innerHTML = cakeSVG();
  const blow = () => {
    if (cake.classList.contains("blown")) return;
    cake.classList.add("blown", "wish"); SND.blow(); navigator.vibrate && navigator.vibrate(60);
    const r = cake.getBoundingClientRect(); setTimeout(() => { confetti(r.left + r.width / 2, r.top + r.height * .3, 160); launch(innerWidth / 2, innerHeight * .28, "heart"); }, 450);
    $("#wishMsg").textContent = CONFIG.cake.after;
  };
  $("#wishBtn").onclick = blow;
  cake.onclick = () => { if (cake.classList.contains("blown")) { cake.classList.remove("blown", "wish"); $("#wishMsg").textContent = ""; SND.tick(); } else blow(); };
}

/* ---------- typewriter letter (read line by line, no skip) ---------- */
function initLetter() {
  let started = false;
  const letter = $("#letter"), body = $("#lbody");
  const run = async () => {
    if (started) return; started = true;
    for (const text of CONFIG.letter.paragraphs) {
      const p = document.createElement("p"); p.className = "caret"; body.appendChild(p);
      for (const ch of text) { p.textContent += ch; await wait(ch === "," || ch === "." ? 80 : 15); }
      p.classList.remove("caret");
    }
    $("#sig").classList.add("in");
  };
  $("#seal").onclick = () => { $("#seal").classList.add("gone"); SND.ok(); const r = $("#seal").getBoundingClientRect(); confetti(r.left + r.width / 2, r.top + r.height / 2, 60); setTimeout(run, 500); };
}

/* ---------- photos + lightbox (swipe / arrows) ---------- */
function initPhotos() {
  const items = CONFIG.photos.items, lb = $("#lightbox"); let idx = 0, swiped = false, x0 = null;
  const render = () => { const p = items[idx];
    $("#lbPol").innerHTML = `<div class="ph">${img(p)}</div><div class="cap">${esc(p.caption)}</div>`;
    $("#lbCount").textContent = (idx + 1) + " / " + items.length; };
  const open = i => { idx = i; render(); lb.classList.remove("hidden"); };
  const step = d => { idx = (idx + d + items.length) % items.length; const pol = $("#lbPol"); pol.classList.remove("flip"); void pol.offsetWidth; pol.classList.add("flip"); render(); SND.tick(); };
  const close = () => lb.classList.add("hidden");
  $$(".pol").forEach(el => el.onclick = () => open(+el.dataset.i));
  $("#lbClose").onclick = close; $("#lbPrev").onclick = e => { e.stopPropagation(); step(-1); }; $("#lbNext").onclick = e => { e.stopPropagation(); step(1); };
  lb.onclick = e => { if (swiped) { swiped = false; return; } if (e.target.id === "lightbox") close(); };
  lb.addEventListener("pointerdown", e => { x0 = e.clientX; });
  lb.addEventListener("pointerup", e => { if (x0 === null) return; const dx = e.clientX - x0; x0 = null; if (Math.abs(dx) > 55) { swiped = true; step(dx < 0 ? 1 : -1); } });
  addEventListener("keydown", e => { if (lb.classList.contains("hidden")) return; if (e.key === "Escape") close(); else if (e.key === "ArrowRight") step(1); else if (e.key === "ArrowLeft") step(-1); });
}

/* ---------- music player ---------- */
const audio = new Audio(); audio.preload = "metadata"; let cur = 0;
function loadSong(i, play) {
  const songs = CONFIG.playlist.songs; cur = (i + songs.length) % songs.length;
  const s = songs[cur]; audio.src = s.src;
  $("#pTitle").textContent = s.title; $("#pArtist").textContent = s.artist; $("#pNote").textContent = s.note || "";
  $$(".trk").forEach((t, k) => t.classList.toggle("on", k === cur));
  if (play) audio.play().catch(() => toast("Add your mp3 files to the /music folder 🎵"));
}
function syncPlayUI() {
  const on = !audio.paused;
  $("#pp").textContent = on ? "⏸" : "▶"; $("#disc").classList.toggle("on", on); $("#musicBtn").classList.toggle("on", on);
}
function initPlayer() {
  $("#tracks").innerHTML = CONFIG.playlist.songs.map((s, i) => `<div class="trk" data-i="${i}"><div>${esc(s.title)}<small>${esc(s.artist)}</small></div><span>♪</span></div>`).join("");
  $$(".trk").forEach(t => t.onclick = () => loadSong(+t.dataset.i, true));
  $("#pp").onclick = () => audio.paused ? audio.play().catch(() => toast("Add your mp3 files to the /music folder 🎵")) : audio.pause();
  $("#prev").onclick = () => loadSong(cur - 1, true); $("#next").onclick = () => loadSong(cur + 1, true);
  $("#bar").onclick = e => { const r = e.currentTarget.getBoundingClientRect(); if (audio.duration) audio.currentTime = (e.clientX - r.left) / r.width * audio.duration; };
  audio.ontimeupdate = () => { $("#barFill").style.width = (audio.currentTime / audio.duration * 100 || 0) + "%"; $("#tNow").textContent = fmt(audio.currentTime); };
  audio.onloadedmetadata = () => $("#tAll").textContent = fmt(audio.duration);
  audio.onplay = audio.onpause = syncPlayUI; audio.onended = () => loadSong(cur + 1, true);
  $("#musicBtn").onclick = () => $("#pp").click();
  loadSong(0, false);
  const bars = $$("#viz i"); let rest = false;
  const vz = () => { const on = !audio.paused, t = performance.now() / 1000;
    if (on || !rest) { bars.forEach((b, i) => b.style.height = (on ? 6 + 30 * Math.abs(Math.sin(t * 3.1 + i * .55) * Math.cos(t * 1.7 + i * .31)) + 7 * Math.abs(Math.sin(t * 9 + i * 1.3)) : 3) + "px"); rest = !on; }
    requestAnimationFrame(vz); };
  vz();
}

/* ---------- jar of reasons ---------- */
function initJar() {
  let bag = [], shown = 0; const total = CONFIG.jar.reasons.length;
  $("#count").textContent = CONFIG.jar.idle;
  $("#shake").onclick = $("#jar").onclick = () => {
    const j = $("#jar"); j.classList.remove("shake"); void j.offsetWidth; j.classList.add("shake");
    if (!bag.length) { bag = [...CONFIG.jar.reasons].sort(() => Math.random() - .5); shown = 0; }
    const reason = bag.pop();   // take it now: two quick taps must never read the same (or an empty) bag
    setTimeout(() => {
      const n = $("#note"); n.classList.remove("show"); void n.offsetWidth;
      n.textContent = "“" + reason + "”"; n.classList.add("show"); shown++;
      $("#count").textContent = shown + " / " + total;
      const r = j.getBoundingClientRect(); confetti(r.left + r.width / 2, r.top + 20, 40);
    }, 500);
  };
}

/* ---------- opening sequence ---------- */
const leave = el => { el.classList.add("out"); setTimeout(() => el.classList.add("hidden"), 950); };
const show = el => { el.classList.remove("hidden", "out"); el.classList.add("fade-in"); };

function startLock() {
  const lock = $("#lock"), pin = CONFIG.pin;
  if (!pin) return startGift();
  $("#lockTitle").textContent = "For You, " + CONFIG.name; $("#lockHint").textContent = CONFIG.lockHint;
  $("#dots").innerHTML = [...pin].map(() => "<span></span>").join("");
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "⌫"];
  $("#keypad").innerHTML = keys.map(k => k ? `<button data-k="${k}">${k}</button>` : `<button class="ghost" disabled></button>`).join("");
  let val = "";
  const paint = () => $$("#dots span").forEach((d, i) => d.classList.toggle("on", i < val.length));
  $$("#keypad button[data-k]").forEach(b => b.onclick = async () => {
    const k = b.dataset.k; $("#lockErr").textContent = ""; SND.tick();
    if (k === "⌫") val = val.slice(0, -1); else if (val.length < pin.length) val += k;
    paint();
    if (val.length === pin.length) {
      await wait(250);
      if (val === pin) { SND.ok(); leave(lock); startGift(); }
      else { SND.bad(); $("#dots").classList.add("shake"); $("#lockErr").textContent = CONFIG.wrongText; navigator.vibrate && navigator.vibrate(200);
        await wait(520); $("#dots").classList.remove("shake"); val = ""; paint(); }
    }
  });
  show(lock);
}

function startGift() {
  const g = $("#gift"), box = $("#giftbox"); const [gt, gl] = greeting(); $("#giftGreet").innerHTML = `<span class="serif">${esc(gt)}, ${esc(CONFIG.name)}</span><small>${esc(gl)}</small>`; $("#giftHint").textContent = CONFIG.giftHint;
  setTimeout(() => show(g), 400);
  box.onclick = async () => {
    if (box.classList.contains("open") || box.classList.contains("rumble")) return;
    box.classList.add("rumble"); navigator.vibrate && navigator.vibrate([80, 40, 80, 40, 80, 40, 160]);
    await wait(750); box.classList.remove("rumble"); box.classList.add("open"); SND.gift();
    const em = ["🌻", "🌷", "🌹", "🌸", "🌼", "💐", "🌺", "🌿", "✨", "💗"];
    $("#burst").innerHTML = Array.from({ length: 22 }, () => {
      const a = rand(-2.9, -.25), d = rand(90, 250);
      return `<span class="bf" style="--x:${Math.cos(a) * d}px;--y:${Math.sin(a) * d - 40}px;--r:${rand(-50, 50)}deg;animation-delay:${rand(0, .5)}s">${em[Math.random() * em.length | 0]}</span>`;
    }).join("");
    const r = box.getBoundingClientRect(); confetti(r.left + r.width / 2, r.top, 180);
    await wait(2300); leave(g); await wait(700); openMain();
  };
}

function openMain() {
  document.body.classList.remove("locked");
  buildMain(); initFX(); { const rb = document.createElement("div"); rb.className = "ringburst"; document.body.appendChild(rb); setTimeout(() => rb.remove(), 1600); } $("#app").classList.remove("hidden"); $("#app").classList.add("fade-in");
  $("#musicBtn").classList.remove("hidden"); petalsOn = true; scrollTo(0, 0);
  const nw = new Date(); if (nw.getMonth() + 1 === CONFIG.birthday.month && nw.getDate() === CONFIG.birthday.day)
    { for (let i = 0; i < 4; i++) setTimeout(() => confetti(rand(.15, .85) * innerWidth, rand(.15, .45) * innerHeight, 160), 900 + i * 800); setTimeout(() => barrage(6), 1200); }
  audio.play().catch(() => { });
}

/* ---------- boot: progress reflects the assets actually awaited; hard timeout so it can never hang ---------- */
const fontsReady = () => new Promise(res => {
  const l = $("#fonts"), go = () => Promise.all(["400 1em 'Cormorant Garamond'", "300 1em Jost"].map(f => document.fonts.load(f))).then(res, res);
  l.media === "all" ? go() : (l.addEventListener("load", go), l.addEventListener("error", res));
});
(async function boot() {
  const fill = $("#lbarFill"), pct = $("#pct"), items = CONFIG.photos.items, total = items.length + 1, MIN = 1200, MAX = 6000;
  let done = 0, shown = -1; const ok = () => { done++; };
  items.forEach(p => { const i = new Image(); i.onload = () => { dims[p.src] = [i.naturalWidth, i.naturalHeight]; ok(); }; i.onerror = ok; i.src = p.src; });
  Promise.race([fontsReady(), wait(3000)]).then(ok);
  const t0 = performance.now();
  await new Promise(res => { (function tick() {
    const t = performance.now() - t0, end = t >= MAX || (done >= total && t >= MIN), k = end ? 1 : Math.min(done / total, t / MIN), n = Math.round(k * 100);
    if (n !== shown) { shown = n; fill.style.transform = `scaleX(${k})`; pct.textContent = n + "%"; }
    end ? res() : setTimeout(tick, 40); })(); });
  leave($("#loader")); await wait(500); startLock();
})();

/* ---------- extra effects ---------- */
function initFX() {
  const sp = (x, y, n, spread) => { for (let i = 0; i < n; i++) {                                   // sparkle burst / trail
    const e = document.createElement("span"), a = rand(0, 6.28), d = rand(20, spread); e.className = "sp";
    e.textContent = (CONFIG.style.calm ? ["✦", "✧", "✦", "✨", "⋆"] : ["✨", "💗", "🌸", "⭐", "💖"])[Math.random() * 5 | 0];
    e.style.cssText = `left:${x}px;top:${y}px;--x:${Math.cos(a) * d}px;--y:${Math.sin(a) * d}px;font-size:${rand(10, 20)}px`;
    document.body.appendChild(e); setTimeout(() => e.remove(), 900); } };
  let last = 0;
  if (CONFIG.style.sparkles && !reduced) {
    addEventListener("pointerdown", e => { if (!e.target.closest("button")) sp(e.clientX, e.clientY, 7, 90); });
    addEventListener("pointermove", e => { const t = Date.now(); if (t - last > 70 && e.pointerType === "mouse") { last = t; sp(e.clientX, e.clientY, 1, 30); } });
  }
  (CONFIG.style.tilt && !reduced ? $$(".pol") : []).forEach(el => {                                                                         // 3D tilt + glare on photos
    const gl = document.createElement("i"); gl.className = "glare"; el.querySelector(".ph").appendChild(gl);
    el.addEventListener("pointermove", e => { const r = el.getBoundingClientRect(), px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
      el.style.setProperty("--ry", (px - .5) * 16 + "deg"); el.style.setProperty("--rx", -(py - .5) * 16 + "deg");
      el.style.setProperty("--mx", px * 100 + "%"); el.style.setProperty("--my", py * 100 + "%"); el.classList.add("hot"); });
    ["pointerleave", "pointerup", "pointercancel"].forEach(ev => el.addEventListener(ev, () => { el.style.setProperty("--rx", "0deg"); el.style.setProperty("--ry", "0deg"); el.classList.remove("hot"); }));
  });
  if (matchMedia("(hover:hover) and (pointer:fine)").matches) {                                        // spotlight follows the mouse
    const g = document.createElement("div"); g.id = "glow"; document.body.appendChild(g);
    addEventListener("pointermove", e => { g.style.transform = `translate(${e.clientX}px,${e.clientY}px)`; g.classList.add("on"); }, { passive: true });
    document.addEventListener("pointerleave", () => g.classList.remove("on"));
  }
  let fw; new IntersectionObserver(es => {                                                           // fireworks at the end
    if (es[0].isIntersecting) { let n = 0; fw = setInterval(() => { launch(rand(.15, .85) * innerWidth, rand(.12, .45) * innerHeight, n === 2 ? "heart" : ""); if (++n > (CONFIG.style.calm ? 4 : 9)) clearInterval(fw); }, 800); }
    else clearInterval(fw); }, { threshold: .5 }).observe($("#final"));
}

/* ---------- the six flowers, each placed in its own section: [section id, side, desktop top %] ---------- */
const FLOWER_SPOTS = [["cakeSec", "r", 16], ["photoSec", "l", 7], ["tlSec", "r", 12], ["plSec", "l", 6], ["gardenSec", "c", 0], ["jarSec", "r", 12]];
function scatterFlowers() {
  const io = new IntersectionObserver(es => es.forEach(e => e.target.classList.toggle("paused", !e.isIntersecting)), { rootMargin: "80px" });
  CONFIG.garden.flowers.forEach((f, i) => {
    const [id, side, top] = FLOWER_SPOTS[i % FLOWER_SPOTS.length], sec = $("#" + id), b = document.createElement("button");
    b.className = `gf scat s${side}`; b.dataset.i = i; b.setAttribute("aria-label", f.t);
    b.style.cssText = `--h:${[96, 122, 84, 110, 92, 104][i % 6]}px;--dl:${i * .35}s;--top:${top}%`;
    b.innerHTML = `<span class="tp">tap me</span><span class="bl">${gerbera(f.c)}</span><i class="stem"></i><em class="nm">${esc(f.t)}</em>`;
    side === "c" ? sec.insertBefore(b, $("#gcount")) : sec.appendChild(b);
    io.observe(b);   // sway / halo / "tap me" loops only run while the flower is visible
  });
}

/* ---------- flower garden ---------- */
function initGarden() {
  const G = CONFIG.garden, done = new Set(), total = G.flowers.length;
  const cnt = () => { $("#gcount").textContent = done.size >= total ? "All flowers are open 💐" : done.size + " / " + total + " flowers opened · " + (total - done.size) + " to go"; };
  cnt();
  const card = document.createElement("div"); card.className = "fcard hidden"; card.setAttribute("role", "dialog"); card.setAttribute("aria-modal", "true");
  card.innerHTML = '<div class="fbox"><div class="fe"></div><div class="fn"></div><h3 class="serif"></h3><i class="fr"></i><p></p><button class="btn">Close 💗</button></div>';
  document.body.appendChild(card);
  const secret = () => { const g = $("#gsecret"), S = G.secret;
    g.innerHTML = `<h3 class="serif">${esc(S.title)}</h3><p>${esc(S.text)}</p>`;
    g.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
    [0, 700].forEach(t => setTimeout(() => confetti(rand(.2, .8) * innerWidth, rand(.2, .5) * innerHeight, 90), t)); barrage(3);
  };
  card.onclick = e => { if (e.target === card || e.target.tagName === "BUTTON") { card.classList.add("hidden"); if (done.size === total && !$("#gsecret").innerHTML) setTimeout(secret, 300); } };
  $$(".gf").forEach(b => b.onclick = () => {
    const f = G.flowers[+b.dataset.i], first = !b.classList.contains("open"); SND.flower(); b.classList.add("open"); done.add(+b.dataset.i); cnt();
    const r = b.getBoundingClientRect(); confetti(r.left + r.width / 2, r.top + 20, 18); navigator.vibrate && navigator.vibrate(40);
    const show = () => { $(".fe", card).innerHTML = gerbera(f.c); $(".fn", card).textContent = f.t; $("h3", card).textContent = f.h; $("p", card).textContent = f.x; card.classList.remove("hidden"); $(".btn", card).focus({ preventScroll: true }); };
    first && !reduced ? setTimeout(show, 800) : show();   // first tap: let the flower bloom before its message appears
  });
}

/* ---------- hero letter-by-letter reveal ---------- */
function splitLetters(el) {
  let i = 0;
  const go = n => [...n.childNodes].forEach(c => {
    if (c.nodeType === 3) { const f = document.createDocumentFragment();
      [...c.textContent].forEach(ch => { const sp = document.createElement("span"); sp.className = "ch"; sp.style.setProperty("--i", i++); sp.textContent = ch === " " ? "\u00a0" : ch; f.appendChild(sp); });
      c.replaceWith(f); } else if (c.nodeType === 1) go(c); });
  go(el);
}

/* ---------- countdown + time-of-day greeting ---------- */
const ord = n => n + ["th", "st", "nd", "rd"][(n % 100 > 10 && n % 100 < 14) ? 0 : (n % 10 < 4 ? n % 10 : 0)];
function countdownText() {
  const { age, d } = bdayInfo();
  if (d === 0) return `Today is your ${ord(age)} birthday 🎂`;
  if (d === 1) return `Tomorrow is your ${ord(age)} birthday`;
  if (d > 1) return `${d} days until your ${ord(age)} birthday`;
  return `Your ${ord(age)} birthday was ${-d} day${d === -1 ? "" : "s"} ago`;
}
function greeting() {
  const h = new Date().getHours();
  return CONFIG.greetings[h >= 5 && h < 11 ? "morning" : h >= 11 && h < 17 ? "afternoon" : h >= 17 && h < 21 ? "evening" : "night"];
}

/* ---------- hero extras: age count-up + tap the seal ---------- */
function initHero() {
  const b = $("#badge"), n = $("#ageNum"); if (!b) return;
  const io = new IntersectionObserver((es, o) => { if (es[0].isIntersecting) { setTimeout(() => countUp(n, bdayInfo().age), 500); o.disconnect(); } }, { threshold: .4 }); io.observe(b);
  b.onclick = () => { SND.gift(); navigator.vibrate && navigator.vibrate(40); launch(innerWidth / 2, innerHeight * .3, "heart"); setTimeout(() => launch(innerWidth * .25, innerHeight * .25), 250); setTimeout(() => launch(innerWidth * .75, innerHeight * .25), 450); };
  const rp = $("#replay"); if (rp) rp.onclick = () => { SND.ok(); barrage(7); };
}

/* ---------- scroll effects: progress bar, photo parallax, glowing timeline, section dots ---------- */
function initScrollFX() {
  const pols = $$(".pol"), tl = $(".tl"), evs = $$(".ev"), secs = $$("main section"), fine = !reduced && matchMedia("(hover: hover) and (pointer: fine)").matches;
  const bar = document.createElement("div"); bar.id = "scrollbar"; document.body.appendChild(bar);
  const nav = document.createElement("nav"); nav.id = "snav"; nav.setAttribute("aria-label", "Sections");
  secs.forEach((sec, i) => { const b = document.createElement("button"); const h = sec.querySelector("h2, h1"); b.setAttribute("aria-label", h ? (h.getAttribute("aria-label") || h.textContent) : "Section " + (i + 1)); b.onclick = () => sec.scrollIntoView({ behavior: reduced ? "auto" : "smooth" }); nav.appendChild(b); });
  document.body.appendChild(nav); setTimeout(() => nav.classList.add("on"), 100);
  const dots = [...nav.children]; let tick = false;
  const run = () => { tick = false; const vh = innerHeight;
    // read phase (no style writes between reads, so layout is computed once)
    const sy = scrollY, max = document.documentElement.scrollHeight - vh;
    const pr = fine ? pols.map(el => el.getBoundingClientRect()) : [], tr = tl && tl.getBoundingClientRect();
    const er = evs.map(e => e.getBoundingClientRect().top), sr = secs.map(sec => sec.getBoundingClientRect());
    // write phase
    bar.style.transform = "scaleX(" + Math.min(1, sy / max || 0).toFixed(4) + ")";   // transform: no layout/paint per frame
    fine && pols.forEach((el, i) => { const r = pr[i]; if (r.bottom < -120 || r.top > vh + 120) return; const v = (((r.top + r.height / 2) / vh - .5) * -28).toFixed(1) + "px"; if (el._py !== v) { el._py = v; el.style.setProperty("--py", v); } });
    if (tr) tl.style.setProperty("--p", Math.min(1, Math.max(0, (vh * .62 - tr.top) / tr.height)).toFixed(3));
    evs.forEach((e, i) => e.classList.toggle("lit", er[i] < vh * .64));
    sr.forEach((r, i) => dots[i].classList.toggle("on", r.top <= vh / 2 && r.bottom > vh / 2)); };
  addEventListener("scroll", () => { if (!tick) { tick = true; requestAnimationFrame(run); } }, { passive: true }); addEventListener("resize", run); run();
}

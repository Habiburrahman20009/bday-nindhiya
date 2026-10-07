/* =====================================================================
   ✏️  EDIT EVERYTHING HERE — just change the text inside CONFIG
   ===================================================================== */
const CONFIG = {
  name: "Utami",
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
    title: "My dearest Utami,",
    paragraphs: [
      "Thank you for being one of the best women in my life. You have left a mark on my heart that will not easily fade, and the way you live your life is a guide that keeps me growing into a stronger, more resilient person.",
      "I admire you so much. From the stage to your first-place photography certificate, you shine in your own way: cheerful, full of energy, and making everyone around you smile.",
      "As you turn 18, I hope everything you wish for comes true, that your path is always made easy, and that every problem finds its way to a solution.",
      "I am so proud of you. From the very deepest part of my heart."
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

  timeline: {
    eyebrow: "Our journey",
    title: "Memories We've Written Together",
    items: [
      { icon: "✨", tag: "A beautiful beginning", title: "First Time We Met", text: "The day everything changed." },
      { icon: "💬", tag: "A precious moment", title: "Our First Conversation", text: "The first words that started it all." },
      { icon: "😂", tag: "A joyful moment", title: "Laughter That Never Ended", text: "The moments we laughed until it hurt." },
      { icon: "🌙", tag: "A quiet moment", title: "Beautiful Silence Together", text: "Even when we say nothing, it feels right." },
      { icon: "🎂", tag: "Today", title: "Your Very Special Day", text: "Celebrating you, today and always." }
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

  style: { calm: true, balloons: false, sparkles: false, tilt: false },   // set calm:false for the full-effects version

  discord: {                         // comment box → your Discord channel
    webhook: "https://discord.com/api/webhooks/1557323520823005184/ulnxGAQ7t-ubQWPBNAar32-ZQ3UWPC8VI9PbpXJ-JOL8KFJxXdz4pPTvrXyAn7T1HKwg",
    userId: "906384550156988428",    // who gets pinged
    maxSends: 3                      // per page load, anti-spam
  },

  garden: {                          // tap a flower → a special message
    eyebrow: "A garden for you",
    title: "Pick a flower",
    hint: "Tap every flower to see what's hiding inside 🌸",
    flowers: [
      { e: "🌻", t: "Sunflower",       x: "You make every day brighter. Please never stop shining." },
      { e: "🌹", t: "Rose",            x: "A promise: I'll always be on your side, no matter what." },
      { e: "🌷", t: "Tulip",           x: "A wish: may every dream you chase come true this year." },
      { e: "🌺", t: "Hibiscus",        x: "Calm, kind, and unforgettable. That's you." },
      { e: "🌸", t: "Cherry Blossom",  x: "Thank you for every single memory we've made together." },
      { e: "🌼", t: "Daisy",           x: "🎟️ Coupon: one free hug, valid anytime, forever 🤗" }
    ],
    secret: {
      title: "You found them all! 💐",
      text: "Your real gift is waiting for me to hand over. Come find me, I have something printed just for you 📸🎁",
      ask: "Before you come find me, leave me a message 💌",
      placeholder: "Write anything you want to say...",
      button: "Send 💌",
      note: "(this message goes straight to Habib)",
      empty: "Write something first 💗",
      sent: "Sent! 💗 Habib got your message. Now come find him for your gift 🎁",
      fail: "Couldn't send it. Check your internet and try again 💔"
    }
  },

  voice: {                           // record 20-30s, save as music/voice.mp3 (section hides itself if the file is missing)
    src: "music/voice.mp3",
    eyebrow: "One last thing",
    title: "A little voice for you",
    button: "Play"
  },

  final: {
    eyebrow: "Happy birthday",
    title: "May your life always be",
    titleEm: "filled with flowers",
    text: "Keep shining in your own way.",
    emoji: "Utami"
  }
};

/* =====================================================================
   ⚙️  ENGINE (you don't need to touch anything below)
   ===================================================================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const wait = ms => new Promise(r => setTimeout(r, ms));
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const rand = (a, b) => a + Math.random() * (b - a);
const fmt = t => isFinite(t) ? Math.floor(t / 60) + ":" + String(Math.floor(t % 60)).padStart(2, "0") : "0:00";
function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("show"), 2600); }

/* ---------- petals / stars background ---------- */
const pc = $("#petals"), px = pc.getContext("2d");
let petals = [], petalsOn = false;
function sizeCanvas() { for (const c of [pc, cc]) { c.width = innerWidth * devicePixelRatio; c.height = innerHeight * devicePixelRatio; } }
const cc = $("#confetti"), cx = cc.getContext("2d");
addEventListener("resize", sizeCanvas); sizeCanvas();
function makePetal(top) { const p = makePetal0(top); if (CONFIG.style.calm) { p.ch = "✦"; p.c = ["#e4c58f", "#e8b9b5"][Math.random() * 2 | 0]; p.s = rand(6, 11); p.o = rand(.2, .5); p.v *= .6; } return p; }
function makePetal0(top) {
  return { x: rand(0, innerWidth), y: top ? -20 : rand(0, innerHeight), s: rand(8, 18), v: rand(.4, 1.1), w: rand(.5, 1.5),
    a: rand(0, 6.28), r: rand(-.02, .02), ch: ["✿", "❀", "★", "✦", "❁"][Math.random() * 5 | 0], c: ["#ff9ec8", "#f58bbd", "#ffd88a", "#c58bff"][Math.random() * 4 | 0], o: rand(.35, .85) };
}
function drawPetals() {
  px.clearRect(0, 0, pc.width, pc.height);
  if (petalsOn) {
    if (petals.length < (CONFIG.style.calm ? 12 : 34) && Math.random() < .05) petals.push(makePetal(true));
    petals.forEach(p => {
      p.y += p.v; p.x += Math.sin(p.y / 40) * p.w; p.a += p.r;
      px.save(); px.scale(devicePixelRatio, devicePixelRatio); px.translate(p.x, p.y); px.rotate(p.a);
      px.globalAlpha = p.o; px.fillStyle = p.c; px.font = p.s + "px serif"; px.fillText(p.ch, 0, 0); px.restore();
    });
    petals = petals.filter(p => p.y < innerHeight + 30);
  }
  requestAnimationFrame(drawPetals);
}
drawPetals();

/* ---------- confetti ---------- */
let conf = [], confRun = false;
function confetti(x = innerWidth / 2, y = innerHeight / 2, n = 120) {
  const calm = CONFIG.style.calm; if (calm) n = Math.round(n * .35);
  const cols = calm ? ["#e4c58f", "#f6e7c8", "#e8b9b5", "#ffffff"] : ["#ff4fa3", "#ffd88a", "#b06cff", "#fff", "#ff9ec8", "#7be0ff"];
  for (let i = 0; i < n; i++) {
    const a = rand(0, 6.28), s = rand(4, 13);
    conf.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 5, g: .25, w: rand(5, 10), h: rand(3, 6), r: rand(0, 6), vr: rand(-.3, .3), c: cols[Math.random() * cols.length | 0], life: rand(90, 160) });
  }
  if (!confRun) { confRun = true; loopConf(); }
}
function loopConf() {
  cx.clearRect(0, 0, cc.width, cc.height);
  conf.forEach(p => {
    p.vy += p.g; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.r += p.vr; p.life--;
    cx.save(); cx.scale(devicePixelRatio, devicePixelRatio); cx.translate(p.x, p.y); cx.rotate(p.r);
    cx.globalAlpha = Math.min(1, p.life / 40); cx.fillStyle = p.c; cx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); cx.restore();
  });
  conf = conf.filter(p => p.life > 0);
  if (conf.length) requestAnimationFrame(loopConf); else { confRun = false; cx.clearRect(0, 0, cc.width, cc.height); }
}

/* ---------- build the main page from CONFIG ---------- */
const img = p => `<img src="${esc(p.src)}" alt="${esc(p.caption)}" loading="lazy" style="object-position:${esc(p.pos || "50% 50%")}" onerror="this.remove()">`;
function buildMain() {
  const C = CONFIG;
  const photos = C.photos.items.map((p, i) => `<div class="pol rv d${i % 3 + 1}" data-i="${i}"><div class="ph">${img(p)}</div><div class="cap">${esc(p.caption)}</div></div>`).join("");
  const hp = C.hero.photo;
  const heroPhoto = hp ? `<figure class="hero-photo-wrap rv"><div class="hero-photo" id="heroPhoto">${img(hp)}</div><figcaption class="serif">${esc(hp.caption)}</figcaption></figure>` : "";
  const tl = C.timeline.items.map((e, i) => `<div class="ev rv d${i % 3 + 1}"><small>${esc(e.icon)} ${esc(e.tag)}</small><b>${esc(e.title)}</b><span>${esc(e.text)}</span></div>`).join("");
  $("#app").innerHTML = `
  <section id="hero">
    ${heroPhoto}
    <p class="eyebrow rv">✦ ${esc(C.hero.eyebrow)} ✦</p>
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
    <div class="letter rv d2" id="letter"><h3>${esc(C.letter.title)}</h3><div id="lbody"></div><div class="sig" id="sig">${esc(C.letter.signature)}</div></div>
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
      <div class="bar" id="bar"><i id="barFill"></i></div>
      <div class="times"><span id="tNow">0:00</span><span id="tAll">0:00</span></div>
      <div class="ctrl"><button id="prev">⏮</button><button class="pp" id="pp">▶</button><button id="next">⏭</button></div>
    </div>
    <div class="tracks rv d3" id="tracks"></div>
  </section>

  <section id="gardenSec">
    <p class="eyebrow rv">${esc(C.garden.eyebrow)}</p>
    <h2 class="rv d1">${esc(C.garden.title)}</h2>
    <p class="sub rv d2">${esc(C.garden.hint)}</p>
    <div class="garden rv d2">${C.garden.flowers.map((f, i) => `<button class="gf" data-i="${i}" style="--h:${[120, 150, 100, 140, 110, 130][i % 6]}px;--dl:${i * .35}s"><span class="bl">${f.e}</span><i class="stem"></i></button>`).join("")}</div>
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

  <section id="voiceSec" class="hidden">
    <p class="eyebrow rv">${esc(C.voice.eyebrow)}</p>
    <h2 class="rv d1">${esc(C.voice.title)}</h2>
    <button class="btn rv d2" id="vBtn">▶ ${esc(C.voice.button)}</button>
    <div class="vbar rv d2"><i id="vFill"></i></div>
  </section>

  <section id="final">
    <p class="eyebrow rv">${esc(C.final.eyebrow)}</p>
    <h2 class="rv d1">${esc(C.final.title)}<em>${esc(C.final.titleEm)}</em></h2>
    <p class="final-text rv d2">${esc(C.final.text)}</p>
    <div class="heart rv d3">${esc(C.final.emoji)}</div>
  </section>`;
  initReveal(); initCake(); initLetter(); initPhotos(); initPlayer(); initGarden(); initJar(); initVoice();
}

/* ---------- scroll reveal ---------- */
function initReveal() {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .15 });
  $$(".rv").forEach(el => io.observe(el));
}

/* ---------- cake ---------- */
function initCake() {
  $("#wishBtn").onclick = e => {
    const r = e.target.getBoundingClientRect();
    confetti(r.left + r.width / 2, r.top, 160);
    $("#cake").classList.add("wish"); $("#cake").textContent = "🎉";
    $("#wishMsg").textContent = CONFIG.cake.after;
  };
}

/* ---------- typewriter letter ---------- */
function initLetter() {
  let started = false;
  const letter = $("#letter"), body = $("#lbody");
  const io = new IntersectionObserver(async es => {
    if (!es[0].isIntersecting || started) return; started = true;
    for (const text of CONFIG.letter.paragraphs) {
      const p = document.createElement("p"); p.className = "caret"; body.appendChild(p);
      for (const ch of text) { p.textContent += ch; await wait(ch === "," || ch === "." ? 80 : 15); }
      p.classList.remove("caret");
    }
    $("#sig").classList.add("in");
  }, { threshold: .35 });
  io.observe(letter);
  letter.onclick = () => { // tap to show instantly
    if (!started) return;
  };
}

/* ---------- photos + lightbox ---------- */
function initPhotos() {
  const open = p => { $("#lbPol").innerHTML = `<div class="ph">${img(p)}</div><div class="cap">${esc(p.caption)}</div>`; $("#lightbox").classList.remove("hidden"); };
  $$(".pol").forEach(el => el.onclick = () => open(CONFIG.photos.items[+el.dataset.i]));
  if ($("#heroPhoto")) $("#heroPhoto").onclick = () => open(CONFIG.hero.photo);
  const close = () => $("#lightbox").classList.add("hidden");
  $("#lbClose").onclick = close; $("#lightbox").onclick = e => { if (e.target.id === "lightbox") close(); };
}

/* ---------- music player ---------- */
const audio = new Audio(); let cur = 0;
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
}

/* ---------- jar of reasons ---------- */
function initJar() {
  let bag = [], shown = 0; const total = CONFIG.jar.reasons.length;
  $("#count").textContent = CONFIG.jar.idle;
  $("#shake").onclick = $("#jar").onclick = () => {
    const j = $("#jar"); j.classList.remove("shake"); void j.offsetWidth; j.classList.add("shake");
    if (!bag.length) { bag = [...CONFIG.jar.reasons].sort(() => Math.random() - .5); shown = 0; }
    setTimeout(() => {
      const n = $("#note"); n.classList.remove("show"); void n.offsetWidth;
      n.textContent = "“" + bag.pop() + "”"; n.classList.add("show"); shown++;
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
    const k = b.dataset.k; $("#lockErr").textContent = "";
    if (k === "⌫") val = val.slice(0, -1); else if (val.length < pin.length) val += k;
    paint();
    if (val.length === pin.length) {
      await wait(250);
      if (val === pin) { leave(lock); startGift(); }
      else { $("#dots").classList.add("shake"); $("#lockErr").textContent = CONFIG.wrongText; navigator.vibrate && navigator.vibrate(200);
        await wait(520); $("#dots").classList.remove("shake"); val = ""; paint(); }
    }
  });
  show(lock);
}

function startGift() {
  const g = $("#gift"), box = $("#giftbox"); $("#giftHint").textContent = CONFIG.giftHint;
  setTimeout(() => show(g), 400);
  box.onclick = async () => {
    if (box.classList.contains("open") || box.classList.contains("rumble")) return;
    box.classList.add("rumble"); navigator.vibrate && navigator.vibrate([80, 40, 80, 40, 80, 40, 160]);
    await wait(750); box.classList.remove("rumble"); box.classList.add("open");
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
  buildMain(); initFX(); $("#app").classList.remove("hidden"); $("#app").classList.add("fade-in");
  $("#musicBtn").classList.remove("hidden"); petalsOn = true; scrollTo(0, 0);
  audio.play().catch(() => { });
}

addEventListener("load", async () => {
  await wait(2000); leave($("#loader")); await wait(500); startLock();
});

/* ---------- extra effects ---------- */
function initFX() {
  const bar = document.createElement("div"); bar.id = "scrollbar"; document.body.appendChild(bar);   // glowing scroll progress
  addEventListener("scroll", () => bar.style.width = scrollY / (document.documentElement.scrollHeight - innerHeight) * 100 + "%", { passive: true });
  const sp = (x, y, n, spread) => { for (let i = 0; i < n; i++) {                                   // sparkle burst / trail
    const e = document.createElement("span"), a = rand(0, 6.28), d = rand(20, spread); e.className = "sp";
    e.textContent = ["✨", "💗", "🌸", "⭐", "💖"][Math.random() * 5 | 0];
    e.style.cssText = `left:${x}px;top:${y}px;--x:${Math.cos(a) * d}px;--y:${Math.sin(a) * d}px;font-size:${rand(10, 20)}px`;
    document.body.appendChild(e); setTimeout(() => e.remove(), 900); } };
  let last = 0;
  CONFIG.style.sparkles && addEventListener("pointerdown", e => { if (!e.target.closest("button")) sp(e.clientX, e.clientY, 7, 90); });
  CONFIG.style.sparkles && addEventListener("pointermove", e => { const t = Date.now(); if (t - last > 70 && (e.pressure > 0 || e.pointerType === "mouse")) { last = t; sp(e.clientX, e.clientY, 1, 30); } });
  setInterval(() => { if (document.hidden || !CONFIG.style.balloons) return;                                                  // rising balloons
    const b = document.createElement("span"); b.className = "balloon"; b.textContent = ["🎈", "🎈", "💗", "🎀"][Math.random() * 4 | 0];
    b.style.cssText = `left:${rand(2, 92)}vw;font-size:${rand(26, 44)}px;animation-duration:${rand(9, 15)}s`;
    document.body.appendChild(b); setTimeout(() => b.remove(), 16000); }, 2600);
  (CONFIG.style.tilt ? $$(".pol") : []).forEach(el => {                                                                         // 3D tilt on photos
    el.addEventListener("pointermove", e => { const r = el.getBoundingClientRect();
      el.style.setProperty("--ry", ((e.clientX - r.left) / r.width - .5) * 20 + "deg"); el.style.setProperty("--rx", -((e.clientY - r.top) / r.height - .5) * 20 + "deg"); });
    ["pointerleave", "pointerup"].forEach(ev => el.addEventListener(ev, () => { el.style.setProperty("--rx", "0deg"); el.style.setProperty("--ry", "0deg"); }));
  });
  let fw; new IntersectionObserver(es => {                                                           // fireworks at the end
    if (es[0].isIntersecting) { let n = 0; fw = setInterval(() => { confetti(rand(.15, .85) * innerWidth, rand(.15, .5) * innerHeight, 70); if (++n > (CONFIG.style.calm ? 2 : 8)) clearInterval(fw); }, 700); }
    else clearInterval(fw); }, { threshold: .5 }).observe($("#final"));
}

/* ---------- flower garden ---------- */
function initGarden() {
  const G = CONFIG.garden, done = new Set(), total = G.flowers.length;
  const cnt = () => $("#gcount").textContent = done.size + " / " + total + " flowers opened";
  cnt();
  const card = document.createElement("div"); card.className = "fcard hidden";
  card.innerHTML = '<div class="fbox"><div class="fe"></div><h3 class="serif"></h3><p></p><button class="btn">Close 💗</button></div>';
  document.body.appendChild(card);
  const secret = () => { const g = $("#gsecret"), S = G.secret, D = CONFIG.discord; let sends = 0;
    g.innerHTML = `<h3 class="serif">${esc(S.title)}</h3><p>${esc(S.text)}</p><div class="ask"><label for="cmt">${esc(S.ask)}</label>
      <textarea id="cmt" maxlength="500" rows="4" placeholder="${esc(S.placeholder)}"></textarea>
      <button class="btn" id="cmtBtn">${esc(S.button)}</button><div class="cstat" id="cstat">${esc(S.note)}</div></div>`;
    g.scrollIntoView({ behavior: "smooth", block: "start" });
    [0, 500, 1000].forEach(t => setTimeout(() => confetti(rand(.2, .8) * innerWidth, rand(.2, .5) * innerHeight, 120), t));
    $("#cmtBtn").onclick = async () => {
      const txt = $("#cmt").value.trim(), st = $("#cstat"), btn = $("#cmtBtn");
      if (!txt) { st.textContent = S.empty; return; }
      if (sends >= D.maxSends) return;
      btn.disabled = true; btn.textContent = "...";
      try {
        const r = await fetch(D.webhook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({
          username: "Birthday Site 🎂", allowed_mentions: { users: [D.userId] },
          content: `<@${D.userId}> 💌 New message from **${CONFIG.name}**:\n>>> ${txt.slice(0, 1500)}` }) });
        if (!r.ok) throw new Error(r.status);
        sends++; $(".ask", g).innerHTML = `<div class="cdone">${esc(S.sent)}</div>`; confetti(innerWidth / 2, innerHeight / 2, 160);
      } catch (e) { st.textContent = S.fail; btn.disabled = false; btn.textContent = S.button; }
    };
  };
  card.onclick = e => { if (e.target === card || e.target.tagName === "BUTTON") { card.classList.add("hidden"); if (done.size === total && !$("#gsecret").innerHTML) setTimeout(secret, 300); } };
  $$(".gf").forEach(b => b.onclick = () => {
    const f = G.flowers[+b.dataset.i]; b.classList.add("open"); done.add(+b.dataset.i); cnt();
    const r = b.getBoundingClientRect(); confetti(r.left + r.width / 2, r.top + 20, 60); navigator.vibrate && navigator.vibrate(40);
    $(".fe", card).textContent = f.e; $("h3", card).textContent = f.t; $("p", card).textContent = f.x; card.classList.remove("hidden");
  });
}

/* ---------- voice note ---------- */
function initVoice() {
  const V = CONFIG.voice, sec = $("#voiceSec"); if (!V || !sec) return;
  const a = new Audio(); a.preload = "metadata"; a.src = V.src; let resume = false;
  a.oncanplay = () => sec.classList.remove("hidden");
  $("#vBtn").onclick = () => { if (a.paused) { resume = !audio.paused; audio.pause(); a.play().catch(() => sec.remove()); } else a.pause(); };
  a.onplay = () => $("#vBtn").textContent = "⏸ Pause";
  a.onpause = () => { $("#vBtn").textContent = "▶ " + V.button; if (a.ended && resume) audio.play().catch(() => { }); };
  a.ontimeupdate = () => $("#vFill").style.width = (a.currentTime / a.duration * 100 || 0) + "%";
}

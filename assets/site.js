const C = window.COURSES;
const $ = s => document.querySelector(s);
const list = $("#courses");
if (list) list.innerHTML = C.map(c => `<a class="row" href="/formation?c=${c.slug}"><div><h3>${c.title}</h3>${c.best?'<small>Le plus demandé</small>':''}</div><p>${c.desc}</p><span class="go">Voir le programme →</span></a>`).join("");
const stairs = $("#stairs");
if (stairs) stairs.innerHTML = C.map((c,i) => `<a style="--h:${90+i*52}px" href="/formation?c=${c.slug}">${c.title}</a>`).join("");
const sel = $("#course");
if (sel) sel.innerHTML = '<option value="">Je ne sais pas encore</option>' + C.map(c => `<option>${c.title}</option>`).join("");
const f = $("#signup");
if (f) {
  const ph = $("#phone"), btn = f.querySelector("button"), err = $("#err");
  const ok = v => /^(05|06|07)[0-9]{8}$/.test(v);
  btn.disabled = true;
  ph.addEventListener("input", () => {
    const v = ok(ph.value);
    btn.disabled = !v;
    ph.classList.toggle("invalid", !v && ph.value.length > 0);
    err.textContent = v || !ph.value ? "" : "Entrez un numéro algérien valide (ex. 0774129401).";
  });
  f.addEventListener("submit", e => {
    e.preventDefault();
    const m = `Bonjour NextStep Academy, je m'appelle ${$("#name").value}. Mon numéro : ${ph.value}. Formation : ${sel.value || "à définir"}. Je souhaite m'inscrire.`;
    window.open(wa(m), "_blank");
  });
}
const box = $("#course-page");
if (box) {
  const slug = new URLSearchParams(location.search).get("c");
  const c = C.find(x => x.slug === slug);
  if (!c) { box.innerHTML = '<h1>Formation introuvable</h1><p><a href="/#formations">Voir toutes les formations</a></p>'; }
  else {
    document.title = c.title + " · NextStep Academy";
    box.innerHTML = `<a class="back" href="/#formations">← Toutes les formations</a><h1>${c.title}</h1><p class="sub" style="margin-bottom:0">${c.desc}</p><div class="tools">${c.tools.map(t=>`<span>${t}</span>`).join("")}</div><a class="btn gold" href="${wa("Bonjour, je veux m'inscrire à la formation "+c.title)}" target="_blank" rel="noopener">S’inscrire sur WhatsApp</a><h2 style="margin:56px 0 18px;font-size:1.6rem">Au programme</h2><ul class="mods">${c.modules.map(m=>`<li>${m}</li>`).join("")}</ul>`;
  }
}

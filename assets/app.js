/* Brickroga — lógica compartida del sitio (sin dependencias) */
(function () {
  const D = window.BRICKROGA;
  const C = D.config;

  const I = {
    logo: '<svg viewBox="0 0 52 52" aria-hidden="true"><rect x="1" y="1" width="50" height="50" fill="#111111"/><path d="M9 27 26 11l17 16" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><rect x="14" y="27" width="24" height="15" fill="none" stroke="#fff" stroke-width="3"/><path d="M14 32.5h24M14 37.3h24M20 27v5.5M32 32.5v4.8M26 37.3V42" stroke="#E8590C" stroke-width="1.6"/></svg>',
    wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    bed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 18V6M3 13h18v5M21 13a3 3 0 0 0-3-3h-7v3"/><circle cx="7" cy="10.5" r="1.5"/></svg>',
    bath: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3ZM6 12V5a2 2 0 0 1 4 0"/></svg>',
    area: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="1"/><path d="M4 9h5V4"/></svg>',
    car: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 16h14v-4l-2-5H7l-2 5v4ZM5 16v2M19 16v2"/><circle cx="8" cy="13" r=".8"/><circle cx="16" cy="13" r=".8"/></svg>',
    house: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 24 24 8l18 16"/><path d="M11 21v19h26V21"/><path d="M11 28h26M11 34h26M18 21v7M30 28v6M24 34v6" opacity=".6"/></svg>',
    gift: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="7" y="18" width="34" height="22" rx="2"/><path d="M5 12h38v6H5zM24 12v28M24 12c-3-6-11-6-10 0M24 12c3-6 11-6 10 0"/></svg>',
    key: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="8" cy="15" r="4"/><path d="m11 12 9-9M17 6l3 3M15 8l2 2"/></svg>',
    chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 20V4M4 20h16M8 16l4-5 3 3 5-7"/></svg>',
    map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m3 6 6-2 6 2 6-2v14l-6 2-6-2-6 2V6ZM9 4v14M15 6v14"/></svg>'
  };
  window.BRK_ICONS = I;

  const fmt = n => Math.round(n).toLocaleString("es-PY").replace(/,/g, ".");
  const money = (m, n) => (m === "USD" ? "USD " : "Gs. ") + fmt(n);
  const WA = C.whatsapp[0];
  /* Every pre-filled WhatsApp message says it comes from the website, so the team knows where the lead came from. */
  const WEB_TAG = "\n\n(Te escribo desde la página web de BRICKROGA, www.brickroga.com)";
  const waText = msg => msg + WEB_TAG;
  const waLink = (msg, num) => "https://wa.me/" + (num || WA.numero) + "?text=" + encodeURIComponent(waText(msg));
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  window.BRK = { fmt, money, waLink, waText, esc, WA };
  const HELLO = "Hola Brickroga, quiero hacer una consulta.";

  /* Header */
  const L = (window.BRK_I18N && window.BRK_I18N.lang) || "es";
  const here = document.body.dataset.page || "";
  const navItem = (href, label, key) => `<a href="${href}"${here === key ? ' aria-current="page"' : ""}>${label}</a>`;
  const FLAG_PY = '<svg class="flag" viewBox="0 0 30 18" aria-hidden="true"><rect width="30" height="6" fill="#D52B1E"/><rect y="6" width="30" height="6" fill="#fff"/><rect y="12" width="30" height="6" fill="#0038A8"/><circle cx="15" cy="9" r="2.3" fill="none" stroke="#0038A8" stroke-width=".7"/><circle cx="15" cy="9" r=".8" fill="#F7D117"/></svg>';
  const FLAG_UK = '<svg class="flag" viewBox="0 0 60 36" aria-hidden="true"><clipPath id="ukc"><rect width="60" height="36"/></clipPath><g clip-path="url(#ukc)"><rect width="60" height="36" fill="#012169"/><path d="M0 0 60 36M60 0 0 36" stroke="#fff" stroke-width="7"/><path d="M0 0 60 36M60 0 0 36" stroke="#C8102E" stroke-width="2.4"/><path d="M30 0v36M0 18h60" stroke="#fff" stroke-width="11"/><path d="M30 0v36M0 18h60" stroke="#C8102E" stroke-width="6.5"/></g></svg>';
  const header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML = `<div class="wrap">
      <a class="logo" href="index.html" aria-label="Brickroga, inicio">${I.logo}<b>BRICKROGA</b></a>
      <button class="menu-btn" id="menu-btn" aria-expanded="false" aria-controls="nav">Menú</button>
      <nav class="nav" id="nav" aria-label="Principal">
        ${navItem("alquileres.html", "Propiedades", "alquileres")}
        ${navItem("canastas-navidenas-corporativas.html", "Canastas navideñas", "canastas")}
        ${navItem("index.html#servicios", "Servicios", "servicios")}
        ${navItem("#contacto", "Contacto", "contacto")}
        <a class="btn btn-black" href="${waLink(HELLO)}" target="_blank" rel="noopener">${I.wa}${esc(WA.visible)}</a>
      </nav>
      <div class="lang-dd" data-no-tr>
        <button type="button" class="lang-cur" aria-haspopup="true" aria-expanded="false" aria-label="Idioma / Language: ${L.toUpperCase()}">${L.toUpperCase()}<svg viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.8"/></svg></button>
        <div class="lang-menu" role="menu" hidden>
          <button type="button" role="menuitemradio" data-l="es" lang="es" aria-checked="${L === "es"}">${FLAG_PY}<span>Español</span></button>
          <button type="button" role="menuitemradio" data-l="en" lang="en" aria-checked="${L === "en"}">${FLAG_UK}<span>English</span></button>
        </div>
      </div></div>`;
    {
      const dd = header.querySelector(".lang-dd"), cur = dd.querySelector(".lang-cur"), menu = dd.querySelector(".lang-menu");
      const open = v => { menu.hidden = !v; cur.setAttribute("aria-expanded", v); if (v) menu.querySelector('[aria-checked="true"]').focus(); };
      cur.addEventListener("click", e => { e.stopPropagation(); open(menu.hidden); });
      document.addEventListener("click", e => { if (!dd.contains(e.target)) open(false); });
      dd.addEventListener("keydown", e => { if (e.key === "Escape") { open(false); cur.focus(); } });
      menu.querySelectorAll("button").forEach(b => b.addEventListener("click", () => { open(false); if (b.dataset.l !== L) window.BRK_I18N.set(b.dataset.l); }));
    }
    const btn = document.getElementById("menu-btn"), nav = document.getElementById("nav");
    btn.addEventListener("click", () => { const o = nav.classList.toggle("open"); btn.setAttribute("aria-expanded", o); });
    nav.addEventListener("click", e => { if (e.target.closest("a")) { nav.classList.remove("open"); btn.setAttribute("aria-expanded", false); } });
  }

  /* Footer: all company data, like theparaguaytax.com */
  const footer = document.getElementById("site-footer");
  if (footer) {
    const pend = t => `<span class="pend">${t}</span>`;
    footer.className = "site-footer"; footer.id = "contacto";
    footer.innerHTML = `<div class="wrap">
      <div class="foot-top">
        <div><div class="word">Brick<span class="r">róga</span></div><p>Ladrillo, en inglés. Casa, en guaraní.</p></div>
        <a class="btn btn-wa" href="${waLink(HELLO)}" target="_blank" rel="noopener">${I.wa}Escribinos por WhatsApp</a>
      </div>
      <div class="cols">
        <div><h4>Empresa</h4><span style="color:var(--on-dark)">${esc(C.razon_social)}</span>${C.ruc ? `<span>RUC: ${esc(C.ruc)}</span>` : pend("RUC: a completar")}<span>${esc(C.horario)}</span></div>
        <div><h4>Contacto</h4>${C.whatsapp.map(w => `<a href="https://wa.me/${esc(w.numero)}" target="_blank" rel="noopener">WhatsApp ${esc(w.visible)}</a>`).join("")}${C.email ? `<a href="mailto:${esc(C.email)}">${esc(C.email)}</a>` : ""}${C.instagram ? `<a href="https://instagram.com/${esc(C.instagram)}" target="_blank" rel="noopener">Instagram @${esc(C.instagram)}</a>` : ""}</div>
        <div><h4>Oficina</h4>${C.oficina ? `<span style="color:var(--on-dark)">${esc(C.oficina)}</span>` : pend("Dirección: a completar")}${C.oficina_barrio ? `<span>${esc(C.oficina_barrio)}</span>` : ""}${C.oficina_referencia ? `<span>${esc(C.oficina_referencia)}</span>` : ""}${C.oficina_maps ? `<a href="${esc(C.oficina_maps)}" target="_blank" rel="noopener" style="color:var(--orange)">Ver en Google Maps →</a>` : ""}</div>
        <div><h4>Sitio</h4><a href="alquileres.html">Propiedades</a><a href="canastas-navidenas-corporativas.html">Canastas navideñas corporativas</a><a href="index.html#servicios">Servicios y consultoría</a></div>
      </div>
      <div class="legal"><span>© ${new Date().getFullYear()} ${esc(C.razon_social)} · Todos los precios publicados son finales por mes.</span><span>www.brickroga.com · ${esc(C.version)}</span></div></div>`;
  }
  if (!document.querySelector(".wa-float")) {
    const a = document.createElement("a");
    a.className = "wa-float"; a.href = waLink(HELLO); a.target = "_blank"; a.rel = "noopener";
    a.setAttribute("aria-label", "Escribinos por WhatsApp"); a.innerHTML = I.wa;
    document.body.appendChild(a);
  }

  /* Pieces */
  function photo(p, i = 0, label = "Foto próximamente", icon = I.house) {
    const src = p.fotos && p.fotos[i];
    return src ? `<img src="${esc(src)}" alt="${esc((p.titulo || p.nombre) + (p.ciudad ? " en " + p.ciudad + ", Paraguay" : "") + ", foto " + (i + 1))}" loading="lazy">`
               : `<div class="ph-empty">${icon}<span>${label}</span></div>`;
  }
  const rooms = p => p.tipo === "Terreno" ? "" : p.dormitorios === 0 ? "Monoambiente" : p.dormitorios + (p.dormitorios === 1 ? " dormitorio" : " dormitorios");
  function specs(p) {
    const s = [];
    if (rooms(p)) s.push(`<span>${I.bed}${rooms(p)}</span>`);
    if (p.banos) s.push(`<span>${I.bath}${p.banos} baño${p.banos > 1 ? "s" : ""}</span>`);
    if (p.huespedes) s.push(`<span>${I.house}${p.huespedes} huéspedes</span>`);
    if (p.m2) s.push(`<span>${I.area}${p.m2} m²</span>`);
    if (p.cochera) s.push(`<span>${I.car}${p.cochera} coch.</span>`);
    return s.join("");
  }
  const perLabel = p => p.periodo ? "/ " + p.periodo : "";
  const signLabel = p => p.operacion === "Venta" ? "Se vende" : p.operacion === "Alquiler temporario" ? "Alquiler temporario" : "Se alquila";
  function priceHTML(p) {
    return p.precio ? `${money(p.moneda, p.precio)} <small>${perLabel(p)}</small>` : `<span class="consult">Consultá la tarifa</span>`;
  }
  function cartel(p) {
    const tel = (p.contacto && p.contacto.visible) || WA.visible;
    return `<div class="cartel"><span class="se">${signLabel(p)}</span><span class="monto">${p.precio ? money(p.moneda, p.precio) + `<small>${perLabel(p)}</small>` : `<span class="consult">Consultá la tarifa</span>`}</span><span class="tel">${esc(tel)}</span></div>`;
  }
  /* each listing has its own indexable page (slug.html); propiedad.html#id stays as a fallback */
  const propUrl = p => p.slug ? p.slug + ".html" : "propiedad.html#" + p.id;
  function amen(p, max) {
    const C = D.comodidades || {}, list = (p.comodidades || []).filter(k => C[k]);
    const shown = max ? list.slice(0, max) : list, more = list.length - shown.length;
    return shown.map(k => `<span class="am"><span class="e" aria-hidden="true">${window.BRK_ICO ? BRK_ICO(k) : C[k][0]}</span>${esc(C[k][1])}</span>`).join("") + (more > 0 ? `<span class="am more">+${more}</span>` : "");
  }
  function tags(p) {
    return `<div class="tags"><span class="chip chip-orange">${esc(p.operacion)}</span>${p.estado === "reservado" ? '<span class="chip chip-ej">Reservado</span>' : ""}${p.ejemplo ? '<span class="chip chip-ej">Ejemplo</span>' : ""}</div>`;
  }
  function card(p) {
    return `<a class="card" href="${esc(propUrl(p))}">
      <div class="card-photo">${photo(p)}${tags(p)}${p.codigo ? `<span class="code">${esc(p.codigo)}</span>` : ""}</div>
      <div class="card-body">
        <div class="price">${priceHTML(p)}</div>
        <div class="sub">${p.gastos_comunes ? "+ " + money(p.moneda, p.gastos_comunes) + " gastos comunes" : p.incluye ? "Servicios básicos incluidos" : p.resenas ? "★ " + String(p.resenas.nota).replace(".", ",") + " · " + p.resenas.cantidad + " reseñas en " + p.resenas.fuente : esc(p.tipo)}</div>
        <div class="card-title">${esc(p.titulo)}</div>
        <div class="loc">${I.pin}${esc(p.barrio)}, ${esc(p.ciudad)}</div>
        <div class="ams">${amen(p, 4)}</div>
        <div class="specs">${specs(p)}</div>
      </div></a>`;
  }
  function feature(p) { return `<div class="grid">${card(p)}</div>`; }
  Object.assign(window.BRK, { propUrl, card, photo, specs, cartel, feature, rooms, amen, priceHTML, signLabel });
  const visibles = () => D.propiedades.filter(p => p.estado !== "alquilado" && !p.oculto);
  window.BRK.visibles = visibles;

  document.querySelectorAll("[data-list='destacados']").forEach(el => {
    const v = visibles().filter(p => p.destacado);
    el.innerHTML = `<div class="grid">${v.slice(0, 6).map(card).join("")}</div>`;
  });
  document.querySelectorAll("[data-list='servicios']").forEach(el => {
    el.innerHTML = D.servicios.map(s => `<div class="svc"><h3>${esc(s.titulo)}</h3><p>${esc(s.texto)}</p>
      <a href="${waLink("Hola Brickroga, me interesa: " + s.titulo)}" target="_blank" rel="noopener">Consultar por WhatsApp →</a></div>`).join("");
  });


  /* Videos: play muted and on loop while visible (browsers only allow muted autoplay); tap the sound button to hear it */
  window.BRK_VIDEOS_READY = function () {
    const RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.querySelectorAll("video[data-auto]:not([data-ready])").forEach(v => {
      v.dataset.ready = 1; v.muted = true; v.loop = true; v.playsInline = true; v.setAttribute("muted", "");
      const wrap = v.parentElement; wrap.classList.add("vwrap");
      const b = document.createElement("button"); b.type = "button"; b.className = "snd"; b.textContent = "🔇 Activar sonido"; b.setAttribute("aria-pressed", "false");
      b.addEventListener("click", () => { v.muted = !v.muted; b.setAttribute("aria-pressed", String(!v.muted)); b.textContent = v.muted ? "🔇 Activar sonido" : "🔊 Silenciar"; if (window.BRK_I18N) b.textContent = BRK_I18N.tr(b.textContent); if (v.paused) v.play().catch(() => {}); });
      wrap.appendChild(b);
      if (RM || !("IntersectionObserver" in window)) return;
      new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) v.play().catch(() => {}); else v.pause(); }), { threshold: .35 }).observe(v);
    });
  };
  document.addEventListener("DOMContentLoaded", () => window.BRK_VIDEOS_READY());

  /* Apple-style motion layer (like theparaguaytax.com): reveal on scroll, photo zoom, price count-up, swipe rows on mobile.
     Runs after page scripts have rendered their content. */
  document.addEventListener("DOMContentLoaded", function () {
    /* static lists written with a leading emoji get the matching line icon */
    if (window.BRK_ICO_SPLIT) document.querySelectorAll(".near-list li").forEach(li => {
      if (li.querySelector(".ico")) return;
      const s = BRK_ICO_SPLIT(li.textContent.trim());
      if (s[0]) { li.innerHTML = s[0]; const t = document.createElement("span"); t.textContent = s[1]; li.appendChild(t); }
    });
    if (window.BRK_I18N) window.BRK_I18N.run();
    const RM = matchMedia("(prefers-reduced-motion: reduce)").matches, MOB = matchMedia("(max-width:640px)").matches;
    if (MOB) document.querySelectorAll(".svc-list,.steps").forEach(e => e.classList.add("swipe"));
    if (!("IntersectionObserver" in window)) return;
    const sel = ["main .section-head", "main .feature", "main .grid > .card", "main .svc", "main .xmas", "main .story > *", "main .tier", "main .step",
      "main .faq details", "main .prose", "main .quote > *", "main .facts", "main .near", "main .feat", "main .media-row", "main .page-head", "main .filters", "main .feature-photos img"];
    const fold = innerHeight;
    const els = [...document.querySelectorAll(sel.join(","))].filter(e => !e.closest(".swipe") && !(MOB && !RM && e.matches(".grid > .card, .tier, .feature, .section-head, .page-head")) && e.getBoundingClientRect().top > fold * 0.92);
    els.forEach(e => {
      e.classList.add("rv"); if (e.matches("img")) e.classList.add("zoom");
      const sib = [...e.parentElement.children].filter(x => els.includes(x)), i = sib.indexOf(e);
      if (i > 0) e.style.transitionDelay = Math.min(i, 6) * 90 + "ms";
    });
    const count = el => {
      if (RM || el.dataset.done) return; el.dataset.done = 1;
      const m = el.firstChild && el.firstChild.textContent.match(/^(Gs\. |USD )([\d.]+)/); if (!m) return;
      const n = +m[2].replace(/\./g, ""), t0 = performance.now(), d = 1300, node = el.firstChild, rest = node.textContent.slice(m[0].length);
      const step = now => { const p = Math.min(1, (now - t0) / d), v = Math.round(n * (1 - Math.pow(1 - p, 3)) / 1000) * 1000;
        node.textContent = m[1] + fmt(p < 1 ? v : n) + rest; if (p < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    };
    const io = new IntersectionObserver(es => es.forEach(x => {
      if (x.isIntersecting) { x.target.classList.add("in"); x.target.querySelectorAll && x.target.querySelectorAll(".cartel .monto").forEach(count); io.unobserve(x.target); }
    }), { threshold: .12, rootMargin: "0px 0px -6% 0px" });
    els.forEach(e => io.observe(e));

    /* Scroll-linked effects in the Apple style (parallax, scale-in video, drifting headline).
       Phones get their own set below: cards rise and grow as they come into view. */
    if (RM) return;
    document.documentElement.classList.add("fx");
    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
    const prog = el => { const r = el.getBoundingClientRect(); return clamp((innerHeight - r.top) / (innerHeight + r.height), 0, 1); }; // 0 entering → 1 leaving
    const enter = el => { const r = el.getBoundingClientRect(); return clamp((innerHeight - r.top) / (innerHeight * .75), 0, 1); }; // 0 at bottom edge → 1 when well in view
    const fx = [];
    const slider = document.getElementById("slider");
    if (slider && !MOB) fx.push(() => {
      const y = Math.min(scrollY, slider.offsetHeight);
      slider.querySelectorAll(".slide.on .wrap > div:first-child").forEach(t => { t.style.transform = `translate3d(0,${y * .28}px,0)`; t.style.opacity = 1 - y / slider.offsetHeight * .9; });
      slider.querySelectorAll(".slide.on .photos figure").forEach((f, i) => { f.style.transform = `translate3d(0,${y * (.1 + i * .08)}px,0)`; });
    });
    document.querySelectorAll(".vid-sec video, .video-wrap video").forEach(v => { const w = v.closest(".vwrap") || v; w.style.transformOrigin = "50% 60%"; w.style.overflow = "hidden"; fx.push(() => {
      const p = enter(w); w.style.transform = `scale(${.84 + .16 * p})`; w.style.borderRadius = (1 - p) * 28 + "px";
    }); });
    document.querySelectorAll(".promo").forEach(el => fx.push(() => { const p = enter(el); el.style.transform = `scale(${.95 + .05 * p})`; }));
    if (!MOB) document.querySelectorAll(".story .word").forEach(el => fx.push(() => { const p = prog(el); el.style.transform = `translate3d(${(.5 - p) * 120}px,0,0)`; }));
    document.querySelectorAll(".xh-art .xart, .xcard .xart, .xfig .xart").forEach((el, i) => fx.push(() => { const p = prog(el); el.style.transform = `translate3d(0,${(.5 - p) * (30 + (i % 3) * 18)}px,0)`; }));
    document.querySelectorAll("main .section-head h2").forEach(el => fx.push(() => { const p = enter(el); el.style.letterSpacing = (1 - p) * .06 + "em"; }));
    if (MOB) {
      document.querySelectorAll("main .grid > .card, main .tier, main .feature").forEach(el => {
        if (el.getBoundingClientRect().top < innerHeight * .9) return;
        const img = el.querySelector(".card-photo img, .card-photo .xart, img");
        fx.push(() => { const p = enter(el), e = 1 - Math.pow(1 - p, 2);
          el.style.transform = `translate3d(0,${(1 - e) * 70}px,0) scale(${.9 + .1 * e})`; el.style.opacity = .15 + .85 * e;
          if (img) img.style.transform = `scale(${1.18 - .18 * e})`; });
      });
      document.querySelectorAll("main .section-head, main .page-head").forEach(el => fx.push(() => { const p = enter(el); el.style.transform = `translate3d(${(1 - p) * -40}px,0,0)`; el.style.opacity = .2 + .8 * p; }));
      document.querySelectorAll(".svc-list.swipe, .steps.swipe").forEach(el => fx.push(() => { const p = enter(el); el.style.transform = `translate3d(${(1 - p) * 90}px,0,0)`; el.style.opacity = .2 + .8 * p; }));
    }
    let ticking = false;
    const run = () => { ticking = false; fx.forEach(f => f()); };
    addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(run); } }, { passive: true });
    addEventListener("resize", run); run();
    window.BRK_FX_REFRESH = run;
  });
  document.querySelectorAll("[data-wa]").forEach(el => { el.href = waLink(el.dataset.wa); el.target = "_blank"; el.rel = "noopener"; });
})();

/* Photo viewer: tap a photo in a property gallery (.strip) to open it full size,
   then move with arrows, keys or swipe; Esc, the X or the back button closes it. */
(function () {
  let box, img, cnt, list = [], idx = 0, opener = null;
  function build() {
    box = document.createElement("div");
    box.className = "lb"; box.setAttribute("role", "dialog"); box.setAttribute("aria-modal", "true"); box.setAttribute("aria-label", "Fotos");
    box.innerHTML = '<div class="lb-top"><span class="lb-cnt"></span><button class="lb-x" aria-label="Cerrar">✕</button></div>' +
      '<button class="lb-nav lb-prev" aria-label="Foto anterior">‹</button><img class="lb-img" alt=""><button class="lb-nav lb-next" aria-label="Foto siguiente">›</button>';
    document.body.appendChild(box);
    img = box.querySelector(".lb-img"); cnt = box.querySelector(".lb-cnt");
    box.querySelector(".lb-x").onclick = () => history.state && history.state.lb ? history.back() : close();
    box.querySelector(".lb-prev").onclick = e => { e.stopPropagation(); go(-1); };
    box.querySelector(".lb-next").onclick = e => { e.stopPropagation(); go(1); };
    box.addEventListener("click", e => { if (e.target === box) box.querySelector(".lb-x").click(); });
    let x0 = null;
    box.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true });
    box.addEventListener("touchend", e => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1); x0 = null; });
  }
  function render() {
    img.src = list[idx].src; img.alt = list[idx].alt;
    cnt.textContent = (idx + 1) + " / " + list.length;
    [list[idx + 1], list[idx - 1]].forEach(n => { if (n) new Image().src = n.src; });
  }
  function go(d) { idx = (idx + d + list.length) % list.length; render(); }
  function open(imgs, i) {
    if (!box) build();
    list = imgs; idx = i; opener = document.activeElement; render();
    box.classList.add("on"); document.documentElement.classList.add("lb-open");
    history.pushState({ lb: 1 }, "");
    box.querySelector(".lb-x").focus();
  }
  function close() {
    if (!box || !box.classList.contains("on")) return;
    box.classList.remove("on"); document.documentElement.classList.remove("lb-open");
    if (opener && opener.focus) opener.focus();
  }
  addEventListener("popstate", close);
  document.addEventListener("click", e => {
    const t = e.target.closest(".strip img");
    if (!t) return;
    const imgs = [...t.closest(".strip").querySelectorAll("img")];
    open(imgs, imgs.indexOf(t));
  });
  document.addEventListener("keydown", e => {
    if (box && box.classList.contains("on")) {
      if (e.key === "Escape") box.querySelector(".lb-x").click();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    } else if (e.key === "Enter" && e.target.matches && e.target.matches(".strip img")) e.target.click();
  });
})();

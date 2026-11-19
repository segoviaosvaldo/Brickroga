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
  const waLink = (msg) => "https://wa.me/" + WA.numero + "?text=" + encodeURIComponent(msg);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  window.BRK = { fmt, money, waLink, esc, WA };
  const HELLO = "Hola Brickroga, quiero hacer una consulta.";

  /* Header */
  const here = document.body.dataset.page || "";
  const navItem = (href, label, key) => `<a href="${href}"${here === key ? ' aria-current="page"' : ""}>${label}</a>`;
  const header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML = `<div class="wrap">
      <a class="logo" href="index.html" aria-label="Brickroga, inicio">${I.logo}<b>BRICKROGA</b></a>
      <button class="menu-btn" id="menu-btn" aria-expanded="false" aria-controls="nav">Menú</button>
      <nav class="nav" id="nav" aria-label="Principal">
        ${navItem("alquileres.html", "Alquileres", "alquileres")}
        ${navItem("canastas-navidenas-corporativas.html", "Canastas navideñas", "canastas")}
        ${navItem("index.html#servicios", "Servicios", "servicios")}
        ${navItem("#contacto", "Contacto", "contacto")}
        <a class="btn btn-black" href="${waLink(HELLO)}" target="_blank" rel="noopener">${I.wa}${esc(WA.visible)}</a>
      </nav></div>`;
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
        <div><h4>Contacto</h4>${C.whatsapp.map(w => `<a href="https://wa.me/${esc(w.numero)}" target="_blank" rel="noopener">WhatsApp ${esc(w.visible)}</a>`).join("")}${C.email ? `<span>${esc(C.email)}</span>` : pend("Email: a completar")}${C.instagram ? `<a href="https://instagram.com/${esc(C.instagram)}" target="_blank" rel="noopener">@${esc(C.instagram)}</a>` : pend("Instagram: a completar")}</div>
        <div><h4>Oficina</h4>${C.oficina ? `<span style="color:var(--on-dark)">${esc(C.oficina)}</span>` : pend("Dirección: a completar")}${C.oficina_barrio ? `<span>${esc(C.oficina_barrio)}</span>` : ""}${C.oficina_referencia ? `<span>${esc(C.oficina_referencia)}</span>` : ""}${C.oficina_maps ? `<a href="${esc(C.oficina_maps)}" target="_blank" rel="noopener" style="color:var(--orange)">Ver en Google Maps →</a>` : ""}</div>
        <div><h4>Sitio</h4><a href="alquileres.html">Alquileres</a><a href="canastas-navidenas-corporativas.html">Canastas navideñas corporativas</a><a href="index.html#servicios">Servicios y consultoría</a></div>
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
    return src ? `<img src="${esc(src)}" alt="${esc((p.titulo || p.nombre) + ", foto " + (i + 1))}" loading="lazy">`
               : `<div class="ph-empty">${icon}<span>${label}</span></div>`;
  }
  const rooms = p => p.dormitorios === 0 ? "Monoambiente" : p.dormitorios + " dorm.";
  function specs(p) {
    const s = [`<span>${I.bed}${rooms(p)}</span>`, `<span>${I.bath}${p.banos} baño${p.banos > 1 ? "s" : ""}</span>`];
    if (p.m2) s.push(`<span>${I.area}${p.m2} m²</span>`);
    if (p.cochera) s.push(`<span>${I.car}${p.cochera} coch.</span>`);
    return s.join("");
  }
  function cartel(p, label = "Se alquila") {
    return `<div class="cartel"><span class="se">${label}</span><span class="monto">${money(p.moneda, p.precio)}<small>/ ${esc(p.periodo)}</small></span><span class="tel">${esc(WA.visible)}</span></div>`;
  }
  function tags(p) {
    return `<div class="tags">${p.unidades_disponibles > 1 ? `<span class="chip chip-orange">${p.unidades_disponibles} disponibles</span>` : `<span class="chip chip-orange">${esc(p.operacion)}</span>`}${p.amoblado ? '<span class="chip">Amoblado</span>' : ""}${p.ejemplo ? '<span class="chip chip-ej">Ejemplo</span>' : ""}</div>`;
  }
  function card(p) {
    return `<a class="card" href="propiedad.html#${esc(p.id)}">
      <div class="card-photo">${photo(p)}${tags(p)}</div>
      <div class="card-body">
        <div class="price">${money(p.moneda, p.precio)} <small>/ ${esc(p.periodo)}</small></div>
        <div class="sub">${p.gastos_comunes ? "+ " + money(p.moneda, p.gastos_comunes) + " gastos comunes" : p.incluye ? "Servicios básicos incluidos" : "Sin gastos comunes"}</div>
        <div class="card-title">${esc(p.titulo)}</div>
        <div class="loc">${I.pin}${esc(p.barrio)}, ${esc(p.ciudad)}</div>
        <div class="specs">${specs(p)}</div>
      </div></a>`;
  }
  function feature(p) {
    const f = p.fotos || [];
    return `<a class="feature" href="propiedad.html#${esc(p.id)}">
      <div class="feature-photos">${[0, 1, 2].map(i => f[i] ? `<img src="${esc(f[i])}" alt="${esc(p.titulo)}, foto ${i + 1}" loading="lazy">` : "").join("")}</div>
      <div class="feature-body">
        <div style="display:flex;gap:6px;flex-wrap:wrap">${p.unidades_disponibles > 1 ? `<span class="chip chip-orange">${p.unidades_disponibles} unidades disponibles</span>` : ""}${p.amoblado ? '<span class="chip" style="background:var(--concrete)">Amoblado</span>' : ""}</div>
        <h3 style="font-size:1.6rem">${esc(p.titulo)}</h3>
        <div class="loc">${I.pin}${esc(p.barrio)}, ${esc(p.ciudad)}</div>
        ${cartel(p)}
        ${p.precio_usd_aprox ? `<p class="sub">Unos USD ${fmt(p.precio_usd_aprox)} por mes.</p>` : ""}
        ${p.incluye ? `<p class="incl-box">${esc(p.incluye)}</p>` : ""}
        <div class="specs" style="margin-top:4px">${specs(p)}</div>
        <span class="btn btn-black" style="align-self:flex-start">Ver fotos y detalles →</span>
      </div></a>`;
  }
  Object.assign(window.BRK, { card, photo, specs, cartel, feature, rooms });
  const visibles = () => D.propiedades.filter(p => p.estado !== "alquilado");
  window.BRK.visibles = visibles;

  document.querySelectorAll("[data-list='destacados']").forEach(el => {
    const v = visibles().filter(p => p.destacado);
    el.innerHTML = v.length === 1 ? feature(v[0]) : `<div class="grid">${v.slice(0, 6).map(card).join("")}</div>`;
  });
  document.querySelectorAll("[data-list='servicios']").forEach(el => {
    el.innerHTML = D.servicios.map(s => `<div class="svc"><h3>${esc(s.titulo)}</h3><p>${esc(s.texto)}</p>
      <a href="${waLink("Hola Brickroga, me interesa: " + s.titulo)}" target="_blank" rel="noopener">Consultar por WhatsApp →</a></div>`).join("");
  });

  /* Apple-style motion layer (like theparaguaytax.com): reveal on scroll, photo zoom, price count-up, swipe rows on mobile.
     Runs after page scripts have rendered their content. */
  document.addEventListener("DOMContentLoaded", function () {
    const RM = matchMedia("(prefers-reduced-motion: reduce)").matches, MOB = matchMedia("(max-width:640px)").matches;
    if (MOB) document.querySelectorAll(".svc-list,.steps").forEach(e => e.classList.add("swipe"));
    if (!("IntersectionObserver" in window)) return;
    const sel = ["main .section-head", "main .feature", "main .grid > .card", "main .svc", "main .xmas", "main .story > *", "main .tier", "main .step",
      "main .faq details", "main .prose", "main .quote > *", "main .facts", "main .near", "main .feat", "main .media-row", "main .page-head", "main .filters", "main .feature-photos img"];
    const fold = innerHeight;
    const els = [...document.querySelectorAll(sel.join(","))].filter(e => !e.closest(".swipe") && e.getBoundingClientRect().top > fold * 0.92);
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
  });
  document.querySelectorAll("[data-wa]").forEach(el => { el.href = waLink(el.dataset.wa); el.target = "_blank"; el.rel = "noopener"; });
})();

/* Brickroga — lógica compartida del sitio (sin dependencias) */
(function () {
  const D = window.BRICKROGA;
  const C = D.config;

  const I = {
    logo: '<svg viewBox="0 0 52 52" aria-hidden="true"><rect x="1" y="1" width="50" height="50" rx="12" fill="#C2502D"/><path d="M9 27 26 11l17 16" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><rect x="14" y="27" width="24" height="15" fill="none" stroke="#fff" stroke-width="3"/><path d="M14 32.5h24M14 37.3h24M20 27v5.5M32 32.5v4.8M26 37.3V42" stroke="#fff" stroke-width="1.3" opacity=".65"/></svg>',
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

  const fmt = n => n.toLocaleString("es-PY").replace(/,/g, ".");
  const money = (m, n) => (m === "USD" ? "USD " : "Gs. ") + fmt(n);
  const waLink = (msg) => "https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent(msg);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  window.BRK = { fmt, money, waLink, esc };

  /* Header + footer */
  const here = document.body.dataset.page || "";
  const navItem = (href, label, key) => `<a href="${href}"${here === key ? ' aria-current="page"' : ""}>${label}</a>`;
  const header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML = `<div class="wrap">
      <a class="logo" href="index.html" aria-label="Brickroga, inicio">${I.logo}<span><b>BRICKROGA</b><small>Inmuebles</small></span></a>
      <button class="menu-btn" id="menu-btn" aria-expanded="false" aria-controls="nav">Menú</button>
      <nav class="nav" id="nav" aria-label="Principal">
        ${navItem("alquileres.html", "Alquileres", "alquileres")}
        ${navItem("canastas-navidenas-corporativas.html", "Canastas navideñas", "canastas")}
        ${navItem("index.html#servicios", "Servicios", "servicios")}
        ${navItem("index.html#contacto", "Contacto", "contacto")}
        <a class="btn btn-wa" href="${waLink("Hola Brickroga, quiero hacer una consulta.")}" target="_blank" rel="noopener">${I.wa}WhatsApp</a>
      </nav></div>`;
    const btn = document.getElementById("menu-btn"), nav = document.getElementById("nav");
    btn.addEventListener("click", () => { const o = nav.classList.toggle("open"); btn.setAttribute("aria-expanded", o); });
  }
  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.id = "contacto";
    footer.innerHTML = `<div class="wrap"><div class="cols">
      <div><a class="logo" href="index.html">${I.logo}<span><b>BRICKROGA</b><small>Inmuebles</small></span></a>
        <p style="margin-top:12px;max-width:40ch">Alquileres de departamentos y casas en ${esc(C.ciudad_base)}. Precio claro desde el primer mensaje.</p></div>
      <div><h4>Sitio</h4><a href="alquileres.html">Alquileres</a><a href="canastas-navidenas-corporativas.html">Canastas navideñas corporativas</a><a href="index.html#servicios">Servicios y consultoría</a></div>
      <div><h4>Contacto</h4><a href="${waLink("Hola Brickroga, quiero hacer una consulta.")}" target="_blank" rel="noopener">WhatsApp ${esc(C.whatsapp_visible)}</a><span style="display:block;padding-block:3px">${esc(C.email)}</span>${C.instagram ? `<a href="https://instagram.com/${esc(C.instagram)}" target="_blank" rel="noopener">Instagram @${esc(C.instagram)}</a>` : ""}<span style="display:block;padding-block:3px">${esc(C.ciudad_base)}</span></div>
    </div><div class="legal"><span>© ${new Date().getFullYear()} ${esc(C.razon_social)}</span><span>Brick + Róga: ladrillo y casa.</span></div></div>`;
  }
  if (!document.querySelector(".wa-float")) {
    const a = document.createElement("a");
    a.className = "wa-float"; a.href = waLink("Hola Brickroga, quiero hacer una consulta."); a.target = "_blank"; a.rel = "noopener";
    a.setAttribute("aria-label", "Escribinos por WhatsApp"); a.innerHTML = I.wa;
    document.body.appendChild(a);
  }

  /* Listing card */
  function photo(p, i = 0, label = "Foto próximamente", icon = I.house) {
    const src = p.fotos && p.fotos[i];
    return src ? `<img src="${esc(src)}" alt="${esc(p.titulo || p.nombre)}" loading="lazy">`
               : `<div class="ph-empty">${icon}<span>${label}</span></div>`;
  }
  function specs(p) {
    const s = [];
    s.push(`<span>${I.bed}${p.dormitorios === 0 ? "Monoamb." : p.dormitorios + " dorm."}</span>`);
    s.push(`<span>${I.bath}${p.banos} baño${p.banos > 1 ? "s" : ""}</span>`);
    s.push(`<span>${I.area}${p.m2} m²</span>`);
    if (p.cochera) s.push(`<span>${I.car}${p.cochera} coch.</span>`);
    return s.join("");
  }
  function card(p) {
    return `<a class="card" href="propiedad.html#${esc(p.id)}">
      <div class="ph">${photo(p)}<div class="tag"><span class="chip chip-op">${esc(p.operacion)}</span>${p.amoblado ? '<span class="chip">Amoblado</span>' : ""}${p.ejemplo ? '<span class="chip chip-ej">Ejemplo</span>' : ""}</div></div>
      <div class="card-body">
        <div class="price">${money(p.moneda, p.precio)} <small>/ ${esc(p.periodo)}</small></div>
        ${p.gastos_comunes ? `<div class="gc">+ ${money(p.moneda, p.gastos_comunes)} gastos comunes</div>` : ""}
        <div class="card-title">${esc(p.titulo)}</div>
        <div class="loc">${I.pin}${esc(p.barrio)}, ${esc(p.ciudad)}</div>
        <div class="specs">${specs(p)}</div>
      </div></a>`;
  }
  window.BRK.card = card; window.BRK.photo = photo; window.BRK.specs = specs;
  const visibles = () => D.propiedades.filter(p => p.estado !== "alquilado");
  window.BRK.visibles = visibles;

  /* Fill containers marked with data-list */
  document.querySelectorAll("[data-list='destacados']").forEach(el => {
    el.innerHTML = visibles().filter(p => p.destacado).slice(0, 6).map(card).join("");
  });
  document.querySelectorAll("[data-count]").forEach(el => { el.textContent = visibles().length; });
  document.querySelectorAll("[data-min-price]").forEach(el => {
    const v = visibles(); el.textContent = v.length ? money("Gs", Math.min(...v.map(p => p.precio))) : "—";
  });
  document.querySelectorAll("[data-list='servicios']").forEach(el => {
    const ico = { gestion: I.key, consultoria: I.chart, terrenos: I.map };
    el.innerHTML = D.servicios.map(s => `<div class="svc"><div class="ico">${ico[s.id] || I.house}</div><h3>${esc(s.titulo)}</h3><p>${esc(s.texto)}</p>
      <a class="section-head link" style="margin:0;color:var(--brick-ink);font-weight:600;text-decoration:none" href="${waLink("Hola Brickroga, me interesa: " + s.titulo)}" target="_blank" rel="noopener">Consultar →</a></div>`).join("");
  });
  document.querySelectorAll("[data-wa]").forEach(el => { el.href = waLink(el.dataset.wa); el.target = "_blank"; el.rel = "noopener"; });
})();

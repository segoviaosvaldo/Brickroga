/* Line icons for amenities and highlights (24x24, 1.6 stroke, currentColor).
   BRK_ICO(key) accepts an amenity key from datos.js (comodidades) or one of
   the emojis used in the content, and returns an inline SVG. */
(function () {
  const P = {
    sofa: '<path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3"/><path d="M3 11a1.5 1.5 0 0 1 3 0v2h12v-2a1.5 1.5 0 0 1 3 0v6H3v-6Z"/><path d="M5 17v2M19 17v2"/>',
    wifi: '<path d="M2.5 9a14 14 0 0 1 19 0"/><path d="M5.5 12.5a9.5 9.5 0 0 1 13 0"/><path d="M8.7 15.8a5 5 0 0 1 6.6 0"/><circle cx="12" cy="19" r="1" fill="currentColor"/>',
    snow: '<path d="M12 2v20M3.3 7l17.4 10M3.3 17 20.7 7"/><path d="m9.5 4 2.5 2 2.5-2M9.5 20l2.5-2 2.5 2"/>',
    tv: '<rect x="2.5" y="5" width="19" height="12.5" rx="1.5"/><path d="M8 21h8M12 17.5V21"/>',
    pot: '<path d="M4 10h16v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-6Z"/><path d="M2 10h2M20 10h2M9 6c0-1 1-1 1-2M14 6c0-1 1-1 1-2"/>',
    fridge: '<rect x="5.5" y="2.5" width="13" height="19" rx="1.5"/><path d="M5.5 10h13M8.5 6v1.5M8.5 13v2.5"/>',
    bed: '<path d="M3 19V6M3 14h18v5M21 14v-2a3 3 0 0 0-3-3h-7v5"/><circle cx="7" cy="11" r="1.6"/>',
    desk: '<path d="M3 8h18M5 8v12M19 8v12M13 8v6h6"/><path d="M15 11h2"/>',
    toilet: '<path d="M6 3h6v7H6zM4 10h12a0 0 0 0 1 0 0 5 5 0 0 1-5 5H9a5 5 0 0 1-5-5Z"/><path d="M8 15l-1 6h7l-1-6"/>',
    washer: '<rect x="4" y="2.5" width="16" height="19" rx="1.5"/><circle cx="12" cy="13.5" r="4.5"/><path d="M4 6.5h16M7 4.5h1"/>',
    leaf: '<path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15"/><path d="M5 19c3-4 6-7 10-9"/>',
    car: '<path d="M4 16h16v-4l-2-5H6l-2 5v4Z"/><path d="M4 12h16M6 16v3M18 16v3"/><circle cx="7.5" cy="14" r=".6" fill="currentColor"/><circle cx="16.5" cy="14" r=".6" fill="currentColor"/>',
    pool: '<path d="M2 18c1.7 0 1.7-1 3.3-1s1.7 1 3.4 1 1.6-1 3.3-1 1.7 1 3.3 1 1.7-1 3.4-1 1.6 1 3.3 1"/><path d="M8 15V5a2 2 0 0 1 4 0M16 15V5a2 2 0 0 0-2-2M8 8h8M8 12h8"/>',
    paw: '<circle cx="5.5" cy="10.5" r="1.8"/><circle cx="9.5" cy="6" r="1.8"/><circle cx="14.5" cy="6" r="1.8"/><circle cx="18.5" cy="10.5" r="1.8"/><path d="M12 12c-3 0-6 4.5-4.5 6.5 1.2 1.6 3-.2 4.5-.2s3.3 1.8 4.5.2C18 16.5 15 12 12 12Z"/>',
    bolt: '<path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H13Z"/>',
    door: '<path d="M5 21V3.5h11V21M3 21h16"/><circle cx="13" cy="12.5" r=".8" fill="currentColor"/><path d="M16 6h3v15"/>',
    umbrella: '<path d="M3 12a9 9 0 0 1 18 0Z"/><path d="M12 12v7.5a1.5 1.5 0 0 1-3 0M12 3V2"/>',
    tree: '<path d="M12 22v-6"/><path d="M12 2c-3.3 0-6 2.7-6 6 0 .7.1 1.3.3 1.9A4 4 0 0 0 8 17h8a4 4 0 0 0 1.7-7.1c.2-.6.3-1.2.3-1.9 0-3.3-2.7-6-6-6Z"/>',
    flame: '<path d="M12 22a6 6 0 0 0 6-6c0-4-3-6-4-10-2 2-2.5 4-2.5 5.5C10 10 9 9 9 7.5 7 9.5 6 12.5 6 16a6 6 0 0 0 6 6Z"/><path d="M12 22a2.5 2.5 0 0 1-2.5-2.5c0-1.8 1.5-2.5 2.5-4.5 1 2 2.5 2.7 2.5 4.5A2.5 2.5 0 0 1 12 22Z"/>',
    fan: '<circle cx="12" cy="12" r="1.8"/><path d="M12 10.2C11 6 12 3 14.5 3s2.5 4-2.5 7.2M13.6 12.9c4.1 1.3 6.1 3.7 4.8 5.8-1.2 2.1-4.6.2-6-4.3M10.4 12.6c-3.2 2.9-6.3 3.4-7.6 1.3-1.2-2.1 2.3-4 7.4-2.6"/>',
    hotwater: '<path d="M12 3s-6 6.5-6 11a6 6 0 0 0 12 0c0-4.5-6-11-6-11Z"/><path d="M10 13c0 1 .8 1.3.8 2.2S10 16.5 10 17.5M14 13c0 1 .8 1.3.8 2.2s-.8 1.3-.8 2.3"/>',
    shower: '<path d="M4 21V6a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v1"/><path d="M8 7h6M9 11v1M12 11v1.5M15 11v1M10.5 15v1M13.5 15v1M12 19v1"/>',
    oven: '<rect x="3.5" y="3" width="17" height="18" rx="1.5"/><path d="M3.5 8h17M7 5.5h.01M10 5.5h.01"/><rect x="7" y="11" width="10" height="6.5" rx="1"/>',
    camera: '<path d="M3 7h12l3 3v3l-3 3H3Z"/><path d="M18 11.5h3M9 16v3M6 21h6"/><circle cx="8" cy="11.5" r="1.6"/>',
    aid: '<rect x="3" y="6" width="18" height="14" rx="1.5"/><path d="M9 6V4h6v2M12 10v6M9 13h6"/>',
    pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>',
    city: '<path d="M3 21h18M5 21V8l5-3v16M10 21V3h7v18M14 7h.01M14 10.5h.01M14 14h.01M7.5 11h.01M7.5 14.5h.01M17 21v-9h3v9"/>',
    plug: '<path d="M9 2v5M15 2v5M6 7h12v4a6 6 0 0 1-12 0V7ZM12 17v5"/>',
    bag: '<path d="M5 8h14l-1 13H6Z"/><path d="M9 10V6a3 3 0 0 1 6 0v4"/>',
    cup: '<path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9Z"/><path d="M17 11h1.5a2.5 2.5 0 0 1 0 5H17M3 22h16M8 2.5c0 1.2 1 1.2 1 2.5M12 2.5c0 1.2 1 1.2 1 2.5"/>',
    cart: '<path d="M2.5 3.5h3l2.4 11.2a1.5 1.5 0 0 0 1.5 1.3h8.2a1.5 1.5 0 0 0 1.5-1.2L21 8H6.3"/><circle cx="10" cy="20" r="1.3"/><circle cx="17" cy="20" r="1.3"/>',
    office: '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 21v-4h6v4M8 7h2M14 7h2M8 11h2M14 11h2"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>'
  };
  const MAP = {
    amoblado: "sofa", wifi: "wifi", aa: "snow", tv: "tv", cocina: "pot", heladera: "fridge", cama: "bed", escritorio: "desk",
    bano_privado: "toilet", lavarropas: "washer", patio: "leaf", estacionamiento: "car", piscina: "pool", mascotas: "paw",
    servicios: "bolt", independiente: "door", patio_techado: "umbrella", jardin: "tree", parrilla: "flame", ventilador: "fan",
    agua_caliente: "hotwater", ducha_exterior: "shower", horno: "oven", camaras: "camera", botiquin: "aid",
    "📍": "pin", "🏙️": "city", "🔌": "plug", "🏊": "pool", "🛏️": "bed", "🔥": "flame", "🐾": "paw", "🌳": "tree", "⛱️": "umbrella",
    "🛍️": "bag", "☕": "cup", "🛒": "cart", "🏢": "office"
  };
  window.BRK_ICO = function (k) {
    const d = P[MAP[k] || k] || P.check;
    return '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + "</svg>";
  };
  /* "🛍️ Cerca de..." → [icon, "Cerca de..."] */
  window.BRK_ICO_SPLIT = function (s) {
    const m = String(s).match(/^(\S+)\s+(.*)$/);
    return m && MAP[m[1]] ? [window.BRK_ICO(m[1]), m[2]] : ["", String(s)];
  };
})();

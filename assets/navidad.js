/* Christmas pieces for everything about the baskets: illustrations used until
   real photos exist, the string of lights and the falling snow layer. */
(function () {
  const PINE = "#2E6B3F", PINE2 = "#3F8A52", RED = "#C8102E", GOLD = "#D9A441", OR = "#E8590C", INK = "#161616";
  const bow = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0c-14-12-30-10-28 0s16 10 28 0Z" fill="${RED}"/><path d="M0 0c14-12 30-10 28 0S12 10 0 0Z" fill="${RED}"/><path d="M0 0l-12 22 6-2 2 6ZM0 0l12 22-6-2-2 6Z" fill="#9E0C23"/><circle r="5" fill="#E0233F"/></g>`;
  const sprig = (x, y, r = 0, s = 1) => `<g transform="translate(${x} ${y}) rotate(${r}) scale(${s})"><path d="M0 0 46 -8" stroke="#5A3A1A" stroke-width="2.5"/>${[6, 16, 26, 36].map(t => `<path d="M${t} ${-t * .17}l8 -14M${t} ${-t * .17}l10 10" stroke="${PINE2}" stroke-width="3.2" stroke-linecap="round"/>`).join("")}<circle cx="44" cy="-6" r="4.5" fill="${RED}"/><circle cx="38" cy="-1" r="4" fill="#E0233F"/></g>`;
  const card = (x, y) => `<g transform="translate(${x} ${y}) rotate(-6)"><rect width="38" height="26" rx="2" fill="#fff"/><rect x="5" y="5" width="10" height="10" fill="${INK}"/><path d="M19 8h14M19 13h10M5 20h28" stroke="#BBB" stroke-width="2"/></g>`;
  const sparkle = (x, y, s) => `<path transform="translate(${x} ${y}) scale(${s})" d="M0-8 2-2 8 0 2 2 0 8-2 2-8 0-2-2Z" fill="${GOLD}"/>`;
  const frame = inner => `<svg class="xart" viewBox="0 0 240 240" aria-hidden="true">${sparkle(36, 40, 1)}${sparkle(204, 58, .7)}${sparkle(190, 26, .5)}${sparkle(48, 196, .6)}${inner}</svg>`;
  const ART = {
    termica: frame(`
      <rect x="92" y="38" width="16" height="34" rx="3" fill="${GOLD}"/><rect x="86" y="62" width="28" height="44" rx="6" fill="${PINE}"/>
      <path d="M124 104c0-26 10-40 22-40s22 14 22 40Z" fill="#C98A3A"/><path d="M128 84c8 4 28 4 36 0" stroke="#7B4A1C" stroke-width="3" fill="none"/>
      <path d="M70 100c0-34 100-34 100 0" fill="none" stroke="${INK}" stroke-width="9"/>
      <rect x="56" y="96" width="128" height="20" rx="4" fill="${INK}"/>
      <rect x="60" y="112" width="120" height="86" rx="8" fill="${OR}"/>
      <rect x="74" y="128" width="92" height="54" rx="4" fill="none" stroke="#fff" stroke-width="2.5" stroke-dasharray="5 5"/>
      ${card(98, 138)}${bow(166, 112, 1)}${sprig(26, 210, -18, 1.1)}`),
    mochila: frame(`
      <rect x="148" y="44" width="14" height="30" rx="3" fill="#7A1426"/><rect x="143" y="68" width="24" height="46" rx="6" fill="#4A0E1A"/>
      <path d="M68 100c0-36 26-50 52-50s52 14 52 50v96c0 8-6 14-14 14H82c-8 0-14-6-14-14Z" fill="${INK}"/>
      <path d="M96 52c0-14 48-14 48 0" fill="none" stroke="#2A2A2A" stroke-width="7"/>
      <path d="M68 104c20 10 84 10 104 0" stroke="${OR}" stroke-width="5" fill="none"/>
      <rect x="84" y="134" width="72" height="62" rx="10" fill="${OR}"/><path d="M90 150h60" stroke="#fff" stroke-width="2.5" stroke-dasharray="4 4"/>
      ${card(102, 160)}${bow(120, 134, .9)}${sprig(176, 214, -158, 1.05)}`),
    bolsa: frame(`
      <path d="M86 112c0-30 68-30 68 0" fill="none" stroke="${INK}" stroke-width="8"/>
      <rect x="34" y="108" width="172" height="86" rx="43" fill="${OR}"/>
      <path d="M50 116v70M190 116v70" stroke="${INK}" stroke-width="10" stroke-linecap="round"/>
      <path d="M40 150h160" stroke="#fff" stroke-width="5"/><path d="M40 162h160" stroke="${INK}" stroke-width="3"/>
      <path d="M152 124l18 26" stroke="${GOLD}" stroke-width="2"/>${card(150, 148)}
      ${bow(120, 108, 1.05)}${sprig(22, 220, -14, 1.05)}${sprig(222, 224, -166, .9)}`),
    regalo: frame(`
      <rect x="62" y="100" width="116" height="96" rx="4" fill="${OR}"/><rect x="54" y="84" width="132" height="24" rx="3" fill="#F07A2E"/>
      <rect x="112" y="84" width="16" height="112" fill="${RED}"/><rect x="62" y="132" width="116" height="14" fill="${RED}" opacity=".85"/>
      ${bow(120, 84, 1.2)}${sprig(26, 214, -16, 1.1)}`)
  };
  window.BRK_XART = k => ART[k] || ART.regalo;
  const KIND = { termica: "termica", mochila: "mochila", "bolsa-viaje": "bolsa" };
  window.BRK_XART_FOR = c => ART[KIND[c.id]] || ART.regalo;

  /* string of lights along the top edge of a dark band */
  window.BRK_LIGHTS = function (n = 22) {
    const cols = [OR, GOLD, "#FFFFFF", RED];
    let wire = "M0 6", bulbs = "";
    for (let i = 0; i < n; i++) {
      const x = (i + .5) * (1000 / n), y = 14 + (i % 2 ? 6 : 0);
      wire += ` Q${x - 1000 / n / 2} ${i % 2 ? 4 : 22} ${x} ${y}`;
      bulbs += `<g class="bulb" style="animation-delay:${(i % 5) * .45}s"><rect x="${x - 3}" y="${y - 2}" width="6" height="6" fill="#333"/><ellipse cx="${x}" cy="${y + 12}" rx="6" ry="9" fill="${cols[i % 4]}"/></g>`;
    }
    return `<svg class="lights" viewBox="0 0 1000 44" preserveAspectRatio="none" aria-hidden="true"><path d="${wire}" fill="none" stroke="#3A3A3A" stroke-width="2"/>${bulbs}</svg>`;
  };
  /* gentle snowfall (CSS animated dots); off when the visitor prefers less motion */
  window.BRK_SNOW = () => '<span class="snow" aria-hidden="true"><i></i><i></i><i></i></span>';
})();

/* Generates one static, indexable page per listing (slug.html) from propiedad.html + data/datos.js,
   and rewrites sitemap.xml. Run after editing the listings:  node herramientas/generar-fichas.js
   Each page carries its own title, description, canonical, hreflang, Open Graph, schema.org data and a
   plain-HTML version of the listing (what Google reads first); the page script then draws the full layout. */
const fs = require("fs"), path = require("path"), vm = require("vm");
const ROOT = path.join(__dirname, ".."), SITE = "https://www.brickroga.com/";
const win = {}; vm.runInNewContext(fs.readFileSync(path.join(ROOT, "data/datos.js"), "utf8"), { window: win });
const D = win.BRICKROGA, C = D.config;
const tpl = fs.readFileSync(path.join(ROOT, "propiedad.html"), "utf8");
const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const fmt = n => Math.round(n).toLocaleString("es-PY").replace(/,/g, ".");
const money = p => (p.moneda === "USD" ? "USD " : "Gs. ") + fmt(p.precio);
const per = { mes: "por mes", noche: "por noche" };

const pages = [];
for (const p of D.propiedades) {
  if (!p.slug || p.oculto) continue;
  const url = SITE + p.slug + ".html";
  const lugar = `${p.barrio}, ${p.ciudad}, Paraguay`;
  const precio = p.precio ? `${money(p)} ${per[p.periodo] || ""}`.trim() : "Consultá la tarifa";
  const title = `${p.operacion === "Alquiler temporario" ? "Alquiler temporario: " : "Alquiler: "}${p.titulo.replace(" · ", ", ")}${p.ciudad === "Asunción" ? ", Asunción" : ""}, Paraguay | Brickroga`;
  const desc = `${p.titulo.replace(" · ", ", ")} en ${lugar}. ${p.precio ? precio + ". " : ""}${p.incluye ? "Incluye " + p.incluye.charAt(0).toLowerCase() + p.incluye.slice(1) + " " : ""}${p.ideal_para || ""} Consultá por WhatsApp al ${C.whatsapp[0].visible}.`.replace(/\s+/g, " ").slice(0, 300);
  const amen = (p.comodidades || []).map(k => D.comodidades[k] && D.comodidades[k][1]).filter(Boolean);
  const img = (p.fotos || [])[0] ? SITE + p.fotos[0] : SITE + "assets/fotos/asaje/comun/6455.webp";
  const place = {
    "@type": p.tipo === "Casa" ? "House" : "Apartment",
    name: p.titulo, description: p.descripcion,
    address: { "@type": "PostalAddress", streetAddress: p.direccion || undefined, addressLocality: p.ciudad, addressRegion: p.departamento, addressCountry: "PY" },
    geo: p.lat ? { "@type": "GeoCoordinates", latitude: p.lat, longitude: p.lng } : undefined,
    numberOfRooms: p.dormitorios || 1, numberOfBathroomsTotal: p.banos || undefined,
    occupancy: p.huespedes ? { "@type": "QuantitativeValue", maxValue: p.huespedes } : undefined,
    petsAllowed: (p.comodidades || []).includes("mascotas") || undefined,
    amenityFeature: amen.map(a => ({ "@type": "LocationFeatureSpecification", name: a, value: true })),
    image: (p.fotos || []).slice(0, 6).map(f => SITE + f)
  };
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "RealEstateListing", "@id": url, url, name: p.titulo, description: desc, inLanguage: "es-PY", image: img,
        about: place,
        offers: p.precio ? { "@type": "Offer", price: p.precio, priceCurrency: p.moneda === "USD" ? "USD" : "PYG", businessFunction: "http://purl.org/goodrelations/v1#LeaseOut",
          priceSpecification: { "@type": "UnitPriceSpecification", price: p.precio, priceCurrency: p.moneda === "USD" ? "USD" : "PYG", unitText: p.periodo === "noche" ? "noche" : "mes" },
          availability: "https://schema.org/InStock", seller: { "@id": SITE + "#empresa" } } : undefined,
        aggregateRating: undefined },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: SITE },
        { "@type": "ListItem", position: 2, name: "Propiedades en Paraguay", item: SITE + "alquileres.html" },
        { "@type": "ListItem", position: 3, name: p.titulo, item: url } ] },
      { "@type": ["RealEstateAgent", "LocalBusiness"], "@id": SITE + "#empresa", name: "Brickroga", legalName: C.razon_social, url: SITE, telephone: "+" + C.whatsapp[0].numero, email: C.email, taxID: C.ruc,
        address: { "@type": "PostalAddress", streetAddress: C.oficina, addressLocality: "Asunción", addressCountry: "PY" }, areaServed: { "@type": "Country", name: "Paraguay" } }
    ]
  };
  const head = `<title>${esc(title)}</title>
<meta charset="utf-8">`;
  const meta = `<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url}">
<link rel="alternate" hreflang="es-PY" href="${url}">
<link rel="alternate" hreflang="en" href="${url}?lang=en">
<link rel="alternate" hreflang="x-default" href="${url}">
<meta name="geo.region" content="PY${p.departamento === "Asunción" ? "-ASU" : p.departamento === "Cordillera" ? "-3" : ""}">
<meta name="geo.placename" content="${esc(p.ciudad)}, Paraguay">${p.lat ? `
<meta name="geo.position" content="${p.lat};${p.lng}">` : ""}
<meta property="og:title" content="${esc(p.titulo)} · ${esc(precio)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:type" content="website">
<meta property="og:locale" content="es_PY">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${img}">
<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, "\\u003c")}</script>`;
  const body = `<main class="wrap" id="main">
  <article class="seo-ficha">
    <p><a href="index.html">Inicio</a> / <a href="alquileres.html">Propiedades en Paraguay</a> / ${esc(p.codigo || "")}</p>
    <h1>${esc(p.titulo)}</h1>
    <p>${esc(p.operacion)} · ${esc(p.tipo)} · ${esc(lugar)}</p>
    <p><strong>${esc(precio)}</strong>${p.incluye ? " · Incluye: " + esc(p.incluye) : ""}</p>
    ${p.ideal_para ? `<p>${esc(p.ideal_para)}</p>` : ""}
    <p>${esc(p.descripcion)}</p>
    ${amen.length ? `<h2>Comodidades</h2><ul>${amen.map(a => `<li>${esc(a)}</li>`).join("")}</ul>` : ""}
    <h2>Ubicación</h2><p>${esc(p.direccion || lugar)}</p>
    ${(p.cerca || []).length ? `<ul>${p.cerca.map(c => `<li>${esc(c.lugar)}: ${String(c.km).replace(".", ",")} km, unos ${c.min} min en auto</li>`).join("")}</ul>` : ""}
    ${(p.fotos || []).slice(0, 4).map((f, i) => `<img src="${esc(f)}" alt="${esc(p.titulo)} en ${esc(p.ciudad)}, Paraguay: foto ${i + 1}" width="400" height="300" loading="lazy">`).join("")}
    <p><a href="https://wa.me/${C.whatsapp[0].numero}">Consultar por WhatsApp al ${esc(C.whatsapp[0].visible)}</a></p>
  </article>
</main>`;
  let html = tpl
    .replace(/<title>[\s\S]*?<\/title>\s*<meta charset="utf-8">/, head)
    .replace(/<meta name="description"[^>]*>\s*<link rel="canonical"[^>]*>\s*<meta name="robots"[^>]*>/, meta)
    .replace('<body data-page="alquileres" data-dyn-title>', `<body data-page="alquileres" data-dyn-title data-prop="${esc(p.id)}">`)
    .replace('<main class="wrap" id="main"></main>', body);
  if (!html.includes(`data-prop="${p.id}"`) || !html.includes('"@type":"RealEstateListing"')) throw new Error("template changed: " + p.id);
  fs.writeFileSync(path.join(ROOT, p.slug + ".html"), html.replace("<!doctype html>", "<!doctype html>\n<!-- Generado por herramientas/generar-fichas.js desde propiedad.html y data/datos.js: no editar a mano -->"));
  pages.push(p.slug + ".html");
}
/* alquileres.html: list of listings for search engines (schema.org ItemList) */
const listLd = { "@context": "https://schema.org", "@type": "ItemList", name: "Propiedades en alquiler en Paraguay",
  itemListElement: D.propiedades.filter(p => p.slug && !p.oculto).map((p, i) => ({ "@type": "ListItem", position: i + 1, url: SITE + p.slug + ".html", name: p.titulo })) };
const al = path.join(ROOT, "alquileres.html"), alHtml = fs.readFileSync(al, "utf8");
if (!/<!--ITEMLIST-->[\s\S]*?<!--\/ITEMLIST-->/.test(alHtml)) throw new Error("alquileres.html: falta el marcador ITEMLIST");
fs.writeFileSync(al, alHtml.replace(/<!--ITEMLIST-->[\s\S]*?<!--\/ITEMLIST-->/, `<!--ITEMLIST--><script type="application/ld+json">${JSON.stringify(listLd).replace(/</g, "\\u003c")}</script><!--/ITEMLIST-->`));
const urls = [["", "1.0"], ["alquileres.html", "0.9"], ["canastas-navidenas-corporativas.html", "0.9"]].concat(pages.map(u => [u, "0.8"]));
fs.writeFileSync(path.join(ROOT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map(([u, pr]) => `  <url><loc>${SITE + u}</loc><xhtml:link rel="alternate" hreflang="es-PY" href="${SITE + u}"/><xhtml:link rel="alternate" hreflang="en" href="${SITE + u}?lang=en"/><changefreq>weekly</changefreq><priority>${pr}</priority></url>`).join("\n")}
</urlset>
`);
console.log("Fichas generadas:\n" + pages.join("\n"));

/* Brickroga — versión en inglés.
   El sitio está escrito en español. Con inglés activo, este archivo reemplaza cada texto
   por su traducción (las traducciones del contenido de datos.js están en datos.js → traducciones_en).
   Para agregar un texto nuevo: sumá una línea "texto en español": "English text". */
(function () {
  let lang = "es";
  try {
    const q = new URLSearchParams(location.search).get("lang");
    if (q === "en" || q === "es") { lang = q; localStorage.setItem("brk-lang", q); }
    else lang = localStorage.getItem("brk-lang") || ((navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en");
  } catch (e) {}
  if (lang !== "en") lang = "es";
  document.documentElement.lang = lang === "en" ? "en" : "es-PY";

  const UI = {
    /* header / footer / general */
    "Menú": "Menu", "Alquileres": "Rentals", "Canastas navideñas": "Christmas baskets", "Servicios": "Services", "Contacto": "Contact",
    "Brickroga, inicio": "Brickroga, home", "Principal": "Main",
    "Escribinos por WhatsApp": "Message us on WhatsApp", "Empresa": "Company", "Oficina": "Office", "Sitio": "Site",
    "Lunes a viernes de 8 a 18 h · Sábados de 8 a 12 h": "Monday to Friday 8 am to 6 pm · Saturday 8 am to 12 pm",
    "Ver en Google Maps →": "View on Google Maps →", "Servicios y consultoría": "Services and consulting",
    "Canastas navideñas corporativas": "Corporate Christmas baskets",
    "Ladrillo, en inglés. Casa, en guaraní.": "“Brick” in English. “Róga” means house in Guaraní.",
    "A 200 metros de la entrada posterior de Paseo La Galería": "200 meters from the back entrance of Paseo La Galería",
    "Velloso Enciso entre Raúl Carmona y Bruselas": "Velloso Enciso between Raúl Carmona and Bruselas",
    "Foto próximamente": "Photo coming soon", "Fotos próximamente": "Photos coming soon", "Ejemplo": "Sample", "Datos de ejemplo": "Sample data",
    "Se alquila": "For rent", "/ mes": "/ month", "/ unidad": "/ unit", "Amoblado": "Furnished", "Disponible": "Available",
    "Monoambiente": "Studio", "Departamento": "Apartment", "Casa": "House",
    "Escribinos por WhatsApp": "Message us on WhatsApp", "Escribir por WhatsApp": "Message us on WhatsApp",
    "Consultar por WhatsApp →": "Ask on WhatsApp →", "Pedir por WhatsApp": "Order on WhatsApp", "Enviar por WhatsApp": "Send on WhatsApp",

    /* home */
    "Destacados": "Highlights", "Elegir banner": "Choose banner", "Banner 1: alquileres": "Banner 1: rentals",
    "Banner 2: canastas navideñas": "Banner 2: Christmas baskets", "Banner anterior": "Previous banner", "Banner siguiente": "Next banner",
    "Alquileres en Asunción": "Rentals in Asunción", "Alquileres": "Rentals", "Alquilá tu depto.": "Rent your place.", "Llegás con la valija.": "Just bring your suitcase.",
    "Monoambientes amoblados en Santa María con internet y servicios incluidos. El precio está a la vista y la visita se coordina por WhatsApp.":
      "Furnished studios in Santa María, Asunción, with internet and utilities included. The price is right there, and you book a visit on WhatsApp.",
    "Ver el departamento": "See the apartment", "Coordinar una visita": "Book a visit",
    "Navidad 2026 · Para empresas": "Christmas 2026 · For companies", "Canastas navideñas": "Christmas baskets", "corporativas": "corporate gifts", ", con tu logo.": ", with your logo.",
    "En bolso térmico, mochila o bolsa de viaje, para clientes, proveedores y tu equipo. Entregamos en Asunción y Gran Asunción, con factura.":
      "In a cooler bag, backpack or travel bag, for clients, suppliers and your team. Delivered across Greater Asunción, with a tax invoice.",
    "Ver canastas y precios": "See baskets and prices", "Cotizar por WhatsApp": "Get a quote on WhatsApp",
    "Disponibles ahora": "Available now", "Ver todos los alquileres →": "See all rentals →", "Ver fotos y detalles →": "See photos and details →",
    "Canastas navideñas corporativas con tu logo": "Corporate Christmas baskets with your logo",
    "Para clientes, proveedores y tu equipo. Entregamos en Asunción y Gran Asunción, con factura.": "For clients, suppliers and your team. Delivered across Greater Asunción, with a tax invoice.",
    "Además de alquilar": "Beyond rentals",
    "ladrillo, en inglés": "a brick, in English", "casa, en guaraní": "a house, in Guaraní",
    "Ladrillo por ladrillo, casa por casa.": "Brick by brick, house by house.",
    "Somos una empresa paraguaya que compra terrenos, construye y alquila. Antes de publicar una propiedad la revisamos como si fuéramos a vivir ahí: el precio por m² de la zona, el acceso, el agua, la luz y la seguridad. Eso es lo que te contamos antes de que firmes.":
      "We are a Paraguayan company that buys land, builds and rents. Before we list a property we check it as if we were moving in: the price per m² in the area, access, water, power and safety. That is what we tell you before you sign.",
    "Servicios básicos incluidos": "Utilities included", "Sin gastos comunes": "No building fees",


    "🔇 Activar sonido": "🔇 Turn sound on", "🔊 Silenciar": "🔊 Mute", "Idioma / Language": "Language / Idioma",
    /* catálogo */
    "Propiedades": "Properties", "Operación": "Listing type", "Todas": "All", "Alquiler temporario": "Short-term rental", "Venta": "Sale", "Terreno": "Land",
    "Ciudad": "City", "Buscar": "Search", "Código": "Code", "código": "code", "Reservado": "Reserved",
    "Ver todas las propiedades →": "See all properties →", "Ver todas →": "See all →", "Otras propiedades": "Other properties",
    "Departamentos, casas y terrenos. Todos con precio publicado.": "Apartments, houses and land. Every listing shows its price.",
    "Barrio, ciudad, código o comodidad": "Neighborhood, city, code or amenity",
    "Barrio, ciudad o lo que necesitás (piscina, amoblado...)": "Neighborhood, city or what you need (pool, furnished...)",
    "Buscar propiedades": "Search properties",
    "Consultá la tarifa": "Ask for rates", "Consultá según fechas": "Depends on dates", "Tarifa": "Rate", "Tarifa por noche": "Nightly rate",
    "Se vende": "For sale", "Consultar fechas y tarifa": "Ask for dates and rates", "Ver disponibilidad en Airbnb": "Check availability on Airbnb",
    "Ubicación": "Location", "Ver en español": "Ver en español", "View in English": "View in English",
    "Ver los 3 monoambientes": "See the 3 studios", "Recorrido con Romi": "Video tour with Romi", "Recorrido": "Video tour",
    "Video recorriendo los monoambientes de Santa María": "Video tour of the Santa María studios",
    "Santa María, Asunción": "Santa María, Asunción",
    "📍 Una ubicación que lo tiene todo.": "📍 A location that has it all.",
    "Ubicados en una zona estratégica de Asunción, nuestros monoambientes te permiten disfrutar de la comodidad de un entorno residencial, con todo lo que necesitás a pocos minutos.":
      "Set in a strategic part of Asunción, our studios give you the calm of a residential area with everything you need a few minutes away.",
    "🛍️ Cerca de Paseo La Galería y Shopping del Sol.": "🛍️ Close to Paseo La Galería and Shopping del Sol.",
    "☕ Rodeado de opciones gastronómicas y comerciales.": "☕ Surrounded by cafés, restaurants and shops.",
    "🛒 Supermercados y servicios en las cercanías.": "🛒 Supermarkets and services nearby.",
    "🏢 Fácil acceso al eje corporativo y comercial de Asunción.": "🏢 Easy access to Asunción's business and shopping district.",
    "Ideal para quienes buscan comodidad, practicidad y una excelente ubicación, ya sea por trabajo, turismo o estadías temporales. ✨":
      "Ideal if you want comfort, convenience and a great location, whether for work, tourism or a temporary stay. ✨",
    "Fotos de referencia: las 3 unidades tienen el mismo equipamiento.": "Reference photos: all 3 units have the same furnishings.",
    "dormitorio": "bedroom", "huéspedes": "guests",

    /* listings */
    "Todos con precio publicado y fotos reales.": "Every listing shows its price and real photos.",
    "Tipo": "Type", "Todos": "All", "Dormitorios": "Bedrooms", "Cualquiera": "Any", "1 o más": "1 or more", "2 o más": "2 or more", "3 o más": "3 or more",
    "Precio máximo": "Max price", "Sin límite": "No limit", "Indistinto": "Any", "Sí": "Yes", "No": "No",
    "Ordenar": "Sort", "Menor precio": "Lowest price", "Mayor precio": "Highest price", "Más m²": "Most m²",

    /* detail */
    "Inicio": "Home", "Ruta": "Breadcrumb", "Fotos": "Photos", "Precio": "Price",
    "Mono": "Studio", "ambiente": "single room", "dormitorios": "bedrooms", "baño privado": "private bathroom", "baño": "bathroom", "baños": "bathrooms",
    "superficie": "floor area", "disponibles": "available", "Qué tiene": "What it has", "Qué queda cerca": "What is nearby",
    "Distancia en línea recta. Tiempos en auto, sin mucho tráfico.": "Straight-line distance. Driving times without heavy traffic.",
    "Recorrido y ubicación": "Video tour and location", "Alquiler": "Rent", "Aproximado en dólares": "Approx. in US dollars",
    "Gastos comunes": "Building fees", "No tiene": "None", "Incluido:": "Included:",

    /* baskets */
    "Navidad 2026 · Regalos empresariales": "Christmas 2026 · Corporate gifts",
    "Canastas navideñas corporativas en Asunción": "Corporate Christmas baskets in Asunción",
    "Canastas en bolso térmico, mochila o bolsa de viaje para regalar a clientes, proveedores y a tu equipo. Las personalizamos con tu logo, las entregamos donde nos digas y te facturamos con RUC.":
      "Baskets in a cooler bag, backpack or travel bag for your clients, suppliers and team. We add your logo, deliver wherever you need and issue a Paraguayan tax invoice (RUC).",
    "Pedir cotización": "Request a quote", "Desde": "From", "Pedido mínimo": "Minimum order", "Entrega": "Delivery", "Factura": "Invoice",
    "Con RUC": "With RUC", "Pedidos hasta": "Order by", "Asunción y Gran Asunción": "Greater Asunción",
    "Elegí la canasta para tu empresa": "Choose a basket for your company", "Precio por unidad": "Price per unit", "La más pedida": "Most ordered",
    "Precio a confirmar": "Price to be confirmed", "Consultá el precio": "Ask for the price",
    "Para más de 50 unidades armamos precio por volumen. A partir de 30 unidades podés pedir una canasta a medida.":
      "Volume pricing for more than 50 units. From 30 units you can order a custom basket.",
    "Cómo se hace un pedido": "How ordering works", "PASO 1": "STEP 1", "PASO 2": "STEP 2", "PASO 3": "STEP 3",
    "Elegís canasta y cantidad": "Choose basket and quantity",
    "Nos decís cuántas necesitás y para quién: clientes, proveedores o tu equipo.": "Tell us how many you need and who they are for: clients, suppliers or your team.",
    "Aprobás una muestra": "Approve a sample",
    "Agregamos tu logo y un mensaje, y te mandamos la foto de una canasta armada antes de hacer el resto.": "We add your logo and a message, and send you a photo of one finished basket before making the rest.",
    "Entregamos con factura": "We deliver with an invoice",
    "Llevamos todo a tu oficina o a cada destinatario en Asunción y Gran Asunción.": "We deliver to your office or to each recipient across Greater Asunción.",
    "Pedí tu cotización": "Request your quote",
    "Completá los datos y se abre WhatsApp con el pedido ya escrito. Te respondemos con el precio final y la fecha de entrega.":
      "Fill in the details and WhatsApp opens with your order already written. We reply with the final price and delivery date.",
    "Medios de pago": "Payment methods", "Transferencia bancaria": "Bank transfer", "Tarjeta de crédito": "Credit card", "Efectivo": "Cash", "QR": "QR code",
    "Horario de atención": "Opening hours", "RUC": "RUC (tax ID)", "Canasta": "Basket", "Canasta a medida": "Custom basket", "Cantidad": "Quantity", "Comentarios": "Comments",
    "Nombre de la empresa": "Company name", "Opcional": "Optional", "Fecha de entrega, dirección, si llevan logo...": "Delivery date, address, logo...",
    "Canastas de Navidad para empresas en Paraguay": "Christmas baskets for companies in Paraguay",
    "Una canasta navideña empresarial es la forma más directa de agradecer a clientes, proveedores y colaboradores al cerrar el año. En Brickroga armamos canastas corporativas con sidra, pan dulce, vino, turrón, cookies y más, presentadas en bolso térmico, mochila o bolsa de viaje que tu equipo y tus clientes van a seguir usando, con la tarjeta de tu empresa.":
      "A corporate Christmas basket is the simplest way to thank clients, suppliers and staff at the end of the year. At Brickroga we put together baskets with cider, panettone, wine, nougat, cookies and more, packed in a cooler bag, backpack or travel bag your clients and team will keep using, with your company's card.",
    "Trabajamos con empresas de Asunción, Luque, San Lorenzo, Fernando de la Mora, Lambaré y todo Gran Asunción. Podés pedir canastas iguales para todos o combinar líneas según el destinatario.":
      "We work with companies in Asunción, Luque, San Lorenzo, Fernando de la Mora, Lambaré and all of Greater Asunción. Order the same basket for everyone or mix lines by recipient.",
    "Preguntas frecuentes": "Frequently asked questions",
    "¿Cuál es el pedido mínimo?": "What is the minimum order?", "El pedido mínimo es de": "The minimum order is",
    "canastas. Para pedidos más grandes armamos un precio por volumen.": "baskets. Larger orders get volume pricing.",
    "¿Pueden llevar el logo de mi empresa?": "Can they carry my company logo?",
    "Sí. Todas llevan una tarjeta con el logo de tu empresa.": "Yes. Every basket includes a card with your company logo.",
    "¿Hacen factura legal?": "Do you issue a tax invoice?", "Sí. Brickroga E.A.S. emite factura legal con RUC.": "Yes. Brickroga E.A.S. issues a legal Paraguayan invoice (factura) with RUC.",
    "¿Dónde entregan?": "Where do you deliver?",
    "Entregamos en Asunción y Gran Asunción, en tu oficina o directamente a cada destinatario.": "Across Greater Asunción, to your office or directly to each recipient.",
    "¿Hasta cuándo puedo pedir?": "What is the order deadline?", "Tomamos pedidos hasta el": "We take orders until",
    ". Cuanto antes pidas, más fácil es conseguir la fecha de entrega que querés.": ". The earlier you order, the easier it is to get the delivery date you want.",
    "15 de diciembre": "December 15"
  };
  const RULES = [
    [/^(.+) · Unidad (\d+)$/, (m, a, n) => tr(a) + " · Unit " + n],
    [/^★ ([\d,]+) · (\d+) reseñas en (.+)$/, (m, a, n, f) => "★ " + a.replace(",", ".") + " · " + n + " reviews on " + f],
    [/^([\d,]+) · (\d+) reseñas en (.+)$/, (m, a, n, f) => a.replace(",", ".") + " · " + n + " reviews on " + f],
    [/^(\d+) huéspedes$/, "$1 guests"], [/^(\d+) dormitorios?$/, (m, n) => n + (n === "1" ? " bedroom" : " bedrooms")],
    [/^(\d+) propiedades?$/, (m, n) => n + (n === "1" ? " property" : " properties")],
    [/^Coordiná con (.+) · WhatsApp (.+)$/, "Book with $1 · WhatsApp $2"],
    [/^(\d+) unidades disponibles$/, "$1 units available"], [/^(\d+) unidad disponible$/, "$1 unit available"],
    [/^(\d+) disponibles$/, "$1 available"], [/^(\d+) baños?$/, (m, n) => n + (n === "1" ? " bathroom" : " bathrooms")],
    [/^(\d+) dorm\.$/, "$1 bed"], [/^(\d+) coch\.$/, "$1 parking"], [/^(\d+) unidades$/, "$1 units"],
    [/^Unos USD ([\d.]+) por mes\.$/, "About USD $1 a month."], [/^(Gs\. [\d.]+) por unidad$/, "$1 per unit"],
    [/^~(\d+) min en auto$/, "~$1 min by car"], [/^Estimado: (.+)$/, "Estimate: $1"],
    [/^© (\d{4}) BRICKROGA E\.A\.S\. · Todos los precios publicados son finales por mes\.$/, "© $1 BRICKROGA E.A.S. · All listed prices are final monthly prices."],
    [/^www\.brickroga\.com · Versión (.+)$/, "www.brickroga.com · Version $1"],
    [/^(.+) · (Gs\. [\d.]+)$/, (m, a, b) => tr(a) + " · " + b],
    [/^(.+), ([^,]+)$/, (m, a, b) => DICT[a] !== undefined ? DICT[a] + ", " + b : m]
  ];
  const PAGES = {
    inicio: ["Brickroga | Furnished apartments for rent in Asunción", "Furnished studios for rent in Santa María, Asunción, from Gs. 2,500,000 a month with internet and utilities included. Also corporate Christmas baskets. Brickroga E.A.S."],
    alquileres: ["Properties for rent in Asunción and Paraguay | Brickroga", "Brickroga studios, apartments, houses and land in and around Asunción. Search by area, type, price and amenities."],
    canastas: ["Corporate Christmas baskets in Paraguay | Brickroga", "Corporate Christmas baskets in Greater Asunción. Baskets in a cooler bag, backpack or travel bag with your company logo, delivery and tax invoice. Get a quote on WhatsApp."]
  };

  let DICT = UI;
  function tr(s) {
    if (DICT[s] !== undefined) return DICT[s];
    for (const [re, to] of RULES) if (re.test(s)) return s.replace(re, to);
    return s;
  }
  function translate(root) {
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT); const nodes = []; let n;
    while ((n = w.nextNode())) if (!n.parentElement.closest("script,style,[data-no-tr]")) nodes.push(n);
    nodes.forEach(n => { const raw = n.textContent, s = raw.trim(); if (!s) return; const t = tr(s); if (t !== s) n.textContent = raw.replace(s, t); });
    root.querySelectorAll("[placeholder],[aria-label]").forEach(e => {
      if (e.placeholder) e.placeholder = tr(e.placeholder);
      const a = e.getAttribute("aria-label"); if (a) e.setAttribute("aria-label", tr(a));
    });
  }
  window.BRK_I18N = {
    lang, tr: s => (lang === "en" ? tr(s) : s),
    set(l) { try { localStorage.setItem("brk-lang", l); } catch (e) {} location.reload(); },
    run() {
      if (lang !== "en") return;
      const D = window.BRICKROGA || {}; DICT = Object.assign({}, UI, D.traducciones_en || {});
      translate(document.body);
      const page = document.body.dataset.page, P = document.body.hasAttribute("data-dyn-title") ? null : PAGES[page];
      if (P) { document.title = P[0]; const m = document.querySelector('meta[name="description"]'); if (m) m.content = P[1]; }
      else { document.title = document.title.split(" | ").map(tr).join(" | "); const m = document.querySelector('meta[name="description"]'); if (m) m.content = tr(m.content); }
      // re-translate content that pages render later (filters, hash changes)
      new MutationObserver(ms => ms.forEach(m => m.addedNodes.forEach(x => { if (x.nodeType === 1) translate(x); else if (x.nodeType === 3 && x.parentElement) translate(x.parentElement); }))).observe(document.body, { childList: true, subtree: true });
    }
  };
})();

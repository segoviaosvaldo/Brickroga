/*
  BRICKROGA — datos del sitio
  ---------------------------------------------------------------
  Todo el contenido que cambia (alquileres, canastas, servicios y
  contacto) vive en este archivo. El futuro backoffice va a editar
  exactamente esta misma estructura (y más adelante, una API).

  "ejemplo: true" marca datos de muestra: el sitio les pone una
  etiqueta "Ejemplo". Al cargar los datos reales, borrá esa línea.
  Un campo vacío ("") no se muestra en la web.
*/
window.BRICKROGA = {
  config: {
    nombre: "Brickroga",
    razon_social: "BRICKROGA E.A.S.",
    ruc: "80177512-4",
    whatsapp: [
      { numero: "595981743522", visible: "0981 743 522" } // Johanna
    ],
    email: "contacto.brickroga@gmail.com",
    instagram: "",                           // todavía no hay cuenta: vacío = no se muestra
    oficina: "Velloso Enciso entre Raúl Carmona y Bruselas",
    oficina_referencia: "A 200 metros de la entrada posterior de Paseo La Galería",
    oficina_barrio: "Ycuá Satí, Asunción",
    oficina_maps: "https://www.google.com/maps/search/?api=1&query=Velloso+Enciso+y+Bruselas,+Asunci%C3%B3n,+Paraguay",
    horario: "Lunes a viernes de 8 a 18 h · Sábados de 8 a 12 h", // CONFIRMAR
    sitio: "https://www.brickroga.com",
    version: "Versión 1.0 · 2026"
  },

  /* ─────────────────────────────────────────────────────────────
     PROPIEDADES — una entrada por cada departamento, casa o terreno.
     Campos:
       id           identificador para la URL (propiedad.html#id), sin espacios
       codigo       código interno (BRK-001...)
       estado       disponible | reservado | alquilado (alquilado = no se muestra)
       destacado    true = aparece en la portada
       operacion    Alquiler | Alquiler temporario | Venta
       tipo         Monoambiente | Departamento | Casa | Terreno
       precio       número, o null si se consulta
       periodo      mes | noche | (vacío para venta)
       comodidades  claves de la lista COMODIDADES de abajo (ícono + texto)
       secciones    bloques con emoji para la ficha (como los posts de Instagram)
       fotos        rutas a las fotos; fotos_nota aclara si son de referencia
     ───────────────────────────────────────────────────────────── */
  propiedades: [],

  /* Comodidades disponibles (ícono + texto). Agregá nuevas acá. */
  comodidades: {
    amoblado:        ["🛋️", "Amoblado"],
    wifi:            ["📶", "Internet / Wi-Fi"],
    aa:              ["❄️", "Aire acondicionado"],
    tv:              ["📺", "TV"],
    cocina:          ["🍳", "Cocina equipada"],
    heladera:        ["🧊", "Heladera y microondas"],
    cama:            ["🛏️", "Cama con cajoneras"],
    escritorio:      ["💻", "Escritorio y silla"],
    bano_privado:    ["🚿", "Baño privado"],
    lavarropas:      ["🧺", "Lavarropas y secarropas compartidos"],
    patio:           ["🌿", "Patio propio"],
    estacionamiento: ["🚗", "Estacionamiento"],
    piscina:         ["🏊", "Piscina"],
    mascotas:        ["🐾", "Acepta mascotas"],
    servicios:       ["💡", "Servicios incluidos"],
    independiente:   ["🚪", "Entrada independiente"],
    patio_techado:   ["⛱️", "Patio techado y comedor exterior"],
    jardin:          ["🌳", "Jardín"]
  },


  canastas: [
    /* Las 3 canastas que Johanna pone a la venta. precio: null muestra
       "Precio a confirmar" hasta que se cargue el número. */
    {
      id: "termica",
      nombre: "Canasta Térmica",
      empaque: "Bolso térmico",
      precio: null, moneda: "Gs", // PENDIENTE: precio de Johanna
      contenido: ["Bolso térmico", "Tarjeta con el logo de tu empresa", "Pan dulce", "Sidra 710 ml", "Durazno en almíbar", "Turrón", "Cookies", "Wafer", "Aceitunas", "Maní"],
      fotos: []
    },
    {
      id: "mochila",
      nombre: "Canasta Mochila",
      empaque: "Mochila",
      precio: null, moneda: "Gs", // PENDIENTE: precio de Johanna
      contenido: ["Mochila", "Tarjeta con el logo de tu empresa", "Vaso térmico", "Pan dulce", "Sidra 910 ml", "Vino", "Cookies", "Wafer", "Durazno en almíbar", "Saladix", "Turrón", "Pepsi 1 L", "Aceitunas", "Dulce de batata", "Budín", "Maní"],
      fotos: []
    },
    {
      id: "bolsa-viaje", ejemplo: true,
      nombre: "Canasta Bolsa de viaje",
      empaque: "Bolsa de viaje",
      precio: null, moneda: "Gs", // PENDIENTE: precio y contenido de Johanna
      contenido: ["Bolsa de viaje", "Tarjeta con el logo de tu empresa", "Contenido a confirmar"],
      fotos: []
    }
  ],

  canastas_info: {
    pedido_minimo: 10,               // PENDIENTE: confirmar
    fecha_limite: "15 de diciembre", // PENDIENTE: confirmar
    zona_entrega: "Asunción y Gran Asunción",
    pagos: ["Transferencia bancaria", "Tarjeta de crédito", "QR", "Efectivo"] // CONFIRMAR
  },

  /* Traducciones al inglés del contenido de arriba (español → inglés).
     Si cambiás un texto en español, actualizá también su traducción acá. */
  traducciones_en: {
    "Ideal para ejecutivos y profesionales que vienen por trabajo o necesitan estar cerca del eje corporativo.": "Ideal for executives and professionals in town for work or who need to be close to the business district.",
    "Ubicación estratégica": "Strategic location", "Zona tranquila y bien ubicada en Asunción, con la comodidad de un entorno residencial.": "A quiet, well-located area of Asunción with the comfort of a residential neighborhood.",
    "Comodidad urbana": "City convenience", "Todo cerca: shoppings, supermercados y zonas corporativas. Llegás a todo en minutos.": "Everything nearby: malls, supermarkets and business areas, all a few minutes away.",
    "Conectividad total": "Fully connected", "Listo para mudarte: cama, escritorio, TV, aire acondicionado, cocina equipada, baño privado, y lavarropas y secarropas de uso compartido.": "Ready to move in: bed, desk, TV, air conditioning, equipped kitchen, private bathroom, and a shared washer and dryer.",
    "Monoambiente amoblado, listo para entrar con la valija. Pisos de porcelanato, pared de ladrillo visto, cocina con mesada y desayunador, escritorio para trabajar y un patio propio con mesa. Los departamentos son independientes y el complejo tiene amplio estacionamiento.":
      "Furnished studio, ready to move in with just your suitcase. Porcelain tile floors, an exposed brick wall, a kitchen with counter and breakfast bar, a desk to work at and a private patio with a table. Each unit has its own entrance and the complex has ample parking.",
    "Casa con piscina en San Bernardino": "House with pool in San Bernardino", "Cerca del lago Ypacaraí": "Near Lake Ypacaraí",
    "Ideal para una escapada en familia o con amigos, a pasos del lago Ypacaraí.": "Ideal for a getaway with family or friends, close to Lake Ypacaraí.",
    "Casa entera para hasta 6 huéspedes, en un entorno natural a 15 minutos del centro de San Bernardino. Tiene dos habitaciones amplias, piscina privada, cocina completamente equipada, Wi-Fi rápido y TV.":
      "Entire house for up to 6 guests in a natural setting, 15 minutes from downtown San Bernardino. Two spacious bedrooms, a private pool, a fully equipped kitchen, fast Wi-Fi and TV.",
    "Patio techado y jardín": "Covered patio and garden", "Comedor al aire libre bajo techo, rodeado de un jardín verde.": "Covered outdoor dining area surrounded by a green garden.",
    "Entorno natural y tranquilo": "Quiet natural setting", "Zona residencial calma, cerca del lago Ypacaraí y a 15 minutos del centro de San Bernardino.": "A calm residential area near Lake Ypacaraí, 15 minutes from downtown San Bernardino.",
    "Patio techado y comedor exterior": "Covered patio and outdoor dining", "Jardín": "Garden",
    "Favorito entre huéspedes · Limpieza 5,0 · Ubicación 5,0 · Comunicación 5,0": "Guest favorite · Cleanliness 5.0 · Location 5.0 · Communication 5.0",
    "Piscina privada": "Private pool", "Para disfrutar el verano sin salir de la casa.": "Enjoy the summer without leaving the house.",
    "2 habitaciones, 4 camas": "2 bedrooms, 4 beds", "Habitación 1: cama doble y cama simple. Habitación 2: cama doble. Además, un sillón en la sala.": "Bedroom 1: double bed and single bed. Bedroom 2: double bed. Plus a sofa in the living room.",
    "Entorno natural": "Natural setting", "Cerca del lago Ypacaraí y a 15 minutos del centro de San Bernardino.": "Near Lake Ypacaraí and 15 minutes from downtown San Bernardino.",
    "Amoblado": "Furnished", "Internet / Wi-Fi": "Internet / Wi-Fi", "Heladera y microondas": "Fridge and microwave", "Escritorio y silla": "Desk and chair",
    "Estacionamiento": "Parking", "Piscina": "Pool", "Acepta mascotas": "Pets allowed", "Servicios incluidos": "Utilities included", "Entrada independiente": "Private entrance",
    "Mayor Joel Estigarribia 485, Asunción": "Mayor Joel Estigarribia 485, Asunción",
    "Monoambiente amoblado en Santa María": "Furnished studio in Santa María",
    "Monoambiente amoblado en Santa María, Asunción": "Furnished studio in Santa María, Asunción",
    "Internet, agua, basura y luz hasta Gs. 100.000 por mes (pagás solo la diferencia).": "Internet, water, garbage collection and electricity up to Gs. 100,000 a month (you only pay any difference).",
    "Monoambiente amoblado, listo para entrar con la valija. Pisos de porcelanato, pared de ladrillo visto, cocina con mesada y desayunador, escritorio para trabajar y un patio propio con mesa. Internet y servicios básicos incluidos en el alquiler.":
      "Furnished studio, ready to move in with just your suitcase. Porcelain tile floors, an exposed brick wall, a kitchen with counter and breakfast bar, a desk to work at and a private patio with a table. Internet and utilities are included in the rent.",
    "Cama con cajoneras": "Bed with drawers", "Escritorio y silla": "Desk and chair", "Aire acondicionado": "Air conditioning", "TV": "TV",
    "Cocina equipada": "Equipped kitchen", "Heladera y microondas": "Fridge and microwave", "Baño privado": "Private bathroom", "Patio propio": "Private patio",
    "Lavarropas y secarropas compartidos": "Shared washer and dryer",
    "Gestión de alquileres": "Rental management", "Publicamos tu inmueble, filtramos interesados, hacemos el contrato y cobramos por vos.": "We list your property, screen applicants, handle the lease and collect the rent for you.",
    "Consultoría inmobiliaria": "Real estate consulting", "Comparamos zonas, precio por m² y rentabilidad antes de que compres un terreno o un departamento.": "We compare areas, price per m² and returns before you buy land or an apartment.",
    "Terrenos en cuotas": "Land in installments", "Relevamos lotes en Central con agua, luz, acceso a ruta y seguridad evaluados uno por uno.": "We survey lots in Central department, checking water, power, road access and safety one by one.",
    "Canasta Térmica": "Cooler Bag Basket", "Canasta Mochila": "Backpack Basket", "Canasta Bolsa de viaje": "Travel Bag Basket",
    "Bolso térmico": "Cooler bag", "Mochila": "Backpack", "Bolsa de viaje": "Travel bag", "Tarjeta con el logo de tu empresa": "Card with your company logo",
    "Pan dulce": "Panettone", "Sidra 710 ml": "Cider 710 ml", "Sidra 910 ml": "Cider 910 ml", "Durazno en almíbar": "Peaches in syrup", "Turrón": "Nougat",
    "Cookies": "Cookies", "Wafer": "Wafers", "Aceitunas": "Olives", "Maní": "Peanuts", "Vaso térmico": "Insulated tumbler", "Vino": "Wine",
    "Saladix": "Saladix crackers", "Pepsi 1 L": "Pepsi 1 L", "Dulce de batata": "Sweet potato jam", "Budín": "Pound cake", "Contenido a confirmar": "Contents to be confirmed"
  },

  servicios: [
    { id: "gestion", titulo: "Gestión de alquileres", texto: "Publicamos tu inmueble, filtramos interesados, hacemos el contrato y cobramos por vos." },
    { id: "consultoria", titulo: "Consultoría inmobiliaria", texto: "Comparamos zonas, precio por m² y rentabilidad antes de que compres un terreno o un departamento." },
    { id: "terrenos", titulo: "Terrenos en cuotas", texto: "Relevamos lotes en Central con agua, luz, acceso a ruta y seguridad evaluados uno por uno." }
  ]
};

/* Los 3 monoambientes de Santa María comparten casi todo: se definen una vez y cada unidad tiene su propia ficha. */
(function () {
  const santaMaria = {
    estado: "disponible",
    destacado: true,
    operacion: "Alquiler",
    tipo: "Monoambiente",
    ciudad: "Asunción",
    barrio: "Santa María",
    direccion: "Mayor Joel Estigarribia 485, Asunción",
    lat: -25.301266, lng: -57.550014,
    maps: "https://maps.google.com/?q=-25.301266,-57.550014",
    precio: 2500000, moneda: "Gs", periodo: "mes",
    precio_usd_aprox: 420,
    gastos_comunes: 0,
    incluye: "Internet, agua, basura y luz hasta Gs. 100.000 por mes (pagás solo la diferencia).",
    dormitorios: 0, banos: 1, m2: 0, cochera: 0,   // PENDIENTE: m² de cada unidad
    amoblado: true,
    comodidades: ["amoblado", "wifi", "aa", "tv", "cocina", "heladera", "cama", "escritorio", "bano_privado", "lavarropas", "patio", "estacionamiento", "independiente", "servicios"],
    ideal_para: "Ideal para ejecutivos y profesionales que vienen por trabajo o necesitan estar cerca del eje corporativo.",
    descripcion: "Monoambiente amoblado, listo para entrar con la valija. Pisos de porcelanato, pared de ladrillo visto, cocina con mesada y desayunador, escritorio para trabajar y un patio propio con mesa. Los departamentos son independientes y el complejo tiene amplio estacionamiento.",
    secciones: [
      { e: "📍", titulo: "Ubicación estratégica", texto: "Zona tranquila y bien ubicada en Asunción, con la comodidad de un entorno residencial." },
      { e: "🏙️", titulo: "Comodidad urbana", texto: "Todo cerca: shoppings, supermercados y zonas corporativas. Llegás a todo en minutos." },
      { e: "🔌", titulo: "Conectividad total", texto: "Listo para mudarte: cama, escritorio, TV, aire acondicionado, cocina equipada, baño privado, y lavarropas y secarropas de uso compartido." }
    ],
    cerca_lista: [
      "🛍️ Cerca de Paseo La Galería y Shopping del Sol.",
      "☕ Rodeado de opciones gastronómicas y comerciales.",
      "🛒 Supermercados y servicios en las cercanías.",
      "🏢 Fácil acceso al eje corporativo y comercial de Asunción."
    ],
    cerca: [
      { lugar: "Paseo La Galería", km: 2.3, min: 7 },
      { lugar: "Shopping del Sol", km: 2.7, min: 10 }
    ],
    contacto: { nombre: "Johanna Colman", numero: "595981743522", visible: "0981 743 522" },
    mapa: "assets/fotos/santa-maria/map.webp",
    video: "assets/video/romi.mp4",
    video_poster: "assets/video/romi.jpg",
    video_titulo: "Recorrido con Romi",
    fotos_nota: "Fotos de referencia: las 3 unidades tienen el mismo equipamiento.",
    fotos: [
      "assets/fotos/santa-maria/fachada.jpg",
      "assets/fotos/santa-maria/r1.webp",
      "assets/fotos/santa-maria/r5.webp",
      "assets/fotos/santa-maria/r4.webp",
      "assets/fotos/santa-maria/r3.webp",
      "assets/fotos/santa-maria/r2.webp",
      "assets/fotos/santa-maria/r8.webp",
      "assets/fotos/santa-maria/r9.webp",
      "assets/fotos/santa-maria/r6.webp",
      "assets/fotos/santa-maria/r7.webp",
      "assets/fotos/santa-maria/pasillo.jpg"
    ]
  };
  const P = window.BRICKROGA.propiedades;
  [1, 2, 3].forEach(n => P.push(Object.assign({}, santaMaria, {
    id: "santa-maria-" + n,
    codigo: "BRK-00" + n,
    unidad: "Unidad " + n,
    titulo: "Monoambiente amoblado en Santa María · Unidad " + n,
    // PENDIENTE: cuando lleguen las fotos de cada unidad, poné acá su lista propia y borrá fotos_nota
    // cada unidad abre con una foto distinta para que no se vean iguales en el listado
    fotos: (function () { const f = santaMaria.fotos.slice(), first = f.splice(n, 1)[0]; return [first].concat(f); })()
  })));

  P.push({
    id: "san-bernardino-casa",
    codigo: "BRK-004",
    estado: "disponible",
    destacado: true,
    operacion: "Alquiler temporario",
    tipo: "Casa",
    titulo: "Casa con piscina en San Bernardino",
    ciudad: "San Bernardino",
    barrio: "Cerca del lago Ypacaraí",
    direccion: "",
    maps: "",
    precio: null, moneda: "Gs", periodo: "noche",    // PENDIENTE: tarifa por noche
    dormitorios: 2, banos: 2, m2: 0, cochera: 1, huespedes: 6, camas: 4,
    amoblado: true,
    comodidades: ["piscina", "patio_techado", "jardin", "wifi", "tv", "cocina", "estacionamiento", "mascotas", "amoblado"],
    ideal_para: "Ideal para una escapada en familia o con amigos, a pasos del lago Ypacaraí.",
    descripcion: "Casa entera para hasta 6 huéspedes, en un entorno natural a 15 minutos del centro de San Bernardino. Tiene dos habitaciones amplias, piscina privada, cocina completamente equipada, Wi-Fi rápido y TV.",
    secciones: [
      { e: "🏊", titulo: "Piscina privada", texto: "Para disfrutar el verano sin salir de la casa." },
      { e: "🛏️", titulo: "2 habitaciones, 4 camas", texto: "Habitación 1: cama doble y cama simple. Habitación 2: cama doble. Además, un sillón en la sala." },
      { e: "⛱️", titulo: "Patio techado y jardín", texto: "Comedor al aire libre bajo techo, rodeado de un jardín verde." },
      { e: "🌳", titulo: "Entorno natural y tranquilo", texto: "Zona residencial calma, cerca del lago Ypacaraí y a 15 minutos del centro de San Bernardino." }
    ],
    resenas: { nota: 4.89, cantidad: 19, fuente: "Airbnb", detalle: "Favorito entre huéspedes · Limpieza 5,0 · Ubicación 5,0 · Comunicación 5,0" },
    airbnb: "https://www.airbnb.cl/rooms/1346521144935895640",
    contacto: { nombre: "Johanna Colman", numero: "595981743522", visible: "0981 743 522" },
    fotos: []   // PENDIENTE: fotos propias de la casa
  });
})();

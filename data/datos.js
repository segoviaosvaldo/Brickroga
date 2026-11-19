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

  propiedades: [
    {
      id: "santa-maria",
      estado: "disponible",                  // disponible | reservado | alquilado
      unidades_disponibles: 3,
      destacado: true,
      operacion: "Alquiler",
      tipo: "Monoambiente",
      titulo: "Monoambiente amoblado en Santa María",
      ciudad: "Asunción",
      barrio: "Santa María",
      precio: 2500000, moneda: "Gs", periodo: "mes",
      precio_usd_aprox: 420,
      gastos_comunes: 0,
      incluye: "Internet, agua, basura y luz hasta Gs. 100.000 por mes (pagás solo la diferencia).",
      dormitorios: 0, banos: 1, m2: 0, cochera: 0,   // PENDIENTE: m² y cochera
      amoblado: true, mascotas: null,
      caracteristicas: ["Cama con cajoneras", "Escritorio y silla", "Aire acondicionado", "TV", "Cocina equipada", "Heladera y microondas", "Baño privado", "Patio propio", "Lavarropas y secarropas compartidos"],
      descripcion: "Monoambiente amoblado, listo para entrar con la valija. Pisos de porcelanato, pared de ladrillo visto, cocina con mesada y desayunador, escritorio para trabajar y un patio propio con mesa. Internet y servicios básicos incluidos en el alquiler.",
      cerca: [
        { lugar: "Paseo La Galería", km: 2.3, min: 8 },
        { lugar: "Shopping del Sol", km: 2.7, min: 10 }
      ],
      mapa: "assets/fotos/santa-maria/map.webp",
      video: "assets/fotos/santa-maria/tour.mp4",
      video_poster: "assets/fotos/santa-maria/tour.jpg",
      fotos: [
        "assets/fotos/santa-maria/r1.webp",
        "assets/fotos/santa-maria/r5.webp",
        "assets/fotos/santa-maria/r4.webp",
        "assets/fotos/santa-maria/r3.webp",
        "assets/fotos/santa-maria/r2.webp",
        "assets/fotos/santa-maria/r8.webp",
        "assets/fotos/santa-maria/r9.webp",
        "assets/fotos/santa-maria/r6.webp",
        "assets/fotos/santa-maria/r7.webp"
      ]
    }
  ],

  canastas: [
    {
      id: "clasica", ejemplo: true,
      nombre: "Canasta Clásica",
      empaque: "Canasta de mimbre",
      precio: 180000, moneda: "Gs",
      contenido: ["Sidra 750 ml", "Pan dulce 500 g", "Turrón de maní", "Garrapiñadas", "Frutas secas", "Tarjeta con el logo de tu empresa"],
      fotos: []
    },
    {
      id: "ejecutiva", ejemplo: true, destacada: true,
      nombre: "Box Ejecutivo",
      empaque: "Caja de madera con tu logo",
      precio: 290000, moneda: "Gs",
      contenido: ["Vino tinto reserva", "Sidra 750 ml", "Pan dulce premium", "Turrones surtidos", "Bombones", "Frutos secos"],
      fotos: []
    },
    {
      id: "premium", ejemplo: true,
      nombre: "Box Premium",
      empaque: "Caja de madera grabada",
      precio: 450000, moneda: "Gs",
      contenido: ["Espumante", "Vino tinto reserva", "Pan dulce artesanal", "Fiambres y quesos estacionados", "Chocolates finos", "Frutos secos"],
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
    "Canasta Clásica": "Classic Basket", "Box Ejecutivo": "Executive Box", "Box Premium": "Premium Box",
    "Sidra 750 ml": "Cider 750 ml", "Pan dulce 500 g": "Panettone 500 g", "Turrón de maní": "Peanut nougat", "Garrapiñadas": "Candied peanuts", "Frutas secas": "Dried fruit",
    "Tarjeta con el logo de tu empresa": "Card with your company logo", "Vino tinto reserva": "Reserve red wine", "Pan dulce premium": "Premium panettone",
    "Turrones surtidos": "Assorted nougat", "Bombones": "Chocolates", "Frutos secos": "Nuts", "Espumante": "Sparkling wine", "Pan dulce artesanal": "Artisan panettone",
    "Fiambres y quesos estacionados": "Cured meats and aged cheeses", "Chocolates finos": "Fine chocolates"
  },

  servicios: [
    { id: "gestion", titulo: "Gestión de alquileres", texto: "Publicamos tu inmueble, filtramos interesados, hacemos el contrato y cobramos por vos." },
    { id: "consultoria", titulo: "Consultoría inmobiliaria", texto: "Comparamos zonas, precio por m² y rentabilidad antes de que compres un terreno o un departamento." },
    { id: "terrenos", titulo: "Terrenos en cuotas", texto: "Relevamos lotes en Central con agua, luz, acceso a ruta y seguridad evaluados uno por uno." }
  ]
};

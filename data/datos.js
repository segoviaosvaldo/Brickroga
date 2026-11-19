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
    email: "",                               // PENDIENTE: ej. contacto@brickroga.com
    instagram: "",                           // PENDIENTE: usuario, sin @
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

  servicios: [
    { id: "gestion", titulo: "Gestión de alquileres", texto: "Publicamos tu inmueble, filtramos interesados, hacemos el contrato y cobramos por vos." },
    { id: "consultoria", titulo: "Consultoría inmobiliaria", texto: "Comparamos zonas, precio por m² y rentabilidad antes de que compres un terreno o un departamento." },
    { id: "terrenos", titulo: "Terrenos en cuotas", texto: "Relevamos lotes en Central con agua, luz, acceso a ruta y seguridad evaluados uno por uno." }
  ]
};

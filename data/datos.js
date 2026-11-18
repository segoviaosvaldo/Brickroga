/*
  BRICKROGA — datos del sitio
  ---------------------------------------------------------------
  Todo el contenido que cambia (alquileres, canastas, servicios y
  contacto) vive en este archivo. El futuro backoffice va a editar
  exactamente esta misma estructura (y más adelante, una API).

  "ejemplo: true" marca datos de muestra: el sitio les pone una
  etiqueta "Ejemplo". Al cargar los datos reales, borrá esa línea.
  "fotos": lista de rutas, ej. ["assets/fotos/depto-1/01.jpg"].
  Si está vacía, se muestra un marcador "Foto próximamente".
*/
window.BRICKROGA = {
  config: {
    nombre: "Brickroga",
    razon_social: "BRICKROGA E.A.S.",
    whatsapp: "595000000000",            // PENDIENTE: número real, sin + ni espacios
    whatsapp_visible: "+595 000 000 000", // PENDIENTE
    email: "contacto@brickroga.com",      // PENDIENTE: confirmar
    instagram: "",                        // PENDIENTE: usuario de Instagram
    ciudad_base: "Asunción, Paraguay",
    sitio: "https://www.brickroga.com"
  },

  propiedades: [
    {
      id: "depto-1",
      ejemplo: true,
      estado: "disponible",          // disponible | reservado | alquilado
      destacado: true,
      operacion: "Alquiler",
      tipo: "Departamento",
      titulo: "Departamento 1 dormitorio",
      ciudad: "Asunción",
      barrio: "Barrio a confirmar",
      precio: 2800000, moneda: "Gs", periodo: "mes",
      gastos_comunes: 350000,
      dormitorios: 1, banos: 1, m2: 45, cochera: 1,
      amoblado: false, mascotas: true,
      caracteristicas: ["Aire acondicionado", "Balcón", "Seguridad 24 h", "Ascensor"],
      descripcion: "Departamento luminoso, listo para entrar. Los datos y fotos definitivos se cargan en cuanto Johanna los pase.",
      fotos: []
    },
    {
      id: "depto-2",
      ejemplo: true,
      estado: "disponible",
      destacado: true,
      operacion: "Alquiler",
      tipo: "Departamento",
      titulo: "Departamento 2 dormitorios",
      ciudad: "Asunción",
      barrio: "Barrio a confirmar",
      precio: 3900000, moneda: "Gs", periodo: "mes",
      gastos_comunes: 450000,
      dormitorios: 2, banos: 2, m2: 72, cochera: 1,
      amoblado: true, mascotas: false,
      caracteristicas: ["Amoblado", "Piscina", "Quincho", "Lavadero"],
      descripcion: "Dos dormitorios con suite, cocina integrada y amenities en el edificio. Datos de muestra hasta recibir la ficha real.",
      fotos: []
    },
    {
      id: "depto-3",
      ejemplo: true,
      estado: "disponible",
      destacado: true,
      operacion: "Alquiler",
      tipo: "Departamento",
      titulo: "Monoambiente equipado",
      ciudad: "Asunción",
      barrio: "Barrio a confirmar",
      precio: 2200000, moneda: "Gs", periodo: "mes",
      gastos_comunes: 250000,
      dormitorios: 0, banos: 1, m2: 32, cochera: 0,
      amoblado: true, mascotas: true,
      caracteristicas: ["Amoblado", "Wi-Fi", "Aire acondicionado"],
      descripcion: "Ideal para una persona o estadías de trabajo. Datos de muestra hasta recibir la ficha real.",
      fotos: []
    }
  ],

  canastas: [
    {
      id: "clasica", ejemplo: true,
      nombre: "Canasta Clásica",
      precio: 180000, moneda: "Gs",
      contenido: ["Sidra 750 ml", "Pan dulce 500 g", "Turrón de maní", "Garrapiñadas", "Frutas secas", "Tarjeta con el logo de tu empresa"],
      fotos: []
    },
    {
      id: "ejecutiva", ejemplo: true, destacada: true,
      nombre: "Canasta Ejecutiva",
      precio: 290000, moneda: "Gs",
      contenido: ["Vino tinto reserva", "Sidra 750 ml", "Pan dulce premium", "Turrones surtidos", "Chocolates", "Frutos secos", "Caja rígida con tu logo"],
      fotos: []
    },
    {
      id: "premium", ejemplo: true,
      nombre: "Canasta Premium",
      precio: 450000, moneda: "Gs",
      contenido: ["Espumante", "Vino tinto reserva", "Pan dulce artesanal", "Fiambres y quesos estacionados", "Chocolates finos", "Frutos secos", "Caja de madera grabada"],
      fotos: []
    }
  ],
  canastas_info: {
    pedido_minimo: 10,          // PENDIENTE: confirmar
    fecha_limite: "15 de diciembre", // PENDIENTE: confirmar
    zona_entrega: "Asunción y Gran Asunción"
  },

  servicios: [
    { id: "gestion", titulo: "Gestión de alquileres", texto: "Publicamos tu inmueble, filtramos interesados, hacemos el contrato y cobramos por vos." },
    { id: "consultoria", titulo: "Consultoría inmobiliaria", texto: "Te ayudamos a comparar zonas, precios por m² y rentabilidad antes de comprar un terreno o departamento." },
    { id: "terrenos", titulo: "Búsqueda de terrenos en cuotas", texto: "Relevamos lotes en Central y alrededores con agua, luz, acceso a ruta y seguridad evaluados uno por uno." }
  ]
};

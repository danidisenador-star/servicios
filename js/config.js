/* =====================================================================
   CONFIG.JS · AQUÍ CAMBIAS TODO EL CONTENIDO (no necesitas tocar nada más)
   Reglas: los textos van entre comillas "así" y no borres las comas (,) del final.
   ===================================================================== */
window.LINK = {

  /* ── 1. TUS DATOS ─────────────────────────────────────────────── */
  nombre: "Dani",
  rol: "Diseñadora gráfica y web",                 // lo que aparece debajo de tu nombre
  foto: "assets/dani.jpg",                          // 👉 tu foto (cuadrada). Si no carga, se muestra la inicial
  estado: "Recibiendo proyectos",                   // 👉 etiqueta con puntito verde ("" = se oculta)

  // 👉 WHATSAPP: código de país + número, SIN "+" ni espacios
  whatsapp: "584267932485",
  instagram: "https://www.instagram.com/disenadorgrafico.pr/",
  usuarioInstagram: "@disenadorgrafico.pr",

  /* ── 2. TEXTOS DE LA CABECERA ─────────────────────────────────── */
  titular: "Mucho más que un link en bio.",
  subtitular: "Web Pocket: una mini web hecha a tu medida, con chat inteligente, visión 360° / 3D y ventas directas por WhatsApp.",
  palabraFija: "Web Pocket para",                   // frase que acompaña la palabra que va cambiando
  palabrasQueCambian: ["restaurantes", "inmobiliarias", "tiendas de belleza", "clínicas y spa", "eventos", "hoteles", "lanzamientos", "pequeños comercios"],

  /* ── 3. MENSAJES DE WHATSAPP (lo que le llega a ella ya escrito) ── */
  mensajes: {
    general:    "Hola Dani 👋 Vi tu perfil y me interesa una Web Pocket para mi negocio.",
    consultoria:"Hola Dani 👋 Quiero mi consultoría gratis para revisar mi marca completa: diseño, audiovisual, estrategia de marketing y productos digitales.",
    branding:   "Hola Dani 👋 Me interesa branding / identidad de marca para mi negocio.",
    social:     "Hola Dani 👋 Me interesa estrategia y contenido para redes sociales.",
    web:        "Hola Dani 👋 Necesito una web completa / e-commerce / app. ¿Me cotizas?"
  },

  /* ── 4. DEMOS (las webs que ya hiciste) ───────────────────────────
     img = captura de la web (assets/). Para cambiarla, reemplaza el archivo o pon otro nombre.
     Puedes agregar más: copia un bloque { … }, y pega al final antes del corchete ] */
  demos: [
    { sector: "Mini e-commerce", titulo: "Productos y belleza",         texto: "Catálogo, carrito y visor 3D de cada producto.",           img: "assets/demo-productos.jpg",     url: "https://danidisenador-star.github.io/product-mini-ecommerce/" },
    { sector: "Bienes raíces",   titulo: "Inmobiliaria",                texto: "Recorrido 360° de cada propiedad y búsqueda inteligente.", img: "assets/demo-inmobiliaria.jpg",  url: "https://danidisenador-star.github.io/realestate/" },
    { sector: "Salud y bienestar", titulo: "Clínica, spa y consultorio", texto: "Tour 360° de tu espacio y citas por WhatsApp.",            img: "assets/demo-clinica.jpg",       url: "https://danidisenador-star.github.io/Clinic-Spa-DEMO/" }
  ],

  /* ── 5. QUÉ INCLUYE ───────────────────────────────────────────────
     icono: cubo | chat | tienda | marca | whatsapp | cohete */
  beneficios: [
    { icono: "cubo",     titulo: "Visión 360° y 3D",            texto: "Muestra tu espacio o tus productos como si el cliente estuviera ahí." },
    { icono: "chat",     titulo: "Chat inteligente",                texto: "Responde al instante dudas, precios y disponibilidad." },
    { icono: "tienda",   titulo: "Mini e-commerce",                 texto: "Catálogo y carrito que llega a tu WhatsApp ya ordenado." },
    { icono: "marca",    titulo: "Branding 100% personalizado",     texto: "Tu identidad, tus colores y tu estilo. Nada de plantillas." },
    { icono: "whatsapp", titulo: "Cierre directo en WhatsApp o Telegram", texto: "El cliente elige y te escribe con su pedido listo." },
    { icono: "cohete",   titulo: "Entrega en tiempo récord",        texto: "Con servicio de mantenimiento: hosting y dominio." }
  ],

  /* ── 6. SECTORES / USOS ──────────────────────────────────────── */
  tituloSectores: "Un producto, mil usos",
  textoSectores: "Se adapta a tu negocio, sea cual sea.",
  sectores: [
    "Invitaciones de eventos", "Lanzamiento de productos", "Lanzamiento de música", "Tarjeta de visita con cupón", "Gift card digital",
    "Mini e-commerce", "Restaurantes y comida", "Hotelería", "Bienes raíces", "Belleza", "Medicina y bienestar", "Y más…"
  ],

  /* ── 7. REGALO (consultoría gratis) ──────────────────────────── */
  regalo: {
    titulo: "Consultoría gratis para toda tu marca",
    texto: "No es solo para tu Web Pocket: revisamos tu marca completa y te llevas un plan claro, sin compromiso.",
    incluye: ["Diseño", "Audiovisual", "Estrategia de marketing", "Productos digitales (si ya tienes)"],   // 👉 lo que cubre la consultoría
    boton: "Quiero mi consultoría"
  },

  /* ── 8. SERVICIOS DEL ESTUDIO ────────────────────────────────── */
  tituloServicios: "¿Necesitas algo más grande?",
  servicios: [
    { titulo: "Branding",                       texto: "Logo e identidad de marca.",              mensaje: "branding" },
    { titulo: "Estrategia y contenido social",  texto: "Plan y piezas para tus redes.",           mensaje: "social" },
    { titulo: "Web completa, e-commerce o app", texto: "Cotización a tu medida.",                 mensaje: "web" }
  ]
};

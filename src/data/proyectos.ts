type EstadoProyecto = 'en_construccion' | 'entregado' | 'en_venta'
type TipoProyecto = 'residencial' | 'comercial'

export type ProyectoSpecs = {
  edificio: string
  unidades: string
  amenities: string
}

export type Proyecto = {
  slug: string
  nombre: string
  ubicacion: string
  año: string
  locacionDetalle: string
  estado: EstadoProyecto
  tipo: TipoProyecto
  descripcion: string
  imagenPrincipal: string
  imagenes: string[]
  heroImage: string
  mainImage: string
  portraitImage: string
  gridImages: string[]
  galeriaImages: string[]
  specs: ProyectoSpecs
}

export const proyectos: Proyecto[] = [
  {
    slug: 'los-incas',
    nombre: 'Los Incas',
    ubicacion: 'Villa Ortúzar, Buenos Aires',
    año: '2022',
    locacionDetalle: 'Buenos Aires, Argentina',
    estado: 'en_construccion',
    tipo: 'residencial',
    descripcion: 'En el corazón de Villa Ortúzar, Los Incas Corner combina ubicación estratégica, buena conectividad y un entorno barrial en crecimiento, con excelente conexión y potencial a futuro.',
    imagenPrincipal: '/images/los-incas/render-11-v3-1.png',
    imagenes: [],
    heroImage: '/images/torre-incas-render-11.jpg',
    mainImage: '/images/los-incas/render-11-v3-1.png',
    portraitImage: '/images/otros/dsc05602-hdr-edit.jpg',
    gridImages: [
      '/images/los-incas/render-05-2.png',
      '/images/los-incas/render-04-3.jpg',
      '/images/los-incas/render-10-2.png',
      '/images/los-incas/render-17-2.png',
    ],
    galeriaImages: [
      '/images/los-incas/render-09-2.png',
      '/images/los-incas/render-07-2.png',
      '/images/los-incas/render-18-3.png',
      '/images/los-incas/render-02-2.png',
      '/images/los-incas/render-14-2.png',
      '/images/los-incas/render-19-3.png',
    ],
    specs: {
      edificio: 'Un edificio moderno con 20 exclusivas unidades y 16 departamentos adicionales.',
      unidades: 'Las superficies varían entre 45 m² y 161 m² totales, todas con parrilla individual y terminaciones de alta calidad. Local comercial en planta baja.',
      amenities: 'SUM con parrilla, piscina, solárium, ducha exterior, gimnasio con jacuzzi, espacio verde y sistema de seguridad con cámaras y tótem.',
    },
  },
  {
    slug: 'mater-dei',
    nombre: 'Mater Dei',
    ubicacion: 'Buenos Aires',
    año: '2023',
    locacionDetalle: 'Buenos Aires, Argentina',
    estado: 'entregado',
    tipo: 'comercial',
    descripcion: 'Espacio destinado a consultorios externos del Hospital Mater Dei, orientado a brindar atención médica en un entorno moderno y funcional.',
    imagenPrincipal: '/images/proyectos/mater-dei-card.jpg',
    imagenes: [],
    heroImage: '/images/proyectos/mater-dei-card.jpg',
    mainImage: '/images/otros/img-12.jpg',
    portraitImage: '/images/los-incas/render-16-3.jpg',
    gridImages: [
      '/images/otros/img-92.png',
      '/images/otros/img-43.png',
      '/images/los-incas/render-05-2.png',
      '/images/los-incas/render-10-2.png',
    ],
    galeriaImages: [
      '/images/los-incas/render-07-2.png',
      '/images/los-incas/render-09-2.png',
      '/images/los-incas/render-18-3.png',
      '/images/los-incas/render-02-2.png',
      '/images/los-incas/render-14-2.png',
      '/images/los-incas/render-19-3.png',
    ],
    specs: {
      edificio: '10 pisos de 100 m²',
      unidades: 'Destinadas a diversos consultorios médicos',
      amenities: '',
    },
  },
  {
    slug: 'arias-3020',
    nombre: 'Arias 3020',
    ubicacion: 'Saavedra, Buenos Aires',
    año: '2022',
    locacionDetalle: 'Buenos Aires, Argentina',
    estado: 'en_construccion',
    tipo: 'residencial',
    descripcion: 'Un proyecto ubicado en el barrio de Saavedra, que propone espacios versátiles para vivir o trabajar, en un contexto urbano que acompaña su crecimiento.',
    imagenPrincipal: '/images/proyectos/arias-3020-card.jpg',
    imagenes: [],
    heroImage: '/images/otros/img-15.jpg',
    mainImage: '/images/otros/img-14.png',
    portraitImage: '/images/los-incas/render-16-3.jpg',
    gridImages: [
      '/images/los-incas/render-05-2.png',
      '/images/los-incas/render-04-3.jpg',
      '/images/los-incas/render-10-2.png',
      '/images/los-incas/render-17-2.png',
    ],
    galeriaImages: [
      '/images/los-incas/render-09-2.png',
      '/images/los-incas/render-07-2.png',
      '/images/los-incas/render-18-3.png',
      '/images/los-incas/render-02-2.png',
      '/images/los-incas/render-14-2.png',
      '/images/los-incas/render-19-3.png',
    ],
    specs: {
      edificio: '12 pisos + Local comercial en PB | 60 unidades.\nSUPERFICIE TOTAL: 3.260 M2',
      unidades: 'Estudios, 1 y 2 ambientes con balcón | Apto profesional.\nDesde 29,53 m2 hasta 72,85 m2',
      amenities: 'SUM con parrilla, Terraza con solárium, Duchas verticales y Laundry.',
    },
  },
  {
    slug: 'arias-3023',
    nombre: 'Arias 3023',
    ubicacion: 'Saavedra, Buenos Aires',
    año: '2023',
    locacionDetalle: 'Buenos Aires, Argentina',
    estado: 'en_construccion',
    tipo: 'residencial',
    descripcion: 'Ubicado en el barrio de Saavedra, un barrio en constante crecimiento, verde y conectado. Ideal para vivir o invertir.',
    imagenPrincipal: '/images/proyectos/arias-3023-card.jpg',
    imagenes: [],
    heroImage: '/images/proyectos/arias-3023-card.jpg',
    mainImage: '/images/otros/img-15.jpg',
    portraitImage: '/images/los-incas/render-16-3.jpg',
    gridImages: [
      '/images/los-incas/render-05-2.png',
      '/images/los-incas/render-04-3.jpg',
      '/images/los-incas/render-10-2.png',
      '/images/los-incas/render-17-2.png',
    ],
    galeriaImages: [
      '/images/los-incas/render-09-2.png',
      '/images/los-incas/render-18-3.png',
      '/images/los-incas/render-05-3.png',
      '/images/los-incas/render-14-2.png',
      '/images/los-incas/render-10-2.png',
      '/images/los-incas/render-19-3.png',
    ],
    specs: {
      edificio: 'Edificio de viviendas apto profesional de 3000 m².',
      unidades: '25 unidades de 1, 2 y 3 ambientes, 6m² de patio privado con parrilla.',
      amenities: 'Piscina, solarium, SUM y seguridad 24hs y cocheras privadas.',
    },
  },
  {
    slug: 'oficinas-sucre',
    nombre: 'Oficinas Sucre',
    ubicacion: 'Belgrano, Buenos Aires',
    año: '2022',
    locacionDetalle: 'Buenos Aires, Argentina',
    estado: 'entregado',
    tipo: 'comercial',
    descripcion: 'Actualmente en funcionamiento y con actividad constante, Sucre 632 se posiciona como una opción sólida para usos profesionales y comerciales.',
    imagenPrincipal: '/images/proyectos/hero-bg.jpg',
    imagenes: [],
    heroImage: '/images/proyectos/hero-bg.jpg',
    mainImage: '/images/otros/img-12.jpg',
    portraitImage: '/images/los-incas/render-16-3.jpg',
    gridImages: [
      '/images/otros/img-92.png',
      '/images/otros/img-43.png',
      '/images/los-incas/render-05-2.png',
      '/images/los-incas/render-10-2.png',
    ],
    galeriaImages: [
      '/images/otros/img-43.png',
      '/images/los-incas/render-05-3.png',
      '/images/otros/img-92.png',
      '/images/los-incas/render-09-2.png',
      '/images/los-incas/render-18-3.png',
    ],
    specs: {
      edificio: '4 plantas de oficinas con local comercial en la planta baja.',
      unidades: 'Plantas de 300m2 cada una.\nLocal apto para gastronomía.',
      amenities: '',
    },
  },
]

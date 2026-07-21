const projects = [
  {
    title: 'CASA VA.G5',
    location: 'B° Villa Atilia – Lujan de Cuyo – Mendoza',
    desc: 'Superficie segunda etapa: 120m2 — Superficie total vivienda: 230m2. CRAU Arquitectura estuvo a cargo del proyecto y la ejecución de la segunda etapa de esta vivienda unifamiliar, construida con sistema en seco de estructura metálica y paneles de EPS. La intervención buscó mejorar la funcionalidad de la vivienda y potenciar su fachada principal, otorgándole una identidad contemporánea marcada por la horizontalidad, la pureza de sus líneas y el equilibrio de su composición.',
    images: ['/projects/1/1.webp', '/projects/1/2.webp', '/projects/1/3.webp'],
  },
  {
    title: 'CASA LB.2507',
    location: 'B° La Bastilla – El Challao – Mendoza',
    desc: 'Superficie total vivienda: 220m2. CRAU Arquitectura estuvo a cargo del proyecto y la ejecución de la obra llave en mano en un terreno de 280m2 se diseño un esquema en L buscando optimizar la superficie del patio conectando con la visual espectacular al pedemonte y cerro arco.',
    cardImg: 7,
    images: Array.from({ length: 9 }, (_, i) => `/projects/2/${i + 1}.webp`),
  },
  {
    title: 'CASA CLC.1016',
    location: 'B° Cerro de la Capilla – El Challao – Mendoza',
    desc: 'Superficie total vivienda: 205m2. CRAU Arquitectura desarrolló el proyecto y la ejecución llave en mano de esta vivienda unifamiliar sobre un lote de 500 m², concebida en dos etapas: un loft con quincho y piscina al fondo del terreno, y posteriormente la vivienda principal al frente, vinculadas por un patio central que integra ambos volúmenes y optimiza el asoleamiento. La propuesta se define por una arquitectura contemporánea de líneas puras, donde la estructura metálica negra, la madera de paraíso y la piedra natural se combinan para crear espacios cálidos, funcionales y luminosos, logrando una armoniosa conexión entre el interior y el exterior.',
    cardImg: 1,
    images: Array.from({ length: 8 }, (_, i) => `/projects/3/${i + 1}.webp`),
  },
  {
    title: 'CASA L4',
    location: 'Los Aromas Valle Escondido – Capital – Córdoba',
    desc: 'Superficie total: 170m2. CRAU Arquitectura desarrolló el proyecto municipal de esta vivienda unifamiliar implantada sobre un lote de esquina. Su esquema en "L" aprovecha los retiros reglamentarios para maximizar la superficie libre del patio, favoreciendo una conexión fluida entre los espacios interiores y el entorno. La propuesta se expresa mediante una arquitectura contemporánea y minimalista, donde la composición de líneas puras, volúmenes cuidadosamente articulados y aleros que unifican ambas fachadas dan origen a una identidad sobria, equilibrada y atemporal.',
    images: ['/projects/4/1.webp', '/projects/4/2.webp', '/projects/4/3.webp'],
  },
  {
    title: 'LOFT DE MONTAÑA VPS',
    location: 'Villa Parque Siquiman – Carlos Paz – Córdoba',
    desc: 'Superficie total: 60m2. CRAU Arquitectura desarrolló el proyecto y la construcción llave en mano de este loft de montaña, diseñado para integrarse de forma respetuosa al entorno natural y potenciar las privilegiadas vistas hacia el Lago San Roque. Elevada sobre el terreno, la vivienda mejora su eficiencia energética, optimiza el asoleamiento y establece una conexión permanente con el paisaje. Construida mediante sistema en seco y revestida en chapa, su arquitectura contemporánea le otorga una identidad única y un bajo impacto sobre el terreno, comunica calidez, modernidad y conexión con la naturaleza sin limitarse al concepto clásico de una cabaña de madera.',
    cardImg: 5,
    images: Array.from({ length: 9 }, (_, i) => `/projects/5/${i + 1}.webp`),
  },
  {
    title: 'DÚPLEX SOLARES',
    location: 'B° Solares de Manantiales – Capital – Córdoba',
    desc: 'Superficie total: 292m2. CRAU Arquitectura desarrolló el proyecto y la ejecución de obra, Llave en Mano, de este conjunto de dos unidades funcionales tipo dúplex, diseñadas para optimizar la orientación norte de los espacios sociales y favorecer la relación con el jardín. La propuesta integra ambas viviendas en una única composición arquitectónica, donde las líneas puras, los volúmenes equilibrados y un lenguaje contemporáneo construyen una identidad unificada de su fachada.',
    images: Array.from({ length: 7 }, (_, i) => `/projects/6/${i + 1}.webp`),
  },
  {
    title: 'EDIFICIO CARDENAL1',
    location: 'Lomas de San Martin – Capital – Córdoba',
    desc: 'Superficie total: 800m2. CRAU Arquitectura desarrolló el proyecto y la construcción llave en mano de este desarrollo inmobiliario de propiedad horizontal. La arquitectura se define por una fachada de balcones corridos que potencia la orientación oeste, integrando espacios de expansión concebidos para disfrutar de las vistas hacia las Sierras de Córdoba. La organización lineal de las unidades favorece la ventilación cruzada y orienta los sectores privados hacia el corazón de manzana, logrando viviendas luminosas, confortables y de alta calidad espacial.',
    cardImg: 0,
    images: Array.from({ length: 15 }, (_, i) => `/projects/7/${i + 1}.webp`),
  },
  {
    title: 'VIVIENDA TA3',
    location: 'Terruñoz de Araoz III – Lujan de Cuyo – Mendoza',
    desc: 'Superficie total: 210m2. CRAU Arquitectura desarrolló el proyecto municipal de esta vivienda unifamiliar ubicada en Luján de Cuyo. Su arquitectura contemporánea combina materiales nobles y una cubierta de teja símil colonial, logrando una imagen residencial cálida y atemporal. La propuesta se organiza principalmente en planta baja, con un ingreso de doble altura que aporta amplitud y jerarquía al espacio, mientras que un entrepiso destinado a escritorio enmarca las privilegiadas vistas hacia la Cordillera de los Andes.',
    images: ['/projects/8/1.webp', '/projects/8/2.webp', '/projects/8/3.webp', '/projects/8/4.webp', '/projects/8/5.webp'],
  },
]

export default projects

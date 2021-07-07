export default {
  global: {
    componenteFormativo: 'Plan de medios',
    descripcionCurso:
      'El plan de medios es un derrotero que permite generar interacción entre una marca y su mercado objetivo. Además, tiene una estructura única para el desarrollo coherente de la campaña publicitaria, incluyendo variables como frecuencia, alcance e intensidad, indispensables para llevar el mensaje de la forma más eficiente al mercado objetivo.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Medición de audiencias',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Fuentes de medición de audiencias',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Plan de medios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Elementos básicos de un plan de medios',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Variables para el análisis de medios',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Variables para el análisis de campañas',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Variables para el análisis de medios digitales',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Cronogramas de medios',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Presupuesto',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Merchandising – Promoción en el punto de venta',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Características',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Objetivos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Tipos de promociones de ventas',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Técnicas de merchandising',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Merchandising y cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Fases en el proceso de decisión de compra',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Diseño de Material P.O.P.',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Póster de precios',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Hablador (sapito)',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Adhesivo de piso (vinilo floor graphic)',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      //{
      //  nombreRuta: 'complementario',
      //  icono: 'far fa-folder-open',
      //  titulo: 'Material complementario',
      //},
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Manuel Augusto Arias López',
        cargo: 'Instructor – Experto temático',
        centro: 'Centro de Comercio y Servicios Regional Quindío',
      },
      {
        nombre: 'Andrea Velásquez Torres',
        cargo: 'Apoyo experto temático',
        centro: 'Centro de Comercio y Servicios Regional Quindío',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Vilma Perilla Méndez',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de Gestión Industrial Regional Distrito Capital',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Correctora de estilo',
        centro:
          'Centro para la Industria y la Comunicación Gráfica Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Sandra Carolina Durán López',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Daniela Muñoz Bedoya',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo Lopez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo front-end',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia: 'ACIM Colombia. (2020). Estudios ACIM.',
      link: 'http://www.acimcolombia.com/estudios-acim/',
    },
    {
      referencia:
        'Alard, J. y Monford, A. (2017). Plan de comunicación on y off en la práctica. ESIC Editorial.',
    },
    {
      referencia:
        'Ávila, B. y Llamazares, F. (2018). Medición de audiencias. TOM micro. Utilidades en la elaboración de un plan de medios. ESIC Editorial.',
    },
    {
      referencia:
        'Ayestarán, R., Rangel, C. y Sebastián, A. (2012). Planificación estratégica y gestión de la publicidad. ESIC Editorial.',
    },
    {
      referencia:
        'Blattberg, R., y Neslin, S. (1989). Sales promotion: The long and the short of it. Marketing Letters. (1), 81-97.',
    },
    {
      referencia: 'Educalingo. (2020). Expositor.',
      link: 'https://educalingo.com/es/dic-es/expositor',
    },
    {
      referencia: 'Guridi, M. (2016). Distribución comercial. ITESM.',
    },
    {
      referencia:
        'Hervás, A. M., Campo, A. y Revilla, M. T. (2013). Animación del punto de venta. McGraw-Hill.',
    },
    {
      referencia: 'Informa BTL. (2015). ¿Qué es el punto de venta?',
      link:
        'https://www.informabtl.com/que-es-el-punto-de-venta/#:~:text=Por%20definici%C3%B3n%20el%20Punto%20de,el%20PDV%20va%20m%C3%A1s%20all%C3%A1',
    },
    {
      referencia:
        'Kotler, P. (2000). Dirección de marketing. Pearson Educación.',
    },
    {
      referencia:
        'Marketing XXI. (2020). Merchandising y publicidad en el lugar de venta.',
      link: 'https://www.marketing-xxi.com/merchandising-y-plv-118.htm',
    },
    {
      referencia: 'Muñiz. M. (2012). Promociones en punto de venta. Pirámide.',
    },
    {
      referencia: 'Pranapublicits. (2020). Display.',
      link:
        'http://www.pranapublicist.com/p-o-p/display/#:~:text=Display%20%2D%20PranaPublicist&text=Son%20objetos%20tridimensionales%20que%20permiten,volumen%2C%20peso%2C%20entre%20otros.&text=Todo%20de%20acuerdo%20a%20los%20requerimientos%20y%20expectativas%20del%20cliente',
    },
    {
      referencia:
        'Sánchez, G. R. (2017). Las estrategias del trade marketing en el punto de venta y su relación con la compra por impulso de los clientes buyer del Hipermercado Plaza Vea del Distrito de Tacna 2017.',
      link:
        'http://repositorio.upt.edu.pe/bitstream/UPT/320/1/Sanchez-Yufra-Gerson-Rodrigo.pdf',
    },
    {
      referencia:
        'Santesmases, M. (2007). Marketing: conceptos y estrategias. Pirámide.',
    },
    {
      referencia:
        'Soria, M. (2015). Plan de medios de comunicación e internet. Editorial CEP.',
    },
    {
      referencia:
        'Tellis, G. (2002). Estrategias de publicidad y promoción. Pearson Educación.',
    },
  ],
  glosario: [
    {
      termino: 'Bots',
      significado:
        'software que genera tareas automáticas a través de internet.',
    },
    {
      termino: 'Cobertura',
      significado:
        'término utilizado para medir la audiencia. Puede definirse a partir del porcentaje de personas alcanzadas por el mensaje publicitario a través de un medio de comunicación o media mix a partir de un número de consumidores seleccionados. También puede expresarse en términos absolutos.',
    },
    {
      termino: 'Cookies',
      significado:
        'archivo presente en cualquier sitio de internet y que almacena datos sobre las preferencias y pautas de navegación de los usuarios que acceden a páginas web, redes sociales, blogs, y cualquier sitio virtual integrado en la red.',
    },
    {
      termino: 'Consumidor',
      significado:
        'es a quien el <i>marketing</i> dirige sus acciones, sea una persona u organización, con el fin de orientar o incitar a la compra y, para ello, se debe estudiar el proceso de toma de decisiones de quien va a adquirir el producto o servicio.',
    },
    {
      termino: 'Displays',
      significado:
        '“son objetos tridimensionales que permiten captar la atención del consumidor o cliente, aplicando a objetos bidimensionales atributos tridimensionales como el volumen, peso, entre otros” (Pranapublicist, 2020).',
    },
    {
      termino: 'E-mail marketing',
      significado:
        'consiste en utilizar el correo electrónico para llevar a cabo acciones comerciales mediante el envío masivo de información.',
    },
    {
      termino: 'Expositores',
      significado:
        '“exhibidor en América Latina o mueble expositor, es un mueble en el que se exhiben productos destinados a la venta o material promocional como folletos, catálogos o pequeñas revistas disponibles para el cliente” (Educalingo, 2020).',
    },
    {
      termino: 'Impacto publicitario',
      significado:
        'influencia que ejerce un mensaje publicitario sobre el público objetivo, a partir de la suma de todas las exposiciones o contactos con el anuncio que ha tenido el grupo de consumidores al que va dirigido.',
    },
    {
      termino: 'Merchandising',
      significado:
        '“conjunto de técnicas que se aplican en el punto de venta para motivar el acto de compra de la manera más rentable, tanto para el fabricante como para el distribuidor, satisfaciendo al mismo tiempo las necesidades del consumidor. Está totalmente comprobada la influencia que tiene en la venta que el producto esté colocado en uno u otro espacio. Si el producto no está colocado en el lugar correcto decrece notablemente su ratio de ventas” (Marketing XXI, 2020).',
    },
    {
      termino: 'Punto de venta',
      significado:
        '“por definición el Punto de Venta o POS (Point of Sale) es el punto de contacto del consumidor con las marcas o productos para su compra. Es el lugar idóneo donde las marcas pueden posicionarse, sin embargo por la relevancia que ha tomado, el PDV va más allá” (Informa BTL, 2015).',
    },
    {
      termino: 'Usuario',
      significado:
        'persona que utiliza de forma habitual internet para sus rutinas diarias. Para las marcas determinados perfiles de usuario se pueden convertir en su público objetivo.',
    },
  ],
  complementario: [],
}

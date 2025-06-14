export default {
  global: {
    componenteFormativo:
      'Tecnologías de la Información y la Comunicación (TIC)',
    descripcionCurso:
      'La sociedad ha avanzado a pasos agigantados, en la tecnología, en la ciencia y en muchas otras áreas del conocimiento. La informática se encarga del estudio del <em>hardware</em>, las redes de datos y el <em>software</em> necesario, para tratar la información de manera automática, lo cual se convierte en factor primordial a la hora de gestionar la información y datos en formato digital.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: '<em>Software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Clasificación',
            hash: 't_1_1',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Internet',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Ofimática',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Introducción a la ofimática',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Funcionalidad de los sistemas operativos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Herramientas ofimáticas',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Motores de búsqueda, páginas sociales',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Herramientas de trabajo colaborativo',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Evaluación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Mejora continua',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_01_0000000_DU.pdf',
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
  complementario: [
    {
      tema:
        ' 3.3. Herramientas ofimáticas: procesador de texto, hoja de cálculo, presentación de diapositivas, gestores de bases de datos',
      referencia:
        'Escuela al revés UNLINE, (2000). Análisis de datos para la toma de decisiones con Excel. [Video]. YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Ds-cTahAN2A ',
    },
    {
      tema:
        '3.3. Herramientas ofimáticas: procesador de texto, hoja de cálculo, presentación de diapositivas, gestores de bases de datos',
      referencia:
        'Learnit Training. (2023). Tutorial para principiantes de Word 2021. [Video]. YouTube.',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=7hPcdNAS0v4',
    },
    {
      tema:
        '3.3. Herramientas ofimáticas: procesador de texto, hoja de cálculo, presentación de diapositivas, gestores de bases de datos',
      referencia:
        'Learnit Training. (2023). Tutorial para principiantes de Excel 2021. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=bF31VEFvMmY ',
    },
    {
      tema:
        '3.3. Herramientas ofimáticas: procesador de texto, hoja de cálculo, presentación de diapositivas, gestores de bases de datos',
      referencia:
        'Learnit Training. (2023). Tutorial de PowerPoint 2021 para principiantes. [Video]. YouTube.',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=VODDnOHko7o',
    },
    {
      tema: '3.5. Herramientas de trabajo colaborativo',
      referencia:
        'EducaTIC. (2022). Tutorial Trello actualizado 2022. [Video]. YouTube.',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=sZd7uUPigk8',
    },
    {
      tema: '5. Mejora continua',
      referencia: 'CertCampus. (2017). ITIL Ciclo de vida. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qLSk1Ctl51I',
    },
  ],
  glosario: [
    {
      termino: 'CAD',
      significado:
        'sigla referente al Diseño Asistido por Computador. Son herramientas para computadores que permiten crear, modificar, analizar y optimizar diseños.',
    },
    {
      termino: 'CPU',
      significado:
        'sigla de la expresión inglesa Central Processing Unit (unidad central de proceso), que es la parte de una computadora en la que se encuentran los elementos que sirven para procesar datos.',
    },
    {
      termino: '<em>Hardware</em>',
      significado:
        'conjunto de conocimientos científicos y técnicas que hacen posible el tratamiento automático de la información, por medio de computadoras.',
    },
    {
      termino: 'Informática',
      significado:
        'conjunto de conocimientos científicos y técnicas que hacen posible el tratamiento automático de la información por medio de computadoras.',
    },
    {
      termino: 'ITIL',
      significado:
        'sigla referente a la Information Technology Infrastructure Library. Corresponde a una metodología de gestión que propone una serie de prácticas estandarizadas, que ayudan a mejorar la prestación de un servicio, reorganizando la manera que tiene la empresa de trabajar y en particular, la del departamento de tecnologías de información.',
    },
    {
      termino: 'LibreOffice',
      significado:
        'es un paquete de <em>software</em> de oficina libre y de código abierto desarrollado por <em>The Document Foundation</em>.',
    },
    {
      termino: 'Microsoft',
      significado:
        'es una compañía tecnológica multinacional con sede en Redmond, Washington, EE.UU. Microsoft es el acrónimo de <em>microcomputer y software</em>.',
    },
    {
      termino: 'Ofimática',
      significado:
        'automatización, mediante sistemas electrónicos, de las comunicaciones y procesos administrativos en las oficinas.',
    },
    {
      termino: 'OpenOffice',
      significado:
        'es una suite ofimática libre, de código abierto, que incluye procesador de textos, hoja de cálculo, presentaciones, herramientas para el dibujo vectorial y base de datos.',
    },
    {
      termino: 'Periférico',
      significado:
        'aparato auxiliar e independiente conectado a la unidad central de una computadora.',
    },
    {
      termino: 'RAM',
      significado:
        'sigla referente a Random Access Memory (memoria de acceso aleatorio). Memoria principal de la computadora, donde residen programas y datos, sobre la que se pueden efectuar operaciones de lectura y escritura.',
    },
    {
      termino: 'Sistema operativo',
      significado:
        'el conjunto de programas informáticos que permite la administración eficaz de los recursos de una computadora, es conocido como sistema operativo o <em>software</em> de sistema. Estos programas, comienzan a trabajar apenas se enciende el equipo, ya que gestionan el <em>hardware</em> desde los niveles más básicos y permiten además la interacción con el usuario.',
    },
    {
      termino: '<em>Software</em>',
      significado:
        'conjunto de programas, instrucciones y reglas informáticas para ejecutar ciertas tareas en una computadora.',
    },
    {
      termino: 'TIC',
      significado:
        'son el conjunto de tecnologías desarrolladas en la actualidad para una información y comunicación más eficiente, las cuales han modificado tanto la forma de acceder al conocimiento, como las relaciones humanas.',
    },
    {
      termino: 'WWW',
      significado:
        'son las iniciales que identifican a la expresión inglesa World Wide Web, el sistema de documentos de hipertexto que se encuentran enlazados entre sí y a los que se accede por medio de internet. A través de un <em>software</em> conocido como navegador, los usuarios pueden visualizar diversos sitios web (los cuales contienen texto, imágenes, videos y otros contenidos multimedia) y navegar, a través de ellos mediante los hipervínculos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Andrade, A. M., Del Río, C. A. & Alvear, D. L. (2019). Estudio de Tiempos y Movimientos para Incrementar la Eficiencia en una Empresa de Producción de Calzado. A Study on Time and Motion to Increase the Efficiency of a Shoe Manufacturing Company. Información Tecnológica, 30(3), 83–94.',
      link: 'https://doi.org/10.4067/S0718-07642019000300083',
    },
    {
      referencia:
        'Carmona Romera, G. (2017). Sistema operativo, búsqueda de información: Internet - Intranet y correo electrónico. IC Editorial.',
      link: '',
    },
    {
      referencia:
        'Eíto Brun, R. (2014). Gestión de contenidos (17 edición). Universitat Oberta de Catalunya. Editorial UOC.',
      link: '',
    },
    {
      referencia:
        'Española, R. A. & Madrid, E. (1970). Diccionario de la lengua española (19 edición). Espasa-Calpe.',
      link: '',
    },
    {
      referencia:
        'Fresno Chávez, C. (2018). ¿Cómo funciona Internet? El Cid Editor.',
      link: '',
    },
    {
      referencia:
        'Gaskin, S. (2014). GO! Microsoft Word 2013 (1 edición). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Gómez de Silva Garza, A. & Ania Briseño, I. (2008). <em>Software</em> (pp. 23–44). <em>Cengage Learning</em>.',
      link: '',
    },
    {
      referencia:
        'Ibarra Sixto, J. I. (2013). Manual sistema operativo, búsqueda de la información: Internet/intranet y correo electrónico. Editorial CEP.',
      link: '',
    },
    {
      referencia:
        'Ladrón de Guevara, M. A. (2018). Sistema operativo, búsqueda de la información: internet/intranet y correo electrónico UF0319 (2 edición). Editorial Tutor Formación.',
      link: '',
    },
    {
      referencia:
        'Mamani, O., Arohuanca, M., Mamani, W., Quiñonez, C., Muñoz, M. & Pocohualca, N. (s.f.). Auditoría informática. In Informática (pp. 1–6).',
      link: '',
    },
    {
      referencia:
        'Naranjo González, M. R. (2010). Manual: ofimática básica para formación continua. Formación para el empleo. Editorial CEP.',
      link: '',
    },
    {
      referencia:
        'Servicetonic. (2019). 8. ITIL, Mejora continua del servicio.',
      link:
        'https://www.servicetonic.com/es/itil/8-itil-mejora-continua-del-servicio',
    },
    {
      referencia:
        'Valentín López, G.M. (2015). Ofimática. Editorial CEP, S. L.',
      link: '',
    },
    {
      referencia:
        'Vergara, P. (2005). Optimización de Procesos Industriales y Control de Calidad. Ediciones Universidad Tecnológica.',
      link: '',
    },
    {
      referencia:
        'Grupo Bancolombia. (2018). 10 herramientas de trabajo colaborativo para tu empresa.',
      link:
        'https://www.bancolombia.com/negocios/actualizate/tendencias/herramientas-trabajo-colaborativo ',
    },
    {
      referencia:
        'Fernández Muerza, Á. (2022). Influencia y evolución de Internet en la comunicación de la ciencia y sus fuentes. Fonseca, Journal of Communication, (25), 5–22.',
      link:
        'https://revistas.usal.es/cuatro/index.php/2172-9077/article/view/29539/28885',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ramiro E. Barrientos Gómez',
          cargo: 'Experto temático',
          centro:
            'Regional Antioquia - Centro de Formación en Diseño, Confección y Moda',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>Fullstack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },

        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador <em>Fullstack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}

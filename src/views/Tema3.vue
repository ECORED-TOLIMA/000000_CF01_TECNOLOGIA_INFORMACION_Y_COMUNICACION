<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Ofimática
    
    .row.justify-content-center.align-items-centerr.mb-4
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img0.png', alt='Texto que describa la imagen')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p La ofimática (oficina + informática), es el conjunto de herramientas, programas y técnicas informáticas utilizadas para facilitar, automatizar y optimizar las tareas de oficina. Su objetivo principal es mejorar la productividad en el manejo de la información.
        p Dentro de sus componentes principales se encuentran:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.movil(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img1_1.svg', alt='Texto que describa la imagen')
          
      .col-lg-10.desktop(data-aos="zoom-in")
        ImagenInfografica.color-acento-botones.mb-4
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/img1.svg', alt='Texto que describa la imagen')              
          .tarjeta.color-primario.tarjeta--BG05.p-3(x="16%" y="18%" numero="+")
            p Permiten redactar, editar y dar formato a documentos (por ejemplo, Microsoft Word, Google Docs).              
          .tarjeta.color-primario.tarjeta--BG05.p-3(x="83%" y="45%" numero="+")
            p Se usan para organizar datos, realizar cálculos y análisis (por ejemplo, Microsoft Excel, Google Sheets).              
          .tarjeta.color-primario.tarjeta--BG05.p-3(x="76%" y="18%" numero="+")
            p Ayudan a crear diapositivas para exposiciones (por ejemplo, PowerPoint, Google Slides).              
          .tarjeta.color-primario.tarjeta--BG05.p-3(x="10%" y="45%" numero="+")
            p Sirven para almacenar, consultar y administrar grandes volúmenes de información (por ejemplo, Microsoft Access).             
          .tarjeta.color-primario.tarjeta--BG05.p-3(x="92%" y="72%" numero="+")
            p Para la comunicación y la organización de tareas y reuniones (como Outlook o Gmail).            
          .tarjeta.color-primario.tarjeta--BG05.p-3(x="8%" y="72%" numero="+")
            p Permiten trabajar en equipo en tiempo real (por ejemplo, Google Workspace o Microsoft 365).
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1	Introducción a la ofimática
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-6.mb-md-4
        figure
          img(src='@/assets/curso/temas/tema3/img2.svg', alt='Texto que describa la imagen') 
      .col-lg-7
        .cajon-b.abajo-derecha.color-primario.p-3.mb-5
          p En la oficina es necesario agilizar y automatizar los procesos, con el objetivo de mejorar la productividad y con ello, la competitividad. Por esta razón, la ofimática se convierte en factor primordial para la gestión de la información y la reducción de tiempos de respuesta en los procesos que antes se realizaban de manera manual.
          p Es importante conocer las herramientas informáticas más usadas en la oficina, tanto las de uso bajo licencia, como el caso de Office de la empresa Microsoft, como las de uso libre, como el caso de LibreOffice, OpenOffice, etc. 

    .tarjeta.color-adicional-2.BG01.p-3.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema3/img3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-sm-0.mb-4
              p Para conocer más sobre la temática, se sugiere consultar el libro: Valentín López, G. M. (2015). Ofimática. Editorial CEP. En dicho libro, acceder a la página 32.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2	Funcionalidad de los sistemas operativos
    p.mb-4 Los sistemas operativos son el corazón de los dispositivos informáticos; es decir, “realizan la gestión del hardware del equipo informático y la supervisión de la ejecución de los programas.” (Valentín, 2015, p. 32). Además, estos cumplen diferentes funciones dentro del equipo, como son:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .mb-4.d-flex(data-aos="fade-right")
          .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #D1FFF8; border-radius: 15px;")
            img(src='@/assets/curso/temas/tema3/icono.svg' style="max-width: 32px; margin-left: -16px;")
            h3.col.ps-3.mb-0 A.	Gestionar los recursos del ordenador
    
    .row.mb-5
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema3/img4.svg' alt="Imagen decorativa")
        h5.text-center La CPU (microprocesador) 
        p.text-center Maneja los programas en ejecución y las instrucciones a ejecutar.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema3/img5.svg' alt="Imagen decorativa")
        h5.text-center La memoria principal (RAM)
        p.text-center De lectura y escritura. Gestiona su ocupación y asignación para cada proceso.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema3/img6.svg' alt="Imagen decorativa")
        h5.text-center Distintos dispositivos de almacenamiento secundario
        p.text-center Discos duros, discos ópticos, etc. Esto implica el control de los archivos en estos dispositivos.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema3/img7.svg' alt="Imagen decorativa")
        h5.text-center Los demás periféricos del sistema
        p.text-center Tanto de entrada (teclado, ratón, etc.) como de salida (monitor, impresoras, etc.), así como los sistemas de telecomunicaciones.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .mb-4.d-flex(data-aos="fade-right")
          .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #D1FFF8; border-radius: 15px;")
            img(src='@/assets/curso/temas/tema3/icono.svg' style="max-width: 32px; margin-left: -16px;")
            h3.col.ps-3.mb-0 B.	Gestionar los procesos en ejecución
    p.mb-4 Es decir, los distintos programas y tareas que se encuentran en proceso. El sistema operativo es el responsable de crear, mantener, detener temporalmente o finalizar esos procesos, asignando los recursos necesarios de CPU, RAM, etc. También debe detectar y controlar los posibles conflictos, por ejemplo, si dos programas intentan escribir en la misma posición de memoria. Además, el sistema operativo debe ser capaz también de planificar las tareas correctamente, por ejemplo, asignando más recursos a los programas que ralenticen el sistema.

    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .mb-4.d-flex(data-aos="fade-right")
          .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #D1FFF8; border-radius: 15px;")
            img(src='@/assets/curso/temas/tema3/icono.svg' style="max-width: 32px; margin-left: -16px;")
            h3.col.ps-3.mb-0 C.	Gestionar la seguridad del sistema 
    p.mb-4 Controlar la seguridad del sistema En todo momento, comprobando que todos los sistemas funcionan correctamente. (Ibarra, 2013, pp. 26-27).

    .tarjeta.color-adicional-2.BG01.p-3.mb-3(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema3/img8.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-sm-0.mb-4
              p Para conocer más sobre la temática, se sugiere consultar el libro: Valentín López, G. M. (2015). Ofimática. Editorial CEP. En dicho libro, acceder a la página 33.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3	Herramientas ofimáticas: procesador de texto, hoja de cálculo, presentación de diapositivas, gestores de bases de datos
    
    .bloque-texto-g.bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img9.png')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Existen herramientas ofimáticas como procesadores de texto, hojas de cálculo, presentaciones ejecutivas y gestores de base de datos muy utilizadas por las empresas de la confección, para optimizar la gestión de la información y los datos mejorando la productividad. Para su estudio se recomienda la metodología de trabajo de la autora María Remedios Naranjo González, enfocada en procesos de trabajo con énfasis en la formación para el empleo.

    .tarjeta.color-adicional-2.BG01.p-3.mb-4(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema3/img10.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-sm-0.mb-4
              p Para conocer más sobre la temática, se sugiere consultar el libro completo: Naranjo González, M. R. (2010). Manual: ofimática básica para formación continua. Formación para el empleo. Editorial CEP.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p Nota: se sugiere la consulta de los materiales complementarios sobre el uso de los softwares Microsoft Office (como procesador de texto), Microsoft Excel (hojas de cálculo) y Microsoft PowerPoint (para la presentación con diapositivas).
    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4	Motores de búsqueda, páginas sociales
    p.mb-4 Desde los años 90, cuando se popularizó el internet, nacieron los motores de búsqueda o buscadores, programas informáticos para la búsqueda de información en el ciberespacio. Entre los buscadores más populares se encuentran: 

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-3
            figure
              img(src='@/assets/curso/temas/tema3/img12.svg', alt='Texto que describa la imagen')
        h4.text-center Netscape
        p.text-center Con aparición en el año 1994.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-3
            figure
              img(src='@/assets/curso/temas/tema3/img13.svg', alt='Texto que describa la imagen')
        h2.text-center Google
        p.text-center Aparece en el año 1998, convirtiéndose en uno de los más populares.
    p Asociado a estos cambios, entre los años 2002 y 2004, surgen las redes sociales o también conocidas como páginas sociales, que permiten el desarrollo del concepto de aldea virtual. Entre las redes sociales más conocidas, a lo largo de la historia, se tienen My Space, Friendster, Facebook y, hoy en día, Instagram.
    p.mb-4 Para conocer más sobre la temática, se sugiere consultar los siguientes libros: 

    .tarjeta.color-adicional-2.BG01.p-3.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema3/img14.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-sm-0.mb-4
              p Ladrón de Guevara, M. A. (2018). Sistema operativo, búsqueda de la información: internet/intranet y correo electrónico UF0319 (2a. ed.). Editorial Tutor Formación. Consultar las páginas 101-106.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    .tarjeta.color-adicional-2.BG01.p-3.mb-4(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema3/img15.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-sm-0.mb-4
              p Fresno Chávez, C. (2018). ¿Cómo funciona Internet?. El Cid Editor. Consultar las páginas 33-35.

            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5	Herramientas de trabajo colaborativo
    p.mb-4 Con el avance de las Tecnologías de la Información y la Comunicación (TIC), han aparecido una gran cantidad de herramientas en la web, que se pueden clasificar en diferentes ejes temáticos, tales como:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.tarjeta--BG06.p-4
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema3/img16.svg', alt='Texto que describa la imagen')

          .col-lg-6
            ul.lista-ul
              li
                i.fas.fa-angle-right
                | Herramientas para presentaciones.
              li
                i.fas.fa-angle-right
                | Herramientas para gestión de videos.
              li
                i.fas.fa-angle-right
                | Herramientas para compartir y comunicar.
              li
                i.fas.fa-angle-right
                | Herramientas para organizar ideas, como mapas conceptuales y mapas mentales.
              li
                i.fas.fa-angle-right
                | Herramientas para evaluaciones en línea, entre otras. 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.order-lg-1.order-2
        p Una de estas herramientas, que aporta significativamente al desarrollo de actividades grupales en el ciberespacio, es la de trabajo colaborativo, por lo cual se presenta su definición y funciones principales.
        p Las herramientas de trabajo colaborativo son soluciones informáticas para apoyar el trabajo en grupo de varios usuarios. Incorporan funciones para publicar documentos en espacios compartidos, enviar correos electrónicos, participar en foros de discusión, mantener listas de contactos, agendas compartidas, etc. Las herramientas de colaboración (inicialmente conocidas como groupware) permiten la gestión de documentos y contenidos circunscritos al grupo de usuarios que necesitan compartir esa información. (Eíto-Brun, 2014, p. 49).
      .col-lg-5.col-md-10.mb-4.order-lg-2.order-1
        figure
          img(src='@/assets/curso/temas/tema3/img17.png', alt='Texto que describa la imagen')
    .tarjeta.color-adicional-2.BG01.p-3.mb-4(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema3/img18.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-sm-0.mb-4
              p Se sugiere consultar este sitio web para obtener más información sobre el tema.
              p Grupo Bancolombia. (2018). 10 herramientas de trabajo colaborativo para tu empresa.

            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p Nota: en el material complementario, encontrará más información acerca de la herramienta Trello, como ejemplo adicional para realizar trabajo colaborativo.
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

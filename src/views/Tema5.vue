<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Mejora continua
    
    .row.justify-content-center.align-items-centerr.mb-4
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema5/img1.png', alt='Texto que describa la imagen')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p La mejora continua en la empresa, es una técnica que se utiliza para la gestión de procesos de negocio, centrados en la continua necesidad de revisar los procesos en busca de posibles problemas, como obstáculos y retrasos, para resolverlos y lograr una mayor eficiencia y productividad de las operaciones.
    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .mb-4.d-flex(data-aos="fade-right")
          .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #D1FFF8; border-radius: 15px;")
            img(src='@/assets/curso/temas/tema3/icono.svg' style="max-width: 32px; margin-left: -16px;")
            h3.col.ps-3.mb-0 Optimización
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema5/img2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Después de haber realizado la evaluación de los procesos que se han trabajado, se deben tomar decisiones que serán cruciales para la organización; es decir, buscar las mejores opciones para lograr la mejora continua. Para apoyar esta idea, se debe tener en cuenta la afirmación de optimización en procesos, mencionada por Vergara, 2005, p. 202, “Permite estudiar la forma de reducir los costos en el proceso de fabricación, mejorar la calidad del producto, minimizar la variabilidad del proceso, ajustar la respuesta de la variable en estudio lo más cerca de un valor objetivo o a una norma, obtener productos más robustos, etc.”.

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .mb-4.d-flex(data-aos="fade-right")
          .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #D1FFF8; border-radius: 15px;")
            img(src='@/assets/curso/temas/tema3/icono.svg' style="max-width: 32px; margin-left: -16px;")
            h3.col.ps-3.mb-0 Mejora del producto
    p Desde el punto de vista de la informática, la calidad es súper importante y mucho más cuando después de haber presentado la evaluación, se encontraron hallazgos negativos. Por tal motivo la optimización apunta a la mejora del producto para poder cumplir con todas las expectativas del mismo. “Esta es la fase en la que se determinan e implantan las soluciones para que el proceso alcance los resultados esperados” (Vergara, 2005, p. 136).
    p.mb-4 Para el proceso de mejora del producto, es importante tener en cuenta la norma ITIL (Information Technology Infrastructure Library), la cual habla de los objetivos para lograr la mejora continua, ya sea de productos o de servicios y busca como aspectos importantes:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-6.mb-4
        figure
          img(src='@/assets/curso/temas/tema5/img3.svg', alt='Texto que describa la imagen')

      .col-lg-5
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span.text-black 1
            | Mejorar sus servicios.
          li 
            .lista-ol--cuadro__vineta
              span.text-black 2
            | Reducir costos.
          li 
            .lista-ol--cuadro__vineta
              span.text-black 3
            | Una mayor satisfacción para el cliente.
          li 
            .lista-ol--cuadro__vineta
              span.text-black 4
            | Una mayor productividad.
          li 
            .lista-ol--cuadro__vineta
              span.text-black 5
            | Mejorar las habilidades y la experiencia.
          li 
            .lista-ol--cuadro__vineta
              span.text-black 6
            | Mejorar la prestación de servicios de terceros.
    p.mb-4 La norma ITIL, menciona los siguientes pasos que se deben tener en cuenta para su aplicación, los cuales son citados por Servicetonic (2019):

    .tarjeta--BG03.p-4.px-lg-5.mb-4
      .tarjeta.tarjeta--BG04.p-4.mb-5
        PasosB.color-acento-botones
          .row(titulo="")
            .col-md-6.mb-4.mb-md-0
              h4 Identificar la estrategia de mejora
              p Antes de iniciar cualquier proceso de mejora, se debe tener claro qué es lo que se desea conseguir. Para eso pueden ser útiles las siguientes preguntas ¿Qué necesita el negocio? ¿Cómo los servicios TI pueden cubrir esas necesidades?
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema5/img4.png', alt='Texto que describa la imagen')
          .row(titulo="")
            .col-md-6.mb-4.mb-md-0
              h4 Definir lo que se ha de medir
              p Aquí se debe preguntar ¿Qué se debería medir? ¿Qué se puede medir?, y llevar a cabo un análisis de las carencias que han de conducir a un plan de métricas.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema5/img5.png', alt='Texto que describa la imagen')
          .row(titulo="")
            .col-md-6.mb-4.mb-md-0
              h4 Obtener la información
              p Normalmente la información se recoge en la fase de operación del servicio, mediante los elementos de monitorización definidos en la fase de diseño del servicio.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema5/img6.png', alt='Texto que describa la imagen')
          .row(titulo="")
            .col-md-6.mb-4.mb-md-0
              h4 Procesar la información
              p La información recogida en la monitorización, se procesa para obtener los indicadores definidos.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema5/img7.png', alt='Texto que describa la imagen')
          .row(titulo="")
            .col-md-6.mb-4.mb-md-0
              h4 Analizar la información
              p Se valida que el valor de los indicadores es el adecuado, para la consecución de los objetivos. Se estudian tendencias.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema5/img8.png', alt='Texto que describa la imagen')
          .row(titulo="")
            .col-md-6.mb-4.mb-md-0
              h4 Presentar y utilizar la información
              p La información se ha de formatear y comunicar a todos los actores clave, de forma que la puedan entender y les sirva para la toma de decisiones.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema5/img9.png', alt='Texto que describa la imagen')
          .row(titulo="")
            .col-md-6.mb-4.mb-md-0
              h4 Implementar la mejora
              p La información obtenida se usa para definir qué se ha de corregir, optimizar o mejorar. Es decir, se establecen y priorizan las mejoras a implementar.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema5/img10.png', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4
          .row.justify-content-center
            .col-lg-1.col-md-2.col-sm-6.mb-md-4.mb-sm-4
              figure
                img(src='@/assets/curso/temas/tema3/img19.svg', alt='Texto que describa la imagen')
            .col-lg-11
              p-mb-0 Nota: para consultar más información acerca de la norma ITIL, se sugiere acceder al material complementario que abarca esta temática.


</template>

<script>
export default {
  name: 'Tema5',
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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El buen uso de las herramientas TIC, sin importar el campo de aplicación, son una mejora en el tratamiento y análisis de la información, en la gestión de procesos y por ende, en la toma de decisiones. 
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis del componente formativo Tecnologías de la información y la comunicación (TIC), se indica que las TIC son herramientas base para gestionar información al tener en cuenta aspectos como el software de sistema, aplicación y programación, así como la ofimática que incluye procesadores de texto, hojas de cálculo, presentaciones, bases de datos y trabajo colaborativo; también, se evalúa la información por medio de análisis informáticos como procesadores estadísticos, análisis de varianzas y de regresión e histogramas; por último, se realizan procesos de mejora continua que sirven para optimizar los procesos y mejorar los productos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

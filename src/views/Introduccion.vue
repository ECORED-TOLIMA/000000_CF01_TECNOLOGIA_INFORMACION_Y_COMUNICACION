<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p El conocimiento y apropiación de las herramientas de las Tecnologías de la información y la comunicación (TIC), se hace hoy en día indispensable para cualquier ámbito de la sociedad; no solo por la inmersión en la que se está, sino por su constante evolución. 
        p El siguiente video expone de manera genérica la importancia del dominio de estas herramientas, base que se desarrollará en este componente formativo:

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="1493" height="840" src="https://www.youtube.com/embed/B2iVQeWT4s8" title="Tecnologías de la información y la comunicación (TIC)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

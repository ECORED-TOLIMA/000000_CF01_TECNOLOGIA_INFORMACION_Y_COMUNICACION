<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Evaluación
    
    .bloque-texto-g.bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img1.png')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Sin duda alguna la evaluación es una de las etapas fundamentales en el desarrollo de proyectos, porque permite identificar, cuantificar y valorar el impacto de los resultados, bajo el criterio de costo y beneficio. Por tal razón, las herramientas informáticas se convierten en un apoyo fundamental en la etapa de evaluación, ya que generan estadísticas e informes compilados y consolidados que facilitan visualizar los resultados y la toma de decisiones.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .mb-4.d-flex(data-aos="fade-right")
          .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #D1FFF8; border-radius: 15px;")
            img(src='@/assets/curso/temas/tema3/icono.svg' style="max-width: 32px; margin-left: -16px;")
            h3.col.ps-3.mb-0 Reportes
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-md-10.mb-md-4
        figure
          img(src='@/assets/curso/temas/tema4/img2.png', alt="Imagen decorativa")
        
      .col-lg-7
        p Según Española & Madrid (1970), un reporte puede ser un informe o una noticia. Este tipo de documento (que puede ser impreso, digital, audiovisual, etc.), tiene como objetivo presentar una información, normalmente compilada y estadística, que contextualice una situación o el resultado de un proyecto. En este sentido, las herramientas informáticas como por ejemplo procesadores de texto, presentaciones ejecutivas y las hojas electrónicas, facilitan la elaboración de textos, presentaciones con elementos multimediales, cuadros con fórmulas de todo tipo y gráficos estadísticos que permiten visualizar de una manera eficiente el resultado de un proyecto.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .mb-4.d-flex(data-aos="fade-right")
          .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #D1FFF8; border-radius: 15px;")
            img(src='@/assets/curso/temas/tema3/icono.svg' style="max-width: 32px; margin-left: -16px;")
            h3.col.ps-3.mb-0 Análisis informático
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-6.mb-md-4
        figure
          img(src='@/assets/curso/temas/tema4/img3.png', alt="Imagen decorativa")
      .col-lg-9
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Ruido")
            p Según Manani et al. (s.f.), “en primer lugar, se debe considerar como comunicación, la transferencia de información del emisor al receptor de manera que este la comprenda. El ruido es todo aquello que interfiere en una adecuada comunicación; no solamente los sonidos sino todo aquello que impida la adecuada comunicación”.
            p Por ejemplo, si en la casa una niña se encuentra jugando silenciosamente y otra persona se encuentra hablando en una conferencia o presentación, se considera ruido, debido a la distracción que genera la niña para el sistema.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Redundancia")
            p Se le llama redundancia a toda aquella duplicidad que tiene el sistema. Los sistemas con redundancia son aquellos en los que se repiten los datos o hardware de carácter crítico para asegurarlos ante cualquier posible fallo que pueda surgir por su uso continuo. Sin embargo, se debe definir con claridad su estructura o funcionamiento, para no caer en duplicidades innecesarias de información, que terminen en inconsistencias.
            p Como ejemplo, se tendría a una empresa utiliza un servidor con dos discos duros configurados en RAID 1 (mirroring).
          .tarjeta.color-acento-botones--borde.p-4(titulo="Entropía")
            p Según Española & Madrid (1970), es definida como “Magnitud termodinámica que mide la parte de la energía no utilizable para realizar trabajo y que se expresa como el cociente entre el calor cedido por un cuerpo y su temperatura absoluta”. 
            p En otras palabras, la entropía hace referencia a las fallas o inconvenientes de los elementos del sistema, que pueden afectar el funcionamiento de este. Si se toma como ejemplo un sistema de producción de una empresa industrial, la entropía se podría presentar por fallas en las máquinas, por falta de mantenimiento, insumos de mala calidad u operarios sin capacitación para el manejo de su puesto de trabajo.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p Todo lo anterior, se debe tener en cuenta a la hora de analizar los reportes entregados, en cuanto al análisis del ruido, es decir, las interferencias; la redundancia que se pueda dar en los reportes y la entropía, hablando en términos de la energía desaprovechada.
</template>

<script>
export default {
  name: 'Tema4',
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

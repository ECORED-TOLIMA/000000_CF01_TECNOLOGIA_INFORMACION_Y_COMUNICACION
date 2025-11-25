<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 <em>Software</em>
    
    .row.justify-content-center.align-items-centerr.mb-4
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img1.png', alt='Texto que describa la imagen')

    .row.justify-content-center.align-items-center
      .col-lg-12
        p Se define #[i software] como “el conjunto de componentes lógicos que hacen posible la realización de tareas específicas” (Carmona, 2017).
        p Tomando como base esta definición y su aplicación, será de gran utilidad el conocimiento y dominio de herramientas tecnológicas que permitan mejorar la productividad, a través de procesadores de texto, hojas electrónicas, presentaciones ejecutivas y bases de datos, junto con el conocimiento y dominio del ciberespacio y herramientas colaborativas.
    

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1	Clasificación
    p.mb-4 En el campo de las TIC, se encuentran diferentes tipos de #[i software] de acuerdo con la función que realizan, bien sea en la administración de los recursos del computador o en las aplicaciones que el usuario necesite para el desempeño de su trabajo; entre ellos, se encuentran:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        LineaTiempoD.color-acento-botones
          .row.justify-content-center(numero="1" titulo="<em>Software</em> de sistema")
            .col-lg-12.order-lg-1.order-2
              p Según Gómez de Silva & Ania, 2008, el #[i software] de sistema está constituido por los programas que se encargan del control y administración de los recursos de cómputo y los que permiten la interacción entre los usuarios y los sistemas de aplicación o el #[i hardware].
            .col-lg-12.order-lg-2.order-3
              .bgblanco.p-3
                p Ejemplos de este tipo de #[i software] son los traductores (compiladores, intérpretes y ensambladores) y los sistemas operativos como Windows, XP o Vista y varias versiones de Unix, por ejemplo, AIX de IBM. En la actualidad se cuenta con versiones más actualizadas como son Android, IOS, Windows 11, que funcionan inclusive en equipos móviles, generando mayor rendimiento en los dispositivos.
            .col-lg-12.order-lg-3.order-1.mb-md-4
              figure
                img(src='@/assets/curso/temas/tema1/img3.png', alt="Imagen decorativa")
          .row.justify-content-center(numero="2" titulo="<em>Software</em> de aplicación")          
            .col-lg-12.order-lg-1.order-2
              p El #[i software] o sistemas de aplicación, son los programas que permiten a una computadora realizar actividades específicas de procesamiento de información y ofrecer una funcionalidad a los usuarios finales. (Gómez de Silva & Ania, 2008).
            .col-lg-12.order-lg-2.order-3
              .bgblanco.p-3
                p Ejemplo de este tipo de #[i software] son los editores o procesadores de texto como Word, hojas de cálculo como Excel, presentaciones ejecutivas como PowerPoint y antivirus como McAfee o Avast, entre otros.
            .col-lg-12.order-lg-3.order-1.mb-md-4
              figure
                img(src='@/assets/curso/temas/tema1/img4.png', alt="Imagen decorativa")
          .row.justify-content-center(numero="3" titulo="<em>Software</em> de programación")          
            .col-lg-12.order-lg-1.order-2
              p El #[i software] de programación permite a determinados usuarios, la comunicación con la máquina o dispositivo, para el desarrollo de aplicaciones que facilitan el manejo de la información y con ello, la toma de decisiones; también se denominan lenguajes de programación.
              p Los lenguajes de programación se clasifican en tres niveles: alto, medio y bajo, de acuerdo con su comprensión y cercanía con la máquina o dispositivo. El nivel bajo, se denomina lenguaje de máquina y es utilizado para la creación y administración del #[i software] del sistema o sistema operativo y el nivel más alto, es utilizado por los programadores en la creación de aplicaciones comerciales o científicas.
            .col-lg-12.order-lg-2.order-3
              .bgblanco.p-3
                p EL #[i software] de programación se presenta a través de Entornos Integrados de Desarrollo (IDE), que ofrecen la posibilidad de construir aplicaciones para diferentes ambientes como la #[i Web] o dispositivos móviles. Algunos ejemplos de IDE son Netbeans, Eclipse y otros conocidos como editores de programación, entre los cuales se encuentran Visual Studio, Sublime Text, Brackets, Atom, etc.
            .col-lg-12.order-lg-3.order-1.mb-md-4
              figure
                img(src='@/assets/curso/temas/tema1/img5.png', alt="Imagen decorativa")
</template>

<script>
export default {
  name: 'Tema1',
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

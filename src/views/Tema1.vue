<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Medición de audiencias
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          .h3.mb-0 …“no se puede contemplar la publicación de un anuncio en un medio cualquiera sin un grupo representativo de personas que sean impactados por él”… 
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p En el desarrollo de una campaña publicitaria o una estrategia de comunicación, el factor más importante es la audiencia; #[b no se puede contemplar la publicación de un anuncio en un medio cualquiera sin un grupo representativo de personas que sean impactados por él] y que se motiven, posteriormente, a generar una respuesta positiva en relación con el producto o servicio que se está promocionando; y la publicidad tiene ese principio y esa esencia.
    .tarjeta.color-acento-botones.p-4.p-md-5.mb-5
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/curso/img1.svg")
        .col-md.col-lg-6
          .titulo-segundo
            h3 Medición de audiencias
          p.mb-4(style="color:#ff4a69") There is no right answer. The splendor of the mystery is that you don’t understand. Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original. Why are you reading all of this?
          
          a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Anexo1.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
    .separador
    #t_1_1
    .titulo-segundo
      h2 1.1 Fuentes de medición de audiencias
    p.mb-5 Para conocer las fuentes de medición de audiencias, es importante conocer el EGM y los #[i ratings], los cuales se detallan a continuación y son las que hacen directamente estas mediciones:
    .row.justify-content-center
      .col-10
        .row.align-items-end.mb-5
          .col-lg-6
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span a
                | #[b(style="font-size: 19px;") Estudio General de Medios (EGM)]
            p El EGM es un estudio poblacional que busca una representación adecuada del universo objetivo, a través de una muestra interrogada acerca de su comportamiento en relación al consumo de medios, entre otras cosas.
            p La representación de los lectores, oyentes o espectadores es más una consecuencia que una premisa.
            p.mb-0 El EGM es un estudio multimedia, es decir, que estudia para cada individuo su comportamiento respecto a los distintos medios; así, la realidad social es multimedia, como lo es también en su mayor parte la realidad publicitaria.
          .col-lg-6
            figure
              img(src='@/assets/curso/img2.svg', style="width: 300px; margin: auto;")
        .row.mb-5 
          .col-12
            .cajon1.color-primario1.p-4
              .p El EGM proporciona dos grandes tipos de datos sobre la audiencia: ¿cuántos son? y ¿cómo son?, es decir, cuál es su perfil en lo referente a variables sociodemográficas, geográficas, de estilo de vida, consumo y equipamiento.
        .h5 Es importante tener presente dos aspectos del EGM:
        ul.lista-ul.mb-4
          li 
            i.fas.fa-caret-right(style="color: #7D6EB2")
            | Los datos que genera el EGM son estadísticos y probabilísticos.
          li 
            i.fas.fa-caret-right(style="color: #7D6EB2")
            | La información que se otorga hace referencia al número de lectores, espectadores, oyentes o usuarios de un medio, canal o cuenta en particular. Esta información indica el número de personas potencialmente sujetas al impacto del mensaje publicitario, indicando la cantidad de personas que potencialmente pueden llegar a ser impactadas por un anuncio (ACIM Colombia, 2020).
        .row.mb-5
          .col-12.bg-color1
            p.mb-0 Basado en los estudios del ACIM Colombia (2015).
        .row.align-items-end.mb-5
          .col-lg-6
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span b
                | #[b(style="font-size: 19px;") #[i Rating]]
            p.mb-0 El #[i rating] es el indicador que define la cantidad de personas o espectadores que tiene un programa de televisión o radio. Este determina la proyección y la posible efectividad de una campaña publicitaria o anuncio que se exponga en uno de estos medios. El #[i rating] se mide en puntos, donde cada uno equivale a 100 mil personas, entonces si se habla de 5 puntos de rating, eso significa que 500 mil personas están viendo un programa de televisión o escuchando uno de radio a una hora determinada.
          .col-lg-6
            figure
              img(src='@/assets/curso/img3.svg', style="width: 300px; margin: auto;")
        .row.mb-5 
          .col-12
            .cajon2.color-primario2.p-4
              .p En Colombia se generan informes del #[i rating] de forma periódica, parte de esa información es de acceso público. La empresa Ibope es quien desarrolla dicha medición desde hace casi 30 años de la misma forma que lo hace en otros países de Latinoamérica.
        .h5 Medición de rating
        p En la actualidad y gracias a la tecnología y a la conectividad de la televisión, el proceso es 100% digital, a través de un dispositivo llamado #[b "#[i People meter"]] que se instala directamente en los televisores de los hogares seleccionados para realizar dicha medición. El #[i People meter] permite saber con base en la muestra, el tiempo que una persona está conectada en un canal específico y los cambios de canales que realiza durante el tiempo que permanece frente a la pantalla. Adicionalmente, este dispositivo realiza un perfilamiento de los usuarios para saber quién específicamente está viendo determinado programa. La información pasa luego a una central de información donde acopian, tabulan y analizan todos los datos. De acuerdo con el tamaño de la población el máximo de rating que puede tener un programa en Colombia es de 40 puntos.
    .row.justify-content-center.mt-4
      .col-11
        .row.align-items-center.bg-color2.mb-5
          .col-lg-2
            figure
              img(src='@/assets/curso/img4.svg', style="width: 300px; margin: auto;")
          .col-lg-10
            .h5 Medición de #[i rating] de radio
            p Para el caso de las audiencias de radio es diferente, aunque en la actualidad se puede determinar cuántas personas están conectadas a una cadena radial vía a internet, sin embargo, aún hay muchos radioescuchas que sintonizan a través de las frecuencias AM y FM. Para estos casos se toman varios datos combinados; uno es el de las encuestas a una muestra representativa de la población y el otro se basa en la retroalimentación que hacen los oyentes por los diferentes medios: teléfono, redes sociales y correo electrónico. Para esto, cada emisora y programa de radio se encarga de realizar la medición de su audiencia, con el fin de vender pauta publicitaria.
        .row.align-items-center.mb-5
          .col-lg-2
            figure
              img(src='@/assets/curso/img5.svg', style="width: 300px; margin: auto;")
          .col-lg-10
            .h5 Medición de prensa y revistas impresas
            p La audiencia de un medio impreso se mide utilizando dos datos básicos, el primero es el tiraje del medio, es decir, las impresiones que se hagan de un ejemplar. El segundo dato son los lectores, los cuales están determinados por un ejemplar; es decir, un ejemplar de periódico comprado en una familia puede ser leído por varios miembros de ella. Por su parte, una revista, por tener un tiempo de vida más prolongado, de una semana o un mes, puede ser leída por muchas personas dependiendo del lugar donde estén. Cada medio debe determinar un promedio de lectores de sus ejemplares, con el fin de determinar su audiencia total. Estas mediciones son llevadas a cabo por la Oficina de Justificación de la Difusión (OJD), para los medios que solicitan sus servicios.
        .row.align-items-center.bg-color2
          .col-lg-2
            figure
              img(src='@/assets/curso/img6.svg', style="width: 300px; margin: auto;")
          .col-lg-10
            .h5 Medición prensa y revistas digitales
            p Los medios digitales también deben combinar varios datos para determinar su audiencia total, es importante aclarar que las revistas y periódicos digitales en su mayoría cuentan con un sitio web, por lo tanto, el primer dato está relacionado con las visitas a este. Otro dato importante son los suscriptores, ya sea que el medio sea pago o gratuito, siempre debe tener un sistema de suscripción para poder medir audiencias, generar bases de datos y fidelizar a los espectadores. Finalmente, estos medios pueden hacer análisis de audiencias a través de los sistemas de analítica web, sin embargo y a pesar de la precisión de estos sistemas de medición, muchos datos de bots no se pueden discriminar, ya que alteraría las estadísticas.
        

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),
}
</script>

<style lang="sass" scoped></style>

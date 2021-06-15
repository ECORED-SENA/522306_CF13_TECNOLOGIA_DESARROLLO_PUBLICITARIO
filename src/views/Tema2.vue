<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Plan de medios
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/img7.svg', style="width: 300px; margin: auto;")
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p El plan de medios es un derrotero que permite #[b generar interacción entre una marca y su mercado objetivo]. El plan de medios tiene una estructura única para el desarrollo coherente de la campaña publicitaria.
    .separador
    #t_2_1
    .titulo-segundo
      h2 2.1 Elementos básicos de un plan de medios
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .separador
    #t_2_2
    .titulo-segundo
      h2 2.2 Variables para el análisis de medios
    p Por otro lado, la planeación de medios implica conocer a fondo los canales por medio de los cuales se va llevar el mensaje al público objetivo, logrando que este llegue de la forma más eficiente posible y logre el cumplimiento de las metas planteadas para la campaña. Para conocer los medios y tener un criterio bien estructurado que permite tomar las decisiones más acertadas en cuanto a selección, jerarquización y peso de los medios para la campaña se requieren las siguientes variables:
    .row.justify-content-center
      .col-10
        .row.align-items-center.bg-color3.mt-5
          .col-2
            figure
              img(src='@/assets/curso/img8.svg', style="width: 100px; margin: auto;")
          .col-10
            p.mb-0 #[b Audiencia total:] es el promedio de personas que están en contacto con un medio en un periodo de tiempo establecido. En los medios digitales este dato se conoce como los visitantes o usuarios.
        .row.align-items-center.bg-color3.mt-5
          .col-2
            figure
              img(src='@/assets/curso/img9.svg', style="width: 100px; margin: auto;")
          .col-10
            p.mb-0 #[b Penetración o consumo:] este dato está relacionado con un mercado objetivo específico, es la cifra promedio que un medio puede impactar de un target en particular.
        .row.align-items-center.bg-color3.mt-5
          .col-2
            figure
              img(src='@/assets/curso/img10.svg', style="width: 100px; margin: auto;")
          .col-10
            p.mb-0 #[b Share de audiencia:] esta variable indica el porcentaje de participación de un medio en relación con el total de la audiencia.
        .row.align-items-center.bg-color3.mt-5
          .col-2
            figure
              img(src='@/assets/curso/img11.svg', style="width: 100px; margin: auto;")
          .col-10
            p.mb-0 #[b Perfil de la audiencia:] cada medio, programa o sitio web tiene un público definido, esta variable indica el arquetipo de consumidor que un medio atrae, este debe caracterizarse desde el enfoque demográfico y psicográfico, con el fin que quienes compren un espacio comercial tengan claro a quién dirigen sus estrategias de comunicación.
        .row.align-items-center.bg-color3.mt-5
          .col-2
            figure
              img(src='@/assets/curso/img12.svg', style="width: 100px; margin: auto;")
          .col-10
            p.mb-0 #[b Coeficiente de afinidad:] esta variable indica el porcentaje de un determinado target al que el medio impacta del total de su audiencia.
        .row.align-items-center.bg-color3.mt-5
          .col-2
            figure
              img(src='@/assets/curso/img13.svg', style="width: 100px; margin: auto;")
          .col-10
            p.mb-0 #[b Audiencia útil:] es el promedio de personas que tienen contacto con un medio en un periodo en particular.
        .row.align-items-center.bg-color3.mt-5
          .col-2
            figure
              img(src='@/assets/curso/img14.svg', style="width: 100px; margin: auto;")
          .col-10
            p.mb-0 #[b Rating point:] corresponde al porcentaje de audiencia útil que tiene un medio del total de su audiencia.
    .separador
    #t_2_3
    .titulo-segundo
      h2 2.3 Variables para el análisis de campañas
    p Otro grupo de variables que se revisten de gran importancia en el desarrollo de la campaña, son los indicadores numéricos que permiten determinar la eficiencia en cuanto a la inversión que la empresa va a realizar para el desarrollo de la campaña, estos cálculos son útiles para conocer de cada medio el promedio de alcance y el impacto que puede llegar a tener la campaña.
    .row.mb-5
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/img15.svg' style="wit")
        .h4.text-center Impactos: 
        p.text-center Se refiere al número de veces que el mensaje publicitario impacta al target.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/img16.svg' alt='AvatarTop')
        .h4.text-center Gross Rating Points (GRP): 
        p.text-center Corresponden a la sumatoria de los porcentajes de la audiencia útil, la fórmula es la siguiente:
        figure.mt-5
          img(src='@/assets/curso/img19.svg', style="width: 250px; margin: auto;")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/img17.svg' alt='AvatarTop')
        .h4.text-center Costo Por Mil (CPM): 
        p.text-center El CPM indica la inversión que requiere una campaña para impactar mil veces al mercado objetivo. Este se calcula con la siguiente fórmula:
        figure.mt-4
          img(src='@/assets/curso/img18.svg', style="width: 250px; margin: auto;")
    .separador
    #t_2_4
    .titulo-segundo
      h2 2.4 Variables para el análisis de medios digitales
    .row.align-items-center
      .col-lg-4
        .header-arrow
          p.my-lg-5 Los medios digitales tienen unas variables propias y muy específicas en el análisis de las cifras, la efectividad y la eficiencia de las campañas, estos datos permiten identificar el mix más oportuno para realizar las estrategias de comunicación y exponer el mensaje al mercado objetivo.
      .col-lg-8.p-4
        ul.lista-ul.mt-4
          li
            i.fas.fa-caret-right(style="color: #7D6EB2")
            |
            span #[b Visitantes o usuarios: ] 
              |corresponde al número total de usuarios que ingresan a un sitio web en un lapso en particular: en un día, semana o mes.
          li 
            i.fas.fa-caret-right(style="color: #7D6EB2")
            |
            span #[b Páginas vistas: ]
              |corresponden al número de páginas vistas de un sitio web en un periodo en particular y sirven para conocer la actividad de un sitio web.
          li 
            i.fas.fa-caret-right(style="color: #7D6EB2")
            | 
            span #[b Impactos: ]
              |corresponde al número de veces que un usuario es impactado por un anuncio publicitario.
          li 
            i.fas.fa-caret-right(style="color: #7D6EB2")
            | 
            span #[b CPM (Costo Por Mil): ]
              |similar a los demás medios, es el costo de mil impactos o visualizaciones de un anuncio publicitario.
          li 
            i.fas.fa-caret-right(style="color: #7D6EB2")
            |
            span #[b CPC (Costo Por Clic): ]
              |es el costo por cada clic que realicen los usuarios en un anuncio en particular.
          li 
            i.fas.fa-caret-right(style="color: #7D6EB2")
            |
            span #[b Tasa de rebote: ]
              |corresponde a la cantidad de usuarios que ingresan a una landing page y no interactúan con ella.
    .separador
    #t_2_5
    .titulo-segundo
      h2 2.5  Cronogramas de medios
    p Con el fin que los mensajes sean divulgados y entregados de la forma más adecuada y eficiente posible, es necesario que la planificación de la pauta sea clara, tanto para los estrategas y los responsables de la empresa anunciante, como para los medios o para quienes realizan la compra en el caso de las redes sociales. Se deben tener en cuenta los siguientes:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Cronograma para redes sociales / internet")
        .col-12
          table.table.table-striped.m-0
            tbody
              tr
                td.table1 Red / plataforma
                td.table1 Tipo de campaña
                td.table1 Costo campaña
                td.table1 CPC
                td.table1 CPM
                td.table1 Fecha
                td.table1 Hora
              tr
                td.table2 Facebook
                td.table2 Grupo de anuncios
                td.table2
                td.table2
                td.table2
                td.table2
                td.table2
              tr
                td.table3 Instagram
                td.table3 Retargueting
                td.table3
                td.table3
                td.table3
                td.table3
                td.table3
              tr
                td.table2 Twitter
                td.table2 Video promocional
                td.table2
                td.table2
                td.table2
                td.table2
                td.table2
              tr
                td.table3 LinkedIn
                td.table3 Aumento Leads
                td.table3
                td.table3
                td.table3
                td.table3
                td.table3
              tr
                td.table2 Google ads
                td.table2 Anuncio
                td.table2
                td.table2
                td.table2
                td.table2
                td.table2
              tr
                td.table3 YouTube
                td.table3 Texto
                td.table3
                td.table3
                td.table3
                td.table3
                td.table3
      div(titulo="Cronograma para radio")
        .row
          .col-12
            table.table.table-striped.m-0
              tbody
                tr
                  td.table1 Emisora
                  td.table1 Programa
                  td.table1 Duración cuña
                  td.table1 Costo cuña
                  td.table1 CPM
                  td.table1 Fecha
                  td.table1 Hora
                tr
                  td.table2 W Radio
                  td.table2 Sigue la w
                  td.table2 15’’
                  td.table2 3.000.000
                  td.table2 120.000
                  td.table2
                  td.table2
                tr
                  td.table3
                  td.table3
                  td.table3
                  td.table3
                  td.table3
                  td.table3
                  td.table3
                tr
                  td.table2
                  td.table2
                  td.table2
                  td.table2
                  td.table2
                  td.table2
                  td.table2
                tr
                  td.table3
                  td.table3
                  td.table3
                  td.table3
                  td.table3
                  td.table3
                  td.table3
      div(titulo="Cronograma para revistas")
        .row
          .col-12
            table.table.table-striped.m-0
              tbody
                tr
                  td.table1 Revista
                  td.table1 Ubicación
                  td.table1 Tamaño anuncio
                  td.table1 Costo anuncio
                  td.table1 CPM
                  td.table1 Fecha publicación
                tr
                  td.table2 Semana
                  td.table2 Derecha – columnas opinión
                  td.table2 ½ Página horizontal
                  td.table2 17.000.000
                  td.table2 100.000
                  td.table2
                tr
                  td.table3
                  td.table3
                  td.table3
                  td.table3
                  td.table3
                  td.table3
                tr
                  td.table2
                  td.table2
                  td.table2
                  td.table2
                  td.table2
                  td.table2
                tr
                  td.table3
                  td.table3
                  td.table3
                  td.table3
                  td.table3
                  td.table3
      div(titulo="Cronograma prensa")
        .row
          .col-12
            table.table.table-striped.m-0
              tbody
                tr
                  td.table1(rowspan="2") Periódico
                  td.table1(rowspan="2") Ubicación
                  td.table1.text-center(colspan="2") Tamaño anuncio
                  td.table1(rowspan="2") Costo anuncio
                  td.table1(rowspan="2") CPM
                  td.table1(rowspan="2") Fecha publicación
                tr(style="background-color: #fcfcfc !important")
                  td.table3.text-center Col.
                  td.table3.text-center Cm.
                tr
                tr
                  td.table2 El Tiempo
                  td.table2 Derecha – deportes
                  td.table2.text-center 3
                  td.table2.text-center 20
                  td.table2 2.000.000
                  td.table2 80.000
                  td.table2
                tr
                  td.table3
                  td.table3
                  td.table3
                  td.table3
                  td.table3
                  td.table3
                  td.table3
                tr
                  td.table2
                  td.table2
                  td.table2
                  td.table2
                  td.table2
                  td.table2
                  td.table2
                tr
                  td.table3
                  td.table3
                  td.table3
                  td.table3
                  td.table3
                  td.table3
                  td.table3
    .separador
    #t_2_6
    .titulo-segundo
      h2 2.6 Presupuesto
    .row.align-items-center.mb-5
      .col-lg-7
        p Determinar el presupuesto de una campaña es tal vez la tarea más difícil del proceso, pues es incierto saber o determinar el monto adecuado para tener los resultados esperados y la publicidad no es una ciencia exacta; aunque las plataformas de publicidad de redes sociales han logrado un acercamiento a un presupuesto bien definido, puesto que de antemano se sabe a cuántas personas se puede impactar y cuánto costará llegar a ellas; sin embargo, no se puede saber aún cuántos de esos usuarios van a responder positivamente a la campaña y solo se puede hablar de estimados. Hay varios métodos para definir un presupuesto publicitario:
      .col-lg-5
        figure
          img(src='@/assets/curso/img20.svg', style="width: 350px; margin: auto;")
    PasosA.color-primario.mb-5(tipo="n")
      .row
        .col-12.mb-5.mb-md-0
          .h3 Histórico de ventas:
          p Si la empresa tiene un recorrido importante en el mercado se puede hacer un estimado del mercado objetivo total, a partir del histórico de ventas, esto permite a la empresa saber qué tan grande es el mercado y quiénes son los compradores.
      .row
        .col-12.mb-5.mb-md-0
          .h3 Utilidades brutas:
          p En este caso el presupuesto de ventas se plantea con base en un porcentaje sobre las ventas. Es el método más recomendado, puesto que son los clientes los que deberían pagar por la información que reciben acerca del producto.
      .row
        .col-12.mb-5.mb-md-0
          .h3 Pronóstico:
          p Es un método incierto puesto que se destina el presupuesto sobre suposiciones o pronósticos que realiza la empresa estimando un potencial de mercado y de ventas.
      .row
        .col-12
          .h3 Histórico de campañas:
          p Es otro método recomendado, el cual se basa en lo invertido en campañas realizadas anteriormente por la empresa, esto permite determinar si lo invertido fue lo adecuado o si debe ajustarse el presupuesto para el logro de los objetivos.
      
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>

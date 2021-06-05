<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 #[i Merchandising] – Promoción en el punto de venta
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .separador
    #t_3_1
    .titulo-segundo
      h2 3.1 Características
    figure
      img(src='@/assets/curso/img21.svg', style="width: 800px; margin: auto;")
    .separador
    #t_3_2
    .titulo-segundo
      h2 3.2 Objetivos
    p La determinación de los objetivos de las promociones de ventas ha sido un tema debatido y objeto de numerosas revisiones en los últimos años. Esto se debe, como se ha mencionado, a la confusión respecto a la definición de promoción de ventas y su alcance en el #[i marketing mix] de la empresa, por una parte; y por otra, al reconocimiento reciente de los efectos de las promociones de ventas en el largo plazo y su correspondiente papel en los objetivos estratégicos de marketing.
    figure.my-5
      img(src='@/assets/curso/img22.svg', style="width: 400px; margin: auto;")
    p.mb-5 Existe un amplio consenso en cuanto a los tres grandes objetivos generales reconocidos en la mayor parte de las definiciones del concepto de promoción de ventas, esto es: estimular la demanda del usuario final, mejorar el desempeño de marketing de intermediarios y vendedores y complementar las funciones de publicidad y venta personal. Sin embargo, en cuanto a los objetivos específicos de las promociones de ventas, existen diferentes clasificaciones atendiendo a distintos criterios, tales como su alcance temporal, los agentes que las utilizan y el público objetivo al que van dirigidas, que se resumen a continuación, de acuerdo a lo indicado por Sánchez (2017).
    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta
          span a
        | #[b(style="font-size: 19px;") Objetivos de las promociones de ventas según su alcance temporal]
    .row.justify-content-center
      .col-11
        p Debido a que las acciones promocionales pueden tener efectos tanto a corto como a largo plazo, es necesario diferenciar los objetivos de las promociones de ventas según su alcance temporal, esto es, según persigan efectos a corto o a largo plazo. Se puede clasificar, entonces, los objetivos de las promociones de ventas en: objetivos tácticos, estratégicos y finales, según afecten al corto, medio y largo plazo, respectivamente.
        .row.align-items-center.my-5
          .col-lg-3
            .header-arrow
              figure
                img(src='@/assets/curso/img23.svg', style="width: 80px; margin: auto;")
              .h3.mt-4.text-center.text-white Objetivos <br> tácticos
          .col-lg-9.p-4
            ul.lista-ul
              li
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Combatir esfuerzos promocionales de los competidores o aumentar la cuota de mercado.
              li 
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Retirar artículos dañados, obsoletos, poco demandados o con excesivas existencias.
        .row.align-items-center.mb-5
          .col-lg-3
            .header-arrow1
              figure
                img(src='@/assets/curso/img24.svg', style="width: 80px; margin: auto;")
              .h3.mt-4.text-center.text-white Objetivos <br> estratégicos
          .col-lg-9.p-4
            ul.lista-ul
              li
                i.fas.fa-caret-right(style="color: #26AAB7")
                |
                span Estimular a los consumidores a que cambien de la marca rival a la promocionada.
              li 
                i.fas.fa-caret-right(style="color: #26AAB7")
                |
                span Aumentar el nivel de consumo los clientes actuales del producto.
              li 
                i.fas.fa-caret-right(style="color: #26AAB7")
                |
                span Trasladar los inventarios del producto al distribuidor, minorista o consumidor.
              li 
                i.fas.fa-caret-right(style="color: #26AAB7")
                |
                span Incentivar la recompra y la lealtad hacia la marca.
              li 
                i.fas.fa-caret-right(style="color: #26AAB7")
                |
                span Motivar a los distribuidores para que promuevan la marca entre los consumidores.
        .row.align-items-center.mb-5
          .col-lg-3
            .header-arrow2
              figure
                img(src='@/assets/curso/img25.svg', style="width: 80px; margin: auto;")
              .h3.mt-4.text-center.text-white Objetivos <br> finales
          .col-lg-9.p-4
            ul.lista-ul
              li
                i.fas.fa-caret-right(style="color: #C1507F")
                |
                span Aumentar las ventas.
              li 
                i.fas.fa-caret-right(style="color: #C1507F")
                |
                span Incrementar la cuota de mercado.
              li 
                i.fas.fa-caret-right(style="color: #C1507F")
                |
                span Aumentar los beneficios.
    hr
    ol.lista-ol--cuadro.mt-5
      li 
        .lista-ol--cuadro__vineta
          span b
        | #[b(style="font-size: 19px;") Objetivos de las promociones de ventas según el agente que las realiza]
    p.mb-5 Lógicamente, los objetivos perseguidos por comerciales, fabricantes y distribuidores son, en muchos casos, diferentes. Cabe, por tanto, una clasificación de los objetivos de las promociones de ventas según el agente que las realiza.
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Comercial")
        .col-12
          ul.lista-ul
            li
              i.fas.fa-caret-right(style="color: #7D6EB2")
              |
              span Incrementar las compras actuales de los distribuidores existentes.
            li 
              i.fas.fa-caret-right(style="color: #7D6EB2")
              |
              span Obtener de nuevos intermediarios, nuevas áreas geográficas y formatos de establecimiento.
            li 
              i.fas.fa-caret-right(style="color: #7D6EB2")
              |
              span Ganar apoyo promocional en el punto de venta, incentivando las actividades de #[i merchandising].
            li 
              i.fas.fa-caret-right(style="color: #7D6EB2")
              |
              span Incentivar la fuerza de ventas minorista.
            li 
              i.fas.fa-caret-right(style="color: #7D6EB2")
              |
              span Motivar a los distribuidores para que adquieran la mercancía.
            li 
              i.fas.fa-caret-right(style="color: #7D6EB2")
              |
              span Aumentar y mantener la presencia en el canal de distribución.
            li 
              i.fas.fa-caret-right(style="color: #7D6EB2")
              |
              span Fidelizar a los distribuidores actuales.
            li 
              i.fas.fa-caret-right(style="color: #7D6EB2")
              |
              span Controlar el precio de venta final, evitando reducciones drásticas y permanentes de precio.
            li 
              i.fas.fa-caret-right(style="color: #7D6EB2")
              |
              span Favorecer la rotación y salida de #[i stocks].
            li 
              i.fas.fa-caret-right(style="color: #7D6EB2")
              |
              span Estabilizar las relaciones en el canal, favoreciendo la cooperación con los distribuidores.
            li 
              i.fas.fa-caret-right(style="color: #7D6EB2")
              |
              span Expulsar del canal de distribución a los distribuidores.
            li 
              i.fas.fa-caret-right(style="color: #7D6EB2")
              |
              span Incrementar la eficacia del trabajo realizado por los distribuidores.
            li 
              i.fas.fa-caret-right(style="color: #7D6EB2")
              |
              span Favorecer la integración del producto en la red de comercialización.
      div(titulo="Fabricante")
        .row
          .col-12
            ul.lista-ul
              li
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Conseguir la prueba del producto.
              li 
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Acercar el producto al consumidor.
              li 
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Favorecer la introducción de nuevos productos.
              li 
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Atraer a nuevos compradores.
              li 
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Crear y mantener el hábito de compra hacia el producto.
              li 
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Incrementar y mantener el consumo del producto entre los consumidores actuales.
              li 
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Mejorar la cuota de mercado.
              li 
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Favorecer la acumulación del producto por parte del consumidor.
              li 
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Incentivar la compra de marcas de mayor prestigio y precio.
              li 
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Reforzar la publicidad e imagen de marca del producto.
              li 
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Neutralizar la publicidad o promociones de ventas de los competidores.
              li 
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Capitalizar ciertas zonas, temporadas o acontecimientos.
      div(titulo="Minorista")
        .row
          .col-12
            ul.lista-ul
              li
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Incrementar las ventas de la categoría de producto.
              li 
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Aumentar el tráfico y número de clientes del establecimiento.
              li 
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Ganar y mantener la lealtad de los clientes.
              li 
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Informar a los clientes acerca del surtido y servicios ofrecidos.
              li 
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Estimular la demanda del producto y aumentar las ventas.
              li 
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Diferenciarse de los competidores y crear imagen de competitividad en precios.
              li 
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Disminuir los períodos de estacionalidad de las ventas.
              li 
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Trasladar inventario a los consumidores.
              li 
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Reforzar la imagen del establecimiento.
              li 
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Aumentar la frecuencia de compra.
              li 
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Aumentar las ventas de marcas de distribución.
              li 
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Apoyar otras técnicas de comunicación.
    hr
    ol.lista-ol--cuadro.mt-5
      li 
        .lista-ol--cuadro__vineta
          span c
        | #[b(style="font-size: 19px;") Objetivos de las promociones de ventas según el público objetivo al que van dirigidas]
    p.mb-5 Los objetivos específicos de las promociones de ventas varían en función del público objetivo al que vayan dirigidas, esto es, consumidores, detallistas o la fuerza de ventas. Algunos autores, como Kotler (2000) y Santesmases (2007), proponen una clasificación de los objetivos de las promociones atendiendo a este criterio.
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Consumidores")
        .col-12
          ul.lista-ul
            li
              i.fas.fa-caret-right(style="color: #7D6EB2")
              |
              span Estimular las ventas.
            li 
              i.fas.fa-caret-right(style="color: #7D6EB2")
              |
              span Aumentar las compras de los clientes actuales.
            li 
              i.fas.fa-caret-right(style="color: #7D6EB2")
              |
              span Conseguir la prueba entre los no usuarios.
            li 
              i.fas.fa-caret-right(style="color: #7D6EB2")
              |
              span Atraer a los consumidores de otras marcas (promover el cambio de marca).
      div(titulo="Detallistas")
        .row
          .col-12
            ul.lista-ul
              li
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Inducir a la adquisición de nuevos productos y mayores niveles de existencias.
              li 
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Estimular la compra fuera de temporada.
              li 
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Estimular el almacenamiento de los productos. Estimular la fidelidad a la marca y a los detallistas.
              li 
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Fomentar un mayor esfuerzo por parte del detallista en la venta del producto.
              li 
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Compensar las promociones realizadas por los competidores.
              li 
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Conseguir más espacio para el producto.
              li 
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Conseguir la entrada en nuevos tipos de establecimiento o puntos de venta.
      div(titulo="Fuerza de ventas")
        .row
          .col-12
            ul.lista-ul
              li
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Apoyar un nuevo producto o modelo.
              li 
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Estimular una mayor prospección.
              li 
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Estimular para lograr ventas fuera de temporada.
              li 
                i.fas.fa-caret-right(style="color: #7D6EB2")
                |
                span Aumentar el esfuerzo y mejorar el rendimiento.
      div(titulo="Técnicas")
        .row
          .col-12
            p El #[i marketing] promocional dispone de un gran número de herramientas y técnicas para la consecución de los objetivos señalados en el apartado anterior. Ahora bien, las técnicas más eficaces en cada caso dependerán del objetivo perseguido y del público objetivo al que se dirijan.
            p Existen numerosos criterios de clasificación de las distintas herramientas y técnicas promocionales, aunque muchos de ellos presentan características comunes y ciertos solapamientos. A continuación, se exponen los criterios de clasificación más utilizados; esto es, en función del público objetivo al que se dirigen y en función del incentivo promocional ofrecido al consumidor.
    .row.align-items-center.justify-content-center
      .col-lg-5
        p #[b Según el público objetivo al que van dirigidas]
        p Uno de los criterios más utilizados para clasificar las promociones de ventas es el sugerido por Blattberg y Neslin (1989), atendiendo a si se trata de promociones del fabricante al distribuidor, del distribuidor al consumidor o directamente del fabricante al consumidor, conocida como estrategia #[i Push y Pull] la que ha sido seguida por autores como Kotler (2000), Tellis (2002) o Santesmases (2007), entre otros.
      .col-lg-5.mt-4.mt-lg-0
        figure
          img(src='@/assets/curso/img26.svg', style="width: 350px; margin: auto;")
      p.mt-5 De acuerdo con esta clasificación, en la estrategia #[i Push] las promociones al consumidor comprenden todas aquellas acciones promocionales ofrecidas por los fabricantes directamente al consumidor final, cuyo objetivo principal será el de fomentar la compra de la marca promocionada.
      p Por su parte, en la estrategia #[i Pull] las promociones del distribuidor son también promociones dirigidas al consumidor, pero, en este caso, diseñadas por el propio detallista, y perseguirán atraer clientes al establecimiento y aumentar las ventas y la rentabilidad del surtido en su conjunto. En muchos casos existen conflictos de interés entre las promociones al consumidor diseñadas por los fabricantes y las promovidas por los distribuidores, por lo que cada vez adquieren mayor importancia el tercer tipo de promociones, esto es, aquellas dirigidas al distribuidor por el fabricante (#[i Trade Deals]), con el objetivo de que el detallista transfiera a los consumidores parte de este incentivo.
    .separador
    #t_3_3
    .titulo-segundo
      h2 3.3 Tipos de promociones de ventas
    .row.mb-5
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/img27.svg')
        .h4.text-center.mt-4 Promociones al consumidor
        ul.lista-ul.mt-4
          li
            i.fas.fa-caret-right(style="color: #7D6EB2")
            |
            span Cupones de fabricante y vales descuento.
          hr
          li 
            i.fas.fa-caret-right(style="color: #7D6EB2")
            |
            span Reembolsos.
          hr
          li 
            i.fas.fa-caret-right(style="color: #7D6EB2")
            |
            span Mayor contenido a menor precio (packs temporales).
          hr
          li 
            i.fas.fa-caret-right(style="color: #7D6EB2")
            |
            span Productos complementarios gratis o a menor precio.
          hr
          li 
            i.fas.fa-caret-right(style="color: #7D6EB2")
            |
            span Regalos.
          hr
          li 
            i.fas.fa-caret-right(style="color: #7D6EB2")
            |
            span Promociones conjuntas con otras marcas.
          hr
          li 
            i.fas.fa-caret-right(style="color: #7D6EB2")
            |
            span Sorteos de regalo.
          hr
          li 
            i.fas.fa-caret-right(style="color: #7D6EB2")
            |
            span Concursos y premios.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/img28.svg')
        .h4.text-center.mt-4 Promociones del distribuidor
        ul.lista-ul.mt-4
          li
            i.fas.fa-caret-right(style="color: #7D6EB2")
            |
            span Rebajas y descuentos.
          hr
          li 
            i.fas.fa-caret-right(style="color: #7D6EB2")
            |
            span Regalos o productos gratuitos.
          hr
          li 
            i.fas.fa-caret-right(style="color: #7D6EB2")
            |
            span Cupones dobles (duplican el valor de los cupones del fabricante).
          hr
          li 
            i.fas.fa-caret-right(style="color: #7D6EB2")
            |
            span Cupones del distribuidor.
          hr
          li 
            i.fas.fa-caret-right(style="color: #7D6EB2")
            |
            span Expositores especiales.
          hr
          li 
            i.fas.fa-caret-right(style="color: #7D6EB2")
            |
            span Folletos.
          hr
          li 
            i.fas.fa-caret-right(style="color: #7D6EB2")
            |
            span Publicidad en el punto de venta.
          hr
          li 
            i.fas.fa-caret-right(style="color: #7D6EB2")
            |
            span Sorteos.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/img29.svg')
        .h4.text-center.mt-4 Promociones del fabricante (Trade Promotions)
        ul.lista-ul.mt-4
          li
            i.fas.fa-caret-right(style="color: #7D6EB2")
            |
            span Reducción temporal del precio del producto.
          hr
          li 
            i.fas.fa-caret-right(style="color: #7D6EB2")
            |
            span Comisiones.
          hr
          li 
            i.fas.fa-caret-right(style="color: #7D6EB2")
            |
            span Facilidades de financiación.
          hr
          li 
            i.fas.fa-caret-right(style="color: #7D6EB2")
            |
            span Contribuciones monetarias.
          hr
          li 
            i.fas.fa-caret-right(style="color: #7D6EB2")
            |
            span Ayudas para expositores.
          hr
          li 
            i.fas.fa-caret-right(style="color: #7D6EB2")
            |
            span Publicidad cooperativa.
          hr
          li 
            i.fas.fa-caret-right(style="color: #7D6EB2")
            |
            span Sorteos y concursos.
          hr
          li 
            i.fas.fa-caret-right(style="color: #7D6EB2")
            |
            span Ferias.
          hr
          li 
            i.fas.fa-caret-right(style="color: #7D6EB2")
            |
            span Convenciones de minoristas.
          hr
          li 
            i.fas.fa-caret-right(style="color: #7D6EB2")
            |
            span Concursos.
          hr
          li 
            i.fas.fa-caret-right(style="color: #7D6EB2")
            |
            span Prueba, muestras y degustaciones.
          hr
          li 
            i.fas.fa-caret-right(style="color: #7D6EB2")
            |
            span Eventos especiales.
          hr
          li 
            i.fas.fa-caret-right(style="color: #7D6EB2")
            |
            span Promociones de ambiente (aniversarios, días o semanas especiales, etc.).
    .row.align-items-center.mb-5
      .col-lg-6
        p En todos los casos, el destinatario de las promociones de ventas es el consumidor. Ahora bien, como ya se ha adelantado, la existencia de grupos de consumidores con actitudes y comportamientos muy diferentes ante las promociones de ventas, exige que las acciones promocionales sean definidas de acuerdo a las características y preferencias de los segmentos de mercado a las que vayan dirigidas. Así, las distintas técnicas promocionales señaladas, cuya utilización dependerá, entre otros factores, de los objetivos perseguidos en cada momento, serán más o menos eficaces según el tipo de consumidor al que+6 vayan dirigidas.
        p Tradicionalmente, la caracterización de los consumidores propensos a las promociones se había realizado atendiendo a criterios sociodemográficos; sin embargo, resultaron insuficientes para explicar los diferentes comportamientos ante las promociones de ventas; por esta razón, recientemente se han realizado estudios que relacionan la respuesta ante las promociones de ventas con los hábitos de compra, los hábitos de consumo o rasgos psicográficos.
      .col-lg-6.mt-4.mt-lg-0
        figure
          img(src='@/assets/curso/img30.svg', style="width: 500px; margin: auto;")
    .row.align-items-center.mb-5
      .col-lg-6.mt-4.mt-lg-0
        figure
          img(src='@/assets/curso/img31.svg', style="width: 450px; margin: auto;")
      .col-lg-6
        p.mt-4.mt-lg-0 #[b Promociones de ventas según el incentivo ofrecido al consumidor.]
        p Además en función del público objetivo al que van dirigidas y el criterio de clasificación de las promociones de ventas según el tipo de incentivo promocional ofrecido, es uno de los más empleados. En este sentido, las promociones de ventas se pueden agrupar en diferentes clases atendiendo a las características del incentivo que se ofrece al consumidor, independientemente de que la promoción sea del fabricante, del distribuidor o resultado de una colaboración conjunta entre ambos. Existen cuatro criterios de clasificación de las promociones en función del tipo de incentivo ofrecido al consumidor: en función de la naturaleza del incentivo, en función del horizonte temporal, en función de la certeza del incentivo y, por último, en función del objetivo perseguido.
    .row.align-items-center.mb-4
      .col-1
        figure
          img(src='@/assets/curso/img32.svg', style="width: 50px; margin: auto;")
      .col-11
        p.mb-0 #[b Según la naturaleza del incentivo:] se diferencia entre promociones monetarias o promociones en precio y promociones no monetarias.
    .row.align-items-start.justify-content-end
      .col-lg-6
        p Las promociones monetarias hacen referencia a todas aquellas acciones promocionales que permiten al consumidor adquirir un determinado bien a un precio inferior al habitual, tales como los descuentos inmediatos o diferidos, los vales y cupones de descuento o los reembolsos.
        p Las promociones no monetarias agrupan todas aquellas acciones cuyo incentivo no consiste en una reducción directa del precio del producto. Así, son promociones no monetarias: los regalos directos o diferidos, las tarjetas de fidelización, la participación en sorteos y concursos, etc. Algunos estudios han puesto de manifiesto que los beneficios percibidos por el consumidor son diferentes según se trate de promociones monetarias o no monetarias y que sus efectos sobre el valor de marca en el largo plazo pueden variar significativamente.
      .col-lg-5.mt-4.mt-lg-0
        figure
          img(src='@/assets/curso/img36.svg', style="width: 450px; margin: auto;")
    hr.mb-5
    .row.align-items-center.mb-4
      .col-1
        figure
          img(src='@/assets/curso/img33.svg', style="width: 50px; margin: auto;")
      .col-11
        p.mb-0 #[b En cuanto al horizonte temporal:] esto es, el tiempo transcurrido desde que se realiza la compra hasta que el consumidor recibe el incentivo y se pueden diferenciar entre promociones inmediatas y promociones diferidas.
    .row.align-items-end.justify-content-end
      .col-lg-5
        figure
          img(src='@/assets/curso/img37.svg', style="width: 300px; margin: auto;")
      .col-lg-6.mt-4.mt-lg-0
        p En las promociones inmediatas el consumidor recibe el incentivo en el momento en el que realiza la compra sin que se le exija ningún esfuerzo adicional por su parte: descuentos directos, paquetes especiales con mayor cantidad de producto, muestras y regalos directos que acompañan al producto, etc.
        p En las promociones diferidas el incentivo promocional no es inmediato y requiere una participación por parte del consumidor, al que se le exige cierto esfuerzo, como por ejemplo: recortar y guardar los cupones o vales promocionales, enviar los comprobantes de compra para obtener descuentos o regalos, completar formularios para participar en sorteos o concursos, etc.
      .col-12.col-lg-11.mt-0.mt-lg-4
        p En general, el consumidor prefiere los incentivos inmediatos a los diferidos, ya que requieren un menor esfuerzo por su parte. Además, los descuentos diferidos suelen generar una mayor desconfianza y obtienen menor respuesta por parte del consumidor.
    hr.mb-5
    .row.align-items-center.mb-4
      .col-1
        figure
          img(src='@/assets/curso/img34.svg', style="width: 50px; margin: auto;")
      .col-11
        p.mb-0 #[b Según la certeza del incentivo:] esto es, la seguridad en la obtención del mismo, distinguiéndose entre promociones sistemáticas y promociones selectivas.
    .row.align-items-center.justify-content-end.mb-5
      .col-lg-6
        p Las promociones sistemáticas ofrecen un incentivo real e idéntico a todos los compradores. Es decir, el comprador tiene absoluta certeza de que, con la compra del producto, recibirá un incentivo determinado.
        p Por el contrario, en las promociones selectivas el hecho de adquirir el producto no garantiza la obtención del incentivo, como es el caso de los sorteos y los concursos, en los que solo algunos consumidores obtienen el premio o regalo de la promoción.
        .row
          .col-12
            .cajon2.color-primario2.p-4
              .p La mayor parte de los consumidores prefieren los incentivos sistemáticos y, por tanto, seguros, a los incentivos selectivos, aunque ofrezcan un mayor valor unitario.
      .col-lg-5.mt-4.mt-lg-0
        figure
          img(src='@/assets/curso/img38.svg', style="width: 450px; margin: auto;")
    hr.mb-5
    .row.align-items-center.mb-4
      .col-1
        figure
          img(src='@/assets/curso/img35.svg', style="width: 50px; margin: auto;")
      .col-11
        p.mb-0 #[b Según el objetivo perseguido por la empresa:] se pueden diferenciar entre promociones informativas e incentivadoras.
    .row.align-items-center.justify-content-end
      .col-lg-5
        figure
          img(src='@/assets/curso/img39.svg', style="width: 450px; margin: auto;")
      .col-lg-6.mt-4.mt-lg-0
        p Las promociones informativas incluyen los folletos, los expositores especiales, las degustaciones y, en general, aquellas actividades y herramientas destinadas a informar a los consumidores acerca de los productos.
        p Las promociones incentivadoras persiguen hacer la compra más atractiva a través de incentivos monetarios o no monetarios.
    .separador
    #t_3_4
    .titulo-segundo
      h2 3.4 Técnicas de #[i merchandising]
    .row.justify-content-center
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img40.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h4 #[i Merchandising] de presentación
              p Se puede definir como la manera de presentar los artículos y el punto de venta de modo que el acto de compra sea lo más agradable y sencillo posible para el cliente y los más rentable posible para el establecimiento. En definitiva, pretende hacer atractivo y dinámico el punto de venta, con el fin de guiar al consumidor e influir en su comportamiento de compra.
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img41.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h4 #[i Merchandising] de seducción
              p Consiste en la denominada “tienda espectáculo” y pasa por la concepción del mobiliario específico, la decoración, la información, etc., con el objetivo de dar un aspecto seductor al lineal y a la tienda para promover la imagen del propio distribuidor.
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img42.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h4 #[i Merchandising] de gestión 
              p Consiste, como su nombre indica, en gestionar el espacio expositivo y el surtido a efectos de maximizar la satisfacción del cliente y la rentabilidad del establecimiento.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>

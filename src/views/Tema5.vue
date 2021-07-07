<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Diseño de Material P.O.P.
    #t_5_1
    .titulo-segundo
      h2 5.1 Poster de precios 
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/d4gUnNoKQpk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador.mb-5
    #t_5_2
    .titulo-segundo
      h2 5.2 Hablador (sapito)
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2Ch8XZKPBng" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador.mb-5
    #t_5_3
    .titulo-segundo
      h2 5.3 Adhesivo de piso (vinilo floor graphic)
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/gNYA1r9rssc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>

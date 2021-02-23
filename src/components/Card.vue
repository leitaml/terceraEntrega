<template>
  <div>
      
  <div class="row">
    <div class=" col-sm-12 col-md-12 ">
      <div class="section-novedades">
        <div class="card" style="max-width: 65%;">
          <img src="../assets/fondo-coleccionista.jpg" class="card-img-top" alt="foto-coleccionista">

          <div class="card-body">
            <h5 class="card-title">Assassin's Creed Valhalla edición coleccionista</h5>
            <p class="card-text">En Assassin's Creed® Valhalla, encarnarás a Eivor, una feroz leyenda vikinga criada
              entre historias de batallas y gloria. Explora un hermoso mundo abierto y cambiante, ambientado en la
              despiadada Inglaterra de los años oscuros. Saquea a tus enemigos, haz prosperar tu asentamiento y
              consolida tu poder político mientras luchas por ganarte un sitio entre los dioses en el Valhalla. </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"> - Ultimate Edicion PC </li>
            <li class="list-group-item"> - Réplica de Ubicollectibles® de alta calidad de Eivor y su Drakkar (altura:
              30cm) </li>
            <li class="list-group-item"> - Caja de coleccionista única </li>
            <li class="list-group-item"> - El Steelbook® exclusivo de Ubisoft Store, con un diseño único inspirado en
              los emblemas del juego. </li>
            <li class="list-group-item"> - Figura Vikinga de Eivor junto a su cuervo y con su Hacha Danesa (altura: 5cm)
            </li>
            <li class="list-group-item"> - Certificado de Autenticidad Premium, con un número de serie único para cada
              Edición. </li>
            <li class="list-group-item"> - Un pack de 3 litografías mostrando algunos de los artes conceptuales más
              impresionantes creados para el juego. </li>
          </ul>
          <div class="card-body">
            <a href="https://store.ubi.com/es/assassin-s-creed-valhalla-collector-edition/5e84b6f95cdf9a21c0b4e746.html"
              class="card-link btn btn-success " target="_blank">COMPRAR</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.card {
  margin-top: 60px;
  margin-bottom: 60px;
}

.section-novedades{
    display: flex;
    width: 100%;
    height: 100%;
    background-image: url(../assets/edicol1.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    flex-direction: column;
    justify-content: center ;
    align-items: center;
    opacity: 0.9;
}

.card-body{
    text-align: center;
}

/*  @ MEDIA  */
  @media  screen and (max-width: 992px) { 
        .card{
            height: 1100px
        }
        .section-novedades{
            height: 1150px;
        }
    }
</style>
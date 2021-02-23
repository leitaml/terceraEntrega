<template>
  
  <div>
  <!--   Componente NAVBAR --> 
  <Navbar />

  <!--   SECTION CENTRAL  -->
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="novedades-video">
          <h1> Assassins Creed Valhalla - Trailer de Anuncio </h1>
          <iframe class="iframe-video" src="https://www.youtube.com/embed/1Z7mIKGzowQ"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
 
 <!-- Componente CARD -->
  <Card />

<!--  Componente FOOTER -->
  <Footer />

  </div>
  
</template>

<script>
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Card from "../components/Card"

export default {

  components: {
    Footer,
    Navbar,
    Card
  }
}
</script>

<style>

.novedades-video{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 700px;
    margin-top: 100px;
}

.novedades-video h1{
    text-align: center;
    margin: 50px;
    border-radius: 20px;
    text-shadow: 1px 1px 1px white;  
}

.iframe-video{
    width: 100%;
    height: 500px;
}

/* COLORES */
.novedades-video h1{
    background-color: #aaaaaa;
}

/*  @ MEDIA  */
@media  screen and (max-width: 576px) { 
    .novedades-video h1{
        font-size: 25px;
    }
}

</style>
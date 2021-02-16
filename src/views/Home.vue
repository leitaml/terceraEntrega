<template>
  <div>

<!-- Componente NAVBAR --> 
   <Navbar />
  

    <!-- header -->
   
  <header class="header-home">
    <div class="container">
      <div class="row">
        <div class="col-6 col-sm-6 col-md-6 col-lg-6  ">
          <div>
            <h1> Assassin's Creed Valhalla </h1>
            <p>
              Conviértete en un guerrero vikingo legendario criado entre relatos de batalla y
              gloria.
              Saquea a tus enemigos,
              desarrolla tu asentamiento y aumenta tu poder político en busca de ganar un lugar entre los dioses del
              Valhalla.
            </p>
            <a href="https://store.playstation.com/es-ar/product/UP0001-CUSA18522_00-EDITIONSTANDARD0"
              class="btn btn-primary btn mt-5 " target="_blank">RESERVAR AHORA</a>
          </div>
        </div>
      </div>
    </div>
  </header>
  
  <!--  Section  -->
  <section>
    <div class="container ">
      <div class="row ">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12">
          <div class="title-section">
            <h2> DÁ VIDA A LA LEYENDA DE UN SAQUEADOR VIKINGO </h2>
            <p> En Assassin's Creed Valhalla, conviértete en Eivor, un legendario saqueador vikingo en busca de la
              gloria.
              Explora un mundo abierto, dinámico y hermoso en el brutal contexto de la Inglaterra de la Edad Media.
              Ataca
              a tus enemigos, haz crecer tu asentamiento y aumenta tu poder político en tu camino hacia ganarte un lugar
              entre los dioses en Valhalla.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-4 col-sm-4 col-md-4 col-lg-4">
          <div class="item-section">
            <h3 class="titulo-section"> Escribe tu propia saga vikinga</h3>
            <p class="parrafo-section"> Ábrete camino a través de Inglaterra con la avanzada mecánica de este juego de
              rol. Pelea en batallas brutales, lidera salvajes incursiones o desarrolla estrategias y alianzas con
              otros
              líderes para obtener la victoria. Cada una de tus elecciones en combate y en las conversaciones es un
              paso
              más en tu camino hacia la grandeza. </p>
          </div>
        </div>
        <div class="col-8 col-sm-8 col-md-8 col-lg-8 ">
          <div>
            <img class="image-section1" src="../assets/assassins-creed-valhalla.jpg" alt="imagen-section">
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-8 col-sm-8 col-md-8 col-lg-8">
          <div>
            <img class="image-section1" src="../assets/carousel-3.jpg" alt="imagen-section">
          </div>
        </div>
        <div class="col-4 col-sm-4 col-md-4 col-lg-4">
          <div class="item-section">
            <h3 class="titulo-section"> Participa en combates viscerales</h3>
            <p class="parrafo-section"> Da rienda suelta al despiadado estilo de lucha de un guerrero vikingo
              empuñando hachas, espadas o incluso escudos contra los enemigos más implacables. Decapita a tus
              oponentes en combates cuerpo a cuerpo, acribíllalos con flechas o asesínalos con tu Hoja Oculta. </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Article -->
  <article>
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12">
          <h2 class="titulo-article"> Avances del Juego
            <img class="image-article" src="../assets/vikingo.png" alt="v">
          </h2>
<!-- Componente CAROUSEL --> 
          <Carousel />
        </div>
      </div>
    </div>
  </article>

<!-- Componente FOOTER --> 
   <Footer />
  </div>
</template>

<script>

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Carousel from '../components/Carousel.vue'

window.$ = window.jQuery = require("jquery");

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
    Carousel
  
  }, 
}
</script>

<style>

.header-home{
    background-image: url(../assets/image-section-2.jpg);
    width: 100%;
    height: 700px;
    opacity: 0.9;
    overflow: hidden;
}

.header-home div h1{
    font-size: 50px;
    margin-top: 130px;
}

.header-home div p {
    font-size: 25px ;
    margin-top: 10px;
}

/* Section */

section{
    width: 100%;
    height: 1250px;
    margin: auto;
    text-align: center;
    font-size: 40px;
}

.title-section{
    margin-bottom: 100px;
}

section div h2{
    font-size: 40px ;
    margin-top: 50px;
}

section div p{
    font-size: 20px;
    margin-top: 20px;
}

.item-section{
    width: 100%;
    height: 400px;
    margin-bottom: 40px;
    border: 1px solid #f0a500;
    border-radius: 20px;
}

.parrafo-section{
    font-size: 18px;
}

.image-section1 , .image-section2{
    width: 100%;
    height: 400px;
    border-radius: 20px;
    opacity: 0.9;
}
    
/* Article */

.div-center-page {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
    background-image: url(/assets/navi3.png);
    background-repeat: no-repeat;
    background-size: 25%;
    margin-top: 100px;
    opacity: 0.8;
}

article {
    height: 860px;
}

.titulo-article {
    text-align: center;
    font-size: 50px;
    border-radius: 15px;
    margin-bottom: 50px;
    opacity: 0.8; 
    margin-top: 30px;
}

.image-article{
    width: 8%;
    margin-left: 15px;
}

/* COLORES */

/*  Header */
.header-home div h1{
      color: black;
}

.header-home div p {
    color: #1a1a2e;
}

/* Section */
.section{
    color: black;
}

section div h2{
    color: #f0a500;
}

section div p{
    color: #7d0633;
}

.item-section{
    background-color: #393e46;
    color: white;
 }

.parrafo-section{
    color: white;
 }

 .titulo-section{
    color: #cff6cf;
 }

 /* Article */
 .titulo-article{
    color: #393e46;
    background-color: #f4f4f4;
  }

  /*  @ MEDIA  */
  @media  screen and (max-width: 490px){
    .titulo-article{
        font-size: 25px;
    }

    section{
        height: 1350px;
    }

    article{
        height: 550px;
    }
  }

  @media screen and (max-width: 768px) { 
      .titulo-section{
          font-size: 18px;
      }

      .parrafo-section{
          font-size: 10px;
      }

      .titulo-article{
          margin-top: 200px;
      }
  }
</style>

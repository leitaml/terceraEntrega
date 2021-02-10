<template>
  <div>
     
  <nav class="navbar navbar-expand-lg navbar-light bg-light">

    <div class="container">

      <a class="navbar-brand " href="#">
        <img class="logo-play" src="../assets/logo-play-color.png" alt="logo-play">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>


      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto btn">

          <li class="nav-item active">
         
             <router-link to="/">Home</router-link> |
     
          </li>

          <li class="nav-item ">
         
            <router-link to="/Novedades">Novedades</router-link> |
          </li>


          <li class="nav-item">
         
           <router-link to="/Contacto">Contacto</router-link> |
          </li>

          <li class="nav-item ">
         
             <router-link to="/Personajes">Personajes</router-link> 
          </li>


        </ul>
      </div>
    </div>
  </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>


.nav-item{
    font-size: 20px;
}
 


.nav-item:hover{
     
     border-radius: 15px;
     color: red;
     
}



.logo-play{
    width: 15%;
    align-items: center;
}


  #navbarNav{
    text-shadow: 1px 1px 1px white;
    
}



/*  COLORES */


*

.nav-item:hover{
    background-color: #c7cfb7;

    }


</style>
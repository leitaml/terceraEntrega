<template>
<div>

   <!-- Componente NABVAR -->
   <Navbar />
  
  <!-- Seccion Central TABLA -->

  <div class="section-personajes">
         <div>
          <img class="imagen-trans" src="../assets/fondo-personajes2.jpg" alt="foto fondo">
        </div>
  </div>

  <div class="seccion-tabla">
      <h1 class="titulo-personajes"> PERSONAJES DEL JUEGO</h1>

     <div class="container">
       <div class="row">
         <div class="col-6 col-md-6">

              <div class="zona-boton">
                 <label class="switch">
                    <input id="checkbox-filtro" type="checkbox">
                    <span class="slider round"></span>
                 </label>
                      <p class="parrafo-filtro">Activar / Desactivar FILTRO</p>
              </div>

         </div>
           <div class="col-6 col-md-6">
             <div class="zona-buscar" id="buscador-filtro">

                <input class="form-control input-filtro hidden" id="inputTabla" type="search" placeholder="Filtrar Busqueda"
                 aria-label="Search">
            </div>

          </div>
      </div>
    </div>
    </div>


    <!-- Componente Tabla -->
    <Tabla />



    <!-- Button modal AGREGAR -->
    <button type="button" class="btn btn-success btn-agregar" data-toggle="modal" data-target="#staticBackdrop">
      Agregar Personaje
    </button>

    <!--Componente  Modal AGREGAR -->
    <ModalAgregar />


    <!-- Componenete MODAL EDITAR -->
    <ModalEditar />


    <!-- Componente MODAL ELIMINAR -->
    <ModalEliminar />



    <!-- Componente FOOTER  -->
    <Footer />



</div>
</template>



<script>
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ModalAgregar from "../components/ModalAgregar"
import ModalEditar from "../components/ModalEditar"
import ModalEliminar from "../components/ModalEliminar"
import Tabla from "../components/Tabla"

export default {
  components: {
    Footer,
    Navbar,
    ModalAgregar,
    ModalEditar,
    ModalEliminar,
    Tabla
  },
 


}
</script>

<style>

       
.section-personajes {
    width: 100%;
    height: 591.3px;
    display: flex;

}

.seccion-tabla{
    width: 100%;
    height: 1300px;
}


.imagen-trans{

        display: flex;
        position: absolute;
        width: 100%;
        height: 90%;
        top: 100px;
        left: 0;
        
}

    


.titulo-personajes{
    text-align: center;
    font-size: 20px;
    text-decoration: underline;
    padding: 25px;
}


table {
    width: 1000px;
    font-size: 16px;
    text-align: center;
    border: 1px solid black;
    height: 340px; 
    margin-left: 170px;
       
}

.td-Head{
    background-color: #f4f4f4;
    border: solid 1px black;
    padding: 14px;
    font-size: 18px;
    font-weight: bold;   
}
 

.td-Elementos{
   border: 1px solid black;
   padding: 6px;
}

.btn-accion{
    margin-top: 5px;
    margin-right: 5px;
    display: inline-block;
    width: 75px;
    border-radius: 5px;
    padding: 1px;
    margin-bottom: 5px;
}

.btn-agregar{
 
    margin-left: 580px;
    margin-top: 40px;   
    margin-bottom: 30px;
}

.tr-Elementos{
    border: 1px solid black;
 }


 .btn-eliminar{
    margin-top: 5px;
    margin-right: 5px;
    display: inline-block;
    width: 75px;
    border-radius: 5px;
    padding: 1px;
    margin-bottom: 5px;
 }

 .titulo-modal{
     font-size: 15px;
     margin-top: 15px;
 }

 .form-control{
      margin-bottom: 10px;
      width: 50%;
 }

 .input-filtro{
   width: 200px;
 }


 .zona-boton{
width: 100%;
height: 100px;

 }
 .zona-buscar{
    width: 100%;
    height: 100px;
    margin-top: 35px;
  
    
 }
 .parrafo-filtro{
     font: bold;
     font-size: 15px;
     font-weight: 500;
     margin-left: 65px;
     
 }



 .filtro{
     width: 100%;
     padding-bottom: 25px;
     
 }
 
    


 
/* progress bar */

.btn-spinner{
    display: flex;
    margin-bottom: px;
    margin-left: 573px;
    
  
}


.hidden{

    visibility: hidden;
}

.visible{
    visibility: visible;
}

.none{
   display: none;
}

.block{
    display: block;
}



/* Toggle Bar */

.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    margin-top: 28px;
    margin-left: 127px;
  }
  
  .switch input { 
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  input:checked + .slider {
    background-color: #2196F3;
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }
  
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  
  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }
  
  .slider.round:before {
    border-radius: 50%;
  }



    /*  @ MEDIA  */

      
        

</style>
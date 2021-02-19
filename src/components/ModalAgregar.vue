<template>

<div>
  
   <BtnModalAgregar />
   
 <!--  <b-modal id="modal-lg" title="AGREGAR PERSONAJE">

     <div class="modal-body">
            <div>
              <input id="nombreModal" type="text" class="form-control input-modal" placeholder="NOMBRE">
              <input id="origenModal" type="text" class="form-control input-modal" placeholder="ORIGEN">
              <input id="edadModal" type="text" class="form-control input-modal" placeholder="EDAD">
              <input id="caracteristicaModal" type="text" class="form-control input-modal" placeholder="CARACTERISTICA">
              <input id="habilidadModal" type="text" class="form-control input-modal" placeholder="HABILIDAD">
            </div>
            <h4 class="titulo-modal">
              SE ESTA POR AGREGAR UN NUEVO PERSONAJE!
              DESEA CONTINUAR?
            </h4>
          </div>
          
        

  </b-modal> -->
  
</div>
  
</template>



<script>

import BtnModalAgregar from "../components/BtnModalAgregar"

export default {

  components: {
    BtnModalAgregar,
  }
}
 
</script>

<style>
.titulo-modal{
  font-size: 15px;
}

.input-modal{
  margin-bottom: 15px;
}

</style>
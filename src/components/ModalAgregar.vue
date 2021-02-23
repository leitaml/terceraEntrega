<template>

  <div>
    <!-- a este componente padre le tuve que hacer un emit para que se comunique con su hijo -->
    <BtnModalAgregar  @accionAgregar="showModal" />
  
    <b-modal size="lg" ref="my-modal" hide-footer title="AGREGAR PERSONAJE :">
      <div class="d-block text-center modal-editar">
            <input id="agregarNombre" type="text" class="form-control input-modal" placeholder="Nombre">
            <input id="agregarOrigen" type="text" class="form-control input-modal" placeholder="Origen">
            <input id="agregarEdad" type="text" class="form-control input-modal" placeholder="Edad">
            <input id="agregarCaracteristica" type="text" class="form-control input-modal" placeholder="Caracteristica">
            <input id="agregarHabilidad" type="text" class="form-control input-modal" placeholder="Habilidad">
             <h4 class="titulo-modal">
                ESTA POR AGREGAR UN NUEVO PERSONAJE!
                DESEA GUARDARLO?
            </h4>
      </div>
       <b-button class="mt-2" variant="outline-primary" block @click="toggleModal" >Agregar</b-button>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Cancelar</b-button>
      
     
    </b-modal>
  </div>
  
  
</template>

<script>

import BtnModalAgregar from "./BtnModalAgregar"

export default {

  components: {
    BtnModalAgregar,
  },

    methods: {
      showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      toggleModal() {
        
        this.$refs['my-modal'].toggle()
        console.log("se agrego")

      },
    
    }
  }

 
</script>

<style>
.input-modal{
  margin-bottom: 15px;
}

.titulo-modal{
  margin-bottom: 30px;
  margin-top: 10px;
  font-size: 20px;
}

</style>
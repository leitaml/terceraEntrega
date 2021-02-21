<template>
  <div>
    <b-button id="editar" @click="showModal">Editar</b-button>
    

    <b-modal size="lg" ref="my-modal" hide-footer title="INGRESE SUS NUEVOS DATOS :">
      <div class="d-block text-center modal-editar">
            <input id="editarNombre" type="text" class="form-control input-modal" placeholder="Nombre">
            <input id="editarOrigen" type="text" class="form-control input-modal" placeholder="Origen">
            <input id="editarEdad" type="text" class="form-control input-modal" placeholder="Edad">
            <input id="editarCaracteristica" type="text" class="form-control input-modal" placeholder="Caracteristica">
            <input id="editarHabilidad" type="text" class="form-control input-modal" placeholder="Habilidad">
             <h4 class="titulo-modal">
                ESTA POR EDITAR EL PERSONAJE!
                DESEA GUARDARLO?
            </h4>
      </div>
       <b-button class="mt-2" variant="outline-primary" block >Guardar</b-button>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Cancelar</b-button>
      
     
    </b-modal>
  </div>
</template>

<script>
  export default {
    methods: {
      showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
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




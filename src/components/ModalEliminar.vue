<template>
  <div>
    <b-button id="Eliminar" @click=" showModal">Eliminar</b-button>
    

    <b-modal size="lg" ref="my-modal" hide-footer title="ELIMINAR PERSONAJE :">
      <h4 class="frase-modal">
               ESTA SEGURO QUE DESEA ELIMINAR EL PERSONAJE?
            </h4>
       <b-button class="mt-2" variant="outline-primary" block >Eliminar</b-button>
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

.frase-modal{
  font-size: 19px;
  margin-bottom: 40px;
  margin-top: 15px;
}
</style>
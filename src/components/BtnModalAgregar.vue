<template>
<div>

  
  
   <b-button class="btn-agregar btn btn-success" id="agregar" @click="accionAgregar" >Agregar Personaje</b-button>
</div>
  
</template>

<script>
export default {
    methods: {
       accionAgregar() {
          this.$emit("accionAgregar")
       }
    }

}

</script>

<style>

</style>
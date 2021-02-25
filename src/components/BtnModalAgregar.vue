<template>
  <div>
      <div class="button-center">
        <b-button class="btn-agregar btn btn-success" @click="abrirModal"> {{ nameButton }} </b-button>
      </div>
  </div>
</template>

<script>
export default {
    props: ["nameButton"],
    data() {
        return {
            nombre: "juan"
        }
    },
  methods: {
      abrirModal() {
          this.$emit("abrirModal")
      }
  }
        
        
    
}
</script>

<style>

</style>
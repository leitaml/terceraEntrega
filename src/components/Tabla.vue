<template>
  <div>
      <table id="tablaDinamica"> </table>

      
    <div v-for="item in arrayPersonajes" :key="item.id">
      {{ item }}
    </div>

  </div>
</template>

<script>
export default {

          data() {
    return {
      arrayPersonajes: []
    }
  },
         methods: {

    async consumirApi() {
      try {
        const data = await fetch("https://602367ff6bf3e6001766b0c8.mockapi.io/api/v1/users")
        const personajes = await data.json()
        console.log(personajes)
        this.arrayPersonajes = personajes
      } catch (error) {
        console.log(error)
      }
    }
  }, 

  created() {
    this.consumirApi()
  }

}
</script>

<style>

</style>
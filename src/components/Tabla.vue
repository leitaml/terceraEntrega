<template>
  <div>

       <table class="table table-dark table-striped">
        <thead>
             <tr>
               <th scope="col">#</th>
               <th scope="col">Nombre</th>
               <th scope="col">Origen</th>
               <th scope="col">Edad</th>
               <th scope="col">Caracteristica</th>
               <th scope="col">Habilidad</th>
            </tr>
        </thead>
       <tbody>
    <tr   v-for="item in arrayPersonajes" :key="item.id"> {{ item }}>
      <th scope="row">{{ item.id }}</th>
               <td>{{ item.Nombre }}</td>
               <td>{{ item.Origen }}</td>
               <td>{{ item.Edad }}</td>
               <td>{{ item.Caracteristica }}</td>
               <td>{{ item.Habilidad}}</td> 
    </tr>
  </tbody>
</table>

    

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

/* CICLO DE VIDA */
     created() {
    this.consumirApi() 
  } 

}

</script>

<style>

</style>
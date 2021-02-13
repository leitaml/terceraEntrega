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
               <th scope="col">Accion</th>
               
            </tr>
        </thead>
       <tbody>
    <tr   v-for="item in arrayPersonajes" :key="item.id"> 
      <th scope="row">{{ item.id }}</th>
               <td>{{ item.Nombre }}</td>
               <td>{{ item.Origen }}</td>
               <td>{{ item.Edad }}</td>
               <td>{{ item.Caracteristica }}</td>
               <td>{{ item.Habilidad}}</td> 
               <td> <button class="btn btn-primary btn-sm btn-editar"> Editar</button> 
                    <button class="btn btn-danger btn-sm btn-eliminar"> Eliminar</button>
               </td> 
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
     mounted() {
    this.consumirApi() 
  } 

}

</script>

<style>

.btn-editar{
  margin-right: 15px;
}

</style>
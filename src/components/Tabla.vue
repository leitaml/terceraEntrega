<template>
  <div>

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
             
             <input class="form-control input-filtro " id="inputTabla" type="search" placeholder="Filtrar Busqueda" aria-label="Search"
              v-model="nuevoArray">
              
            
              
                 
                 
            </div>

          </div>
      </div>
    </div>
    </div>


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

        <tr   v-for=" item in filtrarTabla" :key="item.Nombre" >  


    <tr   v-for=" (item , index) in arrayPersonajes" :key="item.id" > 
      <th scope="row" @click="rows($event.target)">{{ item.id }}</th>
               <td>{{ item.Nombre }}</td>
               <td>{{ item.Origen }}</td>
               <td>{{ item.Edad }}</td>
               <td>{{ item.Caracteristica }}</td>
               <td>{{ item.Habilidad}}</td> 
               <td> <button class="btn btn-primary btn-sm btn-editar" > Editar</button> 
                    <button class="btn btn-danger btn-sm btn-eliminar" @click="eliminar(index , item)"> Eliminar</button>
               </td> 
    </tr>
  </tbody>
</table>

 

    

  </div>
</template>

<script>
import axios from "axios"

export default {

          data() {
    return {
      arrayPersonajes: [] ,
      nuevoArray: ""
      
     
    }
  },
     mounted : function() {
       let consumirApi = "https://602367ff6bf3e6001766b0c8.mockapi.io/api/v1/users"
       axios.get(consumirApi).then (data => {
         console.log(data)
         this.arrayPersonajes = data.data
       })
     },
     methods : {
       editar(id) {
         console.log(id)
       },

       eliminar(index , item) {
        
        console.log(index)
        console.log(item)
        this.arrayPersonajes.splice(index , 1)
       }
     },

     limpiarInput() {
         this.nuevoArray = ""
     },
     

     computed: {
       filtrarTabla : function () {
         console.log(this.nuevoArray)
            return this.arrayPersonajes = this.arrayPersonajes.filter(( item) => {
              return item.Nombre.match(this.nuevoArray)
              
            })
       }
     }



    /*      methods: {

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
  },  */
  

/* CICLO DE VIDA 
     created() {
    this.consumirApi() 
  } */

}
 
</script>

<style>
.btn-agregar{
 
    margin-left: 580px;
    margin-top: 40px;   
    margin-bottom: 500px;
}

.tr-Elementos{
    border: 1px solid black;
 }


 .input-filtro{
   width: 400px
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
 
    



.seccion-tabla{
    width: 100%;
    height: 250px;
}

.btn-editar{
  margin-right: 15px;
}

</style>
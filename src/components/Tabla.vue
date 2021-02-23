<template>
  <div>

    <!-- MODAL DELETE -->
    <b-modal ref="myModalDelete" centered hide-footer hide-header>
      <div>
        <h3 class="font-weight-light">¿Quieres eliminar esta fila?</h3>
      </div>
      <div class="float-right pt-4">
        <b-btn type="submit" variant="danger" @click="deletePersonaje">Delete</b-btn> 
      </div>
      <div class="float-right pr-2 pt-4">
        <b-btn  type="submit" variant="primary"  style="padding-left: 10px" @click="hideModalDelete">Cancel</b-btn>
      </div>
    </b-modal>


    <!-- MODAL AGREGAR -->
    <b-modal ref="myModalAgregar" id="modal-lg" title="AGREGAR PERSONAJE" centered hide-footer hide-header>
      <div class="modal-body">
            <div>
              <input id="nombreModal" type="text" class="form-control input-modal" placeholder="NOMBRE" v-model="nombre" > 
              <input id="origenModal" type="text" class="form-control input-modal" placeholder="ORIGEN" v-model="origen"> 
              <input id="edadModal" type="text" class="form-control input-modal" placeholder="EDAD"  v-model="edad">
              <input id="caracteristicaModal" type="text" class="form-control input-modal" placeholder="CARACTERISTICA" v-model="caracteristica">
              <input id="habilidadModal" type="text" class="form-control input-modal" placeholder="HABILIDAD" v-model="habilidad">
            </div>
            <h4 class="titulo-modal">
              SE ESTA POR AGREGAR UN NUEVO PERSONAJE!
              DESEA CONTINUAR?
            </h4>
            <div class="float-right pt-4">
              <b-btn type="submit" variant="danger" @click="agregarPersonaje">Agregar</b-btn> 
            </div>
            <div class="float-right pr-2 pt-4">
              <b-btn  type="submit" variant="primary"  style="padding-left: 10px" @click="hideModalAgregar">Cancel</b-btn>
            </div>
        </div>
    </b-modal>

    <!-- MODAL EDITAR -->
     <b-modal ref="myModalEditar" id="modal-lg" title="EDITAR PERSONAJE" centered hide-footer hide-header>
      <div class="modal-body">
            <div>
              <input id="editarNombre" type="text" class="form-control input-modal" placeholder="NOMBRE">
              <input id="editarOrigen" type="text" class="form-control input-modal" placeholder="ORIGEN" >
              <input id="editarEdad" type="text" class="form-control input-modal" placeholder="EDAD">
              <input id="editarCaracteristica" type="text" class="form-control input-modal" placeholder="CARACTERISTICA" >
              <input id="editarHabilidad" type="text" class="form-control input-modal" placeholder="HABILIDAD">
            </div>
            <h4 class="titulo-modal">
              SE ESTA POR EDITAR UN NUEVO PERSONAJE!
              DESEA CONTINUAR?
            </h4>
            <div class="float-right pt-4">
              <b-btn type="submit" variant="danger" @click="editarPersonaje">Editar</b-btn> 
            </div>
            <div class="float-right pr-2 pt-4">
              <b-btn  type="submit" variant="primary"  style="padding-left: 10px" @click="hideModalEditar">Cancel</b-btn>
            </div>
        </div>
    </b-modal>


    <!-- SECCION FILTRO -->
    <div class="seccion-tabla">
      <h1 class="titulo-personajes"> PERSONAJES DEL JUEGO </h1>
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

    <!-- SECCION TABLA -->
    <div class="table-responsive">
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
            <tr v-for="(item, index) in arrayPersonajes" :key="item.id" > 
              <th scope="row">{{ index }}</th>
              <td>{{ item.Nombre }}</td>
              <td>{{ item.Origen }}</td>
              <td>{{ item.Edad }}</td>
              <td>{{ item.Caracteristica }}</td>
              <td>{{ item.Habilidad}}</td> 
              
              <td>  
                    <b-button variant="primary" @click="showModalEditar(item.id)"> Editar</b-button> 
                    <b-button variant="danger" @click="showModalDelete(item.id)">Eliminar</b-button>
              </td>
            </tr>
        </tbody>
      </table>

       <!-- BTN MODAL AGREGAR -->
    <div class="button-center">
        <b-button class="btn-agregar btn btn-success" @click="showModalAgregar()">Agregar Personaje</b-button>
      </div>


    </div>
 </div>
</template>

<script>
import axios from "axios"

export default {

data() {
    return {
      arrayPersonajes: [],
      nuevoArray: "",
      nombre: "",
      origen: "",
      edad: "",
      caracteristica: "",
      habilidad: "",
      nombreEditar: "",
      edadEditar: "" ,
      

    }
  },
created () {
 let consumirApi = "https://602367ff6bf3e6001766b0c8.mockapi.io/api/v1/users"
  axios.get(consumirApi).then (data => {
    console.log(data)
    this.arrayPersonajes = data.data
  })
},
methods :
        //showMODals
{
  showModalDelete(id) {
    this.id = id
    this.$refs['myModalDelete'].show()
  },

 showModalEditar(id) {
   
    this.$refs['myModalEditar'].show()
   
                        console.log(this.id)
                        
                        this.nombreEditar = this.arrayPersonajes.nombre;
                        this.edadEditar = this.arrayPersonajes[id].edad;
 },

  showModalAgregar() {
    this.$refs['myModalAgregar'].show()
  },

    // hideModals
  hideModalDelete() {
    this.$refs['myModalDelete'].hide()
  },

  hideModalEditar() {
      this.$refs['myModalEditar'].hide()
  },
  
  hideModalAgregar() {
     this.$refs['myModalAgregar'].hide()
    
  },
  

  deletePersonaje () {
      // axios.delete(`http://localhost:5000/api/jobs/${this.ID}`)
      //   .then((res) => {
      //     this.job_title = ''
      //     this.job_name = ''
      //     this.job_location = ''
      //     this.job_postingURL = ''
      //     this.job_postingOn = ''
      //     this.job_postingBy = ''
      //     this.getJobs()
      //   console.log(res)
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })

      this.arrayPersonajes = this.arrayPersonajes.filter(x => x.id !== this.id);
      this.$refs['myModalDelete'].hide()
  },
   agregarPersonaje() {
            
                this.$refs['myModalAgregar'].hide()
                console.log(this.nombre)
                console.log(this.origen)
                console.log(this.edad)
                console.log(this.caracteristica)
                console.log(this.habilidad)
                this.arrayPersonajes.push({
    
                    nombre: this.nombre,
                    origen: this.origen,
                    edad: this.edad,
                    caracteristica: this.caracteristica,
                    habilidad: this.habilidad,
                    });
               
                    this.nombre = '';
                    this.origen= '';
                    this.edad = '';
                    this.caracteristica = '';
                    this.habilidad = '';

            },

 
    editarPersonaje() {
                        
          this.$refs['myModalEditar'].hide()
                    },
     
      
  
     

  limpiarInput() {
      this.nuevoArray = ""
    }
  },

  computed: {
    filtrarTabla : function () {
      console.log(this.nuevoArray)
          return this.arrayPersonajes = this.arrayPersonajes.filter(( item) => {
            return item.Nombre.match(this.nuevoArray)
        })
      }
    }
  }
 
</script>

<style>
/* .btn-agregar{
    margin-left: 580px;
    margin-top: 40px;   
    margin-bottom: 500px;
}

.tr-Elementos{
    border: 1px solid black;
 } */

.input-filtro {
 width: 400px
}

.zona-boton {
  width: 100%;
  height: 100px;
}
 
.zona-buscar {
  width: 100%;
  height: 100px;
  margin-top: 35px;
}
 
.parrafo-filtro {
   font: bold;
   font-size: 15px;
   font-weight: 500;
   margin-left: 65px;
}

.filtro{
   width: 100%;
   padding-bottom: 25px;
}

.seccion-tabla {
    max-width: 100%;
    height: 250px;
} 

.btn-editar {
  margin-right: 15px;
}

/* .modal {
  position:absolute;
  background: none;
  box-shadow: none;
}

.modal-backdrop {
  position: unset;
} */

.titulo-modal {
  font-size: 15px;
}

.input-modal {
  margin-bottom: 15px;
}
.button-center {
  text-align: center;
  padding: 10px 0 20px 0px;
}

</style>
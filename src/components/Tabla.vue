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
              <input id="nombreModal" type="text" class="form-control input-modal" placeholder="NOMBRE" v-model="nombre">
              <input id="origenModal" type="text" class="form-control input-modal" placeholder="ORIGEN" v-model="origen">
              <input id="edadModal" type="text" class="form-control input-modal" placeholder="EDAD" v-model="edad">
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
              <input id="editarNombre" type="text" class="form-control input-modal" placeholder="NOMBRE" v-model="nombre">
              <input id="editarOrigen" type="text" class="form-control input-modal" placeholder="ORIGEN" v-model="origen">
              <input id="editarEdad" type="text" class="form-control input-modal" placeholder="EDAD" v-model="edad">
              <input id="editarCaracteristica" type="text" class="form-control input-modal" placeholder="CARACTERISTICA" v-model="caracteristica">
              <input id="editarHabilidad" type="text" class="form-control input-modal" placeholder="HABILIDAD" v-model="habilidad">
            </div>
            <h4 class="titulo-modal">
              SE ESTA POR EDITAR UN NUEVO PERSONAJE!
              DESEA CONTINUAR?
            </h4>
            <div class="float-right pt-4">
              <b-btn type="submit" variant="danger" @click="editarPersonaje">Editar</b-btn>
            </div>
            <div class="float-right pr-2 pt-4">
              <b-btn  type="submit" variant="primary"  style="padding-left: 10px" @click="hideModal">Cancel</b-btn>
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
                      <input id="checkbox-filtro" type="checkbox" @click="filtro = !filtro">
                      <span class="slider round"></span>
                    </label>
                        <p class="parrafo-filtro">Activar / Desactivar FILTRO</p>
                </div>
            </div>
              <div class="col-6 col-md-6">
                <div class="zona-buscar" id="buscador-filtro">
                <input class="form-control input-filtro " id="inputTabla" type="search" placeholder="Filtrar Nombre" aria-label="Search"
                v-model="filtroNombre" v-if="filtro">
              </div>
            </div>
        </div>
      </div>
    </div>

    <!-- SECCION TABLA -->
    <div class="table-responsive">
      <table class="table table-dark table-striped">
        <section v-if="errored">
          <p>Lo sentimos, no es posible obtener la información en este momento, por favor intente nuevamente mas tarde</p>
        </section>
        <div v-if="loading">Cargando...</div>
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
                    <b-button class="boton-editar" variant="primary" @click="showModalEditar(item.id, index)"> Editar</b-button> 
                    <b-button variant="danger" @click="showModalDelete(item.id)">Eliminar</b-button>
              </td>
            </tr>
        </tbody>
      </table>

    <!-- MODAL AGREGAR -->
      <div class="button-center">
        <b-button class="btn-agregar btn btn-success" @click="showModalAgregar()">Agregar Personaje</b-button>
      </div>


    </div>
 </div>
</template>

<script>
import axios from "axios"

export default {
  components: {
},


data() {
    return {
      arrayPersonajes: [],
      filtroNombre: "",
      filtro : false,
      nombre: "",
      origen: "",
      edad : 0,
      caracteristica : "",
      habilidad : "",
      loading: true,
      errored: false,
    }
},

mounted () {
  this.getDatosTabla();
},

methods : {
  getDatosTabla () {
      axios.get("https://602367ff6bf3e6001766b0c8.mockapi.io/api/v1/users")
      .then(data => {
        this.arrayPersonajes = data.data
      })
      .catch((error) => {
        console.log(error);
        this.errored = true
      })
      .finally(() => this.loading = false
      )
  },
  
  showModalDelete(id) {
    this.id = id
    this.$refs['myModalDelete'].show()
  },
  
  showModalAgregar() {
    this.nombre = "",
    this.origen = "",
    this.edad = 0,
    this.caracteristica = "",
    this.habilidad = ""
    this.$refs['myModalAgregar'].show()
  },

  showModalEditar(id, index) {
    this.id = id;
    this.nombre = this.arrayPersonajes[index].Nombre,
    this.origen = this.arrayPersonajes[index].Origen,
    this.edad = this.arrayPersonajes[index].Edad,
    this.caracteristica = this.arrayPersonajes[index].Caracteristica,
    this.habilidad = this.arrayPersonajes[index].Habilidad,
    this.$refs['myModalEditar'].show()
  },

  hideModal() {
    // this.$root.$emit('bv::hide::modal','myModal')
    this.$refs['myModalDelete'].hide()
    this.$refs['myModalAgregar'].hide()
    this.$refs['myModalEditar'].hide()
  },

  hideModalEditar() {
      this.$refs['myModalEditar'].hide()
  },
  
  hideModalAgregar() {
     this.$refs['myModalAgregar'].hide()
    
  },
  

  deletePersonaje () {
      axios.delete(`https://602367ff6bf3e6001766b0c8.mockapi.io/api/v1/users/${this.id}`)
      .then(() => {
        this.getDatosTabla()
      })
      .catch((error) => {
        console.log(error);
      })
      this.$refs['myModalDelete'].hide()
  },

  agregarPersonaje () {
      let datos = {
        Nombre : this.nombre == "" ? "default" : this.nombre,
        Origen : this.origen == "" ? "default" : this.origen,
        Edad : this.edad == 0 ? 0 : this.edad,
        Caracteristica : this.caracteristica == "" ? "default" : this.caracteristica,
        Habilidad : this.habilidad == "" ? "default" : this.habilidad,
      };
      axios.post("https://602367ff6bf3e6001766b0c8.mockapi.io/api/v1/users", datos)
        .then(() => {
          this.getDatosTabla()
        })
       .catch(function (error) {
        console.log(error);
      }).finally(() => 
        this.nombre = "",
        this.origen = "",
        this.edad = 0,
        this.caracteristica = "",
        this.habilidad = ""
      )
      
      this.$refs['myModalAgregar'].hide()
    },

  editarPersonaje() {
     let datos = {
        Nombre : this.nombre == "" ? "default" : this.nombre,
        Origen : this.origen == "" ? "default" : this.origen,
        Edad : this.edad == 0 ? 0 : this.edad,
        Caracteristica : this.caracteristica == "" ? "default" : this.ncaracteristicaombre,
        Habilidad : this.habilidad == "" ? "default" : this.habilidad,
    };
    axios.put(`https://602367ff6bf3e6001766b0c8.mockapi.io/api/v1/users/${this.id}`, datos)
    .then(() => {
        this.getDatosTabla()
        })
    .catch(function (error) {
    console.log(error);
    })
    .finally(() => 
        console.log()
    )
    this.$refs['myModalEditar'].hide()
  }
},

computed: {
  // filtrarTabla : function () {
  //   console.log(this.nuevoArray)
  //       return this.arrayPersonajes = this.arrayPersonajes.filter(( item) => {
  //         return item.Nombre.match(this.nuevoArray)
  //     })
  //   }
  },
}
</script>

<style>
.input-filtro {
 width: 400px
}

.boton-editar {
  margin-right: 20px;
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

.btn-editar {
  margin-right: 15px;
}

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
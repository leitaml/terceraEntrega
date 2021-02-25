<template>
  <div>
    <!-- MODAL DELETE -->
    <b-modal ref="myModalDelete" centered hide-footer hide-header>
      <div>
        <h3 class="font-weight-light">¿Quieres eliminar esta fila?</h3>
      </div>
      <div class="float-right pt-4">
        <b-btn type="submit" variant="danger"  @click="deletePersonaje">Delete</b-btn> 
      </div>
      <div class="float-right pr-2 pt-4">
        <b-btn  type="submit" variant="primary"  style="padding-left: 10px" @click="hideModal">Cancel</b-btn>
      </div>
    </b-modal>

    <!-- MODAL AGREGAR -->
    <b-modal ref="myModalAgregar" id="modal-lg" title="AGREGAR PERSONAJE" centered hide-footer hide-header>
      <div class="modal-body">
            <div>
              <input id="nombreModal" type="text" class="form-control input-modal" placeholder="NOMBRE" v-model="nombre">
              <input id="origenModal" type="text" class="form-control input-modal" placeholder="ORIGEN" v-model="origen">
              <input id="edadModal" type="text" class="form-control input-modal" placeholder="EDAD" v-model.number="edad">
              <input id="caracteristicaModal" type="text" class="form-control input-modal" placeholder="CARACTERISTICA" v-model="caracteristica">
              <input id="habilidadModal" type="text" class="form-control input-modal" placeholder="HABILIDAD" v-model="habilidad">
            </div>
            <h4 class="titulo-modal">
              SE ESTA POR AGREGAR UN NUEVO PERSONAJE!
              DESEA CONTINUAR?
            </h4>
            <div class="float-right pt-4">
              <b-btn type="submit" variant="danger" :disabled="bloquear" @click="agregarPersonaje"> Agregar</b-btn> 
            </div>

            <div class="float-right pr-2 pt-4">
              <b-btn  type="submit" variant="primary"  style="padding-left: 10px" @click="hideModal">Cancel</b-btn>
            </div>
        </div>
    </b-modal>

    <!-- MODAL EDITAR -->
     <b-modal ref="myModalEditar" id="modal-lg" title="EDITAR PERSONAJE" centered hide-footer hide-header>
      <div class="modal-body">
            <div>
              <input id="editarNombre" type="text" class="form-control input-modal" placeholder="NOMBRE" v-model="nombre">
              <input id="editarOrigen" type="text" class="form-control input-modal" placeholder="ORIGEN" v-model="origen">
              <input id="editarEdad" type="text" class="form-control input-modal" placeholder="EDAD" v-model.number="edad">
              <input id="editarCaracteristica" type="text" class="form-control input-modal" placeholder="CARACTERISTICA" v-model="caracteristica">
              <input id="editarHabilidad" type="text" class="form-control input-modal" placeholder="HABILIDAD" v-model="habilidad">
            </div>
            <h4 class="titulo-modal">
              SE ESTA POR EDITAR UN NUEVO PERSONAJE!
              DESEA CONTINUAR?
            </h4>
            <div class="float-right pt-4">
              <b-btn type="submit" variant="danger" :disabled="bloquear" @click="editarPersonaje">Editar</b-btn>
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
                <input class="form-control input-filtro " id="inputTabla" type="search" placeholder="Filtrar" aria-label="Search"
                v-model="filtroNombre" v-if="filtro">
              </div>
            </div>
        </div>
      </div>
    </div>

    <!-- SECCION TABLA -->
    <div class="table-responsive">
      <table class="table table-dark table-striped">
         <section v-if="errored" class="section-left">
               <p>Lo sentimos, no es posible obtener la información en este momento, por favor intente nuevamente mas tarde</p>
        </section>
        <div v-if="loading" class="loader"></div>
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
            <tr v-for="(item, index) in resultSearch" :key="item.id" > 
              <th scope="row">{{ index }}</th>
              <td>{{ item.Nombre | capitalize }}</td>
              <td>{{ item.Origen | capitalize}}</td>
              <td>{{ item.Edad | edad }}</td>
              <td>{{ item.Caracteristica | capitalize}}</td>
              <td>{{ item.Habilidad | capitalize }}</td> 
              
              <td>  
                <b-button class="boton-editar" variant="primary" @click="showModalEditar(item.id, index)"> Editar</b-button> 
                <b-button variant="danger" @click="showModalDelete(item.id)">Eliminar</b-button>
              </td>
            </tr>
        </tbody>
      </table>

    <!--COMPONENTE BUTTON MODAL AGREGAR -->
    <BtnModalAgregar @abrirModal="showModalAgregar" nameButton="Agregar Personaje"/>

    </div>
 </div>
</template>

<script>
import axios from "axios"
import BtnModalAgregar from "./BtnModalAgregar"

export default {
  components: {
    BtnModalAgregar,
},

data() {
    return {
      arrayPersonajes: [],
      filtroNombre: null,
      filtro : false,
      nombre: "",
      origen: "",
      edad : 0,
      caracteristica : "",
      habilidad : "",
      loading: true,
      errored: false,
      cargando: false,
    }
},

mounted () {
  setTimeout(() => {
    this.getDatosTabla(); 
  }, 3000);
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
    this.id = id,
    this.$refs['myModalDelete'].show()
  },

  showModalAgregar() {
    this.nombre = "",
    this.origen = "",
    this.edad = 0,
    this.caracteristica = "",
    this.habilidad = "",
    this.$refs['myModalAgregar'].show()
  },

  showModalEditar(id, index) {
    this.id = id;
    this.nombre = this.resultSearch[index].Nombre,
    this.origen = this.resultSearch[index].Origen,
    this.edad = this.resultSearch[index].Edad,
    this.caracteristica = this.resultSearch[index].Caracteristica,
    this.habilidad = this.resultSearch[index].Habilidad,
    this.$refs['myModalEditar'].show()
  },

  hideModal() {
    this.$refs['myModalDelete'].hide()
    this.$refs['myModalAgregar'].hide()
    this.$refs['myModalEditar'].hide()
  },
  
  deletePersonaje () {
      axios.delete(`https://602367ff6bf3e6001766b0c8.mockapi.io/api/v1/users/${this.id}`)
      .then(() => {
        this.getDatosTabla()
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => 
        this.loading = false
      )
      
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
        this.habilidad = "",
        this.loading = false
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
    .finally(() => this.loading = false
    )
    this.$refs['myModalEditar'].hide()
  },

  contieneString(nombre, input) {
      if (input == "") {
          return false;
      }
      if (nombre.includes(input)) {
          return true;
      } else {
          return false;
      }
  },
},

computed: {
  resultSearch(){
    if(this.filtroNombre){
    return this.arrayPersonajes.filter(x => this.contieneString(x.Nombre.toLowerCase(), this.filtroNombre));
    } else {
      return this.arrayPersonajes;
    }
  },
  bloquear() {
    return this.nombre === "" ? true : false,
           this.origen === "" ? true : false,
           this.edad === "" ? true : false,
           this.caracteristica === "" ? true : false,
           this.habilidad === "" ? true : false
    }
  }
}
</script>

<style>
.input-filtro {
 width: 400px
}

.section-left {
  margin-left: 20%;
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

/*Spinner*/
.loader {
    margin: 100px 770%;
    font-size: 25px;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    position: relative;
    text-indent: -9999em;
    -webkit-animation: load 1.1s infinite ease;
    animation: load 1.1s infinite ease;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    align-items: center;
  }
  @-webkit-keyframes load {
    0%,
    100% {
      box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);
    }
    12.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);
    }
    25% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    37.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5), 2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    50% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.5), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    62.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5), 0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    75% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.5), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    87.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5), -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;
    }
  }
  @keyframes load {
    0%,
    100% {
      box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);
    }
    12.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);
    }
    25% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    37.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5), 2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    50% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.5), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    62.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5), 0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    75% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.5), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    87.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5), -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;
    }
  }

</style>
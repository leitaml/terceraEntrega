<template>
  <div>
    <div class="button-center">
      <b-button class="btn-agregar btn btn-success" @click="abrirModalAgregar">Agregar Personaje</b-button>
    </div>
    <b-modal ref="myModalAgregar" id="modal-lg" title="AGREGAR PERSONAJE" centered hide-footer hide-header>
      <div class="modal-body">
              <div>
                <input id="nombreModal" type="text" class="form-control input-modal" placeholder="NOMBRE">
                <input id="origenModal" type="text" class="form-control input-modal" placeholder="ORIGEN">
                <input id="edadModal" type="text" class="form-control input-modal" placeholder="EDAD">
                <input id="caracteristicaModal" type="text" class="form-control input-modal" placeholder="CARACTERISTICA">
                <input id="habilidadModal" type="text" class="form-control input-modal" placeholder="HABILIDAD">
              </div>
              <h4 class="titulo-modal">
                SE ESTA POR AGREGAR UN NUEVO PERSONAJE!
                DESEA CONTINUAR?
              </h4>
              <div class="float-right pt-4">
                <b-btn type="submit" variant="danger" @click="agregarPersonaje">Agregar</b-btn> 
              </div>
              <div class="float-right pr-2 pt-4">
                <b-btn  type="submit" variant="primary"  style="padding-left: 10px" @click="hideModal">Cancel</b-btn>
              </div>
        </div>
    </b-modal>
  </div>
</template>

<script>

export default {

methods: {

},

components: {
  }
}
 
</script>

<style>
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
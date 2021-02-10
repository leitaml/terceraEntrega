<template>
   <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">AGREGAR PERSONAJE</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div>
              <input id="nombreModal" type="text" class="form-control" placeholder="NOMBRE">
              <input id="origenModal" type="text" class="form-control" placeholder="ORIGEN">
              <input id="edadModal" type="text" class="form-control" placeholder="EDAD">
              <input id="caracteristicaModal" type="text" class="form-control" placeholder="CARACTERISTICA">
              <input id="habilidadModal" type="text" class="form-control" placeholder="HABILIDAD">
            </div>
            <h4 class="titulo-modal">
              SE ESTA POR AGREGAR UN NUEVO PERSONAJE!
              DESEA CONTINUAR?
            </h4>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
            <button id="agregar" type="button" class="btn btn-primary" data-dismiss="modal">Continuar</button>
          </div>
        </div>
      </div>
    </div>
    
</template>

<script>
export default {

}
</script>

<style>

</style>
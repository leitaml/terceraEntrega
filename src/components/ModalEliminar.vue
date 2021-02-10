<template>
  
  <div id="modal-eliminar">
    <div class="modal" tabindex="-1" id="modal-elim">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">ELIMINAR PERSONAJE</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>ESTA POR ELIMINAR EL PERSONAJE! DESEA CONTINUAR?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
            <button id="btn-eliminar-modal" type="button" data-dismiss="modal"
              class="btn btn-primary botonesEliminar">Continuar</button>
          </div>
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
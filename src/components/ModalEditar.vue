<template>
  <div class="modal fade" id="modal-edit" data-backdrop="static" data-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel2" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel2">INGRESE SUS NUEVOS DATOS :</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div>
            <input id="editarNombre" type="text" class="form-control" placeholder="Nombre">
            <input id="editarOrigen" type="text" class="form-control" placeholder="Origen">
            <input id="editarEdad" type="text" class="form-control" placeholder="Edad">
            <input id="editarCaracteristica" type="text" class="form-control" placeholder="Caracteristica">
            <input id="editarHabilidad" type="text" class="form-control" placeholder="Habilidad">
          </div>
          <h4 class="titulo-modal">
            ESTA POR EDITAR EL PERSONAJE!
            DESEA GUARDARLO?
          </h4>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
          <button id="btn-editar-modal" type="button" class="btn btn-primary btn-edit" data-dismiss="modal">Guardar</button>
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
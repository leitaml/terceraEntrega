<template>
  <div>
    <!-- <transition name="fade">
      <div class="modal-overlay" v-if="showModal"></div>
    </transition>

    <transition name="fade">
      <div class="modal" v-if="showModal">
        <h1>titulo</h1>
        <p>parrafo</p>
        <button class="btn btn-danger" @click="showModal= false">Cerrar</button>
      </div>
    </transition>

    <button class="btn btn-primary btn-editar" @click="showModal = true">
      Abrir Modal
    </button> -->
  </div>
</template>

<script>
export default {
  
data() {
    return {
      showModal: false,
    }
}
  
}
</script>

<style>

body , html {
  width: 100%;
  height: 100%;
}
/* 
.modal-overlay{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.4);
}

.modal{
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50% , -50%);
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  z-index: 101;
} */

</style>




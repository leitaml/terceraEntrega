<template>
  <div>
<!-- Componente NAVBAR --> 
  <Navbar />

<!-- Componente FORMULARIO --> 
  <Formulario/>
  
<!-- Componente FOOTER --> 
  <Footer />

  </div>
</template>

<script>
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Formulario from "../components/Formulario"


export default {
  components: {
    Footer,
    Navbar,
    Formulario
  },

}
</script>

<style>

</style>
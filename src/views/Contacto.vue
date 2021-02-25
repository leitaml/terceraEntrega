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
  borderColor: {
      bind(el, binding) {
        let color = binding.value.color;
        if (binding.modifiers["default"]) {
          color = "blue";
        }
        setTimeout(() => {
          if (binding.arg === "border") {
            el.style.borderColor = color;
          } else {
            el.style.borderColor = color;
          }
        }, 0);
      },
    },
  };
</script>

<style>

</style>
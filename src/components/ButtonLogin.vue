<template>
  <div>
        <button type="submit" class="btn btn-primary" 
                @click.prevent="login"
               >{{nameLogin}}</button>
  </div>
</template>

<script>
export default {

    props: ["nameLogin",],

    methods: {
      login() {
        this.$emit("login")
      }
    }
  
    
        

}
</script>

<style>

</style>
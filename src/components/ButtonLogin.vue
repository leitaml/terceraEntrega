<template>
  <div>
        <button type="submit" class="btn btn-primary" 
              @click.prevent="login"
               >{{nameLogin}}</button>
  </div>
</template>

<script>
export default {

    props: ["nameLogin",]
  
    
        

}
</script>

<style>

</style>
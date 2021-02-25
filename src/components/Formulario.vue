<template>
  <div>
      
  <!-- FORMULARIO INICIAR SESION -->
  <div class="container">
    <div class="row">
      <div class="col-sm-4">
        <div class="form-left">
          <h5>
           {{ titulo }}
          </h5>

          <img class="usuario1" src="../assets/usuario2.png" alt="logo-usuario">

          <form class="form-principal">
            <div class="form-group ">

              <label for="exampleInputEmail2">Usuario :</label>
              <input type="text" class="form-control" name="login" id="login"
               v-model="usuario">

            </div>
            <div class="form-group ">

              <label for="exampleInputPassword2">Contraseña :</label>
              <input type="password" class="form-control" name="password" id="password"
               v-model="password">
            </div>

           <!-- COMPONENTE BOTON LOGIN -->
               <ButtonLogin nameLogin="Entrar" />

          </form>
        </div>
      </div>


    <!-- FORMULARIO REGISTRARSE -->
      <div class="col-sm-2">
        <div class="form-center">

        </div>
      </div>

      <div class="col-sm-6">
        <div class="form-right">
          <h5>
            Regístrate
          </h5>

          <img class="usuario2" src="../assets/usuario1.png" alt="logo-register">

          <form class="form-principal">
            <div class="form-group ">
              <label for="validationCustom01">Nombre :</label>
              <input type="text" class="form-control" id="validationCustom01">
            </div>

            <div class="form-group ">
              <label for="validationCustom02">Apellido :</label>
              <input type="text" class="form-control" id="validationCustom02">
            </div>

            <div class="form-group ">
              <label for="validationCustom03">Nombre de usuario :</label>
              <input type="text" class="form-control" id="validationCustom03">
            </div>

            <div class="form-group ">
              <label for="exampleInputEmail1">Email :</label>
              <input type="email" class="form-control" id="exampleInputEmail1">
            </div>

            <div class="form-group ">
              <label for="exampleInputPassword1">Contraseña :</label>
              <input type="password" class="form-control" id="exampleInputPassword1">
            </div>

            <button type="submit" class="btn btn-success">Submit</button>

          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import ButtonLogin from "./ButtonLogin"
import axios from "axios"
export default {
  
data: function() {
    return {
      usuario: "",
      password: "",
      titulo: " Iniciar sesion"
      
      
      
    }
},
components: {
  ButtonLogin,

},

methods: {
    login() {
      let datos = {
        "usuario" : this.usuario,
        "password" : this.password
      };
      axios.post("https://602367ff6bf3e6001766b0c8.mockapi.io/api/v1/users" , datos)
          .then(data => {
          console.log(data)
          if(data.data.usuario == "juan" && data.data.password == 123456){
            console.log("Bienvenido Juan")
          }else {
            console.log("Usuario incorrecto")
          }
      })
    }
  }
}

</script>

<style>

.form-left , .form-right{
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
   width: 100%;
   height: 500px;
   margin-top: 80px;
   margin-bottom: 80px;
   background-image: url(../assets/fondo-contacto.png);
   background-repeat: no-repeat;
   text-align: center;
   border-radius: 5%;
}

.form-right{
   
    height: 600px;
    background-image: url(../assets/fondo-contacto2.jpg);
}

h5{
    font-size: 15px;
    text-align: center;
}


.usuario1{
    width: 20%;
}

.usuario2{
    width: 10%;
}

.form-principal{
    margin-bottom: 20px;
}

</style>
<template>
  <div>
      <footer class="footer-component">

    <div class="container">
      <div class="row">




        <div class="col-6 col-sm-6 col-md-6 col-lg-6">


          <div class="footer-left">
           <a class="copyright" href="https://es-la.facebook.com/juan.ariztegui.5" target="_blank"> <img class="logo-copyright" src="../assets/copy.png" alt="logo-copyright"></a>
            <h4>DERECHO RESERVADO.</h4>

          </div>

        </div>



        <div class="col-6 col-sm-6 col-md-6 col-lg-6">

          <div class="footer-right">



            <a class="contenedor-images" href="https://es-la.facebook.com/ubisoft/" target="_blank"> <img class="logo-facebook"
                src="../assets/facebook.png" alt="logo-facebook"></a>
            <a class="contenedor-images" href="https://www.instagram.com/ubisoft/?hl=es-la" target="_blank"> <img class="logo-instagram"
                src="../assets/instagram.png" alt="logo-instagram"></a>
            <a class="contenedor-images" href="https://twitter.com/ubisoftlatam?lang=es" target="_blank"> <img class="logo-twitter"
                src="../assets/tweeter.png" alt="logo-tweeter"></a>
          </div>

        </div>

      </div>
    </div>
  </footer>

  </div>
</template>


<script>
export default {

}
</script>

<style>


.footer-component{
    width: 100%;
    height: 120px;
}




.footer-left , .footer-right{

    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 120px;


}  


.logo-copyright{
    width: 12%;
}

.logo-facebook{
    width: 17%;
    
}

.logo-instagram{
    width: 20%;
    
}

.logo-twitter{
    width: 21%;
    
}


.contenedor-images{
    width: 100%;
    display: flex;
    justify-content: flex-end;
   

}

.footer-component h4{
    font-size: 1rem;
}

.copyright{
    width: 250px;
}


/* COLORES  */


    .footer-component{
        background-color: black;

    }
    .footer-component div h4{
        color: white;
    }


    
    /*  @ MEDIA  */




    @media  screen and (max-width: 490px){
        .footer-component div  h4{
            display: none;
           
        }
        
    }

    @media screen and (max-width: 768px) { 
      .footer-component div  h4{
            font-size: 18px;
        }

    }



    @media  screen and (max-width: 1200px) { 
        .logo-copyright{
            width: 20%;
        }

     }


</style>
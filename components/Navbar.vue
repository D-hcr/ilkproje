<template>
    <div >
        <section id="ff" class="header-main border-bottom ">
          <div  class="container-fluid">
          <div class="row p-2 pt-3 pb-3 d-flex align-items-center">
            <div id="r" class="col-md-2 mt-2">
                   <a  href="http://localhost:3000">
                    <img  id="dmg" class="d-none d-md-flex"  src="//cdn.shopify.com/s/files/1/0485/5264/0672/files/Aqua_di_Polo_Logo_150x167-new.png?v=1630" width="100" height="50" >
                   </a>
               </div>
               <div class="col-md-8">
            
            <div  class="d-flex form-inputs">
                <form  action="/search" method="get" class="aqua-search" role="search">
                     <input  id="xsvg" type="hidden" name="type" value="product">
                     <input id="sb" type="search" name="q" class="aqua-search-form" placeholder="    Ara.." aria-label="Search Site" autocomplete="OFF">
                     <button id="btsearch" type="submit" class="btn icon-search">
                        <svg data-icon="search" viewBox="0 0 512 512" width="100%" height="100%">
                            <path d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5   S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9   C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z"></path>
                        </svg>
                     </button>
                </form>
            </div>
           
               </div>
               <div class="col-md-2">
                     
        <div id="mySidenav" class="sidenav">
          <a id="kname" href="javascript:void(0)" class="closebtn" v-on:click="closeNav()">&times; 
            <span id="ka">Kapat</span>      
          </a>
          <h1 id="o">Oturum Aç</h1>
          <div class="ct-login">
          <div class="form-group">
            <label id="emaillabel" for="customer_email">
              <span>
                E-posta
              </span>
              <em id="yıldız">*</em>
            </label>
            <input id="email" class="form-control" type="email" value="" name="customer[email]" placeholder="E-posta">
          </div>
          <div id="f2g" class="form-group">
            <label for="customer_password">
              <span>
                Şifre
              </span>
              <em id="yıldız">*</em>
            </label>
            <input id="pswi" class="form-control" type="password" value="" placeholder="Şifre" name="customer[password]">
          </div>

          <div id="login" class="action-btn">
            <input id="üyeg" type="submit" class="btn btn-login" value="Üye Girişi">
            <a id="pswun" class="text-hover forgot-password" href="#">
              Şifremi Unuttum
            </a>
          </div>
          <div class="ct-register">
          <a id="üyeol" href="#" class="btn btn-register">
            Üye Olun
          </a>
         </div>
        </div>    
        </div>    
        <div>
          <span id="sp" style="font-size:30px;cursor:pointer" v-on:click="openNav()">
            <a id="svg" href="#"  title="User Icon" class="icon-user" data-user-mobile-toggle="">
                          Üye Girişi          
                          <svg viewBox="0 0 32 32" width="23px" height="23px">
                            <path d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 
                            8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 
                            22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 16 8 C 13.25 8 11 10.25 11 13 C 11 14.515625 11.707031 15.863281 12.78125
                             16.78125 C 10.53125 17.949219 9 20.300781 9 23 L 11 23 C 11 20.226563 13.226563 18 16 18 C 18.773438 18 21 20.226563 21 
                             23 L 23 23 C 23 20.300781 21.46875 17.949219 19.21875 16.78125 C 20.292969 15.863281 21 14.515625 21 13 C 21 10.25 18.75 
                             8 16 8 Z M 16 10 C 17.667969 10 19 11.332031 19 13 C 19 14.667969 17.667969 16 16 16 C 14.332031 16 13 14.667969 13 13 C 
                             13 11.332031 14.332031 10 16 10 Z"></path>
                          </svg>         
                        </a>              
          </span>
        </div>
      </div>
          </div>
          </div>  
       </section> 
    </div>
     
    </template>

<script>
export default {
    methods: {
     openNav: function(){
       document.getElementById("mySidenav").style.width = "500px";        
       document.getElementById("mySidenav").style.backgroundColor = "#E0E0E0";
       
       
  
       
     // document.getElementById("ff").style.backgroundColor="rgba(0,0,0,-0.1)";
     // document.getElementById("dmg").style.backgroundColor="rgba(0,0,0,-0.1)";
       
    },
    closeNav: function(){
     document.getElementById("mySidenav").style.width = "0";
     document.getElementById("mySidenav").style.backgroundColor = "white";
    
    // document.getElementById("ff").style.backgroundColor="white";
     //document.getElementById("dmg").style.backgroundColor="white";
    }
    },
};
</script>
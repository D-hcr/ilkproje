<template>
      
      <div class="header-main border-bottom ">
        <section  class="container-fluid">
          <span class="row p-2 pt-3 pb-3 d-flex align-items-center">
            <em id="r" class="col-md-2 mt-2">
              <a href="http://localhost:3000/">
                <img  class="d-none d-md-flex"  src="//cdn.shopify.com/s/files/1/0485/5264/0672/files/Aqua_di_Polo_Logo_150x167-new.png?v=1630" width="100" height="50" >
              </a>
            </em>
            <section class="col-md-8">            
              <span  class="d-flex form-inputs">
                <form  action="/search" method="get" class="aqua-search" role="search">
                  <input type="hidden" name="type" value="product">
                  <input id="sb" type="search" name="q" class="aqua-search-form" placeholder="    Ara.." aria-label="Search Site" autocomplete="OFF">
                    <button id="btsearch" type="submit" class="btn icon-search">
                      <svg data-icon="search" viewBox="0 0 512 512" width="100%" height="100%">
                        <path d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5   S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9   C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z"></path>
                      </svg>
                    </button>
                  </form>
              </span>
            </section>
            <div class="col-md-2">                     
                <YanLogin/>
            </div>
          </span>
        </section>  
      </div> 
         
</template>

<script>
const { default: YanLoginVue } = require('./YanLogin.vue');


</script>

<style>
#offcanvasRightLabel {
  position: relative;
  left: 17px;
  top: 20px;
  font-size: 32px;
  letter-spacing: .055em;
  font-weight: 400;
  font-family: var( DM Serif Display);
  font-weight: 700;
  font-family: var(Overpass),"Arial","sans-serif"; /*bunu ara yazısı içinde uygulayabiliriz eşitlemesi için*/
}

.ct-login {
  position: relative;
  bottom: -80px;
}


body {
  font-family: "Lato", sans-serif;
  transition: background-color.5s;
}
#r {
  position: relative;  
  left: 170px;
  bottom: -1px;
  
}

#sb {
  position : relative;
  margin-left: 165px;
  top: 12px;
  width: 550px;
  height: 45px;
  background-color: white;
  box-shadow: 0 0 6px 4px rgb(237, 234, 234); 
  border:  2px white ;
  border-radius: 11px;
}
#sb::-webkit-input-placeholder { color : grey}
#sb::-webkit-input-placeholder{
  position: relative;
  bottom: 3px;
}
#sb:-moz-placeholder {color : rgb(128, 128, 128) }
#sb:-ms-input-placeholder { color : rgb(128, 128, 128) }
#btsearch {
  position: relative;
  width: 40px;
  height: 25px;
  left: -50px;
  top: 4px;
  border: white;
}
:root {
  color: white;
}
 
#emaillabel {
  position: relative;
  left: 20px;
  bottom: 75px;
}
#ep{
  position: relative;
  bottom: 0px;
}
#yıldız1 {
  position: relative;
  color: red;
  bottom: 3px;
}
#email {
  width: 350px;
  position: relative;
  left: 20px;
  bottom: 60px;
  height: 50px;
}
#f2g {
  position: relative;
  left: 20px;
  bottom: 30px;
}
#yıldız {
  position: relative;
  color: red;
  bottom: 10px;
}
#pswi {
  width: 350px;
  height: 50px;
  bottom: 10px;
}
#login {  
  position: relative;
  left: 20px;
  bottom: 5px; 
}
#üyeg {
  background-color: #293355;
  color: white;
  width: 350px;
  height: 60px;
  text-align: center;
  left: 5px;
  top: 5px;
  
  
}
#üyeg:hover{
  background-color: white;
  color: black;
}
#pswun {
  position: relative;
  bottom: 0px;
  color: black;
  left: 10px;
  font-size: small;
  position: relative;
  top: 10px;
   
}
#üyeol {
  position: relative;
  background-color:white;  
  color: black;
  width: 350px;
  height: 60px;
  text-decoration: none;
  text-align: center;
  left: 20px;
  top: 20px;
  box-shadow: 0 -1px 7px 1px #0003;
  
  font-size: 17px;
}
#üyeol:hover{
  background-color: #293355;
  color: white;
}
#sp{  
  position: relative;
  left: 0px;
  bottom: -10px;
}
#svg{
  position: relative;
  bottom: -11px;
  right: 45px;
  color: black;
  text-decoration: none;
  font-size: 14px;
} 
#svg:hover {
  color:black;
  text-decoration: underline
}


</style>
<template>
      <div >
      <section class="header-main border-bottom ">
        <div  class="container-fluid">
          <div class="row p-2 pt-3 pb-3 d-flex align-items-center">
            <div id="r" class="col-md-2 mt-2">
              <a href="http://localhost:3000/">
                <img class="d-none d-md-flex"  src="//cdn.shopify.com/s/files/1/0485/5264/0672/files/Aqua_di_Polo_Logo_150x167-new.png?v=1630" width="100" height="50" >
              </a>
            </div>
            <div class="col-md-8">            
              <div  class="d-flex form-inputs">
                <form  action="/search" method="get" class="aqua-search" role="search">
                  <input type="hidden" name="type" value="product">
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
                <YanLogin/>
            </div>
          </div>
        </div>  
      </section> 
    </div>      
</template>

<script>
const { default: YanLoginVue } = require('./YanLogin.vue');


</script>

<style>
@import url("static/css/navbar.css");  
</style>
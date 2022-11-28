<!-- Please remove this file from your project -->
<template>
 <header class="section-header">
<section class="header-main border-bottom bg-white">
	<div class="container-fluid">
       <div class="row p-2 pt-3 pb-3 d-flex align-items-center">
           <div id="r" class="col-md-2 mt-2">
               <a href="http://localhost:3000">
                <img  class="d-none d-md-flex"  src="//cdn.shopify.com/s/files/1/0485/5264/0672/files/Aqua_di_Polo_Logo_150x167-new.png?v=1630" width="100" height="50" >
               </a>
           </div>
           <div class="col-md-8">
        
        <div  class="d-flex form-inputs">
        <input id="sb" class="form-control" type="text" placeholder="Search any product...">
        <i class="bx bx-search"></i>
        </div>
       
           </div>
           
           <div class="col-md-2">
               <div class="d-flex d-none d-md-flex flex-row align-items-center">
                   <span class="shop-bag"><i class='bx bxs-shopping-bag'></i></span>
                   <div class="d-flex flex-column ms-2">
                       <span class="qty">1 Product</span>
                       <span class="fw-bold">$27.90</span>
                   </div>    
               </div>           
           </div>
       </div>
	</div> 
</section>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand d-md-none d-md-flex" href="#">Categories</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Electronics</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Fashion</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Furnitures</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Mobiles
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Smart Phones</a></li>
            <li><a class="dropdown-item" href="#">Feature Phones</a></li>
            <li><a class="dropdown-item" href="#">Mobile Covers</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>
</template>

<script lang="js" setup>




</script>

<style lang="css">
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css";   
@import "https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css";
#r {
  position: relative;

left: 170px;
bottom: -9px;
}
#sb {
  position : relative;
  margin-left: 165px;
  top: 12px;
  width: 550px;
  height: 45px;
  box-shadow: 0 0 6px 4px rgb(237, 234, 234); 
  border:  2px ;
  border-radius: 11px;
}
#sb::-webkit-input-placeholder { color : grey}
#sb::-webkit-input-placeholder{
  position: relative;
  bottom: 3px;
}
#sb:-moz-placeholder {color : grey }
#sb:-ms-input-placeholder { color : grey }


</style>

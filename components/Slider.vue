<template>
    <section>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
     <span class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="slide-1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="slider-2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="slider-3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="slider-4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="slider-5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="slider-6"></button>
     </span> 
  <section class="carousel-inner">
    <span class="carousel-item active" data-bs-interval="10000">
      <img src="//cdn.shopify.com/s/files/1/0485/5264/0672/files/web_1987_WEBR.jpg?v=1667567188" class="d-block w-100" alt="slider-1">
    </span>
    <span class="carousel-item" data-bs-interval="2000">
      <img src="//cdn.shopify.com/s/files/1/0485/5264/0672/files/WEBBANNER_Calisma_Yuzeyi_1.jpg?v=1666351596" class="d-block w-100" alt="slider-2">
    </span>
    <span class="carousel-item">
      <img src="//cdn.shopify.com/s/files/1/0485/5264/0672/files/WEBBANNER_Calisma_Yuzeyi_1_kopya_3.jpg?v=1666341862" class="d-block w-100" alt="slider-3">
    </span>
    <span class="carousel-item">
      <img src="//cdn.shopify.com/s/files/1/0485/5264/0672/files/WEBBANNER_Calisma_Yuzeyi_1_kopya_4.jpg?v=1666354368" class="d-block w-100" alt="slider-4">
    </span>
    <span class="carousel-item">
      <img src="//cdn.shopify.com/s/files/1/0485/5264/0672/files/WEBBANNER_Calisma_Yuzeyi_1_kopya_2.jpg?v=1666351145" class="d-block w-100" alt="slider-5">
    </span>
    <span class="carousel-item">
      <img src="//cdn.shopify.com/s/files/1/0485/5264/0672/files/WEBBANNER_Calisma_Yuzeyi_1_kopya.jpg?v=1666351736" class="d-block w-100" alt="slider-6">
    </span>
  </section>
 
</div>
    </section>
</template>

<script>

</script>

<style>
.carousel-indicators button {
    width: 10px;
    height: 10px;
    border-radius: 100%;
  }
  
  .carousel-indicators [data-bs-target] {
    box-sizing: content-box;
    flex: 0 1 auto;
    width: 15px; /* change width */
    height: 15px; /* change height */
    padding: 0;
    margin-right: 10px;
    margin-left: 10px;
    text-indent: -999px;
    cursor: pointer;
    background-color: #002a5d;
    background-clip: padding-box;
    border: 1 white;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: .5;
    transition: opacity .6s ease;
    border-radius: 100%;  /* add border-radius */
}

.carousel-indicators [data-bs-target]:hover{
    
    background-color: white;
    
}
</style>



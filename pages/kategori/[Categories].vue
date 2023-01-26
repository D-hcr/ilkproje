<template>
    <div >
 <header>
    <Navbar/>
    <Kategoriler/>
 </header>
 <body>
  <section id="bölüm" class="header-main border-bottom ">
   <div><nuxt-link  id="asd" to="/">AnaSayfa</nuxt-link></div>
   <span    
   class="sidebar_collection-title_custom">
     {{ $route.params.Categories }}
   </span>
   
   <div id="cont">
      <div v-for="(product , index) in data"
           :key="'product-'+ index " 
      id="cardana">
        <a id="carda" href="#"  style="width: 18rem;">
        <div id="cardp" class="card" style="width: 18rem; ">
           <img :src="product.imgUrl" class="card-img-top" >
        </div>
        <p id="pt" >{{product.name}}</p>
        
     </a>
 
           <p id="pricekat">{{product.price}}</p>
           <em id="simgetl" >TL</em>
 
      </div>
     
   </div>
  </section>
 </body>
 </div> 
 </template>
 
 <style>
 
 #asd {
  color: rgb(75, 73, 73);
  text-decoration-line: none;
  position: relative;
  left: 185px;
  font-size: 13px;
 }
 #asd:hover {
 color: #007bff;
 }
 .sidebar_collection-title_custom {
  color: black;
  font-style: normal;
  font-size: 20px;
  position: relative;
  left: 180px;
  top: 14px;
  font-weight: bold;
  
 }
 
 #bölüm {
  height: 80px;
  
 }
 #cont {
  background-color:white;
  position: relative;
  top: 30px;
  width: 1000px;
  left: 250px;
  
 }
 .card-img-top {
  height: 300px;
 }
 #pt {
  color: black;
  text-decoration-line: none;
  width: 18rem;
  font-weight:bold;
 }
 #carda {
  text-decoration-line: none;
 }
 #pt:hover {
  text-decoration: underline black;
 }
 #pricekat {
 float: left;
 font-weight: bold;
 }
 #cardana {
  margin:20px;
  float: left;
 }
 #simgetl {
    font-weight: bold;
 }
 </style>
 
<script setup>
const { data }=await useFetch('/api/products')
    
</script>
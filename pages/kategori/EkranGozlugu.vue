<template>
    <div>
 <header>
    <Navbar/>
    <Katagoriler/>
 </header>
 <body>
   <section id="bölüm" class="header-main border-bottom ">
    <div><a id="as" href="http://localhost:3000">AnaSayfa</a></div>
    <span v-for="(catg,index) in categori " 
           :key="'catg-'+index" 
     class="sidebar_collection-title_custom">
      &nbsp;{{catg.name}}
    </span>
    <div id="cont">
       <div v-for="(product , index) in products"
            :key="'product-'+ index " 
       id="cardana">
         <a id="carda" href="#"  style="width: 18rem;">
         <div id="cardp" class="card" style="width: 18rem; ">
            <img :src="product.photourl" class="card-img-top" >
         </div>
         <p id="pt" >{{product.name}}</p>
         
      </a>

            <p id="price">{{product.price}}</p>
            <em >TL</em>

       </div>
      
    </div>
   </section>
   
 </body>
</div> 
</template>


<style>
 
#as {
   color: rgb(75, 73, 73);
   text-decoration-line: none;
   position: relative;
   left: 185px;
   font-size: 13px;
}
#as:hover {
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
#price {
  float: left;
}
#cardana {
   margin:20px;
   float: left;
}
</style>

<script>


export default {
   data() {
      return {
          products: [
            {
               id:5,
               name:"Aqua di Polo Unisex Mavi Işık Koruyucu Gözlük APSBL01101",
               price:143.80,
               photourl:"https://cdn.shopify.com/s/files/1/0485/5264/0672/products/71549_1_9a2d7ac0-ce12-4025-a454-89b2ea793a9d_360x.jpg?v=1669968499"
            },
            {
               id:6,
               name:"Aqua di Polo Kadın Mavi Işık Korumalı Gözlük APSBL01401",
               price:499.00,
               photourl:"https://cdn.shopify.com/s/files/1/0485/5264/0672/products/Aqua-di-Polo-Kadin-Mavi-Isik-Koruyucu-Gozluk-APSBL01401_360x.jpg?v=1651219399",
               
            },
            {
               id:7,
               name:"Aqua di Polo Unisex Mavi Işık Korumalı Gözlük APSBL00701",
               price:527.80,
               photourl:"https://cdn.shopify.com/s/files/1/0485/5264/0672/products/Aqua-di-Polo-Unisex-Mavi-Isik-Korumali-Gozluk-APSBL00701_360x.jpg?v=1649217468",
            },
            {
               id:8,
               name:"Aqua di Polo Kadın Mavi Işık Korumalı Gözlük APSBL00301",
               price:499.00,
               photourl:"https://cdn.shopify.com/s/files/1/0485/5264/0672/products/Aqua-di-Polo-Kadin-Mavi-Isik-Korumali-Gozluk-APSBL00301_360x.jpg?v=1649217527"
            }
            
          ],
          categori:[
            {  id:1,
               name:"Ekran Gözlüğü"
            }
          ]
      }
   },
}
</Script>
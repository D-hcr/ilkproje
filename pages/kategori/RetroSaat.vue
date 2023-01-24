<template>
    <div>
 <header>
    <Navbar/>
    <Kategoriler/>
 </header>
 <body>
  <section id="bölüm" class="header-main border-bottom ">
   <div><nuxt-link  id="asd" to="/">AnaSayfa</nuxt-link></div>
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

           <p id="pricekat">{{product.price}}</p>
           <em >TL</em>

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
#pricekat {
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
              id:1,
              name:"Aqua di Polo  Rose Gold ve Gümüş Metal Kordonlu Dijital Retro KolSaati 2'li Hediye Seti STWA010169",
              price:499.00,
              photourl:"https://cdn.shopify.com/s/files/1/0485/5264/0672/products/Aqua-di-Polo-Unisex-Rose-Gold-ve-Gumus-Metal-Kordonlu-Dijital-Retro-Kol-Saati-2li-Hediye-Seti-STWA010169_360x.jpg?v=1649223484"
           },
           {
              id:2,
              name:"Aqua di Polo Kadın Gümüş Metal Kordonlu Yıldız Desenli Dijital Retro Saat APWA063800",
              price:499.00,
              photourl:"https://cdn.shopify.com/s/files/1/0485/5264/0672/products/Aqua-di-Polo-Kadin-Gumus-Metal-Kordonlu-Yildiz-Desenli-Dijital-Retro-Saat-APWA063800_360x.jpg?v=1653899449",

           },
           {
              id:3,
              name:"Aqua di Polo Unisex Siyah Metal Kordonlu Mermer Desenli Dijital Retro Saat APWA064300",
              price:499.00,
              photourl:"https://cdn.shopify.com/s/files/1/0485/5264/0672/products/Aqua-di-Polo-Unisex-Siyah-Metal-Kordonlu-Mermer-Desenli-Dijital-Retro-Saat-APWA064300_360x.jpg?v=1653899081",
           },
           {
              id:4,
              name:"Aqua di Polo Unisex Gümüş Metal Kordonlu Mermer Desenli Dijital Retro Saat APWA064400",
              price:499.00,
              photourl:"https://cdn.shopify.com/s/files/1/0485/5264/0672/products/Aqua-di-Polo-Unisex-Gumus-Metal-Kordonlu-Mermer-Desenli-Dijital-Retro-Saat-APWA064400_360x.jpg?v=1651218958"
           }
           
         ],
         categori:[
           {  id:1,
              name:"Retro Saat"
           }
         ]
     }
  },
}
</script>
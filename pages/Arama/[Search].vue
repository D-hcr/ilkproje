<template>
    <div >
   <header>
    <Navbar/>
    <Kategoriler/>
  </header> 
  <body>
  <section id="bölüm" class="header-main border-bottom ">
   <div><nuxt-link  id="asd" to="/">AnaSayfa</nuxt-link></div>
   <span id="sapr"   
   class="sidebar_collection-title_custom">
     {{ ca }}
   </span>
   
   <div id="cont">
      <div   v-for="(product , index) in data2"
     
           :key="'product-'+ index " 
            
      id="cardana"
     
      >
      <div  >
      <nuxt-link  id="carda" v-bind:to="'/Urun/'+(product.id)"  style="width: 18rem;">
        <div id="cardp" class="card" style="width: 18rem;" >
           <img :src="product.imgUrl" class="card-img-top" >
        </div>
        <p id="pt" >{{product.name}}</p>
        
      </nuxt-link>
  
           <p id="pricekat">{{product.price}}</p>
           <em id="simgetl" >TL</em>
         </div>
      </div>
     
   </div>
  </section>
  
  </body>
  <div id="ffd">
    <KFooter id="haci"/>
  </div> 
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
  #ffd {
    width: 1400px;
   
    position: relative;
    margin-top: 500px;
    height: 600px;
    left: 50px;
  }
  #haci {
    position: relative;
    top: 150px;
  }
  #yan2 {
    float: left;
  }
  </style>
  
  
  <script >
  
  export default defineComponent({
  setup() {
  let {data} =useFetch('/api/products');
  const router =useRoute();
  
  const ca=router.params.Search;
  
  let data2=data.value.filter((t)=>t.category==ca);
  
  
  
   return {data2,ca};
  
  }
  
  })
  
  </script> 
  
  
  <!-- <script lang="ts">
  
  export default defineComponent({
  setup() {
  var data = useFetch('/api/products');
  var router = useRoute();
  var ca = router.params.Categories;
  let data2=data.value.filter((t)=>t.category==ca);
   return {data2,ca}
  },
  })
  </script>  -->
  
  
  <!-- <script setup>
  const router =useRoute();
  const { data }=await useFetch('/api/products')
  
  const ACategory=computed(() => {
  
   const cat =router.params.Categories;
   
   
   
  return cat;
  });
  ************************* VUE2*******************
  data(){
   const { data }= useFetch('/api/products')
   const router =useRoute();
   const ca   =router.params.Categories;
    return {
      data,ca
    }
  },
  computed: {
   ACategory () {
   const router =useRoute();
   const  cat  =router.params.Categories;
  
  
     return cat;
   }
  },
  
  
  </script>  -->
  
  <!-- 
  setup() {
  const {data} =useFetch('/api/products');
   
  const ACategory=computed(() => {
     const router =useRoute();
     const ca=router.params.Categories;
     console.log(ca)
     data.value.filter((t)=>t.category==(ca))
    
     return ca;
  });
  
  
  return {data,ACategory};
  } -->
  
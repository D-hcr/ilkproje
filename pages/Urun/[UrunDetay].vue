<template>
   
    <div>
   
    <body>
        <div id="cardPr" class="card mb-3" style="max-width: 1000px; border-color: white;">
  <div   class="row g-0" 
  v-for="(product , index) in ydata"
        :key="'product-'+ index "
  
  >
    <div  class="col-md-4">
      <img :src="product.imgUrl" class="img-fluid rounded-start"
      
      alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body" >
        <div><nuxt-link  id="as" to="/">AnaSayfa</nuxt-link></div>
        
          <h5 id="namep" class="card-title">{{product.name}}</h5>
        <p id="price">{{product.price}}</p>
            <em id="pricetag" >TL</em>
            <div class="quantity">
              <div class="qty-group">
                <input id="qg" type="number" data-qtt-id="quantity__7265323450528" name="quantity" value="1" data-gtm-form-interact-field-id="6">
              </div>
              <input data-btn-addtocart="" type="submit" name="add" class="btnekle" id="product-add-to-cart" value="Sepete ekle" data-form-id="#add-to-cart-form">
             
            </div>
        
           
      </div>
    </div>
  </div>
</div>
    </body>
    
  </div>
 </template>

 <style>
 #namep {
  font-weight: bold;
 }
 #as {
  position: relative;
  left: -0px;
 }
 #cardPr {
  position: relative;
  left: 180px;
  
 }
#price {
  font-weight: bold;
  font-size: 25px;
  position: relative;
  left: 40px;
  top: 4px;
 
}
.quantity {
  position: relative;
  top: 50px;
  left: 10px;
}
#qg {
  width: 50px;
 
}
.btnekle {
  background-color: #293355;
  color: white;
  position: relative;
  height: 50px;
  width: 150px;
  left: 80px;
  top: -35px;
  border: solid black;
}
.btnekle:hover {
  background-color: white;
  border: solid black;
  color: #293355;
}
#btsearch {
  background-color: white;
}
#pricetag {
  position: relative;
  top: -50px;
  font-weight: bold;
  font-size: 25px;
}
#ffdü {
  width: 1400px;
 
  position: relative;
  margin-top: 20px;
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

<script   >

export default defineComponent({
  async setup() {
  let ydata = ref(null);
  const {data,ca,customFields} =await useProductById
  


  
  return {data,ca,customFields,ydata}
} 

})

</script>   
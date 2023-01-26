<template>
   
    <div>
    <header>
       <Navbar/>
       <kategoriler/>
    </header>
    <body>
        <div id="cardPr" class="card mb-3" style="max-width: 1000px;
        border: none;     
        ">
  <div   class="row g-0">
    <div  class="col-md-4">
      <img src="https://cdn.shopify.com/s/files/1/0485/5264/0672/products/Aqua-di-Polo-Gran-Paradiso-Black-Sport-50-Ml-EDP-Erkek-Parfum-APCN000514_360x.jpg?v=1649216657" class="img-fluid rounded-start"
      
      alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <div><nuxt-link  id="as" to="/">AnaSayfa</nuxt-link></div>
        <h5 id="namep" class="card-title">Aqua di Polo Unisex Mavi Işık Koruyucu Gözlük APSBL01101</h5>
        <p id="price">499.00</p>
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
</style>

<script>
export default defineComponent({
  setup() {
  let {data} =useFetch('/api/products');
  const router =useRoute();

  const ca=router.params.Categories;
  
  let data2=data.value.filter((t)=>t.category==ca);
  
 
  
    return {data2,ca};

  }

})
</script>
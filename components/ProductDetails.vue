<template>
   
    <section>
    <header>
       <Navbar/>
       <Katagoriler/>
    </header>
    <body>
        <span id="cardPr" class="card mb-3" style="max-width: 1000px;
        border: none;     
        ">
  <section   class="row g-0">
    <div  class="col-md-4">
      <img src="https://cdn.shopify.com/s/files/1/0485/5264/0672/products/71549_1_9a2d7ac0-ce12-4025-a454-89b2ea793a9d_360x.jpg?v=1669968499" class="img-fluid rounded-start"
      
      alt="...">
    </div>
    <span class="col-md-8">
      <span class="card-body">
        <div><a id="as" href="http://localhost:3000">AnaSayfa</a></div>
        <h5 id="namep" class="card-title">Aqua di Polo Unisex Mavi Işık Koruyucu Gözlük APSBL01101</h5>
        <p id="price">499.00</p>
            <em id="price" >TL</em>
            <span class="quantity">
              <div class="qty-group">
                <input id="qg" type="number" data-qtt-id="quantity__7265323450528" name="quantity" value="1" data-gtm-form-interact-field-id="6">
              </div>
              <input data-btn-addtocart="" type="submit" name="add" class="btn" id="product-add-to-cart" value="Sepete ekle" data-form-id="#add-to-cart-form">
             
            </span>
           
      </span>
    </span>
  </section>
        </span>
    </body>
    </section>
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
  font-weight: bolder;
}
.quantity {
  position: relative;
  top: 50px;
  left: -70px;
}
#qg {
  width: 50px;
 
}
.btn {
  background-color: #293355;
  color: white;
  position: relative;
  left: 80px;
  top: -35px;
}
#btsearch {
  background-color: white;
}
</style>
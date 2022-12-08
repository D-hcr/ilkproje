<template>
   <section>
 <header>
    <Navbar/>
    <Katagoriler/>
 </header>
 <body>
   <span id="sepet">
      <h1 id="titles">Sepetim</h1>
   </span>
   <form id="formsepet" action="">
    <div id="textsözet">
      <h2 class="sipariş">Sipariş özeti</h2>
    </div>
    <span>
    <p>

    </p> 
    </span>
    <button class="but-ödeme">
      ÖDEME SAYFASINA GİT
    </button>
   </form>
   
  
 </body>
   </section>
</template>

<style>
#titles {
  position: absolute;
  font-size: 28px;
  font-weight: 600;
  left: 200px;
  margin-top: 20px;
}
#sepet {
  border-bottom: solid rgb(220, 217, 217);
  height: 80px;
}
#formsepet {
  
  height: 400px;
  width: 400px;
  position: relative;
  left: 900px;
  top: 50px;
}

.sipariş {
  text-align: center;
}
#textsözet {
  border-bottom:solid lightgray;
}
.but-ödeme {
  position: relative;
  background-color: rgb(6, 6, 95);
  color: white;
  top: 270px;
  left: 50px;
  height: 50px;
  width: 300px;
}
</style>
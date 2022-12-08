<template>
    <section class="bilgialanı">
        <v-container id="içA" class="içbilgialanı">
            <a id="tıkresim" href="#">
                <img  class="bilgiresim" src="//cdn.shopify.com/s/files/1/0485/5264/0672/files/Handdrawn_Icons_3-01_185x110_83428588-f6e9-429a-9b8b-2a84e1c90e77_185x_crop_center.png?v=1636063558" alt="">
            </a>
            <p id="mte">Modayı takip et!</p>
            <p id="matte">Moda aksesuar trendlerini takip et,</p>
            <p id="ufso">uygun fiyatlarla sahip ol.</p>
        </v-container>
        <v-container id="içB" class="içbilgialanı">
             <a id="tıkresim2" href="#">
                <img class="bilgiresim2" src="//cdn.shopify.com/s/files/1/0485/5264/0672/files/Handdrawn_Icons_2-01_185x110_80838e95-ce95-424d-8bdb-4067998f855c_185x_crop_center.png?v=1636063586" alt="">
             </a>
             <p id="züp">Zengin ürün portföyü</p>
             <p id="sgpü">Saat, gözlük, parfüm, çanta, sweatshirt ve aksesuar ürünlerimiz ile yenilikçi ve kaliteli bir moda markası olmaya özen gösteriyoruz.</p>
            
        </v-container>
    </section>
</template>

<style>
.bilgialanı {
   
    height: 300px;
    position: relative;
    top: 900px;
}
#içA {
   
    height: 300px;
    width: 760px;
    background-color: #d2d2d2;
}
#içB {
   
    height: 300px;
    width: 755px;
    position: relative;
    top: -300px;
    left: 760px;
    background-color: #efe8e0;
}
.bilgiresim {
    position: absolute;
    left: 320px;
    top: 15px;
}
#mte {
    position: absolute;
    top: 150px;
    left: 340px;
    font-weight: 900;
}
#matte {
    position: absolute;
    top: 180px;
    left: 280px;
}
#ufso {
    position: absolute;
    top: 200px;
    left: 320px;
}
.bilgiresim2 {
    position: absolute;
    left: 270px;
    top: 15px;
}
#züp {
    font-weight: 900;
    position: absolute;
    top: 130px;
    left: 255px;
    font-size: large;
}
#sgpü {
    position: absolute;
    top: 165px;
    left: 140px;
    text-align: center;
    width: 450px;
}

</style>
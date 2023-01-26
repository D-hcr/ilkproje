<template>
    <span>
    <span class="title"> 
                
        <span >
            Aradığın ürün...
        </span>
                
    </span>
    <section id="box">
        <div class="img-box">               
                <NuxtLink  class="animate-scale adaptive_height" to="/Kategori/Saat" ><img id="imgbox" data-srcset="//cdn.shopify.com/s/files/1/0485/5264/0672/files/Handdrawn_Icons-03_170x180_6ee8107c-b91a-4ff6-be01-f98ad3656b54_1024x1024_crop_center.png?v=1636064572" alt="Aqua di Polo" class="lazyautosizes ls-is-cached lazyloaded" data-sizes="auto" sizes="355px" srcset="//cdn.shopify.com/s/files/1/0485/5264/0672/files/Handdrawn_Icons-03_170x180_6ee8107c-b91a-4ff6-be01-f98ad3656b54_1024x1024_crop_center.png?v=1636064572">
                </NuxtLink>                                
                <div class="content spotlight-inner">
                  <NuxtLink id="katagori1" to="/Kategori/Saat" class="shop_link text-hover">
                   Kol Saati
                  </NuxtLink>                            
                 </div>                               
        </div>
        <div class="img-box">   
                <NuxtLink class="animate-scale adaptive_height" to="/Kategori/Gozluk" ><img id="imgbox" data-srcset="//cdn.shopify.com/s/files/1/0485/5264/0672/files/Handdrawn_Icons-02_170x180_2746c2c8-c861-46e3-89ee-c6e870c569c3_1024x1024_crop_center.png?v=1636064572" alt="Aqua di Polo" class="lazyautosizes ls-is-cached lazyloaded" data-sizes="auto" sizes="355px" srcset="//cdn.shopify.com/s/files/1/0485/5264/0672/files/Handdrawn_Icons-02_170x180_2746c2c8-c861-46e3-89ee-c6e870c569c3_1024x1024_crop_center.png?v=1636064572">
                </NuxtLink> 
                <div class="content spotlight-inner"> 
                  <NuxtLink id="katagori2"  to="/Kategori/Gozluk" class="shop_link text-hover">
                   Güneş Gözlüğü
                  </NuxtLink>       
                </div>
        </div>
        <div class="img-box">
                <NuxtLink class="animate-scale adaptive_height" to="/Kategori/Parfum" ><img id="imgbox" data-srcset="//cdn.shopify.com/s/files/1/0485/5264/0672/files/Handdrawn_Icons-04_170x180_33b226a9-d0c7-4c1e-b068-c1264ff70bb1_1024x1024_crop_center.png?v=1636064572" alt="Aqua di Polo" class="lazyautosizes ls-is-cached lazyloaded" data-sizes="auto" sizes="355px" srcset="//cdn.shopify.com/s/files/1/0485/5264/0672/files/Handdrawn_Icons-04_170x180_33b226a9-d0c7-4c1e-b068-c1264ff70bb1_1024x1024_crop_center.png?v=1636064572">
                </NuxtLink>
                <div class="content spotlight-inner">
                  <NuxtLink id="katagori3" to="/Kategori/Parfum"  class="shop_link text-hover">
                  Parfüm
                  </NuxtLink>     
                </div>
        </div>
        <div class="img-box">
                <NuxtLink class="animate-scale adaptive_height" to="/Kategori/Canta"  ><img id="imgbox" data-srcset="//cdn.shopify.com/s/files/1/0485/5264/0672/files/Handdrawn_Icons-01_170x180_aae444a1-e699-4477-a4a0-c3b104caae14_1024x1024_crop_center.png?v=1636064572" alt="Aqua di Polo" class="lazyautosizes ls-is-cached lazyloaded" data-sizes="auto" sizes="355px" srcset="//cdn.shopify.com/s/files/1/0485/5264/0672/files/Handdrawn_Icons-01_170x180_aae444a1-e699-4477-a4a0-c3b104caae14_1024x1024_crop_center.png?v=1636064572">
                </NuxtLink>
                <div class="content spotlight-inner">
                    <NuxtLink id="katagori4"  to="/Kategori/Canta" class="shop_link text-hover">
                    Çanta
                    </NuxtLink>
                 </div>
        </div>
        <div class="img-box">  
                <NuxtLink class="animate-scale adaptive_height" to="/Kategori/Sweats" ><img id="imgbox" data-srcset="//cdn.shopify.com/s/files/1/0485/5264/0672/files/Handdrawn_Icons-06_170x180_dad3d04d-badf-4f54-843b-691de01a526c_1024x1024_crop_center.png?v=1636064572" alt="Aqua di Polo" class="lazyautosizes ls-is-cached lazyloaded" data-sizes="auto" sizes="355px" srcset="//cdn.shopify.com/s/files/1/0485/5264/0672/files/Handdrawn_Icons-06_170x180_dad3d04d-badf-4f54-843b-691de01a526c_1024x1024_crop_center.png?v=1636064572">
                </NuxtLink>
                <div class="content spotlight-inner">
                    <NuxtLink id="katagori5"  to="/Kategori/Sweats" class="shop_link text-hover">
                    SWEATSHIRT
                    </NuxtLink>              
                </div>
                                
        </div>
    </section>

  </span>

</template>

<style>
.title {
    position: relative;
    left: 660px;
    color: black;
    font-size: 27px;
    bottom: -17px;
    font-weight: bold;
}

.img-box {
    float: left;
    margin-left: 20px;
}

#box {
    position: relative;
    left: 150px;
    width: 1200px;
    padding-top: 100px;
}
#imgbox {
    height: 220px;
    
}
.shop_link {
    color: #505050;
    position: relative;
    left: 65px;
    text-decoration-line: none;
}
.shop_link:hover {
    color: #505050;
    text-decoration-line: underline;
}
#katagori4 {
    position: relative;
    left: 80px;
}
#katagori2 {
    position: relative;
    left: 50px;
}
</style>
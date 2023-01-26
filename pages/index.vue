<template>
  
    <div>
    <header>
    <navk/>
    <kate/>
    </header>
    <body>
    <Slider/>
    <KategoriCard/>
    <ProductSlider/>
    <ProductSlider2/>
    <Simge/>
    <YanYanaReklamGrubu/>
    <ProductSlider3/>
    <YeniKoleksiyon/>
    <WebsitesiBilgi/>
    <WebsitesiBilgi2/>
   </body>
   <footer>
    <Altfotter/>
   </footer>
   </div>
  </template>
  
  <script>
import Altfotter from '~~/layouts/Altfotter.vue';
import navk from '~~/layouts/Navbar.vue';
import kate from '~~/layouts/Kategoriler.vue';
  export default {
    components: { Altfotter , navk ,kate}
    
}
  </script>
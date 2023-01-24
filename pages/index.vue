<template>
  
    <div>
    <header>
    <Navbar/>
    <Kategoriler/>
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

  export default {
    components: { Altfotter }
}
  </script>
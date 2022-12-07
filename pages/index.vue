<template>
   
   <div>
   <header>
      <Navbar/>
      <Katagoriler/>
   </header>
   <body>
    <slider/>
    <KatagoriCard/>
    <ProductSlider/>
    <ProductSlider2/>
    <Simge/>
    <YanyanaReklamgrubu/>
    <ProductSlider3/>
    <YeniKoleksiyon/>
    <WebSitesiBigi/>
    <WebSitesiBilgi2/>
   </body>
   <footer>
    <Footer/>
   </footer>
   
  
 </div>
</template>

<script >
import WebSitesiBigi from '~/components/WebSitesiBigi.vue';


export default {
    async created() {
        this.saleitems = await this.$content("product");
    },
    data() {
        return {
            products: null,
            saleitems: null,
        };
    },
    components: { WebSitesiBigi }
}

</script>

<style >
 
</style>
<!-- <div>
   <header>
      <Navbar/>
      <Katagoriler/>
   </header>
   <body>
    <slider/>
    <KatagoriCard/>
    <ProductSlider/>
   </body>
 </div>  -->
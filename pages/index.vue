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
   </body>
 </div>
</template>

<script >

export default {
  async created(){
   this.saleitems=await this.$content("product")
  },

  data() {
   return {
       products:null,
       saleitems:null,
   }
  },
   
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
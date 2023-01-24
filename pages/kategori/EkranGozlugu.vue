<template>
    <div>
        <header>
    <Navbar/>
    <Kategoriler/>
 </header>
 <div class="containerürün">
        <div class="row">
            <div v-for="(product, index) in data" 
                 :key="'product-' + index" 
                 class="col-md-4">
                <div class="card mb-3">
                    <img :src="product.photourl" 
                         class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">
                            {{ product.name }}
                        </h5>
                        <p class="card-text">
                            {{ product.description }}
                        </p>
                        <div class="d-grid">
                            <button @click="addToCart(product)" 
                                    class="btn btn-outline-primary">
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<style>
.containerürün {
    position: relative;
    left: 20px;
    width: 1000px;
    height: 700px;
}
</style>
<script setup>
const { data }=await useFetch('/api/products')
    
</script>
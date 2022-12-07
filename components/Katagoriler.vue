<template>
  <nav id="cd" class="navbar navbar-expand">
    <v-container  class="container-fluid">
      <v-content  class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul id="uc" class="navbar-nav">
          <v-list-group class="dropdown">
            <li class="nav-item">
              <button id="k" class="dropbtn">KADIN
                <a class="nav-link active" aria-current="page" href="http://localhost:3000/Kategori/Kadin"></a>
              </button>       
              <v-content class="dropdown-content">
                <a href="http://localhost:3000/Kategori/KadinC">ÇANTA </a>
                <a href="http://localhost:3000/Kategori/KadinD">PARFÜM &amp; DEODORANT </a>
                <a href="http://localhost:3000/Kategori/KadinA">AKSESUAR </a>
                <a href="http://localhost:3000/Kategori/KadinS">SAAT </a>
                <a href="http://localhost:3000/Kategori/KadinG">GÜNEŞ GÖZLÜĞÜ </a>
                <a href="http://localhost:3000/Kategori/KadinSw">SWEATSHİRT </a>
              </v-content>
            </li>
          </v-list-group>  
          <v-list-group class="dropdown">
            <li class="nav-item">
              <button id="k" class="dropbtn">ERKEK
                <a class="nav-link" href="http://localhost:3000/Kategori/Erkek"></a>
              </button>
              <v-content class="dropdown-content">
                
                <a href="http://localhost:3000/Kategori/ErkekS">SAAT </a>
                <a href="http://localhost:3000/Kategori/ErkekC">ÇANTA </a>
                <a href="http://localhost:3000/Kategori/ErkekSw">SWEATSHİRT </a>
                <a href="http://localhost:3000/Kategori/ErkekA">AKSESUAR </a>
                <a href="http://localhost:3000/Kategori/ErkekG">GÜNEŞ GÖZLÜĞÜ </a>
                <a href="http://localhost:3000/Kategori/ErkekD">PARFÜM &amp; DEODORANT </a>            
              </v-content>
            </li>
          </v-list-group> 
          <li class="nav-item">
            <a id="k" class="nav-link" href="http://localhost:3000/Kategori/RetroSaat">RETRO SAAT</a> 
          </li>  
          <li class="nav-item">
            <a id="k" class="nav-link" href="http://localhost:3000/Kategori/EkranGozlugu">EKRAN GÖZLÜĞÜ</a>
          </li>
       
      </ul>
      <v-icon>
        <span  >
          <a href="#" id="sepeticon" title="Cart" class="cart-icon" >
          <svg id="Asvg" viewBox="0 0 32 32" width="29px" height="29px">
            <path  d="M 16 3 C 13.253906 3 11 5.253906 11 8 L 11 9 L 6.0625 9 L 6 9.9375 L 5 27.9375 L 4.9375 29 L 27.0625 29 
              L 27 27.9375 L 26 9.9375 L 25.9375 9 L 21 9 L 21 8 C 21 5.253906 18.746094 3 16 3 Z M 16 5 C 17.65625 5 19 6.34375 
              19 8 L 19 9 L 13 9 L 13 8 C 13 6.34375 14.34375 5 16 5 Z M 7.9375 11 L 11 11 L 11 14 L 13 14 L 13 11 L 19 11 L 19 
              14 L 21 14 L 21 11 L 24.0625 11 L 24.9375 27 L 7.0625 27 Z">
            </path>
          </svg>
          <span id="sepetmiktar" class="cartCount" data-cart-count="">0</span>
          </a>
        </span>  
      </v-icon>
      
      </v-content>
    </v-container>
</nav>
</template>

<style>
@import url("asset/css/katagoriler.css");
</style>
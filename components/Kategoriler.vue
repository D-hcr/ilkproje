<template>
    <nav id="cd" class="navbar navbar-expand">
      <span  class="container-fluid">
        <div  class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul id="uc" class="navbar-nav">
            <div class="dropdown">
              <li class="nav-item">
                <button id="k" class="dropbtn">KADIN
                  <a class="nav-link active" aria-current="page" href="http://localhost:3000/Kategori/Kadin"></a>
                </button>       
                <section class="dropdown-content">
                  <a href="http://localhost:3000/Kategori/KadinC">ÇANTA </a>
                  <a href="http://localhost:3000/Kategori/KadinD">PARFÜM &amp; DEODORANT </a>
                  <a href="http://localhost:3000/Kategori/KadinA">AKSESUAR </a>
                  <a href="http://localhost:3000/Kategori/KadinS">SAAT </a>
                  <a href="http://localhost:3000/Kategori/KadinG">GÜNEŞ GÖZLÜĞÜ </a>
                  <a href="http://localhost:3000/Kategori/KadinSw">SWEATSHİRT </a>
                </section>
              </li>
            </div>  
            <div class="dropdown">
              <li class="nav-item">
                <button id="k" class="dropbtn">ERKEK
                  <a class="nav-link" href="http://localhost:3000/Kategori/Erkek"></a>
                </button>
                <section class="dropdown-content">
                  
                  <a href="http://localhost:3000/Kategori/ErkekS">SAAT </a>
                  <a href="http://localhost:3000/Kategori/ErkekC">ÇANTA </a>
                  <a href="http://localhost:3000/Kategori/ErkekSw">SWEATSHİRT </a>
                  <a href="http://localhost:3000/Kategori/ErkekA">AKSESUAR </a>
                  <a href="http://localhost:3000/Kategori/ErkekG">GÜNEŞ GÖZLÜĞÜ </a>
                  <a href="http://localhost:3000/Kategori/ErkekD">PARFÜM &amp; DEODORANT </a>            
                </section>
              </li>
            </div> 
            <li class="nav-item">
              <nuxt-link to="/Kategori/RetroSaat" id="k" class="nav-link">RETRO SAAT</nuxt-link> 
            </li>  
            <li class="nav-item">
              <nuxt-link to="/Kategori/EkranGozlugu" id="k" class="nav-link" >EKRAN GÖZLÜĞÜ</nuxt-link>
            </li>
         
        </ul>
        
            <nuxt-link to="/Sepet" id="sepeticon" title="Cart" class="cart-icon" >
            <svg id="Asvg" viewBox="0 0 32 32" width="29px" height="29px">
              <path  d="M 16 3 C 13.253906 3 11 5.253906 11 8 L 11 9 L 6.0625 9 L 6 9.9375 L 5 27.9375 L 4.9375 29 L 27.0625 29 
                L 27 27.9375 L 26 9.9375 L 25.9375 9 L 21 9 L 21 8 C 21 5.253906 18.746094 3 16 3 Z M 16 5 C 17.65625 5 19 6.34375 
                19 8 L 19 9 L 13 9 L 13 8 C 13 6.34375 14.34375 5 16 5 Z M 7.9375 11 L 11 11 L 11 14 L 13 14 L 13 11 L 19 11 L 19 
                14 L 21 14 L 21 11 L 24.0625 11 L 24.9375 27 L 7.0625 27 Z">
              </path>
            </svg>
            <span id="sepetmiktar" class="cartCount" data-cart-count="">0</span>
           </nuxt-link>
          
        
      </div>
      </span>
  </nav>
  </template>
  
  <style>
 #cd {
    border-bottom: 1px  solid lightgray;
}
#uc{
    position: relative;
    margin-left: 142px;
    font-size: 13.78px;
    font-weight: bold;   
}
ul li{
    padding-left: 32px;  
}
#k{
    color: black;
    letter-spacing: 1px; 
    text-decoration:none;
    position:relative;
} 
#navbarNavDropdown{
    background-color: white;
    width :0px;  
}
#k::before{
    content:'';
    position:absolute;
    left:0;
    bottom:0;
    width:0px;
    height:3px;
    background:#000;
    opacity:0;
    -webkit-transition: width 2s; 
    transition: width 2s;
}
#k:hover {
    color: black;
    text-decoration: underline;
    text-underline-position: under;
    opacity:1;
    width:100%;
}
#Asvg {    
   position: relative;
}
#sepetmiktar{
    position: relative;
    margin-left: -18px;
    color: white;
    background-color: #1e3ca1;
    bottom: -10px;

    text-align: center;
    font-size: 15px;  
}
.dropbtn {
    background-color:white;
    color: white;
    padding: 3px;
    font-size: 13px;
    border: none;
    cursor: pointer;
    font-weight: bold;
}
  .dropdown {
    position: relative;
    display: inline-block;
    top :5px;
}
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #ffffff;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}
  .dropdown-content a {
    color: black;
    padding: 10px 14px;
    text-decoration: none;
    display: block;
}
  .dropdown-content a:hover {
    background-color: #ffffff;
    color : rgb(209, 106, 66)
}
  .dropdown:hover .dropdown-content {
    display: block;
}
  .dropdown:hover .dropbtn {
    background-color: white;
    color: black;
    text-decoration: underline;
    text-underline-position: under;
    opacity:1;
    width:100%;    
}

#sepeticon {
  width: 40px;
  position: relative;
  left: 600px;
}
  </style>
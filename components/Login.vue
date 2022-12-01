<template>
  <div>        
    <div id="mySidenav" class="sidenav">
      <a id="kname" href="javascript:void(0)" class="closebtn" v-on:click="closeNav()">&times; 
        <span id="k">Kapat</span>      
      </a>
      <h1 id="o">Oturum Aç</h1>    
    </div>    
    <div>
      <span id="sp" style="font-size:30px;cursor:pointer" v-on:click="openNav()">&#9776; open</span>
    </div>  
  </div>
</template>

<script lang="js">
export default {
     methods: {
      openNav: function(){
        document.getElementById("mySidenav").style.width = "500px";        
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
     },
     closeNav: function(){
      document.getElementById("mySidenav").style.width = "0";
      document.body.style.backgroundColor = "white";
     }
     },
};
</script>


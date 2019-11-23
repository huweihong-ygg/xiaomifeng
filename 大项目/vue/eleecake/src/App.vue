<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #3C2314;
  box-sizing: border-box;
  width:100%;
  height:100%;
}
*{
  margin:0;
  padding:0;
}
#nav {
  padding: 0px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
html,body{
  width:100%;
  height:100%;
  font-family: sans-serif;
}
ul{list-style:none}
a{text-decoration: none;
   color: #3C2314;
  letter-spacing: 0.034267rem;
} 
img{vertical-align:top;border:none;} 
em,i{font-style: normal;}
.clearf:after,
.clearf:before{
    content:"";
    display:block;
    clear:both;
}


</style>

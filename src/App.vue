<template>
<header>
  <router-link to="/">
    <h2>ONLINE STREAMING</h2>
    <br> <br>
    <h1>Watch Shows Online</h1>
  </router-link>
</header>
<main>

  <router-view/>
</main>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira Sans', sans-serif;

  &::selection{
    background: transparent(#42B883, 0.5);
  }
}
body {
  background-color: #000000;
}
a{
  text-decoration: none;
}
header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  background-color: #000000;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);

  h1{
    color: #FFF;
    font-size: 40px;
    
    
  }
    h2{
    color: rgb(176, 158, 158);
    font-size: 14px;
    padding-left: 120px;
    
    
  }

}
  
</style>

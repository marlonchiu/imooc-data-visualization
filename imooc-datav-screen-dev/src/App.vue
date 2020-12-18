<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/test">Test</router-link>
    </div>
    <svg-component></svg-component>
    <svg width="50" height="50" :style="{color:'red'}">
      <use href="#more"></use>
    </svg>
    <svg width="50" height="50" style="color: green">
      <use href="#filledArrowRight"></use>
    </svg>
    <svg width="50" height="50" style="color: blueviolet">
      <use href="#arrowRight"></use>
    </svg>
<!--    <test-component></test-component>-->
<!--    <test2-component></test2-component>-->
<!--    <test3-component></test3-component>-->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.icon-wrapper {
  color: #f00;
  width: 20px;
  height: 20px;
}
</style>

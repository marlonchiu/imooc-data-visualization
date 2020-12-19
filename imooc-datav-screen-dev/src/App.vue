<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/test">Test</router-link>
    </div>
<!--    <svg-component></svg-component>-->
<!--    <svg width="50" height="50" :style="{color:'red'}">-->
<!--      <use href="#more"></use>-->
<!--    </svg>-->
<!--    <svg width="50" height="50" style="color: green">-->
<!--      <use href="#filledArrowRight"></use>-->
<!--    </svg>-->
<!--    <svg width="50" height="50" style="color: blueviolet">-->
<!--      <use href="#arrowRight"></use>-->
<!--    </svg>-->
<!--    <icon prefix="icon" name="filledArrowRight" class="common-icon" :style="{width: 100, height: 100, color:'deeppink'}"></icon>-->
<!--    <icon prefix="icon" name="arrowRight" :style="{width: 100, height: 100, color:'deeppink'}"></icon>-->
<!--    <Icon prefix="icon" name="bids" class="common-icon"></Icon>-->
<!--    <Icon name="hetongguanli" :style="{width: '60px', height: '60px', color:'#d4237a'}"></Icon>-->
<!--    <test-component></test-component>-->
<!--    <test2-component></test2-component>-->
<!--    <test3-component></test3-component>-->
    <br>
<!--    <div class="svg-animation-wrapper">-->
<!--      <svg-animation></svg-animation>-->
<!--    </div>-->
    <imooc-loading width="100" height="100">
      <p style="font-size: 20px; color: red">数据大屏加载中...</p>
    </imooc-loading>
    <div style="width: 50%; background: #999; color: white;">
      <imooc-fly-box>
        <div>111</div>
        <div>333</div>
        <div>222</div>
        <div>222</div>
        <div>222</div>
        <div>222</div>
        <div>222</div>
        <div>111</div>
        <div>333</div>
        <div>222</div>
        <div>222</div>
        <div>222</div>
        <div>222</div>
        <div>222</div>
        <div>222</div>
        <div>222</div>
      </imooc-fly-box>
    </div>
<!--    <router-view/>-->
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
.common-icon {
  color: purple;
  //width: 75px;
  //height: 75px;
  width: 3rem;
  height: 3rem;
}
</style>

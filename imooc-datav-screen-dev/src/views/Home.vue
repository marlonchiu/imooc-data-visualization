<template>
  <div class="home">
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
    <!-- Loading组件 -->
    <imooc-loading width="100" height="100">
      <p style="font-size: 20px; color: red">数据大屏加载中...</p>
    </imooc-loading>
    <!-- 飞线动画组件 -->
    <div style="width: 50%; background: #000; color: white;">
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
    <div style="background: #000; color: white;">
      <imooc-fly-box duration="5">
        <div>111</div>
        <div>333</div>
        <div>222</div>
      </imooc-fly-box>
    </div>
  </div>
</template>

<style lang="scss">
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

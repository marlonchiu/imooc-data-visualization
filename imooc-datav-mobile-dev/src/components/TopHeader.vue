<template>
  <div data-v-5b7f0604="" class="top-header">
    <div class="title">慕课外卖数据大屏</div>
    <div class="sub-title">移动报表</div>
    <div class="date">2021-01-16</div>
  </div>
</template>

<script>
export default {
  name: 'TopHeader'
}
</script>

<style lang="scss" scoped>
.top-header {
  position: absolute;
  color: #fff;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 300px;
  padding: 50px 24px 24px;
  box-sizing: border-box;

  .title {
    font-size: 48px;
    font-weight: 500;
  }

  .sub-title {
    font-size: 36px;
    margin-top: 0.625rem;
  }

  .date {
    font-size: 24px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.5);
    margin-top: 40px;
  }
}
</style>

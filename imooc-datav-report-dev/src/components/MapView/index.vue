<template>
  <div class="map-view">
    <div class="left">
      <b-map-scatter />
    </div>
    <div class="right">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title">用户月同比增长</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <liquid-fill />
          </div>
        </template>
      </el-card>
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title">热门搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <word-cloud />
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
import BMapScatter from './BMapScatter'
import LiquidFill from './LiquidFill'
import WordCloud from './WordCloud'

export default {
  name: 'MapView',
  components: {
    BMapScatter,
    LiquidFill,
    WordCloud
  }
}
</script>

<style lang="scss" scoped>
.map-view {
  display: flex;
  margin-top: 20px;

  .left {
    flex: 0 0 80%;
    width: 80%;
    height: 600px;
  }

  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;

    .title {
      display: flex;
      align-items: center;
      height: 60px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      font-weight: 500;
      padding: 0 0 0 20px;
    }

    .chart-wrapper {
      width: 100%;
      height: 190px;
    }
  }
}
</style>
